let $ = require('jquery');
$(document).ready(function() {
	//$('body').width($(window).width());
	//$('.header').height($(window).height());
	//alert(document.body.clientWidth);
	$(window).scroll(function() {
		if(1){   //導覽列
	    	if ($(this).scrollTop() < 765 || $(this).scrollTop() > 5080)  {          
				$('.dropdowns').addClass('navfixed');   
    		} 
    		else{
				$('.dropdowns').removeClass('navfixed'); 
		    }
		}
		if(1){   //側邊導覽
			if($(this).scrollTop() < 500){     

				$('.l1').addClass('listfixed0');
				$('.lc1').addClass('lcfixed0');
				$('.lt1').addClass('ltfixed0');
				$('.l2').addClass('listfixed');
				$('.lc2').addClass('lcfixed');
				$('.lt2').addClass('ltfixed');
				$('.l3').addClass('listfixed');
				$('.lc3').addClass('lcfixed');
				$('.lt3').addClass('ltfixed');
	    	}
	    	else if($(this).scrollTop() < 4800){
	    		$('.l1').removeClass('listfixed0');
				$('.lc1').removeClass('lcfixed0');
				$('.lt1').removeClass('ltfixed0');
				$('.l2').removeClass('listfixed');
				$('.lc2').removeClass('lcfixed');
				$('.lt2').removeClass('ltfixed');
				$('.l3').addClass('listfixed');
				$('.lc3').addClass('lcfixed');
				$('.lt3').addClass('ltfixed');
	    	}
	    	else if($(this).scrollTop() > 4800){
	    		$('.l1').removeClass('listfixed0');
				$('.lc1').removeClass('lcfixed0');
				$('.lt1').removeClass('ltfixed0');
				$('.l2').addClass('listfixed');
				$('.lc2').addClass('lcfixed');
				$('.lt2').addClass('ltfixed');
				$('.l3').removeClass('listfixed');
				$('.lc3').removeClass('lcfixed');
				$('.lt3').removeClass('ltfixed');
	    	}
		}
  		if(1){   //clickdown
	    	if($(this).scrollTop() < 650.5){     //clickdown 只有切到dday的顯示
	    		$('.clickarticle').addClass('cfdisplay0');
				$('.clickdday').addClass('cfdisplay');
				$('.clickday1').addClass('cfdisplay');
				$('.clickday2').addClass('cfdisplay');
				$('.clickday3').addClass('cfdisplay');
				$('.clickday4').addClass('cfdisplay');
				$('.clickday5').addClass('cfdisplay');
				$('.clickday6').addClass('cfdisplay');
				$('.clickfooter').addClass('cfdisplay');
				$('.clickheader').addClass('cfdisplay');
	    	}
	    	else if($(this).scrollTop() < 775){     //clickdown 只有切到dday的顯示
	    		$('.clickarticle').removeClass('cfdisplay0');
				$('.clickdday').removeClass('cfdisplay');
				$('.clickday1').addClass('cfdisplay');
				$('.clickday2').addClass('cfdisplay');
				$('.clickday3').addClass('cfdisplay');
				$('.clickday4').addClass('cfdisplay');
				$('.clickday5').addClass('cfdisplay');
				$('.clickday6').addClass('cfdisplay');
				$('.clickfooter').addClass('cfdisplay');
				$('.clickheader').addClass('cfdisplay');
			}
	    	else if($(this).scrollTop() < 1380){     //clickdown 只有切到day1的顯示
	    		$('.clickarticle').removeClass('cfdisplay0');
				$('.clickdday').addClass('cfdisplay');
				$('.clickday1').removeClass('cfdisplay');
				$('.clickday2').addClass('cfdisplay');
				$('.clickday3').addClass('cfdisplay');
				$('.clickday4').addClass('cfdisplay');
				$('.clickday5').addClass('cfdisplay');
				$('.clickday6').addClass('cfdisplay');
				$('.clickfooter').addClass('cfdisplay');
				$('.clickheader').addClass('cfdisplay');
			}
			else if($(this).scrollTop() < 1980){     //clickdown 只有切到day2的顯示
				$('.clickarticle').removeClass('cfdisplay0');
				$('.clickdday').addClass('cfdisplay');
				$('.clickday1').addClass('cfdisplay');
				$('.clickday2').removeClass('cfdisplay');
				$('.clickday3').addClass('cfdisplay');
				$('.clickday4').addClass('cfdisplay');
				$('.clickday5').addClass('cfdisplay');
				$('.clickday6').addClass('cfdisplay');
				$('.clickfooter').addClass('cfdisplay');
				$('.clickheader').addClass('cfdisplay');
			}
			else if($(this).scrollTop() < 2500){     //clickdown 只有切到day3的顯示
				$('.clickarticle').removeClass('cfdisplay0');
				$('.clickdday').addClass('cfdisplay');
				$('.clickday1').addClass('cfdisplay');
				$('.clickday2').addClass('cfdisplay');
				$('.clickday3').removeClass('cfdisplay');
				$('.clickday4').addClass('cfdisplay');
				$('.clickday5').addClass('cfdisplay');
				$('.clickday6').addClass('cfdisplay');
				$('.clickfooter').addClass('cfdisplay');
				$('.clickheader').addClass('cfdisplay');
			}
			else if($(this).scrollTop() < 3100){     //clickdown 只有切到day4的顯示
				$('.clickarticle').removeClass('cfdisplay0');
				$('.clickdday').addClass('cfdisplay');
				$('.clickday1').addClass('cfdisplay');
				$('.clickday2').addClass('cfdisplay');
				$('.clickday3').addClass('cfdisplay');
				$('.clickday4').removeClass('cfdisplay');
				$('.clickday5').addClass('cfdisplay');
				$('.clickday6').addClass('cfdisplay');
				$('.clickfooter').addClass('cfdisplay');
				$('.clickheader').addClass('cfdisplay');
			}
			else if($(this).scrollTop() < 3700){     //clickdown 只有切到day5的顯示
				$('.clickarticle').removeClass('cfdisplay0');
				$('.clickdday').addClass('cfdisplay');
				$('.clickday1').addClass('cfdisplay');
				$('.clickday2').addClass('cfdisplay');
				$('.clickday3').addClass('cfdisplay');
				$('.clickday4').addClass('cfdisplay');
				$('.clickday5').removeClass('cfdisplay');
				$('.clickday6').addClass('cfdisplay');
				$('.clickfooter').addClass('cfdisplay');
				$('.clickheader').addClass('cfdisplay');
			}
			else if($(this).scrollTop() < 4380){     //clickdown 只有切到day6的顯示
				$('.clickarticle').removeClass('cfdisplay0');
				$('.clickdday').addClass('cfdisplay');
				$('.clickday1').addClass('cfdisplay');
				$('.clickday2').addClass('cfdisplay');
				$('.clickday3').addClass('cfdisplay');
				$('.clickday4').addClass('cfdisplay');
				$('.clickday5').addClass('cfdisplay');
				$('.clickday6').removeClass('cfdisplay');
				$('.clickfooter').addClass('cfdisplay');
				$('.clickheader').addClass('cfdisplay');
			}
			else if($(this).scrollTop() < 5080){     //clickdown 只有切到footer的顯示
				$('.clickarticle').removeClass('cfdisplay0');
				$('.clickdday').addClass('cfdisplay');
				$('.clickday1').addClass('cfdisplay');
				$('.clickday2').addClass('cfdisplay');
				$('.clickday3').addClass('cfdisplay');
				$('.clickday4').addClass('cfdisplay');
				$('.clickday5').addClass('cfdisplay');
				$('.clickday6').addClass('cfdisplay');
				$('.clickfooter').removeClass('cfdisplay');
				$('.clickheader').addClass('cfdisplay');
			}
			else if($(this).scrollTop() > 5080){     //clickdown 只有切到header的顯示
				$('.clickarticle').removeClass('cfdisplay0');
				$('.clickdday').addClass('cfdisplay');
				$('.clickday1').addClass('cfdisplay');
				$('.clickday2').addClass('cfdisplay');
				$('.clickday3').addClass('cfdisplay');
				$('.clickday4').addClass('cfdisplay');
				$('.clickday5').addClass('cfdisplay');
				$('.clickday6').addClass('cfdisplay');
				$('.clickfooter').addClass('cfdisplay');
				$('.clickheader').removeClass('cfdisplay');
			}
    	}
	});
	$('.clickarticle').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#article').offset().top
		},800); 
	});
	$('.clickdday').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#dday').offset().top
		},800); 
	});
	$('.clickday1').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day1').offset().top
		},800);
	});
	$('.clickday2').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day2').offset().top
		},800); 
	});
	$('.clickday3').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day3').offset().top
		},800); 
	});
	$('.clickday4').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day4').offset().top
		},800); 
	});
	$('.clickday5').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day5').offset().top
		},800); 
	});
	$('.clickday6').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day6').offset().top
		},800); 
	});
	$('.clickfooter').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#footer').offset().top
		},800); 
	});
	$('.clickheader').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#header').offset().top
		},1200); 
	});





	$('.nld').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#dday').offset().top
		},800);
	});
	$('.nl1').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day1').offset().top
		},800);
	});
	$('.nl2').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day2').offset().top
		},800);
	});
	$('.nl3').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day3').offset().top
		},800);
	});
	$('.nl4').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day4').offset().top
		},800);
	});
	$('.nl5').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day5').offset().top
		},800);
	});
	$('.nl6').click(function(){                           //錨點滑動
		$('html,body').animate({
			scrollTop:$('#day6').offset().top
		},800);
	});
	


	$('.navclicktwo').hide();
	$('.navlist').hide();
	$('.navclickone').click(function(event) {
		$('.navclickone').fadeOut(500);
		$('.navlist').show(400);
		$('.navclicktwo').fadeIn(500);
	});
	$('.navclicktwo').click(function(event) {
		$('.navclicktwo').fadeOut(500);
		$('.navlist').hide(400);
		$('.navclickone').fadeIn(500);
	});



///////////////////////////////////////////////////////day3text
	$('.str3-1').click(function(event) {
		$('.show3-1').fadeOut(100);
		$('.show3-2').fadeIn(100);
		$('.str3-1').fadeOut(200);
		$('.str3-2').fadeIn(200);
		$('.stl3-2').fadeIn(200);
	});
	$('.str3-2').click(function(event) {
		$('.show3-2').fadeOut(100);
		$('.show3-3').fadeIn(100);
		$('.str3-2').fadeOut(200);
		$('.stl3-2').fadeOut(200);
		$('.stl3-3').fadeIn(200);
	});
	$('.stl3-2').click(function(event) {
		$('.show3-2').fadeOut(100);
		$('.show3-1').fadeIn(100);
		$('.stl3-2').fadeOut(200);
		$('.str3-2').fadeOut(200);
		$('.str3-1').fadeIn(200);
	});
	$('.stl3-3').click(function(event) {
		$('.show3-3').fadeOut(100);
		$('.show3-2').fadeIn(100);
		$('.stl3-2').fadeIn(200);
		$('.str3-2').fadeIn(200);
		$('.stl3-3').fadeOut(200);
	});
	$('.cubetext').mouseleave(function(event) {
		$('.showtleft3').hide(0);
		$('.showtright3').hide(0);
		$('.show3-3').hide(0);
		$('.show3-2').hide(0);
		$('.show3-1').hide(0);
	});
	$('.cday3-1').mouseenter(function(event) {
		$('.str3-1').fadeIn(300);
		$('.show3-1').fadeIn(200);
	});
///////////////////////////////////////////////////////day5text
	$('.str5-1').click(function(event) {
		$('.show5-1').fadeOut(100);
		$('.show5-2').fadeIn(100);
		$('.str5-1').fadeOut(200);
		$('.str5-2').fadeIn(200);
		$('.stl5-2').fadeIn(200);
	});
	$('.str5-2').click(function(event) {
		$('.show5-2').fadeOut(100);
		$('.show5-3').fadeIn(100);
		$('.str5-2').fadeOut(200);
		$('.stl5-2').fadeOut(200);
		$('.stl5-3').fadeIn(200);
	});
	$('.stl5-2').click(function(event) {
		$('.show5-2').fadeOut(100);
		$('.show5-1').fadeIn(100);
		$('.stl5-2').fadeOut(200);
		$('.str5-2').fadeOut(200);
		$('.str5-1').fadeIn(200);
	});
	$('.stl5-3').click(function(event) {
		$('.show5-3').fadeOut(100);
		$('.show5-2').fadeIn(100);
		$('.stl5-2').fadeIn(200);
		$('.str5-2').fadeIn(200);
		$('.stl5-3').fadeOut(200);
	});
	$('.cubetext').mouseleave(function(event) {
		$('.showtleft5').hide(0);
		$('.showtright5').hide(0);
		$('.show5-3').hide(0);
		$('.show5-2').hide(0);
		$('.show5-1').hide(0);
	});
	$('.cday5-1').mouseenter(function(event) {
		$('.str5-1').fadeIn(300);
		$('.show5-1').fadeIn(200);
	});


	
	
///////////////////////////////////////////////////////////showbig
	$('.showbig').hide();
	$('.showbigclose').click(function(event){
			$('.showbig').fadeOut();
			$('.sbi').fadeOut();
	});



///////////////////////////////////////////////////////////////day1clickright          ver2
	for(var j = 1; j <=6; j++) {
		if(j<6){
			$('.cir1-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgplus=parseInt(bg)+1;
				$('.p1-'+bgplus).fadeIn(400);
				$('.p1-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cir1-'+6).click(function(event){
				$('.p1-'+1).fadeIn(400);
				$('.p1-'+6).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day1clickleft          ver2
	for(var j = 1; j <=6; j++) {
		if(j>1){
			$('.cil1-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(24, bg.length-24);
				var bgreduce=parseInt(bg)-1;
				$('.p1-'+bgreduce).fadeIn(400);
				$('.p1-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cil1-'+1).click(function(event){
				$('.p1-'+6).fadeIn(400);
				$('.p1-'+1).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day1clickexpend          ver2
	for(var j = 1; j <=6; j++) {
		$('.cie1-'+j).click(function(event){
			var bg=this.getAttribute("class");
			bg = bg.substr(26, bg.length-26);
			$('.showbig1').fadeIn(400);
			$('.sbi1-'+bg).fadeIn(400);
		});
	}
///////////////////////////////////////////////////////////////showbig1clickright          ver2
	for(var j = 1; j <=6; j++) {
		if(j<6){
			$('.sir1-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(26, bg.length-26);
				var bgplus=parseInt(bg)+1;
				$('.sbi1-'+bgplus).fadeIn(400);
				$('.sbi1-'+bg).fadeOut(400);
				$('.p1-'+bgplus).fadeIn(400);
				$('.p1-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sir1-'+j).click(function(event){
				$('.sbi1-'+1).fadeIn(400);
				$('.sbi1-'+6).fadeOut(400);
				$('.p1-'+1).fadeIn(400);
				$('.p1-'+6).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////showbig1clickleft          ver2
	for(var j = 1; j <=6; j++) {
		if(j>1){
			$('.sil1-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgreduce=parseInt(bg)-1;
				$('.sbi1-'+bgreduce).fadeIn(400);
				$('.sbi1-'+bg).fadeOut(400);
				$('.p1-'+bgreduce).fadeIn(400);
				$('.p1-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sil1-'+1).click(function(event){
				$('.sbi1-'+6).fadeIn(400);
				$('.sbi1-'+1).fadeOut(400);
				$('.p1-'+6).fadeIn(400);
				$('.p1-'+1).fadeOut(400);
			});
		}
	}

///////////////////////////////////////////////////////////////day2clickright          ver2
	for(var j = 1; j <=13; j++) {
		if(j<13){
			$('.cir2-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgplus=parseInt(bg)+1;
				$('.p2-'+bgplus).fadeIn(400);
				$('.p2-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cir2-'+13).click(function(event){
				$('.p2-'+1).fadeIn(400);
				$('.p2-'+13).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day2clickleft          ver2
	for(var j = 1; j <=13; j++) {
		if(j>1){
			$('.cil2-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(24, bg.length-24);
				var bgreduce=parseInt(bg)-1;
				$('.p2-'+bgreduce).fadeIn(400);
				$('.p2-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cil2-'+1).click(function(event){
				$('.p2-'+13).fadeIn(400);
				$('.p2-'+1).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day2clickexpend          ver2
	for(var j = 1; j <=13; j++) {
		$('.cie2-'+j).click(function(event){
			var bg=this.getAttribute("class");
			bg = bg.substr(26, bg.length-26);
			$('.showbig2').fadeIn(400);
			$('.sbi2-'+bg).fadeIn(400);
		});
	}
///////////////////////////////////////////////////////////////showbig2clickright          ver2
	for(var j = 1; j <=13; j++) {
		if(j<13){
			$('.sir2-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(26, bg.length-26);
				var bgplus=parseInt(bg)+1;
				$('.sbi2-'+bgplus).fadeIn(400);
				$('.sbi2-'+bg).fadeOut(400);
				$('.p2-'+bgplus).fadeIn(400);
				$('.p2-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sir2-'+j).click(function(event){
				$('.sbi2-'+1).fadeIn(400);
				$('.sbi2-'+13).fadeOut(400);
				$('.p2-'+1).fadeIn(400);
				$('.p2-'+13).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////showbig2clickleft          ver2
	for(var j = 1; j <=13; j++) {
		if(j>1){
			$('.sil2-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgreduce=parseInt(bg)-1;
				$('.sbi2-'+bgreduce).fadeIn(400);
				$('.sbi2-'+bg).fadeOut(400);
				$('.p2-'+bgreduce).fadeIn(400);
				$('.p2-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sil2-'+1).click(function(event){
				$('.sbi2-'+13).fadeIn(400);
				$('.sbi2-'+1).fadeOut(400);
				$('.p2-'+13).fadeIn(400);
				$('.p2-'+1).fadeOut(400);
			});
		}
	}

///////////////////////////////////////////////////////////////day3clickright          ver2
	for(var j = 1; j <=17; j++) {
		if(j<17){
			$('.cir3-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgplus=parseInt(bg)+1;
				$('.p3-'+bgplus).fadeIn(400);
				$('.p3-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cir3-'+17).click(function(event){
				$('.p3-'+1).fadeIn(400);
				$('.p3-'+17).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day3clickleft          ver2
	for(var j = 1; j <=17; j++) {
		if(j>1){
			$('.cil3-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(24, bg.length-24);
				var bgreduce=parseInt(bg)-1;
				$('.p3-'+bgreduce).fadeIn(400);
				$('.p3-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cil3-'+1).click(function(event){
				$('.p3-'+17).fadeIn(400);
				$('.p3-'+1).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day3clickexpend          ver2
	for(var j = 1; j <=17; j++) {
		$('.cie3-'+j).click(function(event){
			var bg=this.getAttribute("class");
			bg = bg.substr(26, bg.length-26);
			$('.showbig3').fadeIn(400);
			$('.sbi3-'+bg).fadeIn(400);
		});
	}
///////////////////////////////////////////////////////////////showbig3clickright          ver2
	for(var j = 1; j <=17; j++) {
		if(j<17){
			$('.sir3-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(26, bg.length-26);
				var bgplus=parseInt(bg)+1;
				$('.sbi3-'+bgplus).fadeIn(400);
				$('.sbi3-'+bg).fadeOut(400);
				$('.p3-'+bgplus).fadeIn(400);
				$('.p3-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sir3-'+j).click(function(event){
				$('.sbi3-'+1).fadeIn(400);
				$('.sbi3-'+17).fadeOut(400);
				$('.p3-'+1).fadeIn(400);
				$('.p3-'+17).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////showbig3clickleft          ver2
	for(var j = 1; j <=17; j++) {
		if(j>1){
			$('.sil3-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgreduce=parseInt(bg)-1;
				$('.sbi3-'+bgreduce).fadeIn(400);
				$('.sbi3-'+bg).fadeOut(400);
				$('.p3-'+bgreduce).fadeIn(400);
				$('.p3-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sil3-'+1).click(function(event){
				$('.sbi3-'+17).fadeIn(400);
				$('.sbi3-'+1).fadeOut(400);
				$('.p3-'+17).fadeIn(400);
				$('.p3-'+1).fadeOut(400);
			});
		}
	}


////////////////////////////////////////////////////////day4clickright
	$('.cir4-'+1).click(function(event){
			$('.p4-'+2).fadeIn(400);
			$('.p4-'+1).fadeOut(400);
	});
	$('.cir4-'+2).click(function(event){
			$('.p4-'+3).fadeIn(400);
			$('.p4-'+2).fadeOut(400);
	});
	$('.cir4-'+3).click(function(event){
			$('.p4-'+4).fadeIn(400);
			$('.p4-'+3).fadeOut(400);
	});
	$('.cir4-'+4).click(function(event){
			$('.p4-'+5).fadeIn(400);
			$('.p4-'+4).fadeOut(400);
	});
	$('.cir4-'+5).click(function(event){
			$('.p4-'+6).fadeIn(400);
			$('.p4-'+5).fadeOut(400);
	});
	$('.cir4-'+6).click(function(event){
			$('.p4-'+7).fadeIn(400);
			$('.p4-'+6).fadeOut(400);
	});
	$('.cir4-'+7).click(function(event){
			$('.p4-'+8).fadeIn(400);
			$('.p4-'+7).fadeOut(400);
	});
	$('.cir4-'+8).click(function(event){
			$('.p4-'+9).fadeIn(400);
			$('.p4-'+8).fadeOut(400);
	});
	$('.cir4-'+9).click(function(event){
			$('.p4-'+10).fadeIn(400);
			$('.p4-'+9).fadeOut(400);
	});
	$('.cir4-'+10).click(function(event){
			$('.p4-'+11).fadeIn(400);
			$('.p4-'+10).fadeOut(400);
	});
	$('.cir4-'+11).click(function(event){
			$('.p4-'+12).fadeIn(400);
			$('.p4-'+11).fadeOut(400);
	});
	$('.cir4-'+12).click(function(event){
			$('.p4-'+13).fadeIn(400);
			$('.p4-'+12).fadeOut(400);
	});
	$('.cir4-'+13).click(function(event){
			$('.p4-'+14).fadeIn(400);
			$('.p4-'+13).fadeOut(400);
	});
	$('.cir4-'+14).click(function(event){
			$('.p4-'+1).fadeIn(400);
			$('.p4-'+14).fadeOut(400);
	});
///////////////////////////////////////////////////////////showbig4clickleft
	$('.cil4-'+1).click(function(event){
			$('.p4-'+14).fadeIn(400);
			$('.p4-'+1).fadeOut(400);
	});
	$('.cil4-'+2).click(function(event){
			$('.p4-'+1).fadeIn(400);
			$('.p4-'+2).fadeOut(400);
	});
	$('.cil4-'+3).click(function(event){
			$('.p4-'+2).fadeIn(400);
			$('.p4-'+3).fadeOut(400);
	});
	$('.cil4-'+4).click(function(event){
			$('.p4-'+3).fadeIn(400);
			$('.p4-'+4).fadeOut(400);
	});
	$('.cil4-'+5).click(function(event){
			$('.p4-'+4).fadeIn(400);
			$('.p4-'+5).fadeOut(400);
	});
	$('.cil4-'+6).click(function(event){
			$('.p4-'+5).fadeIn(400);
			$('.p4-'+6).fadeOut(400);
	});
	$('.cil4-'+7).click(function(event){
			$('.p4-'+6).fadeIn(400);
			$('.p4-'+7).fadeOut(400);
	});
	$('.cil4-'+8).click(function(event){
			$('.p4-'+7).fadeIn(400);
			$('.p4-'+8).fadeOut(400);
	});
	$('.cil4-'+9).click(function(event){
			$('.p4-'+8).fadeIn(400);
			$('.p4-'+9).fadeOut(400);
	});
	$('.cil4-'+10).click(function(event){
			$('.p4-'+9).fadeIn(400);
			$('.p4-'+10).fadeOut(400);
	});
	$('.cil4-'+11).click(function(event){
			$('.p4-'+10).fadeIn(400);
			$('.p4-'+11).fadeOut(400);
	});
	$('.cil4-'+12).click(function(event){
			$('.p4-'+11).fadeIn(400);
			$('.p4-'+12).fadeOut(400);
	});
	$('.cil4-'+13).click(function(event){
			$('.p4-'+12).fadeIn(400);
			$('.p4-'+13).fadeOut(400);
	});
	$('.cil4-'+14).click(function(event){
			$('.p4-'+13).fadeIn(400);
			$('.p4-'+14).fadeOut(400);
	});
/////////////////////////////////////////////////////////////day4clickexpend
	$('.cie4-'+1).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+1).fadeIn(400);
	});
	$('.cie4-'+2).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+2).fadeIn(400);
	});
	$('.cie4-'+3).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+3).fadeIn(400);
	});
	$('.cie4-'+4).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+4).fadeIn(400);
	});
	$('.cie4-'+5).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+5).fadeIn(400);
	});
	$('.cie4-'+6).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+6).fadeIn(400);
	});
	$('.cie4-'+7).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+7).fadeIn(400);
	});
	$('.cie4-'+8).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+8).fadeIn(400);
	});
	$('.cie4-'+9).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+9).fadeIn(400);
	});
	$('.cie4-'+10).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+10).fadeIn(400);
	});
	$('.cie4-'+11).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+11).fadeIn(400);
	});
	$('.cie4-'+12).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+12).fadeIn(400);
	});
	$('.cie4-'+13).click(function(event){
		$('.showbig3').fadeIn(400);
		$('.sbi3-'+13).fadeIn(400);
	});
	$('.cie4-'+14).click(function(event){
		$('.showbig4').fadeIn(400);
		$('.sbi4-'+14).fadeIn(400);
	});
////////////////////////////////////////////////////////////showbig4clickright
	$('.sir4-'+1).click(function(event){
		$('.sbi4-'+2).fadeIn(400);
		$('.sbi4-'+1).fadeOut(400);
		$('.p4-'+2).fadeIn(400);
		$('.p4-'+1).fadeOut(400);
	});
	$('.sir4-'+2).click(function(event){
		$('.sbi4-'+3).fadeIn(400);
		$('.sbi4-'+2).fadeOut(400);
		$('.p4-'+3).fadeIn(400);
		$('.p4-'+2).fadeOut(400);
	});
	$('.sir4-'+3).click(function(event){
		$('.sbi4-'+4).fadeIn(400);
		$('.sbi4-'+3).fadeOut(400);
		$('.p4-'+4).fadeIn(400);
		$('.p4-'+3).fadeOut(400);
	});
	$('.sir4-'+4).click(function(event){
		$('.sbi4-'+5).fadeIn(400);
		$('.sbi4-'+4).fadeOut(400);
		$('.p4-'+5).fadeIn(400);
		$('.p4-'+4).fadeOut(400);
	});
	$('.sir4-'+5).click(function(event){
		$('.sbi4-'+6).fadeIn(400);
		$('.sbi4-'+5).fadeOut(400);
		$('.p4-'+6).fadeIn(400);
		$('.p4-'+5).fadeOut(400);
	});
	$('.sir4-'+6).click(function(event){
		$('.sbi4-'+7).fadeIn(400);
		$('.sbi4-'+6).fadeOut(400);
		$('.p4-'+7).fadeIn(400);
		$('.p4-'+6).fadeOut(400);
	});
	$('.sir4-'+7).click(function(event){
		$('.sbi4-'+8).fadeIn(400);
		$('.sbi4-'+7).fadeOut(400);
		$('.p4-'+8).fadeIn(400);
		$('.p4-'+7).fadeOut(400);
	});
	$('.sir4-'+8).click(function(event){
		$('.sbi4-'+9).fadeIn(400);
		$('.sbi4-'+8).fadeOut(400);
		$('.p4-'+9).fadeIn(400);
		$('.p4-'+8).fadeOut(400);
	});
	$('.sir4-'+9).click(function(event){
		$('.sbi4-'+10).fadeIn(400);
		$('.sbi4-'+9).fadeOut(400);
		$('.p4-'+10).fadeIn(400);
		$('.p4-'+9).fadeOut(400);
	});
	$('.sir4-'+10).click(function(event){
		$('.sbi4-'+11).fadeIn(400);
		$('.sbi4-'+10).fadeOut(400);
		$('.p4-'+11).fadeIn(400);
		$('.p4-'+10).fadeOut(400);
	});
	$('.sir4-'+11).click(function(event){
		$('.sbi4-'+12).fadeIn(400);
		$('.sbi4-'+11).fadeOut(400);
		$('.p4-'+12).fadeIn(400);
		$('.p4-'+11).fadeOut(400);
	});
	$('.sir4-'+12).click(function(event){
		$('.sbi4-'+13).fadeIn(400);
		$('.sbi4-'+12).fadeOut(400);
		$('.p4-'+13).fadeIn(400);
		$('.p4-'+12).fadeOut(400);
	});
	$('.sir4-'+13).click(function(event){
		$('.sbi4-'+14).fadeIn(400);
		$('.sbi4-'+13).fadeOut(400);
		$('.p4-'+14).fadeIn(400);
		$('.p4-'+13).fadeOut(400);
	});
	$('.sir4-'+14).click(function(event){
		$('.sbi4-'+1).fadeIn(400);
		$('.sbi4-'+14).fadeOut(400);
		$('.p4-'+1).fadeIn(400);
		$('.p4-'+14).fadeOut(400);
	});
//////////////////////////////////////////////////////////showbig4clickleft
	$('.sil4-'+1).click(function(event){
		$('.sbi4-'+14).fadeIn(400);
		$('.sbi4-'+1).fadeOut(400);
		$('.p4-'+14).fadeIn(400);
		$('.p4-'+1).fadeOut(400);
	});
	$('.sil4-'+2).click(function(event){
		$('.sbi4-'+1).fadeIn(400);
		$('.sbi4-'+2).fadeOut(400);
		$('.p4-'+1).fadeIn(400);
		$('.p4-'+2).fadeOut(400);
	});
	$('.sil4-'+3).click(function(event){
		$('.sbi4-'+2).fadeIn(400);
		$('.sbi4-'+3).fadeOut(400);
		$('.p4-'+2).fadeIn(400);
		$('.p4-'+3).fadeOut(400);
	});
	$('.sil4-'+4).click(function(event){
		$('.sbi4-'+3).fadeIn(400);
		$('.sbi4-'+4).fadeOut(400);
		$('.p4-'+3).fadeIn(400);
		$('.p4-'+4).fadeOut(400);
	});
	$('.sil4-'+5).click(function(event){
		$('.sbi4-'+4).fadeIn(400);
		$('.sbi4-'+5).fadeOut(400);
		$('.p4-'+4).fadeIn(400);
		$('.p4-'+5).fadeOut(400);
	});
	$('.sil4-'+6).click(function(event){
		$('.sbi4-'+5).fadeIn(400);
		$('.sbi4-'+6).fadeOut(400);
		$('.p4-'+5).fadeIn(400);
		$('.p4-'+6).fadeOut(400);
	});
	$('.sil4-'+7).click(function(event){
		$('.sbi4-'+6).fadeIn(400);
		$('.sbi4-'+7).fadeOut(400);
		$('.p4-'+6).fadeIn(400);
		$('.p4-'+7).fadeOut(400);
	});
	$('.sil4-'+8).click(function(event){
		$('.sbi4-'+7).fadeIn(400);
		$('.sbi4-'+8).fadeOut(400);
		$('.p4-'+7).fadeIn(400);
		$('.p4-'+8).fadeOut(400);
	});
	$('.sil4-'+9).click(function(event){
		$('.sbi4-'+8).fadeIn(400);
		$('.sbi4-'+9).fadeOut(400);
		$('.p4-'+8).fadeIn(400);
		$('.p4-'+9).fadeOut(400);
	});
	$('.sil4-'+10).click(function(event){
		$('.sbi4-'+9).fadeIn(400);
		$('.sbi4-'+10).fadeOut(400);
		$('.p4-'+9).fadeIn(400);
		$('.p4-'+10).fadeOut(400);
	});
	$('.sil4-'+11).click(function(event){
		$('.sbi4-'+10).fadeIn(400);
		$('.sbi4-'+11).fadeOut(400);
		$('.p4-'+10).fadeIn(400);
		$('.p4-'+11).fadeOut(400);
	});
	$('.sil4-'+12).click(function(event){
		$('.sbi4-'+11).fadeIn(400);
		$('.sbi4-'+12).fadeOut(400);
		$('.p4-'+11).fadeIn(400);
		$('.p4-'+12).fadeOut(400);
	});
	$('.sil4-'+13).click(function(event){
		$('.sbi4-'+12).fadeIn(400);
		$('.sbi4-'+13).fadeOut(400);
		$('.p4-'+12).fadeIn(400);
		$('.p4-'+13).fadeOut(400);
	});
	$('.sil4-'+14).click(function(event){
		$('.sbi4-'+13).fadeIn(400);
		$('.sbi4-'+14).fadeOut(400);
		$('.p4-'+13).fadeIn(400);
		$('.p4-'+14).fadeOut(400);
	});


/*///////////////////////////////////////////////////////////////day4clickright          ver2
	for(var j = 1; j <=14; j++) {
		if(j<14){
			$('.cir4-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgplus=parseInt(bg)+1;
				$('.p4-'+bgplus).fadeIn(400);
				$('.p4-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cir4-'+14).click(function(event){
				$('.p4-'+1).fadeIn(400);
				$('.p4-'+14).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day4clickleft          ver2
	for(var j = 1; j <=14; j++) {
		if(j>1){
			$('.cil4-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(24, bg.length-24);
				var bgreduce=parseInt(bg)-1;
				$('.p4-'+bgreduce).fadeIn(400);
				$('.p4-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cil4-'+1).click(function(event){
				$('.p4-'+14).fadeIn(400);
				$('.p4-'+1).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day4clickexpend          ver2
	for(var j = 1; j <=14; j++) {
		$('.cie4-'+j).click(function(event){
			var bg=this.getAttribute("class");
			bg = bg.substr(26, bg.length-26);
			$('.showbig4').fadeIn(400);
			$('.sbi4-'+bg).fadeIn(400);
		});
	}
///////////////////////////////////////////////////////////////showbig4clickright          ver2
	for(var j = 1; j <=14; j++) {
		if(j<14){
			$('.sir4-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(26, bg.length-26);
				var bgplus=parseInt(bg)+1;
				$('.sbi4-'+bgplus).fadeIn(400);
				$('.sbi4-'+bg).fadeOut(400);
				$('.p4-'+bgplus).fadeIn(400);
				$('.p4-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sir4-'+j).click(function(event){
				$('.sbi4-'+1).fadeIn(400);
				$('.sbi4-'+14).fadeOut(400);
				$('.p4-'+1).fadeIn(400);
				$('.p4-'+14).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////showbig4clickleft       ver2
	for(var j = 1; j <=14; j++) {
		if(j>1){
			$('.sil4-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgreduce=parseInt(bg)-1;
				$('.sbi4-'+bgreduce).fadeIn(400);
				$('.sbi4-'+bg).fadeOut(400);
				$('.p4-'+bgreduce).fadeIn(400);
				$('.p4-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sil4-'+1).click(function(event){
				$('.sbi4-'+14).fadeIn(400);
				$('.sbi4-'+1).fadeOut(400);
				$('.p4-'+14).fadeIn(400);
				$('.p4-'+1).fadeOut(400);
			});
		}
	}*/

///////////////////////////////////////////////////////////////day5clickright          ver2
	for(var j = 1; j <=10; j++) {
		if(j<10){
			$('.cir5-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgplus=parseInt(bg)+1;
				$('.p5-'+bgplus).fadeIn(400);
				$('.p5-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cir5-'+10).click(function(event){
				$('.p5-'+1).fadeIn(400);
				$('.p5-'+10).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day5clickleft          ver2
	for(var j = 1; j <=10; j++) {
		if(j>1){
			$('.cil5-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(24, bg.length-24);
				var bgreduce=parseInt(bg)-1;
				$('.p5-'+bgreduce).fadeIn(400);
				$('.p5-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cil5-'+1).click(function(event){
				$('.p5-'+10).fadeIn(400);
				$('.p5-'+1).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day5clickexpend          ver2
	for(var j = 1; j <=10; j++) {
		$('.cie5-'+j).click(function(event){
			var bg=this.getAttribute("class");
			bg = bg.substr(26, bg.length-26);
			$('.showbig5').fadeIn(400);
			$('.sbi5-'+bg).fadeIn(400);
		});
	}
///////////////////////////////////////////////////////////////showbig5clickright          ver2
	for(var j = 1; j <=10; j++) {
		if(j<10){
			$('.sir5-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(26, bg.length-26);
				var bgplus=parseInt(bg)+1;
				$('.sbi5-'+bgplus).fadeIn(400);
				$('.sbi5-'+bg).fadeOut(400);
				$('.p5-'+bgplus).fadeIn(400);
				$('.p5-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sir5-'+j).click(function(event){
				$('.sbi5-'+1).fadeIn(400);
				$('.sbi5-'+10).fadeOut(400);
				$('.p5-'+1).fadeIn(400);
				$('.p5-'+10).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////showbig5clickleft          ver2
	for(var j = 1; j <=10; j++) {
		if(j>1){
			$('.sil5-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgreduce=parseInt(bg)-1;
				$('.sbi5-'+bgreduce).fadeIn(400);
				$('.sbi5-'+bg).fadeOut(400);
				$('.p5-'+bgreduce).fadeIn(400);
				$('.p5-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sil5-'+1).click(function(event){
				$('.sbi5-'+10).fadeIn(400);
				$('.sbi5-'+1).fadeOut(400);
				$('.p5-'+10).fadeIn(400);
				$('.p5-'+1).fadeOut(400);
			});
		}
	}

///////////////////////////////////////////////////////////////day6clickright          ver2
	for(var j = 1; j <=3; j++) {
		if(j<3){
			$('.cir6-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgplus=parseInt(bg)+1;
				$('.p6-'+bgplus).fadeIn(400);
				$('.p6-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cir6-'+3).click(function(event){
				$('.p6-'+1).fadeIn(400);
				$('.p6-'+3).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day6clickleft          ver2
	for(var j = 1; j <=3; j++) {
		if(j>1){
			$('.cil6-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(24, bg.length-24);
				var bgreduce=parseInt(bg)-1;
				$('.p6-'+bgreduce).fadeIn(400);
				$('.p6-'+bg).fadeOut(400);
			});
		}
		else{
			$('.cil6-'+1).click(function(event){
				$('.p6-'+3).fadeIn(400);
				$('.p6-'+1).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////day6clickexpend          ver2
	for(var j = 1; j <=3; j++) {
		$('.cie6-'+j).click(function(event){
			var bg=this.getAttribute("class");
			bg = bg.substr(26, bg.length-26);
			$('.showbig6').fadeIn(400);
			$('.sbi6-'+bg).fadeIn(400);
		});
	}
///////////////////////////////////////////////////////////////showbig6clickright          ver2
	for(var j = 1; j <=3; j++) {
		if(j<3){
			$('.sir6-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(26, bg.length-26);
				var bgplus=parseInt(bg)+1;
				$('.sbi6-'+bgplus).fadeIn(400);
				$('.sbi6-'+bg).fadeOut(400);
				$('.p6-'+bgplus).fadeIn(400);
				$('.p6-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sir6-'+j).click(function(event){
				$('.sbi6-'+1).fadeIn(400);
				$('.sbi6-'+3).fadeOut(400);
				$('.p6-'+1).fadeIn(400);
				$('.p6-'+3).fadeOut(400);
			});
		}
	}
///////////////////////////////////////////////////////////////showbig6clickleft          ver2
	for(var j = 1; j <=3; j++) {
		if(j>1){
			$('.sil6-'+j).click(function(event){
				var bg=this.getAttribute("class");
				bg = bg.substr(25, bg.length-25);
				var bgreduce=parseInt(bg)-1;
				$('.sbi6-'+bgreduce).fadeIn(400);
				$('.sbi6-'+bg).fadeOut(400);
				$('.p6-'+bgreduce).fadeIn(400);
				$('.p6-'+bg).fadeOut(400);
			});
		}
		else{
			$('.sil6-'+1).click(function(event){
				$('.sbi6-'+3).fadeIn(400);
				$('.sbi6-'+1).fadeOut(400);
				$('.p6-'+3).fadeIn(400);
				$('.p6-'+1).fadeOut(400);
			});
		}
	}


/////////////////////////////////////////////////////////////////card
	$('.toggle').click(function(){
  		$('.card.alt').addClass('active');
	});
	$('.close').click(function(){
  		$('.card.alt').removeClass('active');
	});


////////////////////////////////////////////////////////////////textareabar
	$('.bar2').hide();
	$('.message').focus(function(){
  		$('.bar2').fadeIn(100);
  		$('.mbar').fadeOut(100);
	});
	$('.message').blur(function(){
  		if($('textarea').val()!=""){
  			$('.mbar').hide();
  			$('.bar2').show();
  		}
  		else{
  			$('.mbar').show();
  			$('.bar2').hide();
  		}
	});
//////////////////////////////////////////////////////////////button 	
	$('.formbutton').click(function(){
		if($('textarea').val()!=""&&$('.username').val()!=""){
  			alert("送出成功");
  		}
	});

	

});