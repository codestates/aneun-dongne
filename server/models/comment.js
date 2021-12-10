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
      Comment.belongsTo(models.User, { foreignKey: "comment_user_id" });
      Comment.belongsTo(models.Post, { foreignKey: "comment_post_contentid", targetKey: "post_contentid" });
      Comment.belongsToMany(models.Hashtag, { through: "comment_hashtag", foreignKey: "ch_comment_id" });
    }
  }
  Comment.init(
    {
      comment_content: DataTypes.TEXT,
      comment_tags: DataTypes.TEXT,
      comment_post_contentid: DataTypes.INTEGER,
      comment_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
