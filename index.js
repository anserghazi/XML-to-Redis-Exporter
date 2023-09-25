const { readXmlFile } = require('./scripts/readXmlFile.js');

async function exportXmlToRedis() {
    try {
        // Get file path from command line argument
        const filePath = process.argv[2];
        if (!filePath) {
            console.error('Please provide the file path as a command line argument.');
            process.exit(1);
        }
        // Read XML file and store its contents as a string in xmlData
        const xmlData = await readXmlFile(filePath);

    } catch (error) {
        console.error('Error occurred:', error);
        process.exit(1);
    }
}

exportXmlToRedis();