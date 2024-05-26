//메인 비주얼

let $visualLi = getAll('.main-banner li');
let $visualPaging = getAll('#mainvisual .paging li');

$visualPaging.forEach((paging, idx) => {
    paging.addEventListener('click', (e) => {
        $visualPaging.forEach((lis) => {
            lis.classList.remove('on');
        });
        $visualLi.forEach((visual, idx) => {
            visual.classList.remove('on');
        });
        e.currentTarget.classList.add('on');
        $visualLi[idx].classList.add('on');
    });
});

//메인 콘2
let $con2ImgLi = getAll('.con2 .line-bg li');
let $con2BtnLi = getAll('.con2 .line-box li');

$con2BtnLi.forEach((con2, idx) => {
    con2.addEventListener('mouseenter', (e) => {
        $con2ImgLi.forEach((lis) => {
            lis.classList.remove('on');
        });
        $con2ImgLi[idx].classList.add('on');
    });
});

//메인 콘4
let $con4BgLi = getAll('.con4 .landmark-bg li');
let $con4LogoLi = getAll('.con4 .landmark-logo li');

$con4LogoLi.forEach((con4, idx) => {
    con4.addEventListener('mouseenter', (e) => {
        $con4BgLi.forEach((lis) => {
            lis.classList.remove('on');
        });
        $con4BgLi[idx].classList.add('on');
    });
});

//메인 콘5
let $con5Li = getAll('.con5 .slidebox li');

$con5Li.forEach((con5, idx) => {
    con5.addEventListener('mouseenter', (e) => {
        $con5Li.forEach((lis) => {
            lis.classList.remove('on');
        });

        e.currentTarget.classList.add('on');
    });
    con5.addEventListener('mouseleave', (e) => {
        $con5Li.forEach((lis) => {
            lis.classList.remove('on');
        });
        e.currentTarget.classList.add('on');
    });
});
