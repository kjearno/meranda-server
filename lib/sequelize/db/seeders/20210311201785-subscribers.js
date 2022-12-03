module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "subscribers",
      [
        {
          email: "subscriber1@mail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "subscriber2@mail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "subscriber3@mail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("subscribers", null, {});
  },
};
