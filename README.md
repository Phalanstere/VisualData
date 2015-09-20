# VisualData

## Features:

- You pass a folder name and receive image information of all the visual files that can be found in the folder and its dubdirectories 

```html 
 	function visualData([folder], [callback])
```	

- The list is an array of image files, ionclding path information
- The callback receives an array of objects with the following structure:

  
```html
 	    file = file;
        date = the creation time of the image
        time = converted to a timestamp
        this.exif  = exif information
```	



Here is an example

```html

function done(result)
    {
    if (result.length > 0) console.log(result[0].exif.ExposureTime);        
    }


visualData("folder", done);

```	