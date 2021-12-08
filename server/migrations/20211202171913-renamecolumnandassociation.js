"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.renameColumn("Posts", "post_id", "post_id");
    await queryInterface.renameColumn("Users", "user_id", "user_id");
    await queryInterface.renameColumn("Hashtags", "hashtag_id", "hashtag_id");
    await queryInterface.renameColumn("Users", "user_updatedAt", "user_updatedAt");
    await queryInterface.renameColumn("Users", "user_createdAt", "user_createdAt");
    await queryInterface.removeColumn("Visiteds", "user_id");
    await queryInterface.removeColumn("Visiteds", "post_contentid");
    await queryInterface.removeColumn("Comments", "user_id");
    await queryInterface.removeColumn("Comments", "post_contentid");
    await queryInterface.removeColumn("Likes", "user_id");
    await queryInterface.removeColumn("Likes", "post_contentid");

    return;
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
