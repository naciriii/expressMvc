const db = require('../Models/Db');
const Post = require('../Models/Post');


class PostRepository {

 constructor(db) {
		this.db = db;
	}

 getPosts()
    {
        return new Promise((resolve, reject) => {
            this.db.query("select * from posts",(err, res) => {
                if(err) reject(err);
                let posts = new Array();
                res.forEach((element) => {
                	let post = new Post(element);
                	posts.push(post);
            })
                resolve(posts);
            });
        })
       
    
    
}
    getPost(id) {
        return new Promise((resolve, reject) => {
            this.db.query(`select * from posts where id = ${id}`,(err, res) => {
                if(err) reject(err);
                let post = new Post(res[0]);
                resolve(post);
            });
        })
       
    }

    storePost(post) {
        return new Promise((resolve, reject) => {
            this.db.query(`insert into posts (name, author) values (?)`,[Object.values(post)], (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        })
    }
}
module.exports = new PostRepository(db)

