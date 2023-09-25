const { parseXmlFile } = require('../parseXmlFile');

test('should parse XML string to JSON', async () => {
    const xmlString = '<root><element>value</element></root>';
    const expectedResult = { root: { element: ['value'] } };

    const result = await parseXmlFile(xmlString);
    expect(result).toEqual(expectedResult);
});

test('should throw an error for invalid XML string', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const xmlString = '<root><element>value</element>';
    await expect(parseXmlFile(xmlString)).rejects.toThrow();
    console.error.mockRestore();
});
