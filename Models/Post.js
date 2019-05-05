
class Post {
    
    constructor(obj) {
    obj && Object.assign(this, obj);
  }

  toString() {

      return `Name is :${this.name}, Author is: ${this.author}, 'Content is: ${this
          .content.substr(0,3)}`
  }
  
  
}
module.exports = Post;