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

    }


}