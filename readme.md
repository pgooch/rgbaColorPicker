# rgbaColorPicker

### Usage
The rgbaColorPicker has two methods of installation, an "all-in-one" file and a stylesheet separated version. First, both version require jQuery (tested with version 1.6.4, but older versions should work). Then you can include rgbacolorpicker.single.min.js and give all the inputs you want the picker on the class rgbapicker. If you want to use an external stylesheet, or include the styles into your main stylesheet include rgbacolorpicker.min.js and the stylesheet rgbacolorpicker.css

### Outputs
The script will output colors in the following order; Name, Hex, rgba. outputs are to the name input tat the picker was assigned.

### Example
- General Example, v0.9 <http://fatfolderdesign.com/ex/rgbaColorPicker/>
- Stress Test, v0.9 <http://fatfolderdesign.com/ex/rgbaColorPicker/stresstest.html>
    
### Version History
####1.0
- Clicking outside color selector box now closes it
- Opening selector box no longer reflows document
- Fixed a bug causing selection mode to be "stuck" when you moved the mouse out of a selector area
- Moved colorbase datauri image into stylesheet
- Created separate, all-in-on version of the script
- Included minified versions of the scripts
- Updated index.html and stresstest.html as needed.
####0.9
- Updated to include the new version of tinycolor.js
- Turned images into date URIs
- Renamed several files
- Convertered stress test into HTML
####0.8
- Initial Release

### Additional Rescources
- tinycolor.js by bgrins (<http://bgrins.github.com/TinyColor/>)