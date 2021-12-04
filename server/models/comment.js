"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User);
      Comment.belongsTo(models.Post);
      Comment.belongsToMany(models.Hashtag, { through: "comment_hashtag" });
    }
  }
  Comment.init(
    {
      comment_user_id: DataTypes.INTEGER,
      comment_post_contentid: DataTypes.INTEGER,
      comment_content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
