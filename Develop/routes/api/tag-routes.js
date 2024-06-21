const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [{ model: Product }] 
  })
    .then(tags => {
      res.json(tags);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// GET one tag by id
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [{ model: Product }]
  })
    .then(tag => {
      if (!tag) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }

      res.json(tag);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// CREATE a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(newTag => {
      res.json(newTag);
    })
    .catch(err => {
      console.error(err);
      res.status(400).json(err); // Bad Request for potential validation errors
    });
});

// UPDATE a tag's name
router.put('/:id', (req, res) => {
  Tag.update(
    { tag_name: req.body.tag_name },
    {
      where: { id: req.params.id },
      returning: true, // Return the updated tag
      plain: true      // Simplify the result to a single object
    }
  )
    .then(updatedTag => {
      if (!updatedTag[1]) { // Check if the tag was found and updated
        res.status(404).json({ message: 'Tag not found' });
        return;
      }

      res.json(updatedTag[1]); // Send the updated tag data
    })
    .catch(err => {
      console.error(err);
      res.status(400).json(err); // Bad Request for potential validation errors
    });
});

// DELETE a tag by id
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: { id: req.params.id }
  })
    .then(deletedTag => {
      if (!deletedTag) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }

      res.json({ message: 'Tag deleted successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;