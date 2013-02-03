# rgbaColorPicker

### Usage
To install the rgbaColorPicker simple include rgbacolorpicker.min.js after you've included jQuery (version 1.4.3 or greater). The script will automatically convert any inputs with the class "<code>.rgbacolorpicker</code>" into color pickers. This class can be changed by modify the "<code>autorun</code>" variable inside the script file. You can disable autorun by setting "autorun" to a blank".

After installation you can manually run the colorpicker by calling the function "<code>.rgbacolorpicker()</code>". This will convert whatever you select into a color picker, regardless of if it in an input or not. *Note that if you choose to convert a non-input items your picker the color selection will not be savable.* Additionally when manually calling the colorpicker you can pass the options to it with a standard object. Currently only the following variable is recognized:

- stylesheet : false, 'path/to/stylesheet.css' - **default: false**
- callback : 'callback function' - **default: none**
- alpha : boolean  - **default: true**

For example to mimic the original version of this script you would manually call it like this:

<code>$(input.rgbapicker).rgbacolorpicker({stylesheet:'rbacolorpicker.css'});</code>

while mimicking the last version manually would simply be

<code>$(input.rgbapicker).rgbacolorpicker();</code>

Code is also up in on the jQuery plugins section here: <http://plugins.jquery.com/project/rgbaColorPicker>

### Outputs
The script will output colors in the following order; Name, Hex, rgba.

### Example
- General Example, v1.1 <http://fatfolderdesign.com/ex/rgbaColorPicker/>
- Stress Test, v1.1 <http://fatfolderdesign.com/ex/rgbaColorPicker/stresstest.html>
    
### Version History
##### 1.3.1
- Added licensing information.

##### 1.3
- New option alpha; limits the chooser to opaque colors, if set to false.

##### 1.2
- You can now type values into the editor (select text box, may need more styling)
- The selected color will not automatically be highlighted (and highlight moved when you type a color in as well)
- Autorun disabled, because it was more trouble than it was worth.
- Updated stresstest and index files.

##### 1.1
- Picker now changes side to stay within widow.
- Turned script into a proper jQuery plugin.
- Consolidated single file and external stylesheet versions into one file.
- Fixed CSS bug involving color display box.
- Updated index.html and stresstest.html accordingly.
- Made index.html more useful.
- Fixed a bug in the new read me formatting

##### 1.0
- Clicking outside color selector box now closes it.
- Opening selector box no longer reflows document.
- Fixed a bug causing selection mode to be "stuck" when you moved the mouse out of a selector area.
- Moved colorbase datauri image into stylesheet.
- Created separate, all-in-on version of the script.
- Included minified versions of the scripts.
- Updated index.html and stresstest.html as needed.

##### 0.9
- Updated to include the new version of tinycolor.js.
- Turned images into date URIs.
- Renamed several files.
- Convertered stress test into HTML.

##### 0.8
- Initial Release.

### Additional Rescources
- tinycolor.js by bgrins (<http://bgrins.github.com/TinyColor/>)

### Licensing
This plugin is Licensed under the GPL v2.0 ([http://www.gnu.org/licenses/gpl-2.0.html][]).