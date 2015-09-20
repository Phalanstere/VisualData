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
