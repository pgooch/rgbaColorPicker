<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Color Picker (name/hex/rgba)</title>
	<link rel="stylesheet" href="stylesheet.css" type="text/css" media="all" />
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
	<script type="text/javascript" src="tinycolor-mod.js"></script>
	<script type="text/javascript" src="colorpicker.js"></script>
	<script type="text/javascript">
		function changecolors(){
			$('h1,h2').css('color',$('input[name="headings"]').val());
			$('p.left').css('color',$('input[name="left"]').val());
			$('p.mid').css('color',$('input[name="mid"]').val());
			$('p.right').css('color',$('input[name="right"]').val());
			$('body').css('background',$('input[name="background"]').val());
		}
	</script>
</head>
<body>
<h1> Stress Test <i>This is going to take a bit.</h1>
<h2>Every Named HTML Color <i> Note the gaps left by tinycolor.js</i></h2>
<?php 
$htmlcolors = array('IndianRed','LightCoral','Salmon','DarkSalmon','LightSalmon','Red','Crimson','FireBrick','DarkRed','Pink colors','Pink','LightPink','HotPink','DeepPink','MediumVioletRed','PaleVioletRed','Orange colors','LightSalmon','Coral','Tomato','OrangeRed','DarkOrange','Orange','Yellow colors','Gold','Yellow','LightYellow','LemonChiffon','LightGoldenrodYellow','PapayaWhip','Moccasin','PeachPuff','PaleGoldenrod','Khaki','DarkKhaki','Purple colors','Lavender','Thistle','Plum','Violet','Orchid','Fuchsia','Magenta','MediumOrchid','MediumPurple','BlueViolet','DarkViolet','DarkOrchid','DarkMagenta','Purple','Indigo','DarkSlateBlue','SlateBlue','MediumSlateBlue','','Green colors','GreenYellow','Chartreuse','LawnGreen','Lime','LimeGreen','PaleGreen','LightGreen','MediumSpringGreen','SpringGreen','MediumSeaGreen','SeaGreen','ForestGreen','Green','DarkGreen','YellowGreen','OliveDrab','Olive','DarkOliveGreen','MediumAquamarine','DarkSeaGreen','LightSeaGreen','DarkCyan','Teal','Blue/Cyan colors','Aqua','Cyan','LightCyan','PaleTurquoise','Aquamarine','Turquoise','MediumTurquoise','DarkTurquoise','CadetBlue','SteelBlue','LightSteelBlue','PowderBlue','LightBlue','SkyBlue','LightSkyBlue','DeepSkyBlue','DodgerBlue','CornflowerBlue','RoyalBlue','Blue','MediumBlue','DarkBlue','Navy','MidnightBlue','','Brown colors','Cornsilk','BlanchedAlmond','Bisque','NavajoWhite','Wheat','BurlyWood','Tan','RosyBrown','SandyBrown','Goldenrod','DarkGoldenrod','Peru','Chocolate','SaddleBrown','Sienna','Brown','Maroon','White colors','White','Snow','Honeydew','MintCream','Azure','AliceBlue','GhostWhite','WhiteSmoke','Seashell','Beige','OldLace','FloralWhite','Ivory','AntiqueWhite','Linen','LavenderBlush','MistyRose','Gray colors','Gainsboro','LightGrey','Silver','DarkGray','Gray','DimGray','LightSlateGray','SlateGray','DarkSlateGray','Black');
foreach($htmlcolors as $c){
	echo '<input type="text" class="rgbapicker" value="'.$c.'" name="'.$c.'" />';
}
?>
<h2>1,728 Web Colors <i>(all 3 digit hex codes)</i></h2>
<?php
	for($r=0;$r<12;$r=$r+1){
		for($g=0;$g<12;$g=$g+1){
			for($b=0;$b<12;$b=$b+1){
				echo '<input type="text" class="rgbapicker" value="#'.dechex($r).dechex($b).dechex($g).'" name="'.$r.$g.$b.'" />';
			}
		}
	}
?>
<h2>1,000 RGB colors <i>(increments of 25.5)</i></h2>
<?php
	for($r=0;$r<256;$r=$r+25.5){
		for($g=0;$g<256;$g=$g+25.5){
			for($b=0;$b<256;$b=$b+25.5){
				echo '<input type="text" class="rgbapicker" value="rgb('.$r.','.$g.','.$b.')" name="'.$r.$g.$b.'" />';
			}
		}
	}
?>
<h1> 2880 selectors <i>Runs smooth on a 2009 iMac</h1>
</body>
</html>
