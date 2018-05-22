window.onload = function() {
    var slideBox = document.querySelector('.slide_box');
    var slideItem = document.querySelector('.slide_item');
    var slideItems = document.querySelectorAll('.slide_item');
    var nextd = document.querySelector('.next');
    var pred = document.querySelector('.pre');
    var offLeft = slideItem.offLeft;
    var len = slideItems.length;
    var itemWidth = slideItem.clientWidth;
    setBoxWidth();
    
    function setBoxWidth() {
        slideBox.style.width = itemWidth + "px";
    }

    function slideN() {
        if (slideItem.offsetLeft < (len-1)*itemWidth) {
            slideItem.style.left = 0 + "px";
        } else {
            slideItem.style.left = offLeft + itemWidth + "px"
        }
    }
    function slideP() {
        if (slideItem.offsetLeft > 0) {
            slideItem.style.left = (len-1)*itemWidth + "px"
        } else {
            slideItem.style.left = offLeft - itemWidth + "px"
        }
    }
    nextd.onclick = function() {
        slideN()
    }
    pred.onclick = function() {
        slideP()
    }
}