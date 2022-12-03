let puppyImageElement = document.getElementById("puppyImage");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {

        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        document.getElementById("likeButton").style.color = "white";
        document.getElementById("likeButton").style.backgroundColor = "#0967d2";
        document.getElementById("likeIcon").style.color = "#0967d2";
        isImageLiked = true;
    } else {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        document.getElementById("likeButton").style.color = "#9aa5b1";
        document.getElementById("likeButton").style.backgroundColor = "#cbd2d9";
        document.getElementById("likeIcon").style.color = "#cbd2d9";
        isImageLiked = false;

    }
}