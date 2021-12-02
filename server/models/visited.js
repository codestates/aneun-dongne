'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visited extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Visited.init({
    user_id: DataTypes.INTEGER,
    post_contentid: DataTypes.INTEGER,
    visited_area: DataTypes.STRING,
    visited_sigg: DataTypes.STRING,
    visited_mapx: DataTypes.INTEGER,
    visited_mapy: DataTypes.INTEGER,
    visited_memo: DataTypes.STRING,
    visited_memo_image_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Visited',
  });
  return Visited;
};