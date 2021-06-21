str = ''

function getValue() {
    var value = this.innerText
    if(value==='÷'){
        value='/'
    }
    if(value==='x'){
        value='*'
    }
    str += value
    input=document.getElementById('input')
    input.value=str

}
function free(){
    str=''
    input.value=str

}

function del(){
    str=str.slice(0,str.length-1)
    input.value=str

}

function equal(){
    str=String(eval(str))
    input.value=str

}

var btns = document.getElementsByClassName('btn')

for(var i of btns){
    var txt=i.innerText
    if(txt!=='C'&&txt!=='删除'&&txt!=='='){
        i.addEventListener("click",getValue)
    }
    else if(txt==='C'){
        i.addEventListener("click",free)
    }
    else if(txt==='删除'){
        i.addEventListener("click",del)
    }
    else{
        i.addEventListener("click",equal)
    }
}

// btns[0].addEventListener("click", getValue)