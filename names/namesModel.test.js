const db = require('../data/dbConfig.js');

const names = require('./namesModel.js');

describe('names model', () => {
  beforeEach(async () => {
    await db('names').truncate();
  });

  afterEach(async () => {
    await db('names').truncate();
  });

  const mockName = {
    name: 'Carsen'
  };

  describe('insert()', () => {
    it('should insert names', async () => {
      await names.insert(mockName);

      const name = await db('names');

      expect(name).toHaveLength(1);
    });

    describe('getAll()', () => {
      it('should get all names', async () => {
        const allNames = await names.getAll();
        expect(Array.isArray(allNames)).toBe(true);
      });
    });

    describe('findById()', () => {
      it('should get item by id', async () => {
        const newName = await names.insert(mockName);
        const findName = await names.findById(newName.id);
        expect(findName.name).toEqual(newName.name);
        //console.log(findName.id);
        //console.log(newName.id);
      });
    });

    describe('remove(id)', () => {
      it('should remove name', async () => {
        const newName = await names.insert(mockName);
        const removedName = await names.remove(newName);
        expect(removedName).toEqual(0);
        // console.log(removedName);
      });
    });
  });
});
