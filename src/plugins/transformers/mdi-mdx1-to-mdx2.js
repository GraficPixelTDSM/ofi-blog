const fs = require('fs');
const path = require('path');

const fileDirectories = ['docs', 'news', 'versioned_docs', 'src/pages', 'secure'];

/**
 * @example
 * :mdi-account: --> :mdi[account]
 * :mdi-account--red: --> :mdi[account]{.red}
 */
const REGEX = /:mdi-(?<content>\w+(-\w+)*)(--(?<clsx>\w+(\s+\w+)*))?:/;

const getFilesRecursively = (directory) => {
    const files = []
    const filesInDirectory = fs.readdirSync(directory);
    for (const f of filesInDirectory) {
        const absolute = path.join(directory, f);
        if (fs.statSync(absolute).isDirectory()) {
            files.push(...getFilesRecursively(absolute));
        } else if (/\.mdx?/.test(f)) {
            files.push(absolute);
        }
    }
    return files;
};

const files = fileDirectories.reduce((acc, dir) => {
    return [...acc, ...getFilesRecursively(`./${dir}`)];
}, []);

/**
 * 
 * @param {string} file 
 */
async function transformMdiIcons(file) {
    if (!(file.endsWith('.md') || file.endsWith('.mdx'))) {
        return;
    }
    if (file === 'docs/byod-basics/v25/003-Skills/005-navigation.mdx') {
        console.log('jiiiüp');
        console.log(file)
    }
    try {
        /** @type string */
        let raw = await fs.promises.readFile(file, {encoding: 'utf8'});
        let match;
        let hasChanged = false;
        while (match = raw.match(REGEX)) {
            hasChanged = true;
            const {content, clsx} = match.groups;
            const clsxStr = clsx ? clsx.split(/\s+/).filter(c => !!c.trim()).map(c => `.${c}`).join(' ') : clsx;
            const mdi = clsxStr ? `:mdi[${content}]{${clsxStr}}` : `:mdi[${content}]`;
            raw = `${raw.slice(0, match.index)}${mdi}${raw.slice(match.index + match[0].length)}`;
        }
        if (hasChanged) {
            console.log(`Writing ${file}`)
            await fs.promises.writeFile(file, raw, {encoding: 'utf8'});
        }
    } catch (err) {
        console.error(err);
        return;
    }
}

const main = async () => {
    for (const file of files) {
        await transformMdiIcons(file);
    }
};

main().then(() => console.log('Done!'));