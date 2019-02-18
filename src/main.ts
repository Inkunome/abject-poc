import { PegjsError } from "pegjs";

import requireFromString from "require-from-string";

import { parse } from "./ast/parse";

import { dump } from "./codegen/dump";
import { Module } from "./model/module";


async function main() {
  try {
    const ast: any = await parse("examples/simple.abj");

    console.log(JSON.stringify(ast, null, 2));

    // const module: Module = new Module(ast);

    // const code = dump(module);

    // console.log(code);

    // const load = requireFromString(code);

    // console.log(load.main());
  } catch (e) {
    e = e as PegjsError;

    console.log(e);
  }
}

main();