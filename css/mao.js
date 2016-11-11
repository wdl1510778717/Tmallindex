window.onload=function(){
	var cons=document.getElementsByClassName("con");
	var asks=document.getElementsByClassName("ask");
		for (var i = 0; i < cons.length; i++) {
			cons[i].index=i;
			cons[i].onmouseover=function(){
				asks[this.index].style.opacity="0.6";}
			cons[i].onmouseout=function(){
				asks[this.index].style.opacity="0";
			}
		}

	//banner
	var banner_btns=document.getElementsByClassName("btn")
	var banner_imgs=document.getElementsByClassName("banner-item")
	var banner_boxs=document.getElementsByClassName("banner-box")[0]
	var banner_color=["#1969A6","#000","#2CB1F6","#FFEF01","#D9123D"]
	for (var i = 0; i < banner_btns.length; i++) {
		banner_btns[i].index=i;
		banner_btns[i].onmouseover=function(){
			num=this.index;     //保留位置重新开始
			for (var i = 0; i < banner_btns.length; i++) {
			banner_imgs[i].style.zIndex="1"
		 	banner_btns[i].style.backgroundColor="#ccc"
			};
			banner_imgs[this.index].style.zIndex="2";
			this.style.backgroundColor="#fff"
		 	banner_boxs.style.backgroundColor=banner_color[this.index];
		}
	};

	//动画
	var lunbo=setInterval(move,3000)
	var num=0;
	function move(){
		num++;
		if (num==banner_imgs.length) {
			num=0
		};
			for (var i = 0; i < banner_btns.length; i++) {
			banner_imgs[i].style.zIndex="1"
		 	banner_btns[i].style.backgroundColor="#ccc"
			};
			banner_imgs[num].style.zIndex="2";
			banner_btns[num].style.backgroundColor="#fff"
		 	banner_boxs.style.backgroundColor=banner_color[num];
		}
		banner_boxs.onmouseover=function(){
		 clearInterval(lunbo);
		}
		banner_boxs.onmouseout=function(){
			lunbo=setInterval(move,3000)
		}
	
	
// *************************按需加载****************

		var floor1=$(".floorimg");
		var top=[];
	//兼容性的判断，进行赋值为1 的判断方法
	for (var i = 0; i < floor1.length; i++) {
		top.push(floor1[i].offsetTop);
	};
		var doc=document.body;
		doc.offsetTop=1;
		if (doc.offsetTop!=1) {
			doc=document.documentElement;
		};
			// 获取浏览器 容器的高度
		var ch=document.documentElement.clientHeight;

	    addEvent(window,"scroll",function(){
		// 滚动条事件  获取滚动条的高度
		var scroll=doc.scrollTop;
			for (var i = 0; i < floor1.length; i++) {
				if (scroll+1000>top[i]&&floor1[i].getAttribute("flag")!="true") {
					var img=$('img',floor1[i]);
					for (var j = 0; j < img.length; j++) {
						img[j].src=img[j].getAttribute("asrc")
					};
					floor1[i].setAttribute("flag",true)
				};
			};
		// 比较容器的高度与滚动条的高度
		// 满足条件  把图片的地址替换为正确的地址
		})







	//侧边    ***  -  使用大写代替  z-box→zBox
	var zBoxs=document.getElementsByClassName("z-box")
	var arr=["red","blue","yellow","white","#ff00ff","#00ffff"]
	for (var i = 0; i < zBoxs.length; i++) {
		zBoxs[i].index=i
		zBoxs[i].onmouseover=function(){
			this.style.background=arr[this.index]
		}
		zBoxs[i].onmouseout=function(){
			this.style.background="#ccc"
		}
	};






//右边的top 加右边     *********滚动条加楼层*************
	var leftdao=$(".mui-lift")[0];
	var topbtn=$(".dw-you11")[0];
	var top_total=$(".total_container")[0];
	topbtn.onclick=function(){
		robj=document.body.scrollTop==0?document.documentElement:document.body;
		animate(robj,{scrollTop:0})
	}
	var flag1=true;
	var flag2=true;

	addEvent(window,"scroll",function(){

		var robj=document.body.scrollTop==0?document.documentElement:document.body;
		if (robj.scrollTop>600) {
			if (flag1) {
				flag1=false;flag2=true;
			animate(topbtn,{opacity:1})
			animate(leftdao,{width:35,height:370},600)
			animate(top_total,{height:50,opacity:1},600)
			}
		}else{
			if (flag2) {
			flag1=true;flag2=false;
			animate(topbtn,{opacity:0})
			animate(leftdao,{width:0,height:0},600)
			animate(top_total,{height:0,opacity:0},600)
		 }
		}		
	})
	

// *********滚动条加楼层*************
				// var box=$('div',$(".float_nav"));
				// alert(box.length)
				var floor=$(".fpLift")[0];
				var btn=$(".mui-lift-nav");
				var contenline=$(".floor-line-con");
				var yt_top=$(".nav-back")[0];

				var doc=document.body;   //Chrome 谷歌
		            doc.scrollTop=1;   //赋值进行判断
			          if (doc.scrollTop!=1) {
			   	         doc=document.documentElement;
				      //FF/ie
			         }
				document.documentElement.scrollTop=1;
				if (document.documentElement.scrollTop==1) {
					var scrollobj=document.documentElement;
				}else{
					var scrollobj=document.body;
				}
				var flag=true;
				var flag1=true;

				addEvent(window,"scroll",function(){
					var st=doc.scrollTop+100;
					for (var i = 0; i < btn.length; i++) {
						if (st>contenline[i].offsetTop) {
							for (var j = 0; j < btn.length; j++) {
								btn[j].style.background="";
								btn[j].style.cssText=""
							};
								btn[i].style.background="#e5004f ";
								btn[i].style.cssText="color: #fff;background: #e5004f none repeat scroll 0 0"
								
								
						};
					};
					
					if (st>600) {
						if (flag) {
							flag=false;flag1=true;
							animate(floor,{opacity:1,display:"block"},300)
						}
					}else{
						if (flag1) {
							flag=true;flag1=false;
							animate(floor,{opacity:0,display:"none"},300)
						}
					}
				})
				
				yt_top.onclick=function(){
					animate(scrollobj,{scrollTop:0})
				}
				for (var i = 0; i < btn.length; i++) {
					btn[i].index=i;
					btn[i].onclick=function(){
						var ac=contenline[this.index].offsetTop;
						animate(scrollobj,{scrollTop:-50+ac})
					}
				};














	// //左边
	document.documentElement.scrollTop=1; //给scrollTop赋值进行判断
		if (document.documentElement.scrollTop==1){ //等于1是在火狐浏览器
		var scrollobj=document.documentElement;
		}else{  //否则为0，是在谷歌浏览器里
		var scrollobj=document.body;
		}
	var lift_btn=$(".mui-lift-nav");
	var conten_floor=$(".floor-line-con");
	for (var i = 0; i < lift_btn.length; i++) {
		lift_btn[i].index=i;
		lift_btn[i].onclick=function(){
			var ac=conten_floor[this.index].offsetTop;
			animate(scrollobj,{scrollTop:-50+ac})
		}

	};





	//返回顶部
	var lefttop=$(".j_navBack")[0];
	lefttop.onclick=function(){
		robj=document.body.scrollTop==0?document.documentElement:document.body;
		animate(robj,{scrollTop:0})
	}
	
	// 出现与消失
	var happen=$(".happen")[0];
	var happen_box=$(".happen_box")[0];
		happen.onmouseover=function(){
		   happen_box.style.display="block";
		}
		happen.onmouseout=function(){
		happen_box.style.display="none";
	}

	var happen1=$(".happen1")[0];
	var happen_box1=$(".happen_box1")[0];
		happen1.onmouseover=function(){
		   happen_box1.style.display="block";
		}
		happen1.onmouseout=function(){
		happen_box1.style.display="none";
	}

	var shouji=$(".shouji")[0];
	var qrcode=$(".sn-qrcode")[0];
		shouji.onmouseover=function(){
		   qrcode.style.display="block";
		}
		shouji.onmouseout=function(){
			qrcode.style.display="none";
	}

	var shangjia=$(".shangjia")[0];
	var shangjiabd=$(".shangjia-bd")[0];
		shangjia.onmouseover=function(){
		   shangjiabd.style.display="block";
		}
		shangjia.onmouseout=function(){
			shangjiabd.style.display="none";
	}


	// 右边
	var items=$(".dwitem");
	var kuais=$(".mui-mbar-tab-tip");
	var t;   //全局变量
	for (var i = 0; i < items.length; i++) {
				items[i].index=i;
				hover(items[i],function(){
					// 延时
					var that=this;
				clearTimeout(t)  //结束之前的属性，要去执行后面的属性
				t=setTimeout(function(){  //加入延时
					kuais[that.index].style.display="block";
					animate(kuais[that.index],{left:-90,opacity:1},500)
					},200)
					
				},function(){
					clearTimeout(t)
					animate(kuais[this.index],{left:-120,opacity:0.3},500,function(){
							this.style.display="none"
						    }
						)
				 })
			};


// 导航隐藏
var bannerzuobox=$(".bannerzuobox"),
	contentCon=$(".content-con");
	for (var i = 0; i < bannerzuobox.length; i++) {
		bannerzuobox[i].index=i;
		bannerzuobox[i].onmouseover=function(){
			contentCon[this.index].style.display="block"
		}
		bannerzuobox[i].onmouseout=function(){
			contentCon[this.index].style.display="none"
		}
	};


	//网站下拉
       var wangzhan=$(".wangzhan")[0];
       var wzxl=$(".wzxl")[0];
       wangzhan.onmouseover=function(){
          wzxl.style.display="block";
       }
       wangzhan.onmouseout=function(){
        wzxl.style.display="none";
       }
     




}




				