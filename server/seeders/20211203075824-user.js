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
      "Users",
      [
        {
          id: 1,
          nickname: "user1",
          user_sigg: "강남구",
          user_area: "서울",
          email: "user1@aneun-dongne.com",
          password: "user1_user1",
          user_image_path: null,
          createdAt,
          updatedAt,
        },
        {
          id: 2,
          nickname: "user2",
          user_sigg: "강서구",
          user_area: "서울",
          email: "user2@aneun-dongne.com",
          password: "user2_user2",
          user_image_path: null,
          createdAt,
          updatedAt,
        },
        {
          id: 3,
          nickname: "user3",
          user_sigg: "마포구",
          user_area: "서울",
          email: "user3@aneun-dongne.com",
          password: "user3_user3",
          user_image_path: null,
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};
