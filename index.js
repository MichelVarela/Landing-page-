window.addEventListener('load',()=>{

    let $item = document.querySelector('.icons .fa-bars');
    let $nav = document.querySelector('.content-nav');

    $item.addEventListener('click',()=>{

        $nav.classList.toggle('on-content-nav');
    })
    
})

window.addEventListener('resize',()=>{/* al haber un cambio en el tamaño de la pantalla */

    let $nav = document.querySelector('.content-nav');

    if(window.innerWidth >= 1024){/* si el tamaño de la pantalla es mayor a 1024 que quite el class siguiente */
        $nav.classList.remove('on-content-nav');
    }
})