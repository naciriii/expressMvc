const Post = require('../Models/Post');
const joi = require('joi');

exports.index = (req, res) => {
    Post.getPosts().then((result)=>{
        console.log(result);
        res.send(result);
    }).catch(err=> {
        console.log(err);
        res.send(err);
    });
  

}
module.exports.show = (req, res) => {
   
    Post.getPost(req.params.id).then(result =>{
       res.send(result);
   },err=>{
       res.send(err.message)
   })
}
exports.store =  (req, res) => {
    console.log(req.body);
    const schema = {
        name:joi.string().min(3).required(),
        author:joi.string().min(3).required()
    }
    let {error}=joi.validate(req.body,schema);
    if(error) {
        res.send(error.details);

    }
   Post.storePost(req.body).then(result => {
       console.log(result);
    res.send(result);

   }).catch(err => {
       console.log(err);
   })
    
}