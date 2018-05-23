window.onload = function() {
    var slideCar = document.querySelector('.carousel');
    var slideItem = document.querySelector('.slide_item');
    var slideItems = document.querySelectorAll('.slide_item');
    var slideBox = document.querySelector('.slide_box');
    var nextd = document.querySelector('.next');
    var pred = document.querySelector('.pre');
    var offLeft = slideItem.offLeft;
    var len = slideItems.length;
    var itemWidth = slideItem.clientWidth;
    var itemH = slideItem.clientHeight;
    setinit();
    function setinit() {
        slideCar.style.width = itemWidth + "px";
        slideCar.style.height = itemH + "px";
    }
    function slideN() {
        if (slideBox.offsetLeft < -(len-2)*itemWidth) {
            slideBox.style.left = 0 + "px";
        } else {
            slideBox.style.left = slideBox.offsetLeft - itemWidth + "px"
        }
    }
    function slideP() {
        if (slideBox.offsetLeft > -itemWidth ) {
            slideBox.style.left = -(len-1)*itemWidth + "px"
        } else {
            slideBox.style.left = slideBox.offsetLeft + itemWidth + "px"
        }
    }
    nextd.onclick = function() {
        slideN()
    }
    pred.onclick = function() {
        slideP()
    }
}