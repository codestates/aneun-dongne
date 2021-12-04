"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Visiteds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      visited_user_id: {
        type: Sequelize.INTEGER,
      },
      visited_post_contentid: {
        type: Sequelize.INTEGER,
      },
      visited_area: {
        type: Sequelize.STRING,
      },
      visited_sigg: {
        type: Sequelize.STRING,
      },
      visited_mapx: {
        type: Sequelize.INTEGER,
      },
      visited_mapy: {
        type: Sequelize.INTEGER,
      },
      visited_memo: {
        type: Sequelize.STRING,
      },
      visited_memo_image_path: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Visiteds");
  },
};
