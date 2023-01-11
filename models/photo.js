'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // associate with table users One to One
      this.belongsTo(models.user);
    }
  }
  photo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    caption: DataTypes.STRING,
    image_url: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'photo',
  });
  return photo;
};