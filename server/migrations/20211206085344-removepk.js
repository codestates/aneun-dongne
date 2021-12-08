"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // queryInterface.addColumn("Likes", "like_post_contentid", {
    //   allowNull: false,
    //   type: Sequelize.INTEGER,
    //   validate: { min: 1 },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    //   references: { model: "Posts", key: "post_contentid" },
    // });
    // queryInterface.addColumn("Likes", "like_user_id", {
    //   allowNull: false,
    //   type: Sequelize.INTEGER,
    //   validate: { min: 1 },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    //   references: { model: "Users", key: "id" },
    // });
    // queryInterface.addColumn("Visiteds", "visited_post_contentid", {
    //   allowNull: false,
    //   type: Sequelize.INTEGER,
    //   validate: { min: 1 },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    //   references: { model: "Posts", key: "post_contentid" },
    // });
    // queryInterface.addColumn("Visiteds", "visited_user_id", {
    //   allowNull: false,
    //   type: Sequelize.INTEGER,
    //   validate: { min: 1 },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    //   references: { model: "Users", key: "id" },
    // });
    queryInterface.addColumn("Comments", "comment_post_contentid", {
      allowNull: false,
      type: Sequelize.INTEGER,
      validate: { min: 1 },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      references: { model: "Posts", key: "post_contentid" },
    });
    // queryInterface.addColumn("Comments", "comment_user_id", {
    //   allowNull: false,
    //   type: Sequelize.INTEGER,
    //   validate: { min: 1 },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    //   references: { model: "Users", key: "id" },
    // });
    // queryInterface.createTable("post_hashtag", {
    //   ph_post_contentid: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     validate: { min: 1 },
    //     onUpdate: "CASCADE",
    //     onDelete: "CASCADE",
    //     references: { model: "Posts", key: "post_contentid" },
    //   },
    //   ph_hashtag_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     validate: { min: 1 },
    //     onUpdate: "CASCADE",
    //     onDelete: "CASCADE",
    //     references: { model: "Hashtags", key: "id" },
    //   },
    // });
    // queryInterface.createTable("comment_hashtag", {
    //   ch_comment_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     validate: { min: 1 },
    //     onUpdate: "CASCADE",
    //     onDelete: "CASCADE",
    //     references: { model: "Comments", key: "id" },
    //   },
    //   ch_hashtag_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     validate: { min: 1 },
    //     onUpdate: "CASCADE",
    //     onDelete: "CASCADE",
    //     references: { model: "Hashtags", key: "id" },
    //   },
    // });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
