const sliderContainer = document.querySelector('.slider-container')
const right_slide = document.querySelector('.right-slide')
const left_slide = document.querySelector('.left-slide')
const up_button = document.querySelector('.up-button')
const down_button = document.querySelector('.down-button')
const slidesLength = right_slide.querySelectorAll('div').length
// line 6 measures length. Keep in mind 'div' is not a class therefore it does not need an identifier at the beginning quen in quotes.

let activeSlideIndex = 0

left_slide.style.top = `-${(slidesLength -1) * 100}vh`
// views array from left_slide. Modifies the style of the page to thrown an image on top. The element identifier identifies how many slides are in left_slide and selects the value that is is 1 less. The 100 establishes viewport size. The negative in front of the element ensures that the images are being selected in reverse.

up_button.addEventListener('click', () => changeSlide('up'))
down_button.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
            }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
        right_slide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
        left_slide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    }

    // errors came from bracket location. Be sure to double check all brackets from time to time to make sure that they are closing within their proper groups.