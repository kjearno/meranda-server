module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "No category",
          slug: "no-category",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Politics",
          slug: "politics",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Business",
          slug: "business",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Health",
          slug: "health",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
