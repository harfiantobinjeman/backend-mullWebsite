const index =(req, res)=>{
    const post = "post terkini";
    res.send(post);
}

//export indexnya
module.exports = {
    index
}