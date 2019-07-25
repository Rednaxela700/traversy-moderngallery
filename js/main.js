/**
 * Created by alexander on 24/07/2019.
 */
const [current, imgs] = [
    document.querySelector('#current'), document.querySelectorAll('.img-other img')
];
const opacity = 0.7;

imgs.forEach(img =>
    img.addEventListener('click', imgClick));
function imgClick(e) {

    //Set first img opacity
    imgs[0].style.opacity = opacity;
    //Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //Change current image to src of clicked image
    current.src = e.target.src;

    //Add fade in class
    current.classList.add('fade-in');

    //Remove fade-in after 0.5 sec
    setTimeout(() => current.classList.remove('fade-in'), 500);

    //Change the opacity to opacity var
    e.target.style.opacity = opacity;
}
