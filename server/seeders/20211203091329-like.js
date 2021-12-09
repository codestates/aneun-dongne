"use strict";

const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Likes",
      [
        {
          id: 1,
          like_user_id: 1,
          like_post_contentid: 126508,
          createdAt,
          updatedAt,
        },
        {
          id: 2,
          like_user_id: 1,
          like_post_contentid: 126532,
          createdAt,
          updatedAt,
        },
        {
          id: 3,
          like_user_id: 2,
          like_post_contentid: 126508,
          createdAt,
          updatedAt,
        },
        {
          id: 4,
          like_user_id: 2,
          like_post_contentid: 126532,
          createdAt,
          updatedAt,
        },
        {
          id: 5,
          like_user_id: 3,
          like_post_contentid: 126508,
          createdAt,
          updatedAt,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
