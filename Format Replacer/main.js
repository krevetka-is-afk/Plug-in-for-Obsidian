"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class FormatReplacer extends obsidian_1.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Format Replacer plugin loaded!");
            // Добавляем команду для замены форматирования в текущей заметке
            this.addCommand({
                id: 'replace-formatting',
                name: 'Replace formatting in the active note',
                callback: () => __awaiter(this, void 0, void 0, function* () {
                    const activeFile = this.app.workspace.getActiveFile();
                    if (activeFile) {
                        const fileContent = yield this.app.vault.read(activeFile);
                        const updatedContent = this.replaceFormatting(fileContent);
                        yield this.app.vault.modify(activeFile, updatedContent);
                        new obsidian_1.Notice('Formatting replaced!');
                    }
                    else {
                        new obsidian_1.Notice('No active file to format!');
                    }
                })
            });
        });
    }
    onunload() {
        console.log("Format Replacer plugin unloaded!");
    }
    replaceFormatting(content) {
        content = content.replace(/\\\[/g, '$$$$');
        content = content.replace(/\\\]/g, '$$$$');
        content = content.replace(/\\\(\s*/g, '$');
        content = content.replace(/\s*\\\)/g, '$');
        return content;
    }
}
exports.default = FormatReplacer;
