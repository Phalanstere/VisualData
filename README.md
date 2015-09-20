# VisualData

## Features:

- Reads Exif Data for an array of files and returns an array of images

```html
 	function getImages(list, callback)
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
var list = ["images1/IMG_4358.jpg", "images1/IMG_4363.jpg", "images1/IMG_4370.jpg", "images1/IMG_4375.jpg" ];

function done(result)
    {
    if (result.length > 0) console.log(result[0].exif.ExposureTime);        
    }


visualData(list, done);

```	