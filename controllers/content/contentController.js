const models = require('../../models');

const simpan = (req,res)=>{
    const subCategories ={
        judul: req.body.judul,
        isiContent: req.body.isiContent,
        imageUrl: req.body.imageUrl,
        categoryId: req.body.categoryId,
        subCategoryId: req.body.subCategoryId,
        userId: req.userData.userId
    }
    models.Content.create(subCategories).then(result =>{
        res.status(201).json({
            massage:"Content Created Succses",
            JudulContent:result.judul
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
    const updateContent ={
        judul: req.body.judul,
        isiContent: req.body.isiContent,
        imageUrl: req.body.imageUrl,
        categoryId: req.body.categoryId,
        subCategoryId: req.body.subCategoryId,
        userId: req.userData.userId
    }
    models.Content.update(updateContent,{where: {id:id}}).then(result=>{
        res.status(200).json({
            massage:"Content Updated Succses",
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
    models.Content.destroy({where: {id:id}}).then(result=>{
        res.status(200).json({
            massage:"Content Delete Succses"
        });
    }).catch(error =>{
        res.status(500).json({
            massage:"Something went wrong",
            error:error
        });
    });
};

module.exports ={
    simpan,
    updated,
    deletes
}