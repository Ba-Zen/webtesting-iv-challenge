const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

function insert(name) {
  return db('names')
    .insert(name, 'id')
    .then(ids => {
      return db('names')
        .where({ id: ids[0] })
        .first();
    });
}

function update(id, changes) {
  return db('names')
    .where({ id })
    .update(changes, '*');
}

function remove(id) {
  return db('names')
    .where({ id })
    .del();
}

function getAll() {
  return db('names');
}

function findById(id) {
  return db('names')
    .where({ id })
    .first();
}
