const models = require('../models');

const save = (req,res)=>{
    const category ={
        categoryName: req.body.categoryName,
        userId: req.userData.userId
    }
    if (req.body.categoryName == null || req.body.categoryName == ""|| req.body.categoryName == " " ) {
        const error = "Category Name Tidak Boleh Kosong";
            res.status(500).json({
                massage:"Category Name Tidak Boleh Kosong"
            });
            res.send(error);
    }
    models.Category.create(category).then(result =>{
        res.status(201).json({
            massage:"Category Created Succses",
            categoryName:result.categoryName
        });
    }).catch(error =>{
        res.status(500).json({
            massage:"Something went wrong",
            error:error
        });
    });
};

const index = async(req, res) =>{
    const category = await models.Category.findAll({
        include:[models.SubCategory]
    }).then(result=>{
        res.status(200).json({
            payload:{
                massage:"Get All Data Category",
                data : result
            }
        });
    }).catch(error =>{
        res.status(500).json({
            massage:"Something went wrong!",
            error:error
        });
    });
};

const updated = (req, res)=>{
    const id = req.params.id;
    const updateCategory ={
        categoryName: req.body.categoryName
    }
    models.Category.update(updateCategory,{where: {id:id}}).then(result=>{
        res.status(200).json({
            massage:"Category Updated Succses",
            category:updateCategory
        });
    }).catch(error =>{
        res.status(500).json({
            massage:"Something went wrong",
            error:error
        });
    });
};

const destroy =(req, res)=>{
    const id = req.params.id;
    models.Category.destroy({where: {id:id}}).then(result=>{
        res.status(200).json({
            massage:"Category Delete Succses"
        });
    }).catch(error =>{
        res.status(500).json({
            massage:"Something went wrong",
            error:error
        });
    });
}
module.exports ={
    save,
    index,
    updated,
    destroy
}