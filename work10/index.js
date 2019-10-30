function monkey(){
    let total =document.getElementById("monkeytotal").value
    let kick =document.getElementById("monkeykick").value
    total=parseInt(total)&&Number(total)
    kick=parseInt(kick)&&Number(kick)
    if(isNaN(total)||isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
    for (let i=1;i<=total;i++){
        monkey.push(i)
    }
    let i=0
    while (monkey.length>1){
        i++;
        head=monkey.shift()
        if(i%kick!=0){
            monkey.push(head);
        }
    }
    document.getElementById('monkeyking').innerText=monkey[0]
}
function stat(){
    let str=documment.getElementById("str").value
    let obj={}
    var str="sdwhacasaz",json={};
    for(var i=0,l=str.length;i<l;i++){
        json[str[i]]=(json[str[i]]+1)||1;    
    }
console.log(JSON.stringify(json))
    document.getElementById('result').innerText=JSON.stringify(obj)
}