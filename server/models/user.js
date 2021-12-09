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
      //!id넣으면 안되는건지??
      nickname: DataTypes.STRING,
      user_sigg: DataTypes.STRING,
      user_area: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      user_image_path: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
