util      = require("util");

visualData      = require("./lib/index.js");

function me(result)
    {
    var i;    
    console.log("ME " + result.length);    
   
    for (i = 0; i < result.length; i++) {
        console.log( result[i].file);
        };
           
    }


util.inspect(console.log(visualData ));

visualData("images1", me);
