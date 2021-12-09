"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn("post_hashtag", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    queryInterface.addColumn("post_hashtag", "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    queryInterface.addColumn("comment_hashtag", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    queryInterface.addColumn("comment_hashtag", "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
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
