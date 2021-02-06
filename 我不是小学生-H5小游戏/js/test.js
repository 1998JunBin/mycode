var conter=$('.page').length;//获取page页数量
var nowPage=1;//当前page下标
var i=10;
var time;
var scale1={scale:0} //定义一个scale来加分
$('.page').eq(0).siblings().addClass('hidden');//当前页以外所有页面先隐藏
// if (nowPage==2){
// 	time=setInterval(function(){
// 		// if (nowPage==1){
// 		// 	clearInterval(time);
// 		// }
// 		i--;
// 		console.log(i);
// 		$('.xiaBu').css({
// 			width:i+'%'
// 		})
// 		if (i==0){
// 			clearInterval(time);
// 		}
// 	},1000)
// }

$('.jiShiQi>h3').text(i)

//当我点击书本，让他的父元素就是page1添加一个类名叫做top，让他的父元素的下一个兄弟page2移除类名hidden，并添加类名next
//top会执行淡出的top动画；next会执行淡入的动画
$('.p1_bj6').click(function(){
	console.log(1111);
	$(this).parent().addClass('top');
	$(this).parent().next().removeClass('hidden').addClass('next');
	nowPage++;
	console.log(nowPage)
})
$('.p1_bj6').on('webkitAnimationEnd',function(){
			$(this).addClass('p1_bj6_scale');
			$(this).off('webkitAnimationEnd');	
})

//以下是计时器的换页效果
$('.beiJing1').on('webkitAnimationEnd',function(){
	nowPage++;
	var count=nowPage+1;
	console.log(nowPage)
	$('.jiShiQi').removeClass('hidden').addClass('next');
	$('.zhong').removeClass('a');
	clearInterval(time)
	var i=10;
	// $('.jiShiQi>h3').text(i);
	time=setInterval(function(){
		if (i==4){
			$('.zhong').addClass('a');
		}
		if (i==0){
			clearInterval(time);
			$('.jiShiQi').addClass('hidden');
			$('.page'+nowPage).addClass('top').removeClass('next');
			$('.page'+count).removeClass('hidden').addClass('next');
		}
		$('.jiShiQi>h3').text(i);
		i--;
		// $('.jiShiQi>h3').text(i);
	},1000)
})


// 翻页的交互代码：给每一个选项：xuanXiang1、2、3、4另外添加一个类名fanYe，当点击这个类名时，找到选项的父元素（选项区域）的父元素（page1），给page添加top的类名
$('.fanYe').click(function(){
	$('.jiShiQi').removeClass('next').addClass('hidden');
	clearInterval(time);
	var i=10; 
	console.log(11);
	$(this).parent().parent().removeClass('next').addClass('top');
	$(this).parent().parent().next().removeClass('hidden').addClass('next');
	$('.beiJing3').on('webkitAnimationEnd',function(){
				$('.jiShiQi').removeClass('hidden');
				$(this).off('webkitAnimationEnd');	
	})
	time = setInterval(function(){
		
		if (i==0){
			// $(this).parent().parent().removeClass('next').addClass('top');
			// $(this).parent().parent().next().removeClass('hidden').addClass('next');
			console.log('123')
			clearInterval(time);
			
		}
		// else if(i==3){console.log('zhong');}
		console.log(i)
		// if (i==3){
			
		// 	$('.zhong').addClass('fangDa');
		// }
		$('.jiShiQi>h3').text(i)
		i--;
		if (i==3){
			$('.jiShiQi>img').addClass('a');
		}
	},1000)
	
	
})
//玩家点击选项后，在正确的选项出现打勾，在错误的选项出现打叉
//判断选项正确与否的交互：给正确的选项（我在选项一）添加一个类名：rightOption，点击这个选项后，给图片（true）添加一个类名（showIt），通过showIt把勾勾展现出来
//因为每一次正确选项的位置都不一样，所以这里类名的添加要各自完成：而且每一次这打勾和打叉的图片位置要各自完成，我放在了css文件的最后
$('.rightOptionp2').click(function(){
	console.log(11);
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p2_true').addClass('showIt')
	$('.p2_true').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
	scale1.scale++;
	$('.scale').text(scale1.scale)   //将最后得分更新
	if(scale1.scale<=2){
			$('.pic').attr('src','img/pic1.png')     //如果回答正确数小于两个，就用第一张图片
	}
	else if(scale1.scale>=3&&scale1.scale<=5)        //如果回答正确数在3-5个，就用第二张图片
	{
			$('.pic').attr('src','img/pic2.png')
	}
	else if(scale1.scale>=6&&scale1.scale<=8)        //如果回答正确数在6-8个，就用第三张图片
	{
			$('.pic').attr('src','img/pic3.png')
	}
	else if(scale1.scale>=9&&scale1.scale<=11)       //如果回答正确数在9-11个，就用第四张图片
	{
			$('.pic').attr('src','img/pic4.png')
	}
	else{$('.pic').attr('src','img/pic5.png')}      //如果全部回答正确，就用第五张图片
	
})
$('.rightOptionp3').click(function(){
	console.log(11);
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p3_true').addClass('showIt')
	$('.p3_true').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
	scale1.scale++;
	$('.scale').text(scale1.scale)
	if(scale1.scale<=2){
			$('.pic').attr('src','img/pic1.png')
	}
	else if(scale1.scale>=3&&scale1.scale<=5)
	{
			$('.pic').attr('src','img/pic2.png')
	}
	else if(scale1.scale>=6&&scale1.scale<=8)
	{
			$('.pic').attr('src','img/pic3.png')
	}
	else if(scale1.scale>=9&&scale1.scale<=11)
	{
			$('.pic').attr('src','img/pic4.png')
	}
	else{$('.pic').attr('src','img/pic5.png')}
	
})
$('.rightOptionp4').click(function(){
	console.log(11);
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p4_true').addClass('showIt')
	$('.p4_true').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
	scale1.scale++;
	$('.scale').text(scale1.scale)
	if(scale1.scale<=2){
			$('.pic').attr('src','img/pic1.png')
	}
	else if(scale1.scale>=3&&scale1.scale<=5)
	{
			$('.pic').attr('src','img/pic2.png')
	}
	else if(scale1.scale>=6&&scale1.scale<=8)
	{
			$('.pic').attr('src','img/pic3.png')
	}
	else if(scale1.scale>=9&&scale1.scale<=11)
	{
			$('.pic').attr('src','img/pic4.png')
	}
	else{$('.pic').attr('src','img/pic5.png')}
	
})
$('.rightOptionp5').click(function(){
	console.log(11);
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p5_true').addClass('showIt')
	$('.p5_true').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
	scale1.scale++;
	$('.scale').text(scale1.scale)
	if(scale1.scale<=2){
			$('.pic').attr('src','img/pic1.png')
	}
	else if(scale1.scale>=3&&scale1.scale<=5)
	{
			$('.pic').attr('src','img/pic2.png')
	}
	else if(scale1.scale>=6&&scale1.scale<=8)
	{
			$('.pic').attr('src','img/pic3.png')
	}
	else if(scale1.scale>=9&&scale1.scale<=11)
	{
			$('.pic').attr('src','img/pic4.png')
	}
	else{$('.pic').attr('src','img/pic5.png')}
	
})
$('.rightOptionp6').click(function(){
	console.log(11);
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p6_true').addClass('showIt')
	$('.p6_true').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
	scale1.scale++;
	$('.scale').text(scale1.scale)
	if(scale1.scale<=2){
			$('.pic').attr('src','img/pic1.png')
	}
	else if(scale1.scale>=3&&scale1.scale<=5)
	{
			$('.pic').attr('src','img/pic2.png')
	}
	else if(scale1.scale>=6&&scale1.scale<=8)
	{
			$('.pic').attr('src','img/pic3.png')
	}
	else if(scale1.scale>=9&&scale1.scale<=11)
	{
			$('.pic').attr('src','img/pic4.png')
	}
	else{$('.pic').attr('src','img/pic5.png')}
	
})
$('.rightOptionp7').click(function(){
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p7_true').addClass('showIt')
	$('.p7_true').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
	scale1.scale++;
	$('.scale').text(scale1.scale)
	if(scale1.scale<=2){
			$('.pic').attr('src','img/pic1.png')
	}
	else if(scale1.scale>=3&&scale1.scale<=5)
	{
			$('.pic').attr('src','img/pic2.png')
	}
	else if(scale1.scale>=6&&scale1.scale<=8)
	{
			$('.pic').attr('src','img/pic3.png')
	}
	else if(scale1.scale>=9&&scale1.scale<=11)
	{
			$('.pic').attr('src','img/pic4.png')
	}
	else{$('.pic').attr('src','img/pic5.png')}
	
})
$('.rightOptionp8').click(function(){
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p8_true').addClass('showIt')
	$('.p8_true').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
	scale1.scale++;
	$('.scale').text(scale1.scale)
	if(scale1.scale<=2){
			$('.pic').attr('src','img/pic1.png')
	}
	else if(scale1.scale>=3&&scale1.scale<=5)
	{
			$('.pic').attr('src','img/pic2.png')
	}
	else if(scale1.scale>=6&&scale1.scale<=8)
	{
			$('.pic').attr('src','img/pic3.png')
	}
	else if(scale1.scale>=9&&scale1.scale<=11)
	{
			$('.pic').attr('src','img/pic4.png')
	}
	else{$('.pic').attr('src','img/pic5.png')}
	
})
$('.rightOptionp9').click(function(){
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p9_true').addClass('showIt')
	$('.p9_true').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
	scale1.scale++;
	$('.scale').text(scale1.scale)
	if(scale1.scale<=2){
			$('.pic').attr('src','img/pic1.png')
	}
	else if(scale1.scale>=3&&scale1.scale<=5)
	{
			$('.pic').attr('src','img/pic2.png')
	}
	else if(scale1.scale>=6&&scale1.scale<=8)
	{
			$('.pic').attr('src','img/pic3.png')
	}
	else if(scale1.scale>=9&&scale1.scale<=11)
	{
			$('.pic').attr('src','img/pic4.png')
	}
	else{$('.pic').attr('src','img/pic5.png')}
	
})
$('.rightOptionp10').click(function(){
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p10_true').addClass('showIt')
	$('.p10_true').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
	scale1.scale++;
	$('.scale').text(scale1.scale)
	if(scale1.scale<=2){
			$('.pic').attr('src','img/pic1.png')
	}
	else if(scale1.scale>=3&&scale1.scale<=5)
	{
			$('.pic').attr('src','img/pic2.png')
	}
	else if(scale1.scale>=6&&scale1.scale<=8)
	{
			$('.pic').attr('src','img/pic3.png')
	}
	else if(scale1.scale>=9&&scale1.scale<=11)
	{
			$('.pic').attr('src','img/pic4.png')
	}
	else{$('.pic').attr('src','img/pic5.png')}
	
})

$('.rightOptionp11').click(function(){
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p11_true').addClass('showIt')
	$('.p11_true').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
	scale1.scale++;
	$('.scale').text(scale1.scale)
	if(scale1.scale<=2){
			$('.pic').attr('src','img/pic1.png')
	}
	else if(scale1.scale>=3&&scale1.scale<=5)
	{
			$('.pic').attr('src','img/pic2.png')
	}
	else if(scale1.scale>=6&&scale1.scale<=8)
	{
			$('.pic').attr('src','img/pic3.png')
	}
	else if(scale1.scale>=9&&scale1.scale<=11)
	{
			$('.pic').attr('src','img/pic4.png')
	}
	else{$('.pic').attr('src','img/pic5.png')}
	
})

$('.rightOptionp12').click(function(){
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p12_true').addClass('showIt')
	$('.p12_true').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
	scale1.scale++;
	$('.scale').text(scale1.scale)
	if(scale1.scale<=2){
			$('.pic').attr('src','img/pic1.png')
	}
	else if(scale1.scale>=3&&scale1.scale<=5)
	{
			$('.pic').attr('src','img/pic2.png')
	}
	else if(scale1.scale>=6&&scale1.scale<=8)
	{
			$('.pic').attr('src','img/pic3.png')
	}
	else if(scale1.scale>=9&&scale1.scale<=11)
	{
			$('.pic').attr('src','img/pic4.png')
	}
	else{$('.pic').attr('src','img/pic5.png')}
	
})
$('.rightOptionp13').click(function(){
	$('#musicright').attr('src','img/回答正确.mp3');
	$('.p13_true').addClass('showIt')
	$('.p13_true').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
     scale1.scale++;
	 $('.scale').text(scale1.scale)
	 if(scale1.scale<=2){
	 		$('.pic').attr('src','img/pic1.png')
	 }
	 else if(scale1.scale>=3&&scale1.scale<=5)
	 {
	 		$('.pic').attr('src','img/pic2.png')
	 }
	 else if(scale1.scale>=6&&scale1.scale<=8)
	 {
	 		$('.pic').attr('src','img/pic3.png')
	 }
	 else if(scale1.scale>=9&&scale1.scale<=11)
	 {
	 		$('.pic').attr('src','img/pic4.png')
	 }
	 else{$('.pic').attr('src','img/pic5.png')}
	 
})

function refresh(){
	window.location.reload()
	}

$('.again').click(function(){
	
	 refresh();
	 
})																											// right
$('.falseOption1p2').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p2_false1').addClass('showIt')
	$('.p2_false1').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption1p3').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p3_false1').addClass('showIt')
	$('.p3_false1').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption1p4').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p4_false1').addClass('showIt')
	$('.p4_false1').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption1p5').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p5_false1').addClass('showIt')
	$('.p5_false1').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption1p6').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p6_false1').addClass('showIt')
	$('.p6_false1').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption1p7').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p7_false1').addClass('showIt')
	$('.p7_false1').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption1p8').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p8_false1').addClass('showIt')
	$('.p8_false1').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption1p9').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p9_false1').addClass('showIt')
	$('.p9_false1').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption1p10').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p10_false1').addClass('showIt')
	$('.p10_false1').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption1p11').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p11_false1').addClass('showIt')
	$('.p11_false1').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})

$('.falseOption1p12').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p12_false1').addClass('showIt')
	$('.p12_false1').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption1p13').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p13_false1').addClass('showIt')
	$('.p13_false1').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})	
	
																									// falseOption1p10
$('.falseOption2p2').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p2_false2').addClass('showIt')
	$('.p2_false2').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption2p3').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p3_false2').addClass('showIt')
	$('.p3_false2').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption2p4').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p4_false2').addClass('showIt')
	$('.p4_false2').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption2p5').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p5_false2').addClass('showIt')
	$('.p5_false2').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption2p6').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p6_false2').addClass('showIt')
	$('.p6_false2').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption2p7').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p7_false2').addClass('showIt')
	$('.p7_false2').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption2p8').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p8_false2').addClass('showIt')
	$('.p8_false2').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption2p9').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p9_false2').addClass('showIt')
	$('.p9_false2').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption2p10').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p10_false2').addClass('showIt')
	$('.p10_false2').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption2p11').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p11_false2').addClass('showIt')
	$('.p11_false2').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption2p12').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p12_false2').addClass('showIt')
	$('.p12_false2').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption2p13').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p13_false2').addClass('showIt')
	$('.p13_false2').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})



																						// falseOption2
$('.falseOption3p2').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p2_false3').addClass('showIt')
	$('.p2_false3').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption3p3').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p3_false3').addClass('showIt')
	$('.p3_false3').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption3p4').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p4_false3').addClass('showIt')
	$('.p4_false3').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption3p5').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p5_false3').addClass('showIt')
	$('.p5_false3').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption3p6').click(function(){
	console.log(11);
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p6_false3').addClass('showIt')
	$('.p6_false3').on('webkitAnimationEnd',function(){
					$(this).removeClass('showIt');
					$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption3p7').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p7_false3').addClass('showIt')
	$('.p7_false3').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption3p8').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p8_false3').addClass('showIt')
	$('.p8_false3').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption3p9').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p9_false3').addClass('showIt')
	$('.p9_false3').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
// $('.rightOptionp10').click(function(){
// 	$('#musicright').attr('src','img/回答正确.mp3');
// 	$('.p10_true').addClass('showIt')
// 	$('.p10_true').on('webkitAnimationEnd',function(){
// 		$(this).removeClass('showIt');
// 		$(this).off('webkitAnimationEnd');	
// 	})
// })
$('.falseOption3p10').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p10_false3').addClass('showIt')
	$('.p10_false3').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})

$('.falseOption3p11').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p11_false3').addClass('showIt')
	$('.p11_false3').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})

$('.falseOption3p12').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p12_false3').addClass('showIt')
	$('.p12_false3').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})
$('.falseOption3p13').click(function(){
	$('#musicfalse').attr('src','img/回答错误.mp3');
	$('.p13_false3').addClass('showIt')
	$('.p13_false3').on('webkitAnimationEnd',function(){
		$(this).removeClass('showIt');
		$(this).off('webkitAnimationEnd');	
	})
})

//计分
$('.scale').text(scale1.scale)	
if(scale1.scale<=2){
		$('.pic').attr('src','img/pic1.png')
}
else if(scale1.scale>=3&&scale1.scale<=5)
{
		$('.pic').attr('src','img/pic2.png')
}
else if(scale1.scale>=6&&scale1.scale<=8)
{
		$('.pic').attr('src','img/pic3.png')
}
else if(scale1.scale>=9&&scale1.scale<=11)
{
		$('.pic').attr('src','img/pic4.png')
}
else{$('.pic').attr('src','img/pic5.png')}


																								// 计时器

