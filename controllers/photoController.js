const { photo, user } = require('../models');

class PhotoController {
    static async GetAllPhotos(req,res) {
        photo.findAll({
            include: user
        })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err.toString());
                res.status(500).json(err);
            })
    }

    static async getById(req, res) {
        let id = +req.params.id;
        photo.findByPk(id)
            .then(result => {
                if(!result) {
                    res.status(404).json({message: 'Data Not Found!'});
                } else {
                    res.status(200).json(result);
                }
                
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }

    static async createPhoto(req, res) {
        const { title, caption, image_url } = req.body;
        // get user from verifyToken
        const usr = res.locals.user;

        photo.create({
            title, caption, image_url, userId: usr.id
        })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    static async updatePhoto(req,res) {
        let { id } = req.params;

        const {title, caption, image_url} = req.body;

        let data = {
            title, 
            caption, 
            image_url
        }

        photo.update(
            data,
            {
                where: {
                    id
                },
                returning: true
            }
        )
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    static deletePhoto(req, res) {
        let id = +req.params.id;

        photo.destroy({
            where: {
                id
            }
        })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }
}

module.exports = PhotoController;