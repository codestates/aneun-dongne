"use strict";
const { Model } = require("sequelize");
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
  }
  Post.init(
    {
      post_addr1: DataTypes.STRING,
      post_addr2: DataTypes.STRING,
      post_areacode: DataTypes.INTEGER,
      post_cat1: DataTypes.STRING,
      post_cat2: DataTypes.STRING,
      post_cat3: DataTypes.STRING,
      post_contentid: DataTypes.INTEGER,
      post_contenttypeid: DataTypes.INTEGER,
      post_createdtime: DataTypes.INTEGER,
      post_firstimage: DataTypes.STRING,
      post_firstimage2: DataTypes.STRING,
      post_mapx: DataTypes.INTEGER,
      post_mapy: DataTypes.INTEGER,
      post_mlevel: DataTypes.INTEGER,
      post_modifiedtime: DataTypes.INTEGER,
      post_readcount: DataTypes.INTEGER,
      post_sigungucode: DataTypes.INTEGER,
      post_title: DataTypes.STRING,
      post_zipcode: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
