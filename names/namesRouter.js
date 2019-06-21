const express = require('express');

const router = express.Router();
const Names = require('./namesModel.js');

router.get('/', (req, res) => {
  Names.getAll()
    .then(names => {
      res.status(200).json(names);
    })
    .catch(error => {
      res.status(500).json({ error, message: 'Error getting names' });
    });
});

router.get('/:id', async (req, res) => {
  try {
    const name = await Names.findById(req.params.id);
    if (name) {
      res.status(200).json(name);
    } else {
      res.status(404).json({ message: 'error finding name' });
    }
  } catch (error) {
    res.status(500).json({ message: 'error getting name' });
  }
});

router.post('/', (req, res) => {
  const newName = req.body;
  if (newName.name) {
    Names.insert(newName)
      .then(name => {
        res.status(201).json(name);
      })
      .catch(err => {
        res
          .status(500)
          .json({ err, message: 'there was an error saving name' });
      });
  } else {
    res.status(400).json({ errorMessage: 'please provide the name' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Names.remove(id)
    .then(name => {
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error, message: 'Error removing names' });
    });
});

module.exports = router;
