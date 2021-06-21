str = ''

function show() {
    var value = this.innerText
    // if(value==='÷'){
    //     value='/'
    // }
    // if(value==='x'){
    //     value='*'
    // }
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
    str=str.replaceAll('x','*')
    str=str.replaceAll('÷','/')
    str=String(eval(str))
    input.value=str

}

var btns = document.getElementsByClassName('btn')

for(var i of btns){
    var txt=i.innerText
    if(txt!=='C'&&txt!=='删除'&&txt!=='='){
        i.addEventListener("click",show)
        continue
    }
    else if(txt==='C'){
        i.addEventListener("click",free)
        continue
    }
    else if(txt==='删除'){
        i.addEventListener("click",del)
        continue
    }
    else{
        i.addEventListener("click",equal)
    }
    
}

// btns[0].addEventListener("click", show)