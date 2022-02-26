
;(function () {
   
})();

; (function () {
    const btn = document.querySelector('.btn-menu-self')
    const menu = document.querySelector('.menuList-self')

    btn.addEventListener('click', () => {
        btn.classList.toggle('active-self') 
        menu.classList.toggle('is-active-self')
        //'切換' className
    })
})();


; (function () {
    let icron = document.querySelector('.icronBOX')
    const version = document.querySelector('.version')
    const buttomVersion = version.offsetTop   
    // 讀取  .version 最高px 在螢幕中的位置
    document.addEventListener('scroll',()=>{ 
        let scroll = window.scrollY + 1500
        if(scroll >= buttomVersion){
            icron.classList.remove('floatNav')    
            //console.log(scroll,buttomVersion);        
        }else{
            icron.classList.add('floatNav')
            //console.log(scroll,buttomVersion);     
        }    
        //變更 '增加'或'移除' className  .icronBOX 的position
    })
})();