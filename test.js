//鼠标滚动停止后500ms执行回调函数doSomething
window.onscroll = debouce(doSomething,500,1,2,3);
//函数节流(事件触发时规定时间后执行一次)
function throttle(cb,delay,...args){
    let timer = null;
    return (e)=>{
        if(!timer){
            timer = setTimeout(()=>{
                //把this以及event还有参数传给回调
                cb.apply(this,[e,...args]);
                clearTimeout(timer);
                timer = null;
            },delay)
        }
    }
};
function doSomething(e,...args){
    console.log('开始');
    console.log('event==',e);
    console.log('args=='.args);
};
//数组的升序与降序排列
//升序
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
// output 1,5,10,25,40,100
//降序
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
// output: 100,40,25,10,5,1
//将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数
Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b})