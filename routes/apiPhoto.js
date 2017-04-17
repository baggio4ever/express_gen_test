var express = require('express');
var router = express.Router();

var photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    },{
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    },{
        id: "003",
        name: "photo003.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo003.jpg"
    }
];

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.json(photoList);
});

router.get("/:photoId", function(req, res, next){
    var photo;
    for (i = 0; i < photoList.length; i++){
        if (photoList[i].id == req.params.photoId){
            var photo = photoList[i];
        }
    }
    res.json(photo);
});

router.post("/post",function(req,res,next) {
    res.send('POST requested!');
});


module.exports = router;

