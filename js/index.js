const bars = document.getElementById('bars');
const navMenu = document.getElementById('navMenu');

bars.addEventListener('click', e => {
    navMenu.classList.toggle('active')
    if (navMenu.classList.contains('active')) {
        bars.classList.add('fa-times')
        console.log('aslam');
        bars.classList.remove('fa-bars')
    }
    else {
        bars.classList.add('fa-bars')
        bars.classList.remove('fa-times')
    }
})
window.addEventListener('resize', e => {
})