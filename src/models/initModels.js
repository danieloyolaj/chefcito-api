//This will help with the relations between tables

const Users = require('./users.model')
const Posts = require('./posts.models')
const Categories = require('./categories.model')

//Relations between tables
const initModels = () => {
  
  //Relation 1 to many
  Posts.belongsTo(Users) //A post belongs to a user
  Users.hasMany(Posts) //A user can have many posts

  //Relation 1 to many
  Posts.belongsTo(Categories) //A post belongs to a category
  Categories.hasMany(Posts) //A category has many posts
}


module.exports = initModels 