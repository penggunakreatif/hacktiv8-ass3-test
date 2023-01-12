'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('photos',[{
      title: "Foto Pertama Milik UserID 1",
      caption: "Ini Foto Pertama UserId 1",
      image_url:"http://fotopertamauserid_1.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    },
    {
      title: "Foto Pertama Milik UserID 1",
      caption: "Ini Foto Pertama UserId 1",
      image_url:"http://fotopertamauserid_1.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    },
    {
      title: "Foto Kedua Milik UserID 1",
      caption: "Ini Foto Kedua UserId 1",
      image_url:"http://fotokeduauserid_1.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    },
    {
      title: "Foto Ketiga Milik UserID 1",
      caption: "Ini Foto Ketiga UserId 1",
      image_url:"http://fotoketigauserid_1.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    }],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};