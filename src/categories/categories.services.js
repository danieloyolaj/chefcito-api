const categoryController = require('./categories.controllers')

const getAllCategories = (req, res) => {
  categoryController.getAllCategories() 
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}

const getCategoryById = (req, res) => {
  const id = req.params.id
  categoryController.getCategoryById(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      }else{
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}

const postCategory = (req, res) => {
  const {name} = req.body
  if(name){
      categoryController.createCategory(name)
      .then((data) =>{
        res.status(201).json(data)
      })
      .catch((err) => {
        res.status(400).json({message: err.message})
      })
  }else{
      res.status(400).json({message: 'Missing data!'})
  }
}


module.exports = {
  getAllCategories,
  getCategoryById,
  postCategory
}