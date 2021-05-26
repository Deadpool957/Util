export default{
    //获取安卓版本号
    getAndroidVersion(ua) {
        ua = (ua || navigator.userAgent).toLowerCase(); 
        var match = ua.match(/android\s([0-9\.]*)/);
        return match ? match[1] : false;
    },
    //获取ios版本号
    getIosVersion(){
        var str= navigator.userAgent.toLowerCase(); 
        var ver=str.match(/cpu iphone os (.*?) like mac os/);
        return ver ? ver[1]:false
    },
    //可以用于在浏览器上预览本地图片或者视频
    createSource(file){
        var path = window.URL.createObjectURL(file);
        return path

    },
    //判断是微信环境还是企业微信环境
    getIsWeixn(){
        var ua = navigator.userAgent.toLowerCase(); // 将用户代理头的值转为小写
        //判断微信的方法：
        if(ua.match(/micromessenger/i) == 'micromessenger'){
                if (/wxwork/i.test(ua)){
                // 企业微信
                    return 'wxwork'
                }else{
                    return 'wx'
                console.log('微信')
                }
        }
      


    },
    //正则表达式(删除字符串中的字母其他的字符);
    //^[a-z] 匹配以小写字母 开头 的文本串 
     //[^a-z] 表示与 不包含 小写字母的字符匹配 
    formatString(val){
        var reg = /[^a-z]/ig;
        if(val){
            return val.replace(reg,'')
        }
    },
    //返回数组的最后一个元素
    getLastArry(){
        //1
        var arr = new Array("js","JavaScript","jQuery");
        var end = arr.pop();
        //2
        var end = arr[arr.length-1];
        //3,返回的数据类型是 array 不是 string
        var end = arr.slice(-1);
    },
    //防抖
    debounce(fn,delay,...args){
        let timeout = null;//创建一个标记用来存放定时器的返回值
        return function(e){
            if(timeout){
                clearTimeout(timeout)
            }//每当用户输入的时候把前一个settimeout clear掉
            timeout = setTimeout(()=>{
                fn.apply(this,[e,...args]);
                clearTimeout(timeout);
                timeout=null;
            },delay )
        }
    },
    //节流
    throttle(fn) {
        let canRun = true; // 通过闭包保存一个标记
        return function () {
          if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
          canRun = false; // 立即设置为false
          setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
            fn.apply(this, arguments);
            // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
            canRun = true;
          }, 500);
        };
      },
      //检测日期是否是Date类型
      judge(date){
          //true
          if(date instanceof Date){
              return true 
          }else{
              return false 
          }
      }


}