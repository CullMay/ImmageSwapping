var aryImages = ["1.jpg", "2.jpg", "3.jpg"];

function onClick(element) {
    document.getElementById("right").src = element.getAttribute('src');
}