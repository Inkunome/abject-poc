"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const parser_1 = require("../codegen/parser");
async function parse(filename) {
    const parser = await parser_1.makeParser();
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(filename, { "encoding": "utf-8" }, (err, data) => {
            if (err) {
                return reject(err);
            }
            try {
                const ast = parser.parse(data);
                resolve(ast);
            }
            catch (e) {
                reject(e);
            }
        });
    });
}
exports.parse = parse;
