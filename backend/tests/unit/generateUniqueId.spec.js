const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate unique id', () => {
        const uniqueId = generateUniqueId();

        expect(uniqueId).toHaveLength(8);
    })
});