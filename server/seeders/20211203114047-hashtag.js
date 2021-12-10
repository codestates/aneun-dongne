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
      "Hashtags",
      [
        {
          id: 1,
          hashtag_name: "산책하기좋은",
          createdAt,
          updatedAt,
        },
        {
          id: 2,
          hashtag_name: "절",
          createdAt,
          updatedAt,
        },
        {
          id: 3,
          hashtag_name: "왕릉",
          createdAt,
          updatedAt,
        },
        {
          id: 4,
          hashtag_name: "공원",
          createdAt,
          updatedAt,
        },
        {
          id: 5,
          hashtag_name: "놀이공원",
          createdAt,
          updatedAt,
        },
        {
          id: 6,
          hashtag_name: "데이트",
          createdAt,
          updatedAt,
        },
        {
          id: 7,
          hashtag_name: "자전거코스",
          createdAt,
          updatedAt,
        },
        {
          id: 8,
          hashtag_name: "가을",
          createdAt,
          updatedAt,
        },
        {
          id: 9,
          hashtag_name: "미술관",
          createdAt,
          updatedAt,
        },
        {
          id: 10,
          hashtag_name: "박물관",
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
