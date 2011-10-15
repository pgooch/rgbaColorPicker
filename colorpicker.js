$(document).ready(function(){
	$('input.rgbapicker').each(function(){
		var c = tinycolor($(this).val()).toRgb();
		$(this).replaceWith(
			'<div class="rgbapicker">'+
				'<div class="selectedcolorconainer" ><div class="selectedcolor" ></div></div>'+
				'<input type="text" name="'+$(this).attr('name')+'" class="actualcolor">'+
				'<input type="hidden" class="color_r" value="'+c.r+'"/>'+
				'<input type="hidden" class="color_g" value="'+c.g+'"/>'+
				'<input type="hidden" class="color_b" value="'+c.b+'"/>'+
				'<input type="hidden" class="color_a" value="'+c.a+'"/>'+
				'<div class="colorselect"><div class="colorhighlight"></div></div>'+
				'<div class="grayselect"><div class="grayhighlight"></div></div>'+
				'<div class="alphaselect"><div class="alphahighlight"></div></div>'+
				'<div class="shrink"></div>'+
				'<img class="sprite" src="sprite.jpg" />'+
			'</div>'
		);
	});
	$('div.rgbapicker').each(function(){
		initial_load(this); // this sets the inital color
		$(this).find('.selectedcolor').click(function(e){
			$(this).parent().parent().css('width','380px')
			$(this).parent().parent().css('height','222px')
		})
		$(this).find('.colorselect').mousedown(function(e){
			xy = get_xy(this,e,'.colorselect');
			var c = get_color(xy)
			update_color(this,c.r,c.g,c.b)
			update_alpha_overlay(this,c.r,c.g,c.b)
			$(this).find('.colorhighlight').show().css('left',xy.relative.x).css('top',xy.relative.y)
			$(this).parent().find('.grayhighlight').hide();
			$(this).mousemove(function(e){
				xy = get_xy(this,e);
				if((xy.relative.x>=0) && (xy.relative.x<360) && (xy.relative.y>=0) && (xy.relative.y<180)){
					$(this).find('.colorhighlight').css('left',xy.relative.x).css('top',xy.relative.y)
					var c = get_color(xy)
					update_color(this,c.r,c.g,c.b)
					update_alpha_overlay(this,c.r,c.g,c.b)
				}
			});
			$(this).mouseup(function(e){
				$(this).unbind('mousemove');
			});
		});
		$(this).find('.grayselect').mousedown(function(e){
			xy = get_xy(this,e,'.grayselect');
			var g = get_gray(xy)
			update_color(this,g,g,g)
			update_alpha_overlay(this,g,g,g)
			$(this).find('.grayhighlight').show().css('left',xy.relative.x).css('top',0)
			$(this).parent().find('.colorhighlight').hide();
			$(this).mousemove(function(e){
				xy = get_xy(this,e);
				if((xy.relative.x>=0) && (xy.relative.x<360) && (xy.relative.y>=0) && (xy.relative.y<18)){
					$(this).find('.grayhighlight').css('left',xy.relative.x).css('top',0)
					var g = get_gray(xy)
					update_color(this,g,g,g)
					update_alpha_overlay(this,g,g,g)
				}
			});
			$(this).mouseup(function(e){
				$(this).unbind('mousemove');
			});
		});
		$(this).find('.alphaselect').mousedown(function(e){
			xy = get_xy(this,e,'.alphaselect');
			var a = get_alpha(xy)
			update_color(this,undefined,undefined,undefined,a)
			$(this).find('.alphahighlight').show().css('left',0).css('top',xy.relative.y)
			$(this).mousemove(function(e){
				xy = get_xy(this,e);
				if((xy.relative.x>=0) && (xy.relative.x<18) && (xy.relative.y>=0) && (xy.relative.y<180)){
					$(this).find('.alphahighlight').css('left',0).css('top',xy.relative.y)
					var a = get_alpha(xy)
					update_color(this,undefined,undefined,undefined,a)
				}
			});
			$(this).mouseup(function(e){
				$(this).unbind('mousemove');
			});
		});
		$()
		$(this).find('.shrink').click(function(e){
			$(this).parent().css('width','55px')
			$(this).parent().css('height','19px')
		});
	});
	function initial_load(target){
		update_color($(target).find('.colorselect'));
	}
	function get_xy(target,e){
		var xy={};xy.absolute={};xy.element={};xy.relative={};
		xy.absolute.x = e.pageX;
		xy.absolute.y = e.pageY;
		xy.element.x = $(target).position().left
		xy.element.y = $(target).position().top
		xy.relative.x = xy.absolute.x-xy.element.x;
		xy.relative.y = xy.absolute.y-xy.element.y;
		return xy;
	}
	function get_color(xy){
		var h=Math.round((xy.relative.x/359)*360);
		var s=100; // always 100 unless selecting a gray
		var l=Math.round(((xy.relative.y/179)-1)*-100)
		return tinycolor('hsl('+h+','+s+','+l+')').toRgb()
	}
	function get_gray(xy){
		var h=0 ;// always 0 unless selecting a color
		var s=Math.round((xy.relative.x/359)*255);
		var l=Math.round(((xy.relative.y/179)-1)*-100);
		return s;
	}
	function get_alpha(xy){
		var a=Math.round(((xy.relative.y/179)*-100)+100)/100;
		return a;
	}
	function update_color(target,r,g,b,a){
		if(r==undefined){r=$(target).parent('div.rgbapicker').find('.color_r').val();}
		if(g==undefined){g=$(target).parent('div.rgbapicker').find('.color_g').val();}
		if(b==undefined){b=$(target).parent('div.rgbapicker').find('.color_b').val();}
		if(a==undefined){a=$(target).parent('div.rgbapicker').find('.color_a').val();}
		if(r!=undefined){$(target).parent('div.rgbapicker').find('.color_r').val(r)};
		if(g!=undefined){$(target).parent('div.rgbapicker').find('.color_g').val(g)};
		if(b!=undefined){$(target).parent('div.rgbapicker').find('.color_b').val(b)};
		if(a!=undefined){$(target).parent('div.rgbapicker').find('.color_a').val(a)};
		var c = 'rgba('+r+','+g+','+b+','+a+')';
		var f = 'transparent';
		if(a==1){
			if(tinycolor(c).toName()){
				f = tinycolor(c).toName();
			}else if(a==1){
				f = tinycolor(c).toHexString();
			}
		}else if(a==0){
			f = 'transparent'
		}else{
			f = tinycolor(c).toRgbString();
		}
		$(target).parent('div.rgbapicker').find('.actualcolor').val(f);
		$(target).parent('div.rgbapicker').find('.selectedcolor').css('background-color',f);
	}
	function update_alpha_overlay(target,r,g,b){
		var rgba_o = 'rgba('+r+','+g+','+b+',1)';
		var rgba_t = 'rgba('+r+','+g+','+b+',0)';
		$(target).parent().find('.alphaselect').css('background','-moz-linear-gradient(top, '+rgba_o+' 0%, '+rgba_t+' 100%)');
		$(target).parent().find('.alphaselect').css('background','-webkit-gradient(linear, left top, left bottom, color-stop(0%,'+rgba_o+'), color-stop(100%,'+rgba_t+'))');
		$(target).parent().find('.alphaselect').css('background','-webkit-linear-gradient(top, '+rgba_o+' 0%,'+rgba_t+' 100%)');
		$(target).parent().find('.alphaselect').css('background','-o-linear-gradient(top, '+rgba_o+' 0%,'+rgba_t+' 100%)');
		$(target).parent().find('.alphaselect').css('background','-ms-linear-gradient(top, '+rgba_o+' 0%,'+rgba_t+' 100%)');
		$(target).parent().find('.alphaselect').css('background','-linear-gradient(top, '+rgba_o+' 0%,'+rgba_t+' 100%)');
		$(target).parent().find('.alphaselect').css('filter',"progid:DXImageTransform.Microsoft.gradient( startColorstr='"+rgba_o+"', endColorstr='"+rgba_t+"',GradientType=0 )");
		console.log(target,r,g,b);
	}
});