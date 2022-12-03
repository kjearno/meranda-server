module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          name: "admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "user",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
