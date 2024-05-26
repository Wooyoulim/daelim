const get = (target) => {
    return document.querySelector(target);
};
const getAll = (target) => {
    return document.querySelectorAll(target);
};
let $link = getAll('a[href="#"]');
$link.forEach((item, idx) => {
    item.addEventListener('click', (e) => e.preventDefault());
});

//하단 서브 바
const nav = () => {
    let $right = getAll('.subnav.right li');
    $right.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            $right.forEach((lis) => {
                lis.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
        });
    });
    let $goToTop = get('.subnav.right .back-top');
    $goToTop.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    let $link = getAll('a[href="#"]');
    $link.forEach((item, idx) => {
        item.addEventListener('click', (e) => e.preventDefault());
    });
};

//헤더
const head = () => {
    let $login = get('#header .nav .gnb .login');

    $login.addEventListener('click', (e) => {
        alert('로그인이 필요한 서비스입니다.');
    });
};

//푸터

const foot = () => {
    let $family = get('footer .family');

    $family.addEventListener('click', (e) => {
        $family.classList.toggle('on');
    });
    let $link = getAll('a[href="#"]');
    $link.forEach((item, idx) => {
        item.addEventListener('click', (e) => e.preventDefault());
    });
};

// 헤더, 푸터, 하단서브 바 연결

const comInit = () => {
    const getPage1 = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                get(tag).innerHTML = res;
                head();
            });
    };
    const getPage2 = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                get(tag).innerHTML = res;
                foot();
            });
    };
    const getPage3 = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                get(tag).innerHTML = res;
                nav();
            });
    };
    getPage1('./header.html', '#header');
    getPage2('./footer.html', '#footer');
    getPage3('./subnav.html', '.subnav');
};

(() => {
    comInit();
})();
