/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
var recursive       = require("recursive-readdir"),
    visualData      = require("./readVisualData"),
    Q               = require("q");

var format_list = ["jpg", "png", "tif", "JPG"];

Array.prototype.contains = function (elem) {
    "use strict";
    var q;
    for (q = 0; q < this.length; q++)
        {
        if (elem === this[q]) 
            {
            return true;
            }
        }
    
    return false;
};


function getImageData(path)
{
    "use strict";
    var deferred = Q.defer();
    
    recursive(path, function (err, files) {
      if (err) { console.log("path is not valid"); }
        
      if(files) {
        
        var list = [], len, ext;
      
          files.map(function(el) {
        
            len = el.length;     
            ext = el.substring(len-3, len);
            if (format_list.contains(ext) === true) { 
                list.push(el);
                }      
          });
        // console.log(list);
        deferred.resolve(list); 
        }   
    });

return deferred.promise;
}

var user_callback = null;

function getFileInfo(data) {
    "use strict";
     visualData(data, function done(data){
     console.log("Anzahl der Images " + data.length);   
     if (user_callback)
        {
        user_callback.call(this, data);   
        }
     else console.log("Pelase pass a callback ");
    });
}





function ImageInformation(path, callback) {
   "use strict";
   user_callback = callback;
   getImageData("folder").then(getFileInfo);    
}

/* FOR TEST PURPOSES ONLY
function done(data) {
    console.log(data.length);
}

ImageInformation("folder", done);
*/

module.exports = exports = ImageInformation;

