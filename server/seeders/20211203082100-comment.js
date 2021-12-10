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
      "Comments",
      [
        {
          id: 1,
          comment_user_id: 1,
          comment_post_contentid: 126508,
          comment_content: "아이들과 견학하기 좋은 곳이예요.",
          comment_tags: "가을,데이트",
          createdAt,
          updatedAt,
        },
        {
          id: 2,
          comment_user_id: 2,
          comment_post_contentid: 126508,
          comment_content: "가까워서 좋아요.",
          comment_tags: "데이트,공원,산책하기좋은",
          createdAt,
          updatedAt,
        },
        {
          id: 3,
          comment_user_id: 3,
          comment_post_contentid: 126508,
          comment_content: "야경이 예뻐요.",
          comment_tags: "데이트,가을",
          createdAt,
          updatedAt,
        },
        {
          id: 4,
          comment_user_id: 1,
          comment_post_contentid: 126532,
          comment_content: "반려견 출입이 가능해서 자주 가는 공원이예요.",
          comment_tags: "해시태그가,적은,순서대로,보내지는지,확인",
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
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
