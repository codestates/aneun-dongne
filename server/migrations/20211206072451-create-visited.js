"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Visiteds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: { min: 1 },
      },
      visited_area: {
        type: Sequelize.STRING,
      },
      visited_sigg: {
        type: Sequelize.STRING,
      },
      visited_mapx: {
        type: Sequelize.DECIMAL(25, 20),
      },
      visited_mapy: {
        type: Sequelize.DECIMAL(25, 20),
      },
      visited_memo: {
        type: Sequelize.TEXT,
      },
      visited_memo_image_path: {
        type: Sequelize.TEXT,
      },
      visited_wtmx: {
        type: Sequelize.DECIMAL(50, 30),
      },
      visited_wtmy: {
        type: Sequelize.DECIMAL(50, 30),
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
