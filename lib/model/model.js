"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Module {
}
exports.Module = Module;
function dump(ast) {
    console.log(ast);
    let result = "";
    for (const decl of ast.body) {
        switch (decl.type) {
            case "ModelDeclaration":
                {
                }
                break;
        }
    }
    return result;
}
exports.dump = dump;
