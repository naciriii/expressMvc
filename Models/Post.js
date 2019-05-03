const db = require('./Db');

class Post {
  
   getPosts()
    {
        return new Promise((resolve, reject) => {
            db.query("select * from posts",(err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        })
       
    
    
}
    getPost(id) {
        return new Promise((resolve, reject) => {
            db.query(`select * from posts where id = ${id}`,(err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        })
       
    }

    storePost(post) {
        return new Promise((resolve, reject) => {
            db.query(`insert into posts (name, author) values (?)`,[Object.values(post)], (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        })
    }


}
module.exports = new Post();