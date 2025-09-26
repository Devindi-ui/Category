const Category = require('../model/categoryModel');

const categoryController = {
    createCategory: (req, res) => {
        const {name, description} = req.body;
        Category.create(
            (name, description),
            (err, result) => {
                if(err){
                    return res.status(500).json({error: 'Database error'});
                }
                res.status(201).json({message: 'Supplier created', data: result});
            }
        );
    },
}