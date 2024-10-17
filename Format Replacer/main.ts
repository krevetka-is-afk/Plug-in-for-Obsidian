import { Plugin, Notice, TFile } from 'obsidian';

export default class FormatReplacer extends Plugin {
  async onload() {
    console.log("Format Replacer plugin loaded!");

    // Добавляем команду для замены форматирования в текущей заметке
    this.addCommand({
      id: 'replace-formatting',
      name: 'Replace formatting in the active note',
      callback: async () => {
        const activeFile: TFile | null = this.app.workspace.getActiveFile();
        if (activeFile) {
          const fileContent = await this.app.vault.read(activeFile);
          const updatedContent = this.replaceFormatting(fileContent);
          await this.app.vault.modify(activeFile, updatedContent);
          new Notice('Formatting replaced!');
        } else {
          new Notice('No active file to format!');
        }
      }
    });
  }

  onunload() {
    console.log("Format Replacer plugin unloaded!");
  }

  replaceFormatting(content: string): string {

    content = content.replace(/\\\[/g, '$$$$');

    content = content.replace(/\\\]/g, '$$$$');

    content = content.replace(/\\\(\s*/g, '$');

    content = content.replace(/\s*\\\)/g, '$');
    return content;
  }
}
