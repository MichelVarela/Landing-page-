window.addEventListener('load',()=>{

    let $item = document.querySelector('.icons .fa-bars');
    let $nav = document.querySelector('.content-nav');

    $item.addEventListener('click',()=>{

        $nav.classList.toggle('on-content-nav');
    })
    
})