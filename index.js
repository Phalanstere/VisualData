visualData      = require("./lib/visualData");

function done(result)
    {
    if (result.length > 0) console.log(result[0].exif.ExposureTime);        
    }

visualData("folder", done);
