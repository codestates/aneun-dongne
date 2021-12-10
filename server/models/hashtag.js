"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hashtag.belongsToMany(models.Post, { through: "post_hashtag", foreignKey: "ph_hashtag_id" });
      Hashtag.belongsToMany(models.Comment, { through: "comment_hashtag", foreignKey: "ch_hashtag_id" });
    }
  }
  Hashtag.init(
    {
      hashtag_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hashtag",
    }
  );
  return Hashtag;
};
