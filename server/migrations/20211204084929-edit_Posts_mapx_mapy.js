"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.changeColumn("Posts", "post_mapx", {
      type: Sequelize.DECIMAL(25, 20),
      allowNull: false,
    });
    queryInterface.changeColumn("Posts", "post_mapy", {
      type: Sequelize.DECIMAL(25, 20),
      allowNull: false,
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
