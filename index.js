var recursiveDir    = require("recursive-readdir"),
        visualData  = require("./readVisualData");


var list = ["images1/IMG_4358.jpg", "images1/IMG_4363.jpg", "images1/IMG_4370.jpg", "images1/IMG_4375.jpg" ];

function done(result)
    {
    if (result.length > 0) console.log(result[0].exif.ExposureTime);        
    }


visualData(list, done);
