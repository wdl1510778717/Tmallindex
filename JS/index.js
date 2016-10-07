 window.onload=function(){

// 天猫banner布局
      var banner_btn=document.getElementsByClassName("banner-btn");
      var banner_images=document.getElementsByClassName("banner-img");
      var banner_box=document.getElementsByClassName("banner-box")[0];
      var banner_zhong=document.getElementsByClassName("banner-zhong")[0];

      var banner_color=["#00BAFF","#88B8E8","#2CB1F6","#031519","#E8E8E8"]
      for (var i = 0; i < banner_btn.length; i++) {
            banner_btn[i].index=i;
            banner_btn[i].onmouseover=function(){
                  num=this.index;
            for (var i = 0; i < banner_btn.length; i++) {
              banner_btn[i].style.borderColor="";
              banner_btn[i].style.backgroundColor="";
              banner_images[i].style.zIndex=1;
            };
             this.style.borderColor="#555";
             this.style.backgroundColor="#fff";
             banner_images[this.index].style.zIndex=2;
             banner_box.style.backgroundColor=banner_color[this.index];
            }
               
         };  
      // 动画
      var lunbo=setInterval(move,2000)
      var num=0;
      function move(){
            num++;
            if (num==5) {
                  num=0;
            }
            for (var i = 0; i < banner_btn.length; i++) {
              banner_btn[i].style.borderColor="";
              banner_btn[i].style.backgroundColor="";
              banner_images[i].style.zIndex=1;
            };
            banner_btn[num].style.borderColor="#555";
            banner_box.style.backgroundColor=banner_color[num];
            banner_images[num].style.zIndex=2;
            banner_btn[num].style.backgroundColor="#fff";
      }
      banner_zhong.onmouseover=function(){
            clearInterval(lunbo)
      }
      banner_zhong.onmouseout=function(){
            lunbo=setInterval(move,2000)
      }
     var topnav_right1=$(".topnav-right1111")[0];
      var hand_right11=$(".hand-right1-1")[0];
      hover(topnav_right1,function(){
        hand_right11.style.display="block";
      },function(){
        hand_right11.style.display="none";

      })
      var topnav_right4=$(".topnav-right4")[0];
      var hand_right41=$(".hand-right4-1")[0];
      hover(topnav_right4,function(){
        hand_right41.style.display="block";
      },function(){
        hand_right41.style.display="none";

      })
      var topnav_right5=$(".topnav-right5")[0];
      var hand_right51=$(".hand-right5-1")[0];
      hover(topnav_right5,function(){
        hand_right51.style.display="block";
      },function(){
        hand_right51.style.display="none";

      })
      var topnav_right8=$(".topnav-right8")[0];
      var hand_right81=$(".hand-right8-1")[0];
      hover(topnav_right8,function(){
        hand_right81.style.display="block";
      },function(){
        hand_right81.style.display="none";

      })
      var topnav_right9=$(".topnav-right9")[0];
      var hand_right91=$(".hand-right9-1")[0];
      hover(topnav_right9,function(){
        hand_right91.style.display="block";
      },function(){
        hand_right91.style.display="none";

      })


      //banner下拉菜单开始
var bannerlistbox=$(".bannerlist-box");
// alert(1)
    var bannerlistitem=$(".banner-left1-1");
    for (var i = 0; i < bannerlistbox.length; i++) {
      bannerlistbox[i].index=i
      // alert(bannerlistitem)
        hover(bannerlistbox[i],function(){
          
      
        bannerlistitem[this.index].style.display="block";

    },function(){
        bannerlistitem[this.index].style.display="none";
        
      

    })
  }


//天猫左边栏floor
var topbar=$(".hidden-top-box")[0];
 var leftbn=$(".left-box")[0];
 // var floor=$(".floor");
 // var tops=[];
 // for (var i = 0; i < floor.length; i++) {
 //    tops.push(floor[i].offsetTop);
 // };
 document.documentElement.scrollTop=1;
 if(document.documentElement.scrollTop==1){
 var scrollobj=document.documentElement;
}else{
  var scrollobj=document.body;
}
 var flag=true;
 var flag2=true;
 function jq(){
          var st=scrollobj.scrollTop;
          if(st>650){
            if(flag){
              flag=false;
              flag2=true
            animate(topbar,{top:0})
            animate(leftbn,{width:35,height:370})
        }
          }else{
            if (flag2) {
              flag2=false
              flag=true
            
            animate(topbar,{top:-50})
            animate(leftbn,{width:0,height:0})
            }
           }
  }  
  addEvent(window,'scroll',jq)
  var shangping=$(".shangping1-box");
  var leftbtns=$(".floorbtn");
  var hand=$(".topnav-box")[0];
  var leftlove=$(".floorbtn1")[0];
  var love=$(".love-box")[0];
  var lefttop=$(".floorbtn2")[0];
  var righttop=$(".righttop")[0];
  for (var i = 0; i < leftbtns.length; i++) {
    leftbtns[i].index=i;
    leftbtns[i].onclick=function(){
      var ot=shangping[this.index].offsetTop;
      animate(scrollobj,{scrollTop:ot})
    }
  };
  leftlove.onclick=function(){
    var ob=love.offsetTop;
    animate(scrollobj,{scrollTop:ob})
  }
   lefttop.onclick=function(){
    var oc=hand.offsetTop;
    animate(scrollobj,{scrollTop:oc})

  }
  righttop.onclick=function(){
    var od=hand.offsetTop;
    animate(scrollobj,{scrollTop:od})

  }
  
// 颜色变化
  var lh=love.offsetTop;
  var ot=[]
  var colors=["rgb(247,169,69)","rgb(25,200,169)","rgb(241,84,83)","rgb(100,195,51)","rgb(10,166,232)","rgb(234,95,141)"]
    for (var i = 0; i < shangping.length; i++) {
       ot.push(shangping[i].offsetTop)
    }
     function tz(){

    for (var j = 0; j < shangping.length; j++) {
      leftbtns[j].style.backgroundColor=""
      if (scrollobj.scrollTop>ot[j]-200&&scrollobj.scrollTop<lh-500) {

         for (var i = 0; i < leftbtns.length; i++) {
           leftbtns[i].style.backgroundColor="";
         }
         leftbtns[j].style.backgroundColor=colors[j]
      }
    }
    }
    addEvent(window,"scroll",tz)
    function tz2(){

        if (scrollobj.scrollTop>lh-500) {
            leftlove.style.opacity="0.9"

        }
        if (scrollobj.scrollTop<lh-500) {leftlove.style.opacity=""}
  }
  addEvent(window,"scroll",tz2)
  
  
  
  //品牌鉴选放大效果
  var pingpai_imgbox=$(".pingpai-item-img");
  var pingpai_imgages=$(".pingpai-imgages");
  for (var i = 0; i < pingpai_imgbox.length; i++) {
    pingpai_imgbox[i].index=i;
    pingpai_imgbox[i].onmouseover=function(){
     animate(pingpai_imgages[this.index],{width:150,marginTop:-10,left:-13,height:150},500)
    }
    pingpai_imgbox[i].onmouseout=function(){
     animate(pingpai_imgages[this.index],{width:133,marginTop:3,left:0,height:133},500)
    }

    }

    //右边栏效果

          var items=$(".right-item");
          var names=$(".right-name");
          var t;
          for (var i = 0; i < items.length; i++) {
            items[i].index=i;
            hover(items[i],function(){
              var that=this;
              clearTimeout(t);
              t=setTimeout(function(){
              names[that.index].style.display="block";
              animate(names[that.index],{left:-90,opacity:1},300)},300)
            },function(){
              clearTimeout(t)
              animate(names[this.index],{left:-120,opacity:0.6},300,function(){
                this.style.display="none";
                
              })
            })
        }

//按需加载
var floors=$(".floor");
  var arr=[];
  for (var i = 0; i < floors.length; i++) {
    arr.push(floors[i].offsetTop)
    //获取所有的各个楼层块超出浏览器的top值
  }
  document.documentElement.scrollTop=1;
 if(document.documentElement.scrollTop==1){
 var topss=document.documentElement;
}else{
  var topss=document.body;
}
var aaa=0;
  var tops=document.documentElement;//兼容性
  var wh=tops.clientHeight;
 function jm(){
    
    // var topsss=topss.scrollTop;
    for (var i = 0; i < floors.length; i++) {
     
      imgsss=$("img",floors[i])//获取每一张图片
      if(topss.scrollTop+wh>arr[i]&&floors[i].getAttribute('flag')!="true") {
         for (var j = 0; j < imgsss.length; j++) { ++aaa;
    console.log(aaa)
              imgsss[j].src=imgsss[j].getAttribute("asrc")
         }
           floors[i].setAttribute('flag',true)
        
      };
    };
  }
addEvent(window,'scroll',jm)

/*思路：
1. 首先把图片的src地址放到asrc中
2. 获取所有放图片的容器
3. 把存放所有容器的offsetTop值放入数组
4. 解决offsetTop的兼容性问题
5. 添加滚动条事件
6. 获取当前offsetTop的值
7. 用当前容器的每一个offsetTop值与滚动条高度scrollTop比较
哪一个满足条件就把img获取的asrc赋给图片的src
*/

//遮罩
var remenb=$("li",$(".remen-zhong-zhong")[0])
var remenl=$(".remen-1");
for (var i = 0; i < remenb.length; i++) {
  remenb[i].index=i
   hover(remenb[i],function(){
    remenl[this.index].style.display="block"
   },function(){
    remenl[this.index].style.display="none"
   })
 };


}

