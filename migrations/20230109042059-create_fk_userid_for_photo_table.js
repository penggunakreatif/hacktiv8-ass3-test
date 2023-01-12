'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // create column userId from table photos
    await queryInterface.addColumn('photos','userId', {
      type: Sequelize.INTEGER
    });
    // create constraint from table photos
    await queryInterface.addConstraint("photos", {
      fields:["userId"],
      type:"foreign key",
      name:"user_fk",
      references: {
        table: "users",
        field:"id"
      },
      onDelete:"cascade",
      onUpdate:"cascade"
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // Remove Constraint from table photos
    await queryInterface.removeConstraint('photos','user_fk');
    // remove column from table photos
    await queryInterface.removeColumn('photos','userId');
  }
};