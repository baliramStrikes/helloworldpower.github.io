var showmenu = document.getElementsByClassName('qlink')[0];
var menu = document.getElementsByClassName('logo3')[0];
var searchup = document.getElementsByClassName('searchup')[0];
var show = document.getElementById('show');
var firstfind = document.getElementById('firstfind');
var findid = document.getElementById('find');
var searchcover = document.getElementById('searchupcover');
var searhcoverimg = document.getElementById('serchcovimg');

menu.addEventListener('click', function() {
    if (menu.classList.contains('menu')) {
        menu.classList.remove('menu');
        showmenu.classList.remove('showmenu');
        showmenu.childNodes[1].style.display = 'none';
    } else {
        showmenu.classList.add('showmenu');
        menu.classList.add('menu');
        showmenu.childNodes[1].style.display = 'flex';

    }
});

firstfind.addEventListener('click', function() {
    if (show.classList.contains('showmenu')) {
        show.classList.remove('showmenu');
        findid.style.display = 'none';
        searhcoverimg.src = 'Group 1.png';
    } else {
        show.classList.add('showmenu');
        findid.style.display = 'block';
        searhcoverimg.src = 'close2.png';
    }

});
searchcover.addEventListener('click', function() {
        if (show.classList.contains('showmenu')) {
            show.classList.remove('showmenu');
            findid.style.display = 'none'
            searhcoverimg.src = 'Group 1.png'
        } else {
            show.classList.add('showmenu');
            findid.style.display = 'block';
            searhcoverimg.src = 'close2.png';
        }
    })
    // console.log(show.childNodes);
    // console.log((searhcoverimg).src = 'close2.png');