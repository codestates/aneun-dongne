"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface
      .createTable("Posts", {
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
          unique: true,
          allowNull: false,
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
      })
      .then(function () {
        queryInterface.addColumn("Likes", "like_post_contentid", {
          type: Sequelize.INTEGER,
          references: { model: "Posts", key: "post_contentid" },
        });
        queryInterface.addColumn("Visiteds", "visited_post_contentid", {
          type: Sequelize.INTEGER,
          references: { model: "Posts", key: "post_contentid" },
        });
        queryInterface.addColumn("Comments", "comment_post_contentid", {
          type: Sequelize.INTEGER,
          references: { model: "Posts", key: "post_contentid" },
        });
        queryInterface.createTable("post_hashtag", {
          ph_post_contentid: {
            type: Sequelize.INTEGER,
            references: { model: "Posts", key: "post_contentid" },
          },
        });
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
