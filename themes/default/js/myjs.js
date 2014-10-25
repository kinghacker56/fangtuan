$(function(){
	$('.j_select_dd dd').click(function(){
		$(this).addClass('currue').siblings().removeClass('currue');	
	})
	$('.close').click(function(){
		$('.right_nav').hide();	
	})
	$('.fh_top').click(function(){
		$('body,html').animate({scrollTop:0},1000);  
		return false;	
	})
	$(".user-pwd").focus(function(){
		$(this).css("background","#FFF");	
	});
	$(".user-txt").focus(function(){
		$(this).css("background","#FFF");	
	});
	
	var index = $('.select').index();
	$('.j_ul_nav li').hover(function(){
		$(this).addClass('select').siblings().removeClass('select');	
	},function(){
		$('.j_ul_nav li').eq(index).addClass('select').siblings().removeClass('select')	
	})
	
	$('.add').toggle(function(){
		$(this).children('.add_menu').show()	
	},function(){
		$(this).children('.add_menu').hide()
	})
	
	$('.j_email_ul li').click(function(){
		var index = $(this).index();
		$(this).addClass('e_select').siblings().removeClass('e_select');
		$('.email_content .email_con').eq(index).show().siblings().hide();
	})
	$('.j_tab_ul li').click(function(){
		var index = $(this).index();
		$(this).addClass('select_t').siblings().removeClass('select_t');
		$('.ranking_content .ranking_con').eq(index).show().siblings().hide();	
	})
	$('.fk_btn').click(function(){
		$('.pay').show();	
	})
	$('.close_btn').click(function(){
		$('.pay').hide();	
	})
	
	for(var i=0;i<$('.j_grounp_ul li').length; i++){
		if(i%3==0){
			$('.j_grounp_ul li').eq(i).css('margin-left',0);	
		}	
	}
	
	for(var i=0;i<$('.j_before_ul li').length; i++){
		if(i%3==0){
			$('.j_before_ul li').eq(i).css('margin-left',0);	
		}	
	}
	
	$('.prev').click(function(){
		var index = $('.thumbs-list li.current').index();
		if(index == 0 ){
			$('.thumbs-list li').eq(0).addClass('current').siblings().removeClass('current')	
		}else{
			$('.thumbs-list li').eq(index-1).addClass('current').siblings().removeClass('current');
			$('.pic ul li').eq(index-1).show().siblings().hide();	
		}	
	})
	for(var i=0;i<$('.j_pic_ul li').length; i++){
		if(i%3==0){
			$('.j_pic_ul li').eq(i).css('margin-left',0);	
		}	
	}
	
	var text = $('.big_pic img').attr('alt')
	$('.alt_sm p').html(text)
	
	$('.j_list_ul li').click(function(){
		$(this).addClass('select_list').siblings().removeClass('select_list')
		var src = $(this).children('img').attr('src');
		var text =$(this).children('img').attr('alt')
		$('.big_pic img').attr('src',src);
		$('.alt_sm p').html(text)
	})
	var size = $('.j_list_ul li').size();
	$('.j_list_ul').width(95*size);
	
	$('.next').click(function(){
		var width = $('.j_list_ul').css('left');
		var str = width.split("px");
		var left = parseInt(str[0])+(-868)
		var length = parseInt('-'+$('.j_list_ul').width())
		if(left < length){
			return
		}else{
			$('.j_list_ul').css('left',left+'px');		
		}
	})
	$('.prev').click(function(){
		var width = $('.j_list_ul').css('left');
		var str = width.split("px");
		var left = parseInt(str[0])+(868)
		var length = parseInt($('.j_list_ul').width())
		if(left > 0){
			return
		}else{
			$('.j_list_ul').css('left',left+'px');		
		}
	})
	$('.j_gui_ul li:last').css('border',0);
	
	$('.j_qora_ul li').click(function(){
		var index = $(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.qora_all .qora_con').eq(index).show().siblings().hide();	
	})
	
	$('.j_free_ul li').hover(function(){
		$(this).children('.free_line_content').show();	
	},function(){
		$(this).children('.free_line_content').hide();	
	})
	
	
})



