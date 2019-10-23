function yueshu(a){
    var count=0
    for(var i=1;i<a;i++){
        if(a%i==0){
            count++
        }
    }
    return count
}
验证是否是质数
function iszhishu(b){
    if(yueshu(b)==2){
        return true
    }else{
        return false
    }
}
验证歌德巴赫猜想
for (var i=4;i<=100;i+=2){
    for(var j=2;j<i;j++){
        if(iszhishu(j)&&iszhishu(i-j)){
            console.log(i+"可以拆分为"+j+"与"+(i-j))
        }
    }
}