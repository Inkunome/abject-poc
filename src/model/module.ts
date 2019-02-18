export class Module {
  public models: any[];
  public facets: any[];

  constructor(ast: any) {
    this.models = [];
    this.facets = [];

    for (const decl of ast.body) {
      switch (decl.type) {
        case "ModelDeclaration": {
          this.models.push({
            name: decl.id.name,
            fields: decl.fields.map((e: any) => e.name),
          });
        } break;
        case "FacetDeclaration": {
          this.facets.push({
            name: decl.id.name,
            params: decl.params,
            body: decl.body,
          });
        } break;
      }
    }
  }
}
