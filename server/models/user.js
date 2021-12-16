"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Comment, { foreignKey: "comment_user_id" });
      User.hasMany(models.Visited, { foreignKey: "visited_user_id" });
      User.hasMany(models.Like, { foreignKey: "like_user_id" });
    }
  }
  User.init(
    {
      nickname: DataTypes.STRING,
      user_sigg: DataTypes.STRING,
      user_area: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      user_image_path: DataTypes.TEXT,
      user_thumbnail_path: DataTypes.TEXT,
      kakao_id: DataTypes.INTEGER,
      provider: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
