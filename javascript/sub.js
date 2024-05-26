//데이터
import { storeData, noticeData, downData } from './data.js';

//서브1 : 바스
const brand = () => {
    let $con1Name = get('.sub1 .con1 h3');
    let $con1Text = get('.sub1 .con1 .explain ');
    let $con2 = get('.sub1 .con2 .wrap');
    let $con3 = get('.sub1 .con3 .wrap');
    let scroll = 0;
    let $con4Name = get('.sub1 .con4 h3');
    let $con4Text = get('.sub1 .con4 .explain ');
    window.addEventListener('scroll', (e) => {
        scroll = window.scrollY;
        if (scroll >= 220) {
            $con1Name.classList.add('on');
            $con1Text.classList.add('on');
        }
        if (scroll >= 750) {
            $con2.classList.add('on');
        }
        if (scroll >= 1250) {
            $con3.classList.add('on');
        }
        if (scroll >= 1950) {
            $con4Name.classList.add('on');
            $con4Text.classList.add('on');
        }
    });
};
//서브2 : 리모델링
const remodel = () => {};
//서브3 : 렌탈/케어서비스
const care = () => {
    let $banner = get('.sub3 .con1');
    let $con2ul = get('.sub3 .con2 .careService');
    let $con2li3 = get('.sub3 .con2 .careService li.last');
    let $con3 = get('.sub3 .con3');
    let $con3li1 = get('.sub3 .con3 .careMind li.one');
    let $con3li2 = get('.sub3 .con3 .careMind li.two');
    let $con3li3 = get('.sub3 .con3 .careMind li.three');
    let $con4 = get('.sub3 .con4');
    let scroll = 0;
    window.addEventListener('scroll', (e) => {
        scroll = window.scrollY;
        console.log(scroll);
        if (scroll >= 0) {
            $banner.classList.add('on');
        }
        if (scroll >= 680) {
            $con2ul.classList.add('on');
            $con2li3.classList.add('on');
        }
        if (scroll >= 1500) {
            $con3.classList.add('on');
            $con3li1.classList.add('on');
            $con3li2.classList.add('on');
            $con3li3.classList.add('on');
        }
        if (scroll >= 2600) {
            $con4.classList.add('on');
        }
    });
};
//서브4 : 제품
const product = () => {};
//서브5 : 대리점/전시장
const store = () => {
    //여기부터 게시판

    const $ul = get('.sub5 .map_list');
    const $number = get('.number');

    let postPerPage = 5;
    let currentPage = 1;
    let firstPost,
        lastPost,
        postMod,
        pageNumber,
        totalPage,
        posts = '';

    const pageList = (num) => {
        $ul.innerHTML = '';
        for (let i = firstPost; i < lastPost; i++) {
            const li = document.createElement('li');
            const h4 = document.createElement('h4');
            const adr = document.createElement('div');
            const tel = document.createElement('div');
            const fax = document.createElement('div');
            const date = document.createElement('td');

            h4.innerHTML = `${posts[i].name}<i class="xi-minus"></i>`;
            adr.innerHTML = `<span>ADRESS</span>${posts[i].addr}`;
            tel.innerHTML = `<span>TEL</span>${posts[i].tel}`;
            fax.innerHTML = `<span>FAX</span>--`;

            $ul.append(li);
            li.append(h4, adr, tel, fax);
        }
    };

    const makePaging = () => {
        $number.innerHTML = '';
        const pageEvent = (e) => {
            e.preventDefault();
            currentPage = Number(e.currentTarget.textContent);

            getData();
        };
        for (let i = 1; i <= pageNumber; i++) {
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.textContent = i;

            if (i === currentPage) {
                a.classList.add('on');
            }
            $number.append(a);
        }
        let aAll = document.querySelectorAll('.number a');
        aAll.forEach((item, idx) => {
            item.addEventListener('click', pageEvent);
        });
    };

    const getData = () => {
        posts = storeData;
        totalPage = posts.length;

        postMod = totalPage % postPerPage;
        firstPost = (currentPage - 1) * postPerPage;
        lastPost =
            currentPage === pageNumber && postMod !== 0
                ? firstPost + postMod
                : firstPost + postPerPage;
        pageNumber = Math.ceil(totalPage / postPerPage);

        makePaging();
        pageList(currentPage);
    };
    getData();

    //여기까지 게시판

    //검색결과

    let $search = get('.sub5 .search .txt');
    let $btn = get('.sub5 .find');
    let text = '';

    $btn.addEventListener('click', (e) => {
        $ul.innerHTML = '';
        text = $search.value;
        let result = storeData.filter((item) => {
            return (item.name && item.addr).includes(text);
        });

        result.forEach((li, idx) => {
            posts = result;
            totalPage = posts.length;

            postMod = totalPage % postPerPage;
            firstPost = (currentPage - 1) * postPerPage;
            lastPost =
                currentPage === pageNumber && postMod !== 0
                    ? firstPost + postMod
                    : firstPost + postPerPage;
            pageNumber = Math.ceil(totalPage / postPerPage);

            makePaging();
            pageList(currentPage);
        });
    });

    //

    let $icon = getAll('.sub5 .map_list i');
    let $lis = getAll('.sub5 .map_list li');

    $lis[0].classList.add('on');
    $icon[0].classList.replace('xi-minus', 'xi-plus');

    $icon.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            $icon.forEach((icons) => {
                icons.classList.replace('xi-plus', 'xi-minus');
            });
            $lis.forEach((li) => {
                li.classList.remove('on');
            });
            $lis[idx].classList.add('on');
            e.currentTarget.classList.replace('xi-minus', 'xi-plus');
        });
    });
};

//서브6 : 자료실
const download = () => {
    let $ul = get('.sub6 .catalog ul');
    let $search = get('.sub6 .search .txt');
    let $btn = get('.sub6 .search p');
    let text = '';
    let output = '';

    downData.forEach((item, idx) => {
        output += `<li><div><div><img src=${item.imgurl} alt=${item.title}/>
         <span>
         <a href="#" class="down view">view 
         <i class="xi-book-o"></i></a>
        <a href="#" class="down down">dowmload 
        <i class="xi-download"></i></a>
    </span></div>`;
        output += `<strong class="name"
        >${item.title}</strong
    >`;

        output += '</div></li>';
    });
    $ul.innerHTML = output;

    $btn.addEventListener('click', (e) => {
        output = '';
        text = $search.value;
        let result = downData.filter((item) => {
            return item.title.includes(text);
        });

        result.forEach((li, idx) => {
            output += `<li><div><div><img src=${li.imgurl} alt=${li.title}/>
             <span>
             <a href="#" class="down view">view 
             <i class="xi-book-o"></i></a>
            <a href="#" class="down down">dowmload 
            <i class="xi-download"></i></a>
        </span></div>`;
            output += `<strong class="name"
            >${li.title}</strong
        >`;

            $ul.innerHTML = output;
        });
    });
};
//서브7 : AS/문의
const login = () => {
    let $lis = getAll('.sub7 li');
    let $personal = get('.sub7 li.personal');
    let $business = get('.sub7 li.business');

    $lis.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            $lis.forEach((li) => li.classList.remove('on'));
            e.currentTarget.classList.add('on');
        });
    });
};
//서브8 : 홍보센터
const notice = () => {
    const $tbody = get('.sub8 tbody');
    const $paging = get('.paging');

    let postPerPage = 5;
    let currentPage = 1;
    let firstPost,
        lastPost,
        postMod,
        pageNumber,
        totalPage,
        posts = '';

    const pageList = (num) => {
        $tbody.innerHTML = '';
        for (let i = firstPost; i < lastPost; i++) {
            const tr = document.createElement('tr');
            const id = document.createElement('td');
            const title = document.createElement('td');
            const date = document.createElement('td');

            id.textContent = posts[i].id;
            title.textContent = posts[i].title;
            date.textContent = posts[i].date;

            $tbody.append(tr);
            tr.append(id, title, date);
        }
    };

    const makePaging = () => {
        $paging.innerHTML = '';
        const pageEvent = (e) => {
            e.preventDefault();
            currentPage = Number(e.currentTarget.textContent);

            getData();
        };
        for (let i = 1; i <= pageNumber; i++) {
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.textContent = i;

            if (i === currentPage) {
                a.classList.add('on');
            }
            $paging.append(a);
        }
        let aAll = document.querySelectorAll('.paging a');
        aAll.forEach((item, idx) => {
            item.addEventListener('click', pageEvent);
        });
    };

    const getData = () => {
        posts = noticeData;
        totalPage = posts.length;

        postMod = totalPage % postPerPage;
        firstPost = (currentPage - 1) * postPerPage;
        lastPost =
            currentPage === pageNumber && postMod !== 0
                ? firstPost + postMod
                : firstPost + postPerPage;
        pageNumber = Math.ceil(totalPage / postPerPage);

        makePaging();
        pageList(currentPage);
    };
    getData();
};

const submit = () => {
    if (location.pathname.split('/').pop() === 'sub1.html') {
        brand();
    } else if (location.pathname.split('/').pop() === 'sub3.html') {
        care();
    } else if (location.pathname.split('/').pop() === 'sub5.html') {
        store();
    } else if (location.pathname.split('/').pop() === 'sub6.html') {
        download();
    } else if (location.pathname.split('/').pop() === 'sub7.html') {
        login();
    } else if (location.pathname.split('/').pop() === 'sub8.html') {
        notice();
    }
};

(() => {
    submit();
})();
