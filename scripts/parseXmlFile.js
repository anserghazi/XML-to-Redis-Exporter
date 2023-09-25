var xml2js = require('xml2js');

async function parseXmlFile(xmlString) {
    try {
        const result = await xml2js.parseStringPromise(xmlString);
        return result;
    } catch (error) {
        console.error('Failed to parse XML:', error);
        throw error;
    }
}

module.exports = {
    parseXmlFile,
};