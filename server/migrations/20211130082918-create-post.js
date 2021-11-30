'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_title: {
        type: Sequelize.STRING
      },
      post_area: {
        type: Sequelize.STRING
      },
      post_sigg: {
        type: Sequelize.STRING
      },
      homepage_path: {
        type: Sequelize.STRING
      },
      post_content: {
        type: Sequelize.STRING
      },
      post_image_path: {
        type: Sequelize.STRING
      },
      post_mapx: {
        type: Sequelize.INTEGER
      },
      post_mapy: {
        type: Sequelize.INTEGER
      },
      content_id: {
        type: Sequelize.INTEGER
      },
      content_type_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};