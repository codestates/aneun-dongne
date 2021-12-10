"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.createTable("Comments", {
      comment_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Users", key: "id" },
      },
      comment_post_contentid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Posts", key: "post_contentid" },
      },
    });
    queryInterface.createTable("Likes", {
      like_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Users", key: "id" },
      },
      like_post_contentid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Posts", key: "post_contentid" },
      },
    });
    queryInterface.createTable("Visiteds", {
      visited_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Users", key: "id" },
      },
      visited_post_contentid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Posts", key: "post_contentid" },
      },
    });
    queryInterface.createTable("post_hashtag", {
      ph_post_contentid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Posts", key: "post_contentid" },
      },
      ph_hashtag_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Hashtags", key: "id" },
      },
    });
    queryInterface.createTable("comment_hashtag", {
      ch_comment_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Comments", key: "id" },
      },
      ch_hashtag_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Hashtags", key: "id" },
      },
    });
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
