const models = require('../../models');

const simpan = (req,res)=>{
    const subCategories ={
        SubCategoryName: req.body.SubCategoryName,
        categoryId: req.body.categoryId,
        userId: req.userData.userId
    }
    models.SubCategory.create(subCategories).then(result =>{
        res.status(201).json({
            massage:"SubCategory Created Succses",
            categoryName:result.SubCategoryName
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
    const updateSubCategory ={
        SubCategoryName: req.body.SubCategoryName,
        categoryId: req.body.categoryId,
        userId: req.userData.userId
    }
    models.SubCategory.update(updateSubCategory,{where: {id:id}}).then(result=>{
        res.status(200).json({
            massage:"SubCategory Updated Succses",
            category:req.body.SubCategoryName
        });
    }).catch(error =>{
        res.status(500).json({
            massage:"Something went wrong",
            error:error
        });
    });
};

const deletes =(req, res)=>{
    const id = req.params.id;
    models.SubCategory.destroy({where: {id:id}}).then(result=>{
        res.status(200).json({
            massage:"SubCategory Delete Succses"
        });
    }).catch(error =>{
        res.status(500).json({
            massage:"Something went wrong",
            error:error
        });
    });
}

module.exports ={
    simpan,
    updated,
    deletes
}