"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Visited extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Visited.belongsTo(models.User, { foreignKey: "visited_user_id" });
      Visited.belongsTo(models.Post, { foreignKey: "visited_post_contentid", targetKey: "post_contentid" });
    }
  }
  Visited.init(
    {
      visited_area: DataTypes.STRING,
      visited_sigg: DataTypes.STRING,
      visited_mapx: DataTypes.DECIMAL(25, 20),
      visited_mapy: DataTypes.DECIMAL(25, 20),
      visited_memo: DataTypes.TEXT,
      visited_memo_image_path: DataTypes.TEXT,
      visited_wtmx: DataTypes.DECIMAL(50, 30),
      visited_wtmy: DataTypes.DECIMAL(50, 30),
      visited_post_contentid: DataTypes.INTEGER,
      visited_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Visited",
    }
  );
  return Visited;
};
