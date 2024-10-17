# Obsidian Plugin: Format Replacer

This plugin helps you replace certain patterns in your Obsidian notes:
- Replaces `[` with `$$`
- Replaces `]` with `$$`
- Replaces `(` with `$`
- Replaces `)` with `$`

## Installation

Follow these steps to install and use the plugin on your Obsidian:

### 1. Clone the repository

First, clone the plugin's repository to your local machine:

```bash
git clone https://github.com/krevetka-is-afk/Plug-in-for-Obsidian.git
```

### 2. Install dependencies

Navigate to the plugin's folder and install necessary dependencies:

```bash
cd Plug-in-for-Obsidian
npm install
```

This will download and install all required dependencies to compile and run the plugin.

### 3. Build the plugin

After installing the dependencies, build the plugin using TypeScript:

```bash
npm run build
```

This will compile the TypeScript files into JavaScript files and create the necessary plugin files.

### 4. Install the plugin in Obsidian

Next, you need to install the plugin in your local Obsidian setup.

1. Open Obsidian and go to **Settings**.
2. Scroll down and click on **Community plugins**.
3. Click on the **Open plugins folder** button.
4. Copy the folder `Plug-in-for-Obsidian` (containing `manifest.json`, `main.js`, and `styles.css` if applicable) from your local machine into the Obsidian plugins folder.
5. Go back to **Community plugins** and enable the plugin.

### 5. Using the plugin

Once the plugin is enabled, you can use the "Replace formatting" command from the command palette (`Cmd+P` or `Ctrl+P`).

The plugin will replace the following patterns in the active note:
- `[` with `$$`
- `]` with `$$`
- `(` with `$`
- `)` with `$`

## Development

For development, after making changes to the TypeScript code, rebuild the plugin using:

```bash
npm run build
```

You can then reload Obsidian to test the changes.

---

### Issues and Contributions

If you encounter any issues or would like to contribute to the plugin, feel free to open an issue or a pull request on GitHub.
