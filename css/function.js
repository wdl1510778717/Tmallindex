// 把所有用于解决IE6~8兼容性的问题函数库

// getElementsByClassName  在IE6~8里不支持
//1、先去分，再进行不同的操作
// 2、先把所有的元素都获取
// 3、然后根据类名找我们需要的元素




// if (navigator.appName == 'Microsoft Internet Explorer') {   
//         document.getElementsByClassName = function() {   
//             var tTagName = "*";   
//             if (arguments.length > 1) {   
//                 tTagName = arguments[1];   
//             }   
//             if (arguments.length > 2) {   
//                 var pObj = arguments[2]   
//             } else {   
//                 var pObj = document;   
//             }   
//             var objArr = pObj.getElementsByTagName(tTagName);   
//             var tRObj = new Array();   
//             for ( var i = 0; i < objArr.length; i++) {   
//                 if (objArr[i].className == arguments[0]) {   
//                     tRObj.push(objArr[i]);   
//                 }   
//             }   
//             return tRObj;   
//         }   
//     } 

//1、通过类名获取


//方法1，获取类名

function getClass(selector,context){
    //假值：underfind  、 null 、 0 、“ ”  、false  、 NaN
        context=context||document;
        if (document.getElementsByClassName) {
        return context.getElementsByClassName(selector)
    }else{
        //获取全部元素(2种方法)
        // var all=document.all;  
        var all=context.getElementsByTagName("*")
        var newarr=[];
        for (var i = 0; i < all.length; i++) {
            // "one two"  "one"
            if(checkstr(all[i].className,selector))
                newarr.push(all[i])
            }
        }
    return newarr
} 
    
    // "one two"  "one"
    function checkstr(lstr,str){
        var arr=lstr.split(" ") //空格
        for (var i = 0; i < arr.length; i++) {
           if(arr[i]==str){
            return true;
           }
        };
        return false
    }



//2、兼容的获取或者设置元素的文本内容
    // 1. 先判断浏览器
    // 2. 是获取还是设置
    // 3. 执行对应的操作

    function getText(obj,text){
         // 1. 先判断浏览器
        if (document.getElementsByClassName) {
            // 2. 是获取还是设置
            if (text==undefined) {
                return obj.textContent;
            }else{
                obj.textContent=text;
            }
        }else{
            if (text==undefined) {
                return obj.innerText;
            }else obj.innerText=text;
         }
    }

    //3、 兼容性的获取某一个对象的某一个样式的方式
    // window.getComputedStyle(one,null).width
    // one.currentStyle.width
            //one   "width"
    function getStyle(obj,attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(obj,null)[attr]
        }else{
            return obj.currentStyle[attr]
        }
    }

 //通过多种方式获取元素
    function $(selector,context){
        context=context||document;   //context ← context;  context ←  document
        if (typeof selector=="string") {
            // div  .one   #aa
            if (selector.charAt(0)==".") {    //类名
              // context  范围
                return getClass(selector.slice(1),context) //截取  从第一个开始
            }else if(selector.charAt(0)=="#") {    //ID  
                return document.getElementById(selector.slice(1))
            }else{
                return context.getElementsByTagName(selector)                           //标签名
            }
        }else if (typeof selector=="function") {
            addEvent(window,"load",selector)
        }
    }


//获得所有元素子节点的函数
  function getChild(obj){
    var childs=obj.childNodes;
    var newarr=[];
    for (var i = 0; i < childs.length; i++) {
        if (childs[i].nodeType==1) {
            newarr.push(childs[i])
        }
    }
    return newarr;    
  }

//获取第一个
   function getFirst(obj){
    return getChild(obj)[0]
   }
//获取最后一个
   function getLast(obj){
    var arr=getChild(obj);
    return arr[arr.length-1];
   }
//获取下一个元素兄弟节点
   function getNext(obj){
    var next=obj.nextSibling;
    if (next==null) {
        return null;
    }
    while(next.nodeType!=1) {
      next=next.nextSibling;
      if (next==null) {
         return null
      }
    }return text
   }
//获取上一个元素兄弟属性
   // function getPr



//将一个元素插入到另一个元素的后面
  function insertAfter(oldobj,newobj){
    var next=getNext(oldobj);
    var parent=next.parentNode;
    if (next) {
        parent.insertBefore(newobj,next)
    }else{
        parent.appendChild(newobj)
    }
  }
// 兼容性的绑定事件的函数
   function addEvent(obj,event,callback){
        if (obj.addEventListener){
            obj.addEventListener(event,callback,false)
        }else{
            obj.attachEvent("on"+event,callback)
        }
     }
// 兼容性的移除绑定的事件
function removeEvent(obj,event,callback){
    if (obj.removeEventListener) {
        obj.removeEventListener(event,callback,false)
    }else{
        obj.detachEvent()
    }
}

//给某一个对象添加滚轮事件
function mousewheel(obj,upfun,downfun){
        if (obj.addEventListener){
            obj.addEventListener("mousewheel",scrollfun,false)
            obj.addEventListener("DOMMouseScroll",scrollfun,false)
        }else{
            obj.attachEvent("onmousewheel",scrollfun)
        }
        function scrollfun(e){
            var ev=e||window.event;
            var dir=ev.detail||ev.wheelDelta;
           if(ev.preventDefault){
            ev.preventDefault()
           }else{
            ev.returnValue=false;
           }
            if (dir==-3||dir==120){
                upfun.call(obj,ev);
            }else if(dir==3||dir==-120){
                downfun.call(obj,ev);
            }
        }
    }
     //判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
    if(parent.contains){
       return parent.contains(child) && parent!=child;
    }else{
      return (parent.compareDocumentPosition(child)===20);
    }
 }
 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
     if(getEvent(e).type=="mouseover"){
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
        !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
     }else{
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
        !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
        }
  }
//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
      if(overfun){
        obj.onmouseover=function  (e) {
              if(checkHover(e,obj)){
                 overfun.call(obj,[e]);
              }
        }
      }
      if(outfun){
        obj.onmouseout=function  (e) {
              if(checkHover(e,obj)){
                 outfun.call(obj,[e]);
              }
        }
      }
}
  function getEvent(e){
    return e||window.event;
  }