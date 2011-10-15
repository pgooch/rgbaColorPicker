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
				'<img src="data:image/jpeg;base64,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"/>'+
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