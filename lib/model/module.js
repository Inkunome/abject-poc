"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Module {
    constructor(ast) {
        this.models = [];
        this.facets = [];
        for (const decl of ast.body) {
            switch (decl.type) {
                case "ModelDeclaration":
                    {
                        this.models.push({
                            name: decl.id.name,
                            fields: decl.fields.map((e) => e.name),
                        });
                    }
                    break;
                case "FacetDeclaration":
                    {
                        this.facets.push({
                            name: decl.id.name,
                            params: decl.params,
                            body: decl.body,
                        });
                    }
                    break;
            }
        }
    }
}
exports.Module = Module;
