/**
 * Created by alexander on 24/07/2019.
 */
const [current, imgs] = [
    document.querySelector('#current'), document.querySelectorAll('.img-other img')
];
const opacity = 0.4;

imgs.forEach(img =>
    img.addEventListener('click', imgClick));
function imgClick(e) {
    //Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //Change current image to src of clicked image
    current.src = e.target.src;

    //Add fade in class
    current.classList.add('fade-in');

    //Change the opacity to opacity var
    e.target.style.opacity = opacity;
}
