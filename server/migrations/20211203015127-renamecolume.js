"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.renameColumn("Posts", "post_id", "id");
    await queryInterface.renameColumn("Users", "user_id", "id");
    await queryInterface.renameColumn("Hashtags", "hashtag_id", "id");
    await queryInterface.renameColumn("Comments", "comment_id", "id");
    await queryInterface.renameColumn("Visiteds", "visited_id", "id");
    await queryInterface.renameColumn("Likes", "like_id", "id");
    await queryInterface.renameColumn("Users", "user_updatedAt", "updatedAt");
    await queryInterface.renameColumn("Users", "user_createdAt", "createdAt");
    await queryInterface.renameColumn("Comments", "comment_updatedAt", "updatedAt");
    await queryInterface.renameColumn("Comments", "comment_createdAt", "createdAt");
    await queryInterface.renameColumn("Visiteds", "visited_updatedAt", "updatedAt");
    await queryInterface.renameColumn("Visiteds", "visited_createdAt", "createdAt");
    await queryInterface.renameColumn("Likes", "like_updatedAt", "updatedAt");
    await queryInterface.renameColumn("Likes", "like_createdAt", "createdAt");
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
