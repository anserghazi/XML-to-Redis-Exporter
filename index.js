const { readXmlFile } = require('./scripts/readXmlFile.js');
const { parseXmlFile } = require('./scripts/parseXmlFile.js');

async function exportXmlToRedis() {
    try {
        // Get file path from command line argument
        const filePath = process.argv[2];
        if (!filePath) {
            console.error('Please provide the file path as a command line argument.');
            process.exit(1);
        }

        // Read XML file and store its contents as a string in xmlData
        const xmlString = await readXmlFile(filePath);

        // Convert XML string to JSON
        const xmlJson = await parseXmlFile(xmlString);
        
    } catch (error) {
        console.error('Error occurred:', error);
        process.exit(1);
    }
}

exportXmlToRedis();