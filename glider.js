window.addEventListener('load',()=>{
    
    new Glider(document.querySelector('.group'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.dots',
        responsive: [/* array de objetos donde declaramos breackpoints,settings */
            {
                // vista >= 575px
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },{
                // vista >= 775px
                breakpoint: 775,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                // vista >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    });
    
    new Glider(document.querySelector('.detail-individual'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [/* array de objetos donde declaramos breackpoints,settings */
            {
                // vista >= 575px
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },{
                // vista >= 775px
                breakpoint: 775,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                // vista >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    });
})