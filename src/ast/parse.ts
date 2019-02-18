import fs from "fs";

import { makeParser } from "../codegen/parser";

import { Parser } from "pegjs";

export async function parse(filename: string): Promise<any> {
  const parser: Parser = await makeParser();

  return new Promise<any>((resolve, reject) => {
    fs.readFile(filename, { "encoding": "utf-8" }, (err, data) => {
      if (err) { return reject(err); }
  
      try {
        const ast = parser.parse(data);
  
        resolve(ast)
      } catch (e) {
        reject(e);
      }
    });
  });
}
