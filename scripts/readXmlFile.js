const fs = require('fs').promises;

async function readXmlFile(filePath) {
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        return fileContent;
    } catch (error) {
        console.error(`Error reading the XML file at ${filePath}`, error);
        throw error
    }
}

module.exports = {
    readXmlFile,
};