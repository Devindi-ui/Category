const db = require('../config/database');

class Category{
    static create(categoryData, result){
        const sql = 'INSERT INTO category (name, description) VALUES (?,?)';
        db.query(sql,
            [categoryData.name, categoryData.description],
        );
    }
}

module.exports = Category;