let express = require('express')
let router = express.Router()
const { Colors } = require('../../models/')

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: colors } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, totalPages, currentPage, colors };
};

router.get('/', async (req,res, next) => {
    const { page, size } = req.query
    const { limit, offset } = getPagination(page, size);

    await Colors.findAndCountAll({
        limit,
        offset
    }).then(data => {
        const response = getPagingData(data, page, limit);
        res.status(200).send(response)
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Error find colors"
        });
    });
})

router.get('/:id', async (req,res, next) => {
    const id = req.params.id;

    const color = await Colors.findOne({
        where: {
            id
        }
    })

    if(!color) return res.status(404).send({
        "error": {
          "code": 404,
          "message": "ID not found"
        }
    })
    res.status(200).send(color)
})


router.post('/create', async (req,res, next) => {
    const color = {
        name: req.body.name,
        year: req.body.year,
        color: req.body.color,
        pantone_value: req.body.pantone_value
    }

    Colors.create(color)
    .then(data => {
        res.status(201).send('Create color success');
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
    });
})

module.exports = router