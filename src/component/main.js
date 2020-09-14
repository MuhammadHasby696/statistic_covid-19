import M from 'materialize-css'

// buat navbar
document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.sidenav');
    const options = {}
    const instances = M.Sidenav.init(elems, options);
});

// buat slider
document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.slider');
    const options = {
        interval: 3000,
        height: 500,
        duration: 600,
        indicators: false
    }
    const instances = M.Slider.init(elems, options);
});

// buat scrollspy
document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.scrollspy');
    const options = {
        scrollOffset: 90
    }
    const instances = M.ScrollSpy.init(elems, options);
});