let sliderCurrentIndex = 0
const sliderImagesPath = './images/jpeg/'
const sliderImages = ['picture_one.jpg', 'picture_two.jpg', 'picture_three.jpg']

const pinActiveClass = 'projects__nav-pin--active'
const tabActiveClass = 'projects__tab--active'

let sliderImageEl = null
let sliderPinsEl = null
let sliderTabsEl = null

document.addEventListener('DOMContentLoaded', () => {
    sliderImageEl = document.getElementById('slider_image')
    sliderPinsEl = document.getElementById('slider_pins')
    sliderTabsEl = document.getElementById('slider_tabs')
})

function sliderImagesCount() {
    return sliderImages.length
}
function setSliderImage(index) {
    sliderImageEl.setAttribute('src', `${sliderImagesPath}${sliderImages[index]}`)
    setPin(index)
    setTab(index)
}
function setPin(index) {
    for (let i=0; i< sliderPinsEl.children.length; i++) {
        sliderPinsEl.children[i].classList.remove(pinActiveClass)
    }
    sliderPinsEl.children[index].classList.add(pinActiveClass)
}
function setTab(index) {
    for (let i=0; i< sliderTabsEl.children.length; i++) {
        sliderTabsEl.children[i].classList.remove(tabActiveClass)
    }
    sliderTabsEl.children[index].classList.add(tabActiveClass)
}
function setSliderPrev() {
    if (sliderCurrentIndex === 0) {
        sliderCurrentIndex = sliderImagesCount() - 1
    } else {
        sliderCurrentIndex--
    }
    setSliderImage(sliderCurrentIndex)
}
function setSliderNext() {
    if (sliderCurrentIndex === sliderImagesCount() - 1) {
        sliderCurrentIndex = 0
    } else {
        sliderCurrentIndex++
    }
    setSliderImage(sliderCurrentIndex)
}