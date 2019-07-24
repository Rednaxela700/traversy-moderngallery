/**
 * Created by alexander on 24/07/2019.
 */
const [current, imgs] = [
    document.querySelector('#current'), document.querySelectorAll('.img-other img')
];

imgs.forEach(img =>
    img.addEventListener('click', imgClick));
function imgClick(e) {
    current.src = e.target.src;

}
console.log(imgs);
