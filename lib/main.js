"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse_1 = require("./ast/parse");
async function main() {
    try {
        const ast = await parse_1.parse("examples/simple.abj");
        console.log(JSON.stringify(ast, null, 2));
        // const module: Module = new Module(ast);
        // const code = dump(module);
        // console.log(code);
        // const load = requireFromString(code);
        // console.log(load.main());
    }
    catch (e) {
        e = e;
        console.log(e);
    }
}
main();
