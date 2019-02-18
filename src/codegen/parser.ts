import fs from "fs";

import pegjs, { Parser } from "pegjs";

export async function makeParser(): Promise<Parser> {
  return new Promise<Parser>((resolve, reject) => {
    fs.readFile("grammar/module.pegjs", { "encoding": "utf-8" }, (err, data) => {
      if (err) { return reject(err); }

      try {
        const parser = pegjs.generate(data);
        resolve(parser);
      } catch (e) {
        reject(e);
      }
    });
  });
}