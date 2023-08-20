$(function() {
    $('.mosaic .container .mosaic_wrapper').slick({
        slidesToShow: 6,
        centerMode: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    })

    $('.treatments .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }

        ]
    })

    $('.reviews .container').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        dots: true
    })
})