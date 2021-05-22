class Book {
    constructor(link, bookName, courseId, courseName ) {
            this.link = link;
            this.bookName = bookName;
            this.courseId = courseId;
            this.courseName = courseName;
    }
}

// class Forum{
//     threads = []
//     constructor(courseId, threads){
//         this.courseId = courseId;
//         this.threads = threads;
//     }
// }
 
// class Threads{
//     comments = [];
//     constructor(title, comments){
//         this.title = title;
//         this.comments = comments;
//     }
// }

// class Comments{
//     constructor(name, comment, time){
//         this.name = name;
//         this.comment = comment;
//         this.time = time;
//     }
// }
module.exports = Book;