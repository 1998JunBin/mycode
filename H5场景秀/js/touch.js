var conter=$('.page').length;//获取page页数量

var nowPage=0;//当前page下标

var startY , moveY , endY;//触摸位置：初始 移动距离  结束

//当前页 以外所有页面先隐藏
$('.page').eq(0).siblings().addClass('hidden');

console.log(11);

//给所有page页 绑定touch事件（开始，移动，结束） e=事件源 
$('.page').on('touchstart touchmove touchend',function(e){
		//判断触发 以上某个事件
		switch(e.type){
			case 'touchstart':
				// console.log(e);
				//获取初始 Y轴
				startY=e.originalEvent.touches[0].clientY;
				console.log(startY)
				break;
			case 'touchmove':
				
				//获取结束时 Y轴
				endY=e.originalEvent.touches[0].clientY;
				console.log(endY)
				break;	
			case 'touchend':
				//判断 初始值 - 结束值 >0 向上   else < 0 向下
				moveY=startY-endY;
				console.log(moveY);
				if(moveY>0){
					//最后一页不能上翻
					if(nowPage==conter-1) return;
					//动态添加的类名 调用c3动画
					//条件成立给当前page页添加top类名
					$(this).addClass('top')
							//当前页的下一页添加next类名
						    .next().addClass('next').removeClass('hidden');
					//动画结束 清除多余类名。
					$(this).on('webkitAnimationEnd',function(){
						$(this).removeClass('top').addClass('hidden')
								.next().removeClass('next');
						$(this).off('webkitAnimationEnd');		
					})		
					//更新下标
					nowPage++;
				}else if(moveY<0){
					//第一页不能下翻
					if(nowPage==0) return;
					//动态添加的类名 调用c3动画
					//条件成立给当前page页添加down类名
					$(this).addClass('down')
								//当前页的上一页添加prev类名
								.prev().removeClass('hidden').addClass('prev');
					//动画结束 清除多余类名
					$(this).on('webkitAnimationEnd',function(){
						$(this).removeClass('down').addClass('hidden')
											.prev().removeClass('prev');
						$(this).off('webkitAnimationEnd');
					})
					//更新下标
					nowPage--;
				}
				break;	
		}	
})

// $('.p1_bg2').on('webkitAnimationEnd',function(){
// 	$(this).addClass('hidden');
// })



$('.p1_txt2>p').click(function(){
	console.log(1111);
	if($(this).text()=='我喜欢你'){
		$(this).text('我不喜欢你')
		$('.p1_lg2').show(1000);
	}else{
		$(this).text('我喜欢你')
		$('.p1_lg2').hide(1000);
	}
	
})