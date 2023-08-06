const btn = $('#menu-btn')
const menu = $('#menu')
const logo = $('#logo')
const heroSlider = $('#hero-slider')
let sliderPage = 1
const totalSlides = heroSlider.children().length

pageHandler()

/* Total pages of the hero slider */
$('#slider-total-page').text(totalSlides)

/* Navbar mobile */
btn.click(function () {
    btn.toggleClass('open')
    menu.toggleClass('flex')
    menu.toggleClass('hidden')
})

/* Surfboards slider */
$('#surfboard-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    appendArrows: $('#surfboard-slider-container'),
    prevArrow: `<div class="surfboard-prev-arrow cursor-pointer absolute left-4 z-10">
                    <img src="images/surfboards/left-arrow.png" alt="left-arrow" class="max-w-sm">
                </div>`,
    nextArrow: `<div class="surfboard-next-arrow cursor-pointer absolute right-4 z-10">
                    <img src="images/surfboards/right-arrow.png" alt="right-arrow" class="max-w-sm">
                </div>`,
    responsive: [
        {
            breakpoint: 1240,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

/* Hero slider */
heroSlider.slick({
    infinite: true,
    arrows: true,
    fade: true,
    appendArrows: $('#hero-slider-control'),
    prevArrow: `<div class="cursor-pointer" onclick="pageHandler('prev')">
                    <img src="images/hero-slider/left-arrow.png" alt="left-arrow">
                </div>`,
    nextArrow: `<div class="cursor-pointer" onclick="pageHandler('next')">
                    <img src="images/hero-slider/right-arrow.png" alt="right-arrow">
                </div>`,
});

/* Slider page handler */
function pageHandler(operation) {
    if (operation === 'next') {
        if (sliderPage + 1 > totalSlides) sliderPage = 1
        else sliderPage += 1
    } else if (operation === 'prev') {
        if (sliderPage - 1 < 1) sliderPage = totalSlides
        else sliderPage -= 1
    }
    $('#slider-current-page').text(sliderPage)
}