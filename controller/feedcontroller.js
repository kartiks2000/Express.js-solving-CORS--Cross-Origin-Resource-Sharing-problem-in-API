
exports.getposts = (req,res,next) => {
    res.status(200).json({
        posts:[{title:'First Post',content:'Hi there, this is my first post...'}]
    });
};

exports.createpost = (req,res,next) => {
    // Parsing our json data using bodyparser.json() setup in app.js
    const title = req.body.title;
    const content = req.body.content;
    // add/create post in the db 
    res.status(201).json({
        message: 'Post created succesfully!!!',
        post: {id: new Date().toDateString , title: title, content: content}
    });
}