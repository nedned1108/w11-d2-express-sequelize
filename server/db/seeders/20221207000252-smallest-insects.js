'use strict';

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
    await queryInterface.bulkInsert('Insects', [
     {
      name: 'Mr. Bug',
      description: 'gross',
      territory: 'idk',
      fact: '404-not found',
      millimeters: 10

     },
      {
      name: 'Mr. Uug',
      description: 'meh',
      territory: 'Stockton',
      fact: 'anxiety-inducing',
      millimeters: 12

     },
       {
        name: 'Lady Bug',
        description: 'not it',
        territory: 'Africa',
        fact: 'no friends',
        millimeters: 234

     },
       {
        name: 'Beetle',
        description: 'mid',
        territory: 'White House',
        fact: 'it sucks',
        millimeters: 15

     }

    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects', null, {});
  }
};
