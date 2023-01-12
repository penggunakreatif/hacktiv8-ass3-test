'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('photos', [
      {
        title: 'Foto Jadul',
        caption: 'Waktu itu foto ini diambil di rumah lama bersama keluarga dari ayah',
        image_url: 'https://photojadul.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Foto Kenangan',
        caption: 'Foto bersama istri ketika kita belum menikah',
        image_url: 'https://photokenangan.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Foto Liburan',
        caption: 'Waktu liburan ke rumah ayah',
        image_url: 'https://photoliburan.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Foto Keluarga',
        caption: 'Foto kumpul keluarga besar',
        image_url: 'https://photokeluarga.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Semua Sama',
        caption: 'Semua adalah sama',
        image_url: 'https://photojadul.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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