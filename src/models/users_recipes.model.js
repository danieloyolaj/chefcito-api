const {DataTypes} = require('sequelize')
const db = require('../utils/database')
const Users = require('./users.model')
const Recipes = require('./recipes.model')

const RecipesUsers = db.define('recipe_users', {
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  userId:{
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references:{
      key: 'id',
      model: Users
    }
  },
  recipesId:{
    type: DataTypes.UUID,
    allowNull: false,
    fields: 'recipes_id',
    references:{
      key: 'id',
      model: Recipes
    }
  },
  favorite:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})