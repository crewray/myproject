var cinemaList={
    cinemas: '',
    render(data){
        cinemas=data.cinemas
        var list=document.querySelector('.list')
        var str=''
        data.cinemas.forEach(function(item){
            str+=`<div class="item flex fdc">
                    <p class="flex jc-sb mb-10"><span class="f16">${item.name}</span>
                    <span class="ff88229 f12"><i class="iconfont icon-fl-renminbi"></i>${item.lowPrice/100}起</span></p>
                    <p class="flex jc-sb f999 f12"><span>${item.address}</span><span>距离未知</span></p>
                </div>`
        })
        list.innerHTML=str
    },
    drop(){
        var area=document.querySelector('.area')
        var pop=document.querySelector('.pop')
        
        if(area.className.includes('dsn')){
            area.className=area.className.replace(' dsn','')
            pop.style.display='block'
        }
        else{
            area.className+=' dsn'
            pop.style.display='none'

        }
        
        
    },

    active(){
        var target=event.target
        var parent=event.target.parentNode
        var active=document.querySelector('.area .active')

        if(active) active.className=active.className.replace('active','')

        if(target.className.includes('item')){
            target.className+=' active'
        }
        if(parent.className.includes('item')){
            parent.className+=' active'
        }



        document.querySelector('#drop').click()

        var currentTarget=parent.className.includes('item')?target:target.childNode

        var list=cinemaList.cinemas.filter(function(item){
            item.areaName==currentTarget.innerText
        })

        cinemaList.render(list)
        

    }
}
ajax.get('http://huruqing.cn:3000/api/cinema/getList',cinemaList.render)
document.querySelector('#drop').addEventListener('click',cinemaList.drop)
document.querySelector('.area').addEventListener('click',cinemaList.active)