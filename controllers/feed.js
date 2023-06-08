exports.getPosts = (req,res,next)=>{
    // res.send('<h2>Posts</h2>');
    res.status(200).json({
        posts:[
            {content : "lorem", title: "First post"},
            {content : "hello 2", title: "Second post"},
            {content : "hello 3", title: "Third post"},
            {content : "hello 4", title: "Fourth post"},
            {content : "hello 5", title: "Fifth post"}
        ]
    })
}
exports.createPost = (req,res,next) => {
    const { content, title } = req.body;
    console.log("🚀 ~ file: feed.js:15 ~ content, title:", content, title);
    //201 status code means a resourse was created
    return res.status(201).json({
        message : 'Post has created',
        post : {
            id : new Date().toISOString(),
            title : title,
            content : content
        }
    })
}
