const Post = require('../Models/Post');
const PostRepository = require('../Repositories/PostRepository');
const joi = require('joi');

class PostController {

index (req, res) {
    PostRepository.getPosts().then((result)=>{
        console.log(result);
        res.send(result);
    }).catch(err=> {
        console.log(err);
        res.send(err);
    });
  

}
show (req, res)  {
   
    PostRepository.getPost(req.params.id).then(result =>{
       res.send(result);
   },err=>{
       res.send(err.message)
   })
}
store (req, res) {
    console.log(req.body);
    const schema = {
        name:joi.string().min(3).required(),
        author:joi.string().min(3).required()
    }
    let {error}=joi.validate(req.body,schema);
    if(error) {
        res.send(error.details);

    }
   PostRepository.storePost(req.body).then(result => {
       console.log(result);
    res.send(result);

   }).catch(err => {
       console.log(err);
   })
    
}
}
module.exports = new PostController();