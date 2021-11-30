'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    post_title: DataTypes.STRING,
    post_area: DataTypes.STRING,
    post_sigg: DataTypes.STRING,
    homepage_path: DataTypes.STRING,
    post_content: DataTypes.STRING,
    post_image_path: DataTypes.STRING,
    post_mapx: DataTypes.INTEGER,
    post_mapy: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    content_type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};