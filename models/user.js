'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // associate with table photos One To Many
      this.hasMany(models.photo);
    }
  }
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    hooks: {
      beforeCreate: (user, opt) => {
        let hashedPassword = hashPassword(user.password);
        user.password = hashedPassword;
      }
    }
  });
  return user;
};