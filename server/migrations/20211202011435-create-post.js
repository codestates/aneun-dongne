"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      post_addr1: {
        type: Sequelize.STRING,
      },
      post_addr2: {
        type: Sequelize.STRING,
      },
      post_areacode: {
        type: Sequelize.INTEGER,
      },
      post_cat1: {
        type: Sequelize.STRING,
      },
      post_cat2: {
        type: Sequelize.STRING,
      },
      post_cat3: {
        type: Sequelize.STRING,
      },
      post_contentid: {
        type: Sequelize.INTEGER,
      },
      post_contenttypeid: {
        type: Sequelize.INTEGER,
      },
      post_createdtime: {
        type: Sequelize.INTEGER,
      },
      post_firstimage: {
        type: Sequelize.STRING,
      },
      post_firstimage2: {
        type: Sequelize.STRING,
      },
      post_mapx: {
        type: Sequelize.INTEGER,
      },
      post_mapy: {
        type: Sequelize.INTEGER,
      },
      post_mlevel: {
        type: Sequelize.INTEGER,
      },
      post_modifiedtime: {
        type: Sequelize.INTEGER,
      },
      post_readcount: {
        type: Sequelize.INTEGER,
      },
      post_sigungucode: {
        type: Sequelize.INTEGER,
      },
      post_title: {
        type: Sequelize.STRING,
      },
      post_zipcode: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Posts");
  },
};
