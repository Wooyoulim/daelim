const noticeData = [
    {
        id: 1,
        title: '[보도자료] “욕실 리모델링∙위생도기 부문 2관왕” 대림바스, 한국산업의 브랜드파워(K-BPI) 2개 부문 1위',
        date: '2023-12-10',
    },
    {
        id: 2,
        title: '[보도자료] “6리터 초과 양변기 불법” ‘세계 물의 날’… 욕실업계 “양변기만 바꿔도 물 절약”',
        date: '2023-12-27',
    },
    {
        id: 3,
        title: '[보도자료] 대림바스, 홈케어·재활·복지 전시회서 유니버셜 디자인 제품 선봬',
        date: '2023-12-28',
    },
    {
        id: 4,
        title: '[보도자료] 대림바스, ‘BATH COLLECTION’ 위생도기 시리즈 3종 출시',
        date: '2023-12-31',
    },
    {
        id: 5,
        title: '[보도자료] 대림바스&키친, 욕실 패키지 ‘무드 베이지’ 출시',
        date: '2024-01-02',
    },
    {
        id: 6,
        title: '[보도자료] 대림 바스&키친, 최대 47% 할인 리모델링 기획전 실시',
        date: '2024-01-09',
    },
    {
        id: 7,
        title: '[보도자료] 대림바스, 말레이시아 국제 건축전시회 ‘아키덱스 2023’ 참가',
        date: '2024-01-18',
    },
    {
        id: 8,
        title: '[보도자료] 대림바스, 위생도기 기술력 BI 리뉴얼… “자체 기술력 강화”',
        date: '2024-01-21',
    },
    {
        id: 9,
        title: '[보도자료] 대림바스&키친, 리모델링 추석 감사제 실시··· 최대 55% 할인',
        date: '2024-01-26',
    },
    {
        id: 10,
        title: '[보도자료] 대림바스, 이나피스퀘어와 일러스트 더한 욕실 콜라보 제품 선봬',
        date: '2024-01-30',
    },
    {
        id: 11,
        title: '[보도자료] 대림바스, 홈케어 서비스 확대… 케어 사업 본격화',
        date: '2024-02-03',
    },
    {
        id: 12,
        title: '[보도자료] 대림바스, 2023 디자인 어워드 수상 쾌거',
        date: '2024-02-12',
    },
    {
        id: 13,
        title: '[보도자료] 대림바스, 안전보건경영시스템 [ISO45001] 인증 획득',
        date: '2024-02-20',
    },
    {
        id: 14,
        title: '[보도자료] 대림바스, 감염 질환 예방 위한 위생·살균 아이템 추천',
        date: '2024-03-23',
    },
    {
        id: 15,
        title: '[보도자료] 대림바스, 국내 최초로 장루·요루 환자 위한 세척기 세트 개발',
        date: '2024-04-21',
    },
    {
        id: 16,
        title: '[보도자료] 대림바스, 국내 특급 호텔∙리조트 시장 점유율 80%로 ‘1위’',
        date: '2024-04-23',
    },
    {
        id: 17,
        title: '[보도자료] 대림케어, 주방 상판 UV코팅 케어서비스 새롭게 선봬',
        date: '2024-04-24',
    },
    {
        id: 18,
        title: '[보도자료] 대림바스, 한국산업의 브랜드파워(K-BPI) 2개 부문서 1위 차지',
        date: '2024-04-28',
    },
    {
        id: 19,
        title: '[보도자료] 대림바스, 강남 3구 하이엔드 아파트에 일체형비데 5만여 대 납품',
        date: '2024-04-30',
    },
];

const storeData = [
    {
        id: 1,
        name: '용산효창점',
        addr: '서울 용산구 효창원로 145, 1층 흥산도기타일',
        tel: '02-2269-4567',
    },
    {
        id: 2,
        name: '천안안산점',
        addr: '충남 천안시 동남구 중앙로121',
        tel: '101-2001-0401',
    },
    {
        id: 3,
        name: '바스앤디자인',
        addr: '경남 창원시 진해구 웅천로 13',
        tel: '055-221-0970',
    },
    {
        id: 4,
        name: '제주점',
        addr: '제주특별자치도 제주시 연북로 993',
        tel: '064-092-3146',
    },
    {
        id: 5,
        name: '용인수지 중앙점',
        addr: '경기 용인시 신봉1로 145, 1층 115호',
        tel: '031-9702-9336',
    },
    {
        id: 6,
        name: '음성점',
        addr: '충북 음성군 금왕읍 무극로 244번길',
        tel: '043-2193-3012',
    },
    {
        id: 7,
        name: '부평 부개점',
        addr: '서울 용산구 효창원로 145, 1층 흥산도기타일',
        tel: '02-2269-4567',
    },
    {
        id: 8,
        name: '수원점',
        addr: '서울 용산구 효창원로 145, 1층 흥산도기타일',
        tel: '02-2269-4567',
    },
    {
        id: 9,
        name: '진주 평거점',
        addr: '서울 용산구 효창원로 145, 1층 흥산도기타일',
        tel: '02-2269-4567',
    },
    {
        id: 10,
        name: '울산 삼산점',
        addr: '울산 남구 남중로 45',
        tel: '052-228-2312',
    },
    {
        id: 11,
        name: '목포 북항점',
        addr: '서울 용산구 효창원로 145, 1층 흥산도기타일',
        tel: '02-2269-4567',
    },
    {
        id: 12,
        name: '진해점',
        addr: '서울 용산구 효창원로 145, 1층 흥산도기타일',
        tel: '02-2269-4567',
    },
    {
        id: 13,
        name: '김해 외동점',
        addr: '서울 용산구 효창원로 145, 1층 흥산도기타일',
        tel: '02-2269-4567',
    },
];

const downData = [
    { id: 1, imgurl: 'images/content/sub6/down0.jpg', title: '[바스&키친] 2024 욕실 리모델링' },
    { id: 2, imgurl: 'images/content/sub6/down1.jpg', title: '[바스] 2024 종합 카탈로그 (영문)' },
    {
        id: 3,
        imgurl: 'images/content/sub6/down2.jpg',
        title: '[바스] 공공시설 친환경 위생도기 이용 가이드',
    },
    { id: 4, imgurl: 'images/content/sub6/down3.jpg', title: '[바스] 2023 종합 카탈로그 (국문)' },
    { id: 5, imgurl: 'images/content/sub6/down4.jpg', title: '[바스] 재건축 리플렛' },
    { id: 6, imgurl: 'images/content/sub6/down5.jpg', title: '[바스] 일체형비데 호텔 납품 사례' },
];

export { storeData, noticeData, downData };
