module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          text: "Wow!",
          post_id: 11,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          text: "Awesome!",
          post_id: 11,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          text: "Very interesting, thanks for posting!",
          post_id: 9,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          text: "Amazing!",
          post_id: 9,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          text: "I completely agree with everything written in the article.",
          post_id: 9,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
