const fs = require('fs');
const { readXmlFile } = require('../readXmlFile');

jest.mock('fs', () => ({ promises: { readFile: jest.fn() } }));

test('should read file content', async () => {
    const filePath = 'path/to/xml';
    const fileContent = '<root></root>';
    fs.promises.readFile.mockResolvedValue(fileContent);

    const result = await readXmlFile(filePath);
    expect(result).toEqual(fileContent);
});

test('should throw an error if file read fails', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const filePath = 'path/to/xml';
    fs.promises.readFile.mockRejectedValue(new Error('File read error'));
    await expect(readXmlFile(filePath)).rejects.toThrow('File read error');
    console.error.mockRestore();
});
