const { user, photo } = require('../models')

const authorization = async (req, res, next) => {
  try {
    const photoId = req.params.id;
    const authenticatedUser = res.locals.user;
    const myPhoto = await photo.findOne({
      where: {
        id: Number(photoId)
      }
    });
    if (!myPhoto) {
      return res.status(404).json({
        name: "Data Not found",
        message: `Photo with id ${photoId} not found`
      })
    }
    if (myPhoto.userId === authenticatedUser.id) {
      return next()
    } else {
      return res.status(403).json({
        name: "Authorization error",
        message: `User with id ${authenticatedUser.id} doesnt have permission to access photo with id ${photoId}`
      })
    }
  } catch (err) {
    console.log(err.toString());
    return res.status(500).json(err)
  }
}

module.exports = authorization