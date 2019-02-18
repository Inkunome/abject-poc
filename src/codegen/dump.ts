import { Node } from "../ast/node";
import { AssertionError } from "assert";

import { Module } from "../model/module";

export function dump(module: Module): string {
  let result = "";

  for (const model of module.models) {
    result += `let ${model.name} = { facets: [] };\n`
  }

  for (const facet of module.facets) {
    result += `let ${facet.name} = function(${facet.params.map((e: any) => e.name).join(",")}) ${dump_statement(facet.body)} ;\n`
  }

  return result;
}

function dump_statement(st: any): string {
  let result = "";

  switch (st.type) {
    case "BlockStatement": {
      result += "{";
      for (const sst of st.body) {
        result += dump_statement(sst);
      }
      result += "}";
    } break;
    case "ExpressionStatement": {
      result += dump_statement(st.expression);
    } break;
    case "ProjectionExpression": {
      result += `${dump_value(st.object)}.${st.property.name}\n`;
    } break;
    case "ReturnStatement": {
      result += `return ${dump_value(st.argument)};\n`;
    } break;
    default: {
      console.log(`Unknown ${st.type}`);
      console.log(st);
    }
  }

  return result;
}

function dump_value(val: any): string {
  let result = "";

  switch (val.type) {
    case "Literal": {
      result += `${JSON.stringify(val.value)}`;
    } break;
  }

  return result;
}