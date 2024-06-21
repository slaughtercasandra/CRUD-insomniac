const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [{ model: Product }]
  })
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err); 
    });
});

// GET one category by id
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: [{ model: Product }]
  })
    .then(category => {
      if (!category) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }

      res.json(category);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// CREATE a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(newCategory => {
      res.json(newCategory);
    })
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    });
});

// UPDATE a category by id
router.put('/:id', (req, res) => {
  Category.update(
    { category_name: req.body.category_name },
    {
      where: { id: req.params.id },
      returning: true, 
      plain: true     
    }
  )
    .then(updatedCategory => {
      if (!updatedCategory[1]) { 
        res.status(404).json({ message: 'Category not found' });
        return;
      }

      res.json(updatedCategory[1]); 
    })
    .catch(err => {
      console.error(err);
      res.status(400).json(err); 
    });
});

// DELETE a category by id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: { id: req.params.id }
  })
    .then(deletedCategory => {
      if (!deletedCategory) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }

      res.json({ message: 'Category deleted successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;

