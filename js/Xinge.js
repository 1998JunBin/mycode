var audio = document.getElementById("audio");
var stArt = document.getElementById("playbar_start");
var all_time1 = $('#all_time');
var now_time1 = $('#now_time');
var all_volume = $('#all_volume');
var now_volume = $('#now_volume');
var signername = document.getElementsByClassName("signer");
var musicname = $('.musicname');
var pic = $('.pic');
var playbar_next = $('.playbar_next');
var playbar_before = $('.playbar_before');
var up = document.getElementById("up1")
var down = document.getElementById("down1")
var dahezi = document.getElementById("dahezi")
var player = document.getElementById("player")
function time(){
	//进度条（只改变路程和速度）
	var all_time = parseInt(audio.duration);
	//时间（进度总长度）
	var now_time = parseInt(audio.currentTime);
	//速度（每秒走过的进度）
	var music_frame = 400;
	//路程（改变后的进度总长度）
	document.getElementById("all_time").style.width = music_frame+'px';
	document.getElementById("now_time").style.width = now_time * music_frame/all_time + 'px';

		
	//如果播放停止，则自动播放下一首
	if(audio.ended){
		if(Cont<11){
		   next1(Cont);
		   Cont=Cont+1;
		}else if(Cont==11){
		 var pla = dahezi.children[0].children[2].children[1];
	     musicname[0].innerHTML = pla.nextElementSibling.innerHTML;
         signername[0].innerHTML = pla.nextElementSibling.nextElementSibling.innerHTML;
         audio.src = pla.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
         var picc = pla.previousElementSibling;
         var picc_src = $("img",picc).prop("src")
         pic[0].src = picc_src;
	     start();
	     Cont = 2;
		}else if(Cont==31){
			var pla = dahezi.children[1].children[8].children[1];
	        musicname[0].innerHTML = pla.nextElementSibling.innerHTML;
            signername[0].innerHTML = pla.nextElementSibling.nextElementSibling.innerHTML;
            audio.src = pla.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
            var picc = pla.previousElementSibling;
            var picc_src = $("img",picc).prop("src")
            pic[0].src = picc_src;
		    start();
		    Cont=12;
		}else{
			next2(Cont)
			Cont = Cont+1;
		}
	}
	// //下面设置让歌手名与歌曲名之间的距离为定值
    // var signa_dis = musicname[0].offsetLeft + musicname[0].offsetWidth;
    // signername[0].style.left = signa_dis + 10 + 'px';
	//时间数据
	var m1 = parseInt(all_time/60);
	var s1 = parseInt(all_time%60);
	if(m1<10){m1 = '0'+m1};
	if(s1<10){s1='0'+s1};
	var m2 = parseInt(now_time/60);
	var s2 = parseInt(now_time%60);
	if(m2<10){m2 = '0'+m2};
	if(s2<10){s2 = '0'+s2};
	document.getElementById("progress").innerHTML = m2+':'+s2+'/'+m1+':'+s1;
}

audio.oncanplay=function(){time()}

function start(){
	if(audio.paused){
		audio.play();
		setInterval(function(){time()},100)
		stArt.src="img/playbar_pause.png";
		
	}else{
		audio.pause();
		stArt.src="img/playbar_start.png";
	}
	
}

//单击进度条更改进度
all_time1.on('click',function(ev){
	
	//获取百分比
	var ratio = getRatio(ev);
	now_time1.css({'width':ratio*100+'%'});
	
	//更改音频进度
	audio.currentTime = audio.duration*ratio;
	
})

//定义getRatio函数来获取百分比
function getRatio(ev){
	//总进度条的实际宽度

	var totalWidth = all_time1[0].offsetWidth;
	

	//总进度条的X坐标
	var totalX = all_time1.offset().left;
	
	//鼠标的X坐标
	var mouseX = ev.clientX;

	//求出百分比
	var ratio = (mouseX-totalX)/totalWidth;
	
	return ratio;
}
//以下是对音量的控制
//先给一个音量的初始默认值
audio.volume=0.5;

//单击音量条更改进度
all_volume.on('click',function(vv){
	//获取百分比
	var ratio2 = getRatio2(vv);
	//改变音量条长度
	now_volume.css({'width':ratio2*100+'%'});
	//改变音量大小
	audio.volume=ratio2;
})

//定义getRatio2函数来获取百分比
function getRatio2(vv){
	//总进度条的实际宽度
	var  totalWidth2 = all_volume[0].offsetWidth;
	
	//总进度条的X坐标
	var totalX2 = all_volume.offset().left;

	//鼠标的X坐标
	var mouseX2 = vv.clientX;

	//求出百分比
	var ratio2 = (mouseX2-totalX2)/totalWidth2;

	return ratio2;
}
//以上是播放器的js

// function addClass(obj, cls){
// 	var obj_class = obj.className,//获取 class 内容.
// 	blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
// 	added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
// 	obj.className = added;//替换原来的 class.
// }

var Cont = 0;

//一下是点击播放按钮后能够进行播放
for(i=2;i<12;i++){
	var pla = dahezi.children[0].children[i].children[1];
	pla.onclick = boh;
	function boh(){
		musicname[0].innerHTML = this.nextElementSibling.innerHTML;
	    signername[0].innerHTML = this.nextElementSibling.nextElementSibling.innerHTML;
		audio.src = this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
		var picc = this.previousElementSibling;
		var picc_src = $("img",picc).prop("src")
		pic[0].src = picc_src;
		start();
		var k = 0 ;
		var p = this.parentNode;
		while((p=p.previousElementSibling)!=null){k++}
		Cont = k;
		console.log(Cont);
        player.style.display='block'
    }
	
}


for(i=8;i<28;i++){
    var pla = dahezi.children[1].children[i].children[1];
	pla.onclick = boh;
	function boh(){
        musicname[0].innerHTML = this.nextElementSibling.innerHTML;
        signername[0].innerHTML = this.nextElementSibling.nextElementSibling.innerHTML;
        audio.src = this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
        var picc = this.previousElementSibling;
        var picc_src = $("img",picc).prop("src")
        pic[0].src = picc_src;
		start();
		var k = 0 ;
		var p = this.parentNode;
		while((p=p.previousElementSibling)!=null){k++}
		Cont = k;
		Cont = Cont+4;
		console.log(Cont);
        
    }
    

}

//以下是上一首和下一首的功能
playbar_next.on('click',function(){
	if(Cont == 2){
	   next1(Cont);
	   Cont = Cont+1;
	}else if(Cont == 3){
	   next1(Cont);
	   Cont = Cont+1;
	}else if(Cont ==4){
	   next1(Cont);
	   Cont = Cont+1;
	}else if(Cont == 5){
	   next1(Cont);
	   Cont = Cont+1;
	}else if(Cont == 6){
	   next1(Cont);
	   Cont = Cont+1;
	}else if(Cont == 7){
		next1(Cont);
		Cont = Cont+1;
	 }else if(Cont == 8){
		next1(Cont);
		Cont = Cont+1;
	 }else if(Cont == 9){
		next1(Cont);
		Cont = Cont+1;
	 }else if(Cont == 10){
		next1(Cont);
		Cont = Cont+1;
	 }else if(Cont == 11){
		var pla = dahezi.children[0].children[2].children[1];
	    musicname[0].innerHTML = pla.nextElementSibling.innerHTML;
        signername[0].innerHTML = pla.nextElementSibling.nextElementSibling.innerHTML;
        audio.src = pla.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
        var picc = pla.previousElementSibling;
        var picc_src = $("img",picc).prop("src")
        pic[0].src = picc_src;
	    start();
	    Cont = 2;
	
	 }else if(Cont == 12){
		 next2(Cont);
		 Cont=Cont+1;
	 }else if(Cont == 13){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 14){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 15){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 16){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 17){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 18){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 19){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 20){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 21){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 22){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 23){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 24){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 25){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 26){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont ==27){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 28){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 29){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 30){
		next2(Cont);
		Cont=Cont+1;
	}else if(Cont == 31){
		var pla = dahezi.children[1].children[8].children[1];
	    musicname[0].innerHTML = pla.nextElementSibling.innerHTML;
        signername[0].innerHTML = pla.nextElementSibling.nextElementSibling.innerHTML;
        audio.src = pla.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
        var picc = pla.previousElementSibling;
        var picc_src = $("img",picc).prop("src")
        pic[0].src = picc_src;
		start();
		Cont=12;
	}
	
	
})

playbar_before.on('click',function(){
	if(Cont == 2){
	var pla = dahezi.children[0].children[11].children[1];
	musicname[0].innerHTML = pla.nextElementSibling.innerHTML;
    signername[0].innerHTML = pla.nextElementSibling.nextElementSibling.innerHTML;
    audio.src = pla.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
    var picc = pla.previousElementSibling;
    var picc_src = $("img",picc).prop("src")
    pic[0].src = picc_src;
	start();
	Cont = 11;
	}else if(Cont ==3){
		last1(Cont)
		Cont=Cont-1;
	}else if(Cont ==4){
		last1(Cont)
		Cont=Cont-1;
	}else if(Cont ==5){
		last1(Cont)
		Cont=Cont-1;
	}else if(Cont ==6){
		last1(Cont)
		Cont=Cont-1;
	}else if(Cont ==7){
		last1(Cont)
		Cont=Cont-1;
	}else if(Cont ==8){
		last1(Cont)
		Cont=Cont-1;
	}else if(Cont ==9){
		last1(Cont)
		Cont=Cont-1;
	}else if(Cont ==10){
		last1(Cont)
		Cont=Cont-1;
	}else if(Cont ==11){
		last1(Cont)
		Cont=Cont-1;
	}else if(Cont ==12){
	var pla = dahezi.children[1].children[27].children[1];
	musicname[0].innerHTML = pla.nextElementSibling.innerHTML;
    signername[0].innerHTML = pla.nextElementSibling.nextElementSibling.innerHTML;
    audio.src = pla.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
    var picc = pla.previousElementSibling;
    var picc_src = $("img",picc).prop("src")
    pic[0].src = picc_src;
	start();
	}else if(Cont ==13){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==14){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==15){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==16){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==17){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==18){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==19){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==20){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==21){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==22){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==23){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==24){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==25){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==26){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==27){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==28){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==29){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==30){
		last2(Cont);
		Cont = Cont-1;
	}else if(Cont ==31){
		last2(Cont);
		Cont = Cont-1;
	}
})

function next1(cont){
	var pla = dahezi.children[0].children[cont+1].children[1];
	musicname[0].innerHTML = pla.nextElementSibling.innerHTML;
    signername[0].innerHTML = pla.nextElementSibling.nextElementSibling.innerHTML;
    audio.src = pla.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
    var picc = pla.previousElementSibling;
    var picc_src = $("img",picc).prop("src")
    pic[0].src = picc_src;
	start();
}
function next2(cont){
	var pla = dahezi.children[1].children[cont-3].children[1];
	musicname[0].innerHTML = pla.nextElementSibling.innerHTML;
    signername[0].innerHTML = pla.nextElementSibling.nextElementSibling.innerHTML;
    audio.src = pla.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
    var picc = pla.previousElementSibling;
    var picc_src = $("img",picc).prop("src")
    pic[0].src = picc_src;
	start();
}

function last1(cont){
	var pla = dahezi.children[0].children[cont-1].children[1];
	musicname[0].innerHTML = pla.nextElementSibling.innerHTML;
    signername[0].innerHTML = pla.nextElementSibling.nextElementSibling.innerHTML;
    audio.src = pla.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
    var picc = pla.previousElementSibling;
    var picc_src = $("img",picc).prop("src")
    pic[0].src = picc_src;
	start();
}

function last2(cont){
	var pla = dahezi.children[1].children[cont-5].children[1];
	musicname[0].innerHTML = pla.nextElementSibling.innerHTML;
    signername[0].innerHTML = pla.nextElementSibling.nextElementSibling.innerHTML;
    audio.src = pla.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
    var picc = pla.previousElementSibling;
    var picc_src = $("img",picc).prop("src")
    pic[0].src = picc_src;
	start();
}