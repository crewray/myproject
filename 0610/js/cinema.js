var cinemaList={
    render(data){
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
    }
}
ajax.get('http://huruqing.cn:3000/api/cinema/getList',cinemaList.render)