"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Like.belongsTo(models.User, { foreignKey: "like_user_id" });
      Like.belongsTo(models.Post, { foreignKey: "like_post_contentid", targetKey: "post_contentid" });
    }
  }
  Like.init(
    {
      like_post_contentid: DataTypes.INTEGER,
      like_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
