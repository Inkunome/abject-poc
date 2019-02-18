"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const pegjs_1 = __importDefault(require("pegjs"));
async function makeParser() {
    return new Promise((resolve, reject) => {
        fs_1.default.readFile("grammar/module.pegjs", { "encoding": "utf-8" }, (err, data) => {
            if (err) {
                return reject(err);
            }
            try {
                const parser = pegjs_1.default.generate(data);
                resolve(parser);
            }
            catch (e) {
                reject(e);
            }
        });
    });
}
exports.makeParser = makeParser;
