const router = require('express').Router()

const CommentsController = require('../../controllers/comments.controller');

router.get('/', (req, res) => {
  CommentsController.findAll(req, res);
})

router.post('/', (req, res) => {
  CommentsController.create(req, res);
})

router.get('/stats', (req, res) =>  {
  CommentsController.stats(req, res)
})

/*router.get('/:userId', (req, res) => {
  CommentsController.findForUser(req, res)
})*/

router.get('/:id', (req, res) => {
  CommentsController.find(req, res)
})

router.patch('/:id', (req, res) => {
  CommentsController.update(req, res)
})

router.delete('/:id', (req, res) => {
  CommentsController.delete(req, res)
})

module.exports = router