const hybrids = [
    { id: 'afina', name: 'Афина', fao: '270-350', yield: 12, purpose: 'Зерно', height: '270', earLength: '18', rows: '14-18', grainsPerRow: '36', thousandSeedsMass: '335', img: 'afina.jpeg', desc: 'Ранний зерновой гибрид, компактный и надежный на засушливых полях.' },
    { id: 'aurora', name: 'Аврора', fao: 360, yield: 14, purpose: 'Зерно', height: '280', earLength: '18-20', rows: '16-18', grainsPerRow: '36', thousandSeedsMass: '335', img: 'https://placehold.co/400x300/1b4d3e/white?text=FENIKKS+Aurora', desc: 'Стабильный зерновой гибрид с высоким потенциалом урожайности и отличной адаптацией.' },
    { id: 'atlant', name: 'Атлант', fao: 480, yield: 16, purpose: 'Зерно', height: '200', earLength: '19', rows: '18-20', grainsPerRow: '38', thousandSeedsMass: '370', img: 'atlant.jpg.jpg', desc: 'Сильный зерновой гибрид для интенсивного производства и хорошей калибровки.' },
    { id: 'gobi', name: 'Гоби', fao: 520, yield: 18, purpose: 'Зерно', height: '310', earLength: '20-24', rows: '18-20', grainsPerRow: '40', thousandSeedsMass: '358', img: 'gobi.jpg', desc: 'Чемпион 2018. Универсальный зерновой гибрид с отличной урожайностью и гибкой технологией выращивания.' },
    { id: 'spartak', name: 'Спартак', fao: 550, yield: 19, purpose: 'Зерно', height: '340', earLength: '22-26', rows: '16-20', grainsPerRow: '42', thousandSeedsMass: '361', img: 'spartak.jpg', desc: 'Мощный зерновой гибрид с хорошим иммунитетом к полеганию и стабильными початками.' },
    { id: '958plus', name: '958Plus', fao: 580, yield: 20, purpose: 'Зерно', height: '280', earLength: '25', rows: '14-18', grainsPerRow: '46', thousandSeedsMass: '365', img: '958.jpg', desc: 'Широкозерный высокопродуктивный гибрид для интенсивной агротехники.' },
    { id: 'francesca', name: 'Франческа', fao: 650, yield: 22, purpose: 'Зерно', height: '400', earLength: '26-30', rows: '18-20', grainsPerRow: '42', thousandSeedsMass: '380', img: 'francheska.jpeg', desc: 'Позднеспелый зерновой гибрид с мощным потенциалом и высокой массой зерна.' },
    { id: 'takelau', name: 'Такелау', fao: 580, yield: 19, purpose: 'Силос', height: '330', earLength: '24-28', rows: '16-20', grainsPerRow: '46', thousandSeedsMass: '365', img: 'takelau.jpg', desc: 'Силосный гибрид с хорошей урожайностью зеленой массы и стабильным ростом.' },
    { id: 'celentano', name: 'Челентано', fao: 620, yield: 22, purpose: 'Силос', height: '420', earLength: '24-28', rows: '18-20', grainsPerRow: '44', thousandSeedsMass: '375', img: 'chelentano.jpg', desc: 'Силосный гибрид с мощным ростом и высоким качеством кормовой массы.' },
    { id: 'eros', name: 'Эрос', fao: 650, yield: 26, purpose: 'Силос', height: '310', earLength: '19', rows: '16', grainsPerRow: '38', thousandSeedsMass: '359', img: 'Eros.jpg', desc: 'Высокоурожайный силосный гибрид с отличным накоплением массы на ранних сроках.' }
];

let compareList = [];
let currentLang = 'ru';

const translations = {
    ru: {
        navLogo: '🌽 БахАгро',
        searchPlaceholder: 'Поиск гибрида...',
        langTitle: 'Сменить язык',
        headerTitle: 'БахАгро',
        headerSubtitle: 'Семена кукурузы для профессиональных фермеров Казахстана',
        badgeText: 'Лабораторная всхожесть 96% – 98%',
        introTitle: 'Поставки напрямую с заводов. Полное соответствие Госреестру РК',
        introBoxTitle: '🌽 Семена Кукурузы',
        introBoxText: 'Высокая энергия прорастания, идеальная калибровка под сеялки точного высева. Протравлено фунгицидами и инсектицидами.',
        catalogTitle: 'Каталог гибридов кукурузы FENIKKS',
        compareTitle: '📊 Выбранные гибриды для сравнения',
        tableIntro: 'Гибриды кукурузы «FENIKKS» характеризуются высоким потенциалом урожайности и отличной устойчивостью к болезням и засухе.',
        table1Title: 'Кукуруза (зерно)',
        table2Title: 'Кукуруза (силос)',
        tableHeaders: ['Вид', 'ФАО', 'Высота растения, см', 'Длина початка, см', 'Рядов в початке, шт.', 'Зерен в ряду, шт.', 'Масса 1000 зерен, г', 'Потенц. урож., т/га'],
        toolsTitle: 'Инструменты Агронома',
        wizardHeader: '🎯 Мастер подбора гибрида',
        wizardRegionLabel: 'Регион посадки:',
        regionSouth: 'Юг (Алматы, Туркестан, Жамбыл)',
        regionNorth: 'Север (Костанай, СКО, Акмола)',
        wizardPurposeLabel: 'Назначение:',
        purposeGrain: 'Зерно (Макс. урожайность)',
        purposeDrought: 'Засухоустойчивость',
        purposeSilage: 'Силос (корм)',
        recommendButton: 'Подобрать семена',
        calcHeader: '🧮 Калькулятор потребности',
        calcAreaLabel: 'Площадь посева (Гектар):',
        calcAreaPlaceholder: 'Например: 50',
        calcDensityLabel: 'Густота стояния (тыс. шт/га):',
        calculateButton: 'Рассчитать',
        whatsappCta: '💬 Связаться с нами в WhatsApp',
        docsTitle: 'Документация и Качество',
        cert1Title: '🔬 96-98%',
        cert1Desc: 'Лабораторная всхожесть',
        cert2Title: '📜 Госреестр РК',
        cert2Desc: 'Все гибриды сертифицированы',
        cert3Title: '🛡️ Протравлено',
        cert3Desc: 'Фунгициды + Инсектициды',
        faqTitle: 'Частые вопросы',
        faqQuestion1: 'Как быстро осуществляется доставка?',
        faqAnswer1: 'Доставка семян в областные центры после оплаты, до 30 апреля.',
        faqQuestion2: 'В чем поставляются семена?',
        faqAnswer2: 'Семена упакованы в фирменные бумажные мешки. В 1 посевной единице — 80 000 семян.',
        footerText: '© 2026 ТОО/ИП БахАгро. Доставка семян в областные центры после оплаты, до 30 апреля.',
        compareTitleCard: 'Сравнить',
        detailsButton: 'Подробнее',
        faoLabel: 'ФАО',
        yieldLabel: 'Урожайность',
        yieldUnit: 'т/га',
        purposeLabel: 'Назначение',
        heightLabel: 'Высота растения',
        earLengthLabel: 'Длина початка',
        rowsLabel: 'Рядов в початке',
        grainsLabel: 'Зерен в ряду',
        massLabel: 'Масса 1000 зерен',
        yieldAmountLabel: 'Потенциальная урожайность',
        unitCm: 'см',
        unitGram: 'г',
        recommendPrefix: '✅ Рекомендуем:',
        recommendReason: 'Почему',
        recommendDesc: 'Идеально подходит под ваши параметры.',
        alertInvalidArea: 'Введите корректную площадь',
        calcResultIntro: 'На площадь',
        calcResultOutro: 'Вам потребуется',
        bagsLabel: 'посевных единиц (мешков)',
        chatHeader: '🤖 AI Агроном БахАгро',
        chatIntro: 'Здравствуйте! Я цифровой агроном. Напишите ваш регион и тип почвы, и я помогу подобрать идеальный гибрид кукурузы.',
        chatPlaceholder: 'Введите ваш вопрос...',
        chatDefaultReply: 'Для точного ответа мне нужно больше данных. Подскажите, планируете ли вы полив (орошение)?',
        chatSouthReply: 'Для южных регионов с хорошим орошением отлично подойдет FENIKKS Челентано (ФАО 510). Максимальная отдача зерна!',
        championBadge: '⭐ Чемпион 2018'
    },
    kz: {
        navLogo: '🌽 БахАгро',
        searchPlaceholder: 'Гибридты іздеу...',
        langTitle: 'Тілді ауыстыру',
        headerTitle: 'БахАгро',
        headerSubtitle: 'Қазақстан фермерлері үшін жүгері тұқымы',
        badgeText: 'Зертханалық өнгіштік 96% – 98%',
        introTitle: 'Зауыттан тікелей жеткізу. ҚР мемлекеттік тізіліміне толық сәйкестік',
        introBoxTitle: '🌽 Жүгері тұқымы',
        introBoxText: 'Жоғары өну энергиясы, дәл сеялкаларға сай калибрленген. Фунгицидтер мен инсектицидтермен өңделген.',
        catalogTitle: 'FENIKKS жүгері гибридтер каталогы',
        compareTitle: '📊 Салыстыруға таңдалған гибридтер',
        tableIntro: 'FENIKKS жүгері гибридтері өнімділігі жоғары және ауруға, құрғақшылыққа төзімділігімен ерекшеленеді.',
        table1Title: 'Жүгері (дана)',
        table2Title: 'Жүгері (силос)',
        tableHeaders: ['Түрі', 'ФАО', 'Өсімдік биіктігі, см', 'Жүгері орамы ұз., см', 'Қалталар саны', 'Қатардағы дәндер, шт.', '1000 дәннің салмағы, г', 'Өнім көлемі, т/га'],
        toolsTitle: 'Агроном құралдары',
        wizardHeader: '🎯 Гибридті таңдау шебері',
        wizardRegionLabel: 'Егу аймағы:',
        regionSouth: 'Оңтүстік (Алматы, Түркістан, Жамбыл)',
        regionNorth: 'Солтүстік (Қостанай, СҚО, Ақмола)',
        wizardPurposeLabel: 'Мақсаты:',
        purposeGrain: 'Дана (Макс. өнім)',
        purposeDrought: 'Құрғақшылыққа төзімді',
        purposeSilage: 'Силос (мал азығы)',
        recommendButton: 'Тұқымды таңдаңыз',
        calcHeader: '🧮 Шаруашылық калькуляторы',
        calcAreaLabel: 'Егіс алаңы (га):',
        calcAreaPlaceholder: 'Мысалы: 50',
        calcDensityLabel: 'Тығыздық (мыңбұт/га):',
        calculateButton: 'Есептеу',
        whatsappCta: '💬 WhatsApp арқылы байланысу',
        docsTitle: 'Құжаттама және сапа',
        cert1Title: '🔬 96-98%',
        cert1Desc: 'Зертханалық өнгіштік',
        cert2Title: '📜 ҚР мемлекеттік тізілімі',
        cert2Desc: 'Барлық гибридтер сертификатталған',
        cert3Title: '🛡️ Өңделген',
        cert3Desc: 'Фунгицидтер + инсектицидтер',
        faqTitle: 'Жиі қойылатын сұрақтар',
        faqQuestion1: 'Жеткізу қанша уақытта жүзеге асады?',
        faqAnswer1: 'Төлегеннен кейін дәндерді облыс орталықтарына жеткізу, 30 сәуірге дейін.',
        faqQuestion2: 'Тұқымдар қалай жеткізіледі?',
        faqAnswer2: 'Тұқымдар фирмалық қаптарға оралған. 1 егістік бірлік — 80 000 дән.',
        footerText: '© 2026 ТОО/ШЖҚ БахАгро. Төлегеннен кейін дәндерді облыс орталықтарына жеткізу, 30 сәуірге дейін.',
        compareTitleCard: 'Салыстыру',
        detailsButton: 'Толығырақ',
        faoLabel: 'ФАО',
        yieldLabel: 'Өнімдік',
        yieldUnit: 'т/га',
        purposeLabel: 'Мақсаты',
        heightLabel: 'Өсімдік биіктігі',
        earLengthLabel: 'Жүгері орамы ұз.',
        rowsLabel: 'Қалталар саны',
        grainsLabel: 'Қатардағы дәндер',
        massLabel: '1000 дәннің салмағы',
        yieldAmountLabel: 'Өнім көлемі',
        unitCm: 'см',
        unitGram: 'г',
        recommendPrefix: '✅ Ұсынамыз:',
        recommendReason: 'Неліктен',
        recommendDesc: 'Сіздің талаптарыңызға сай келеді.',
        alertInvalidArea: 'Дұрыс алаңды енгізіңіз',
        calcResultIntro: 'Алаңға',
        calcResultOutro: 'Қажет болады',
        bagsLabel: 'егерек бірлігі (қапшықтар)',
        chatHeader: '🤖 AI Агроном БахАгро',
        chatIntro: 'Сәлеметсіз бе! Мен цифрлық агрономмын. Өзіңіздің аймағыңызды және топырақ түрін жазыңыз, мен ең жақсы гибридті таңдауға көмектесемін.',
        chatPlaceholder: 'Сұрағыңызды енгізіңіз...',
        chatDefaultReply: 'Толық жауап беру үшін қосымша ақпарат қажет. Сіз суару жоспарлап отырсыз ба?',
        chatSouthReply: 'Оңтүстік аймақтарда суару жақсы болса, FENIKKS Челентано (ФАО 510) өте қолайлы. Өнімділігі жоғары!',
        championBadge: '⭐ 2018 жылғы жеңімпаз'
    }
};

function translatePage(lang) {
    const t = translations[lang];
    currentLang = lang;
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'kk';
    document.getElementById('lang-switch').innerText = lang === 'ru' ? 'RU' : 'KZ';
    document.getElementById('lang-switch').title = t.langTitle;
    document.getElementById('nav-logo').innerText = t.navLogo;
    document.getElementById('searchInput').placeholder = t.searchPlaceholder;
    document.getElementById('header-title').innerText = t.headerTitle;
    document.getElementById('header-subtitle').innerText = t.headerSubtitle;
    document.getElementById('badge-text').innerText = t.badgeText;
    document.getElementById('intro-title').innerText = t.introTitle;
    document.getElementById('intro-box-title').innerText = t.introBoxTitle;
    document.getElementById('intro-box-text').innerText = t.introBoxText;
    document.getElementById('catalog-title').innerText = t.catalogTitle;
    document.getElementById('compare-title').innerText = t.compareTitle;
    document.getElementById('table-intro').innerText = t.tableIntro;
    document.getElementById('table1-title').innerText = t.table1Title;
    document.getElementById('table2-title').innerText = t.table2Title;
    document.getElementById('tools-title').innerText = t.toolsTitle;
    document.getElementById('wizard-header').innerText = t.wizardHeader;
    document.getElementById('wizard-region-label').innerText = t.wizardRegionLabel;
    document.getElementById('wiz-region-south').innerText = t.regionSouth;
    document.getElementById('wiz-region-north').innerText = t.regionNorth;
    document.getElementById('wizard-purpose-label').innerText = t.wizardPurposeLabel;
    document.getElementById('wiz-purpose-grain').innerText = t.purposeGrain;
    document.getElementById('wiz-purpose-drought').innerText = t.purposeDrought;
    document.getElementById('wiz-purpose-silage').innerText = t.purposeSilage;
    document.getElementById('recommend-btn').innerText = t.recommendButton;
    document.getElementById('calc-header').innerText = t.calcHeader;
    document.getElementById('calc-area-label').innerText = t.calcAreaLabel;
    document.getElementById('calc-area').placeholder = t.calcAreaPlaceholder;
    document.getElementById('calc-density-label').innerText = t.calcDensityLabel;
    document.getElementById('calculate-btn').innerText = t.calculateButton;
    document.getElementById('whatsapp-cta').innerText = t.whatsappCta;
    document.getElementById('docs-title').innerText = t.docsTitle;
    document.getElementById('cert1-title').innerText = t.cert1Title;
    document.getElementById('cert1-desc').innerText = t.cert1Desc;
    document.getElementById('cert2-title').innerText = t.cert2Title;
    document.getElementById('cert2-desc').innerText = t.cert2Desc;
    document.getElementById('cert3-title').innerText = t.cert3Title;
    document.getElementById('cert3-desc').innerText = t.cert3Desc;
    document.getElementById('faq-title').innerText = t.faqTitle;
    document.getElementById('faq-question-1').childNodes[0].textContent = t.faqQuestion1 + ' ';
    document.getElementById('faq-answer-1').innerText = t.faqAnswer1;
    document.getElementById('faq-question-2').childNodes[0].textContent = t.faqQuestion2 + ' ';
    document.getElementById('faq-answer-2').innerText = t.faqAnswer2;
    document.getElementById('footer-text').innerText = t.footerText;
    const gobiBadge = document.getElementById('gobi-badge');
    if (gobiBadge) gobiBadge.innerText = t.championBadge;
    document.getElementById('chat-header-text').innerText = t.chatHeader;
    document.getElementById('chat-intro-text').innerText = t.chatIntro;
    document.getElementById('chat-input-field').placeholder = t.chatPlaceholder;

    document.querySelectorAll('.fenikks-table thead tr th').forEach((th, index) => {
        if (t.tableHeaders[index]) th.innerText = t.tableHeaders[index];
    });

    renderCatalog();
    renderComparison();
}

function toggleLanguage() {
    translatePage(currentLang === 'ru' ? 'kz' : 'ru');
}

function renderCatalog() {
    const container = document.getElementById('catalog-container');
    container.innerHTML = '';
    const t = translations[currentLang];

    hybrids.forEach(h => {
        const card = document.createElement('div');
        card.className = 'catalog-card';
        card.dataset.name = h.name.toLowerCase();

        const compareCheckbox = document.createElement('input');
        compareCheckbox.type = 'checkbox';
        compareCheckbox.className = 'compare-checkbox';
        compareCheckbox.title = t.compareTitleCard;
        compareCheckbox.checked = compareList.some(item => item.id === h.id);
        compareCheckbox.addEventListener('change', () => toggleCompare(h.id, compareCheckbox.checked));

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'card-image-wrapper';

        const img = document.createElement('img');
        img.src = h.img;
        img.alt = h.name;
        img.className = 'corn-img';
        img.addEventListener('error', () => {
            img.src = `https://placehold.co/400x300/1b4d3e/white?text=FENIKKS+${encodeURIComponent(h.name)}`;
        });

        imageWrapper.appendChild(img);

        const info = document.createElement('div');
        info.className = 'catalog-info';

        const title = document.createElement('h4');
        title.textContent = `FENIKKS ${h.name}`;

        const description = document.createElement('p');
        description.className = 'catalog-info-description';
        description.textContent = `${t.faoLabel}: ${h.fao} | ${t.yieldLabel}: ${h.yield} ${t.yieldUnit}`;

        const detailsButton = document.createElement('button');
        detailsButton.className = 'btn-primary details-btn';
        detailsButton.textContent = t.detailsButton;
        detailsButton.addEventListener('click', () => openModal(h.id));

        info.appendChild(title);
        info.appendChild(description);
        info.appendChild(detailsButton);

        card.appendChild(compareCheckbox);
        card.appendChild(imageWrapper);
        card.appendChild(info);
        container.appendChild(card);
    });
}

function filterCatalog() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.catalog-card').forEach(card => {
        card.style.display = card.getAttribute('data-name').includes(query) ? 'flex' : 'none';
    });
}

function openModal(id) {
    const h = hybrids.find(item => item.id === id);
    const t = translations[currentLang];
    document.getElementById('modal-title').innerHTML = `FENIKKS ${h.name} ${id === 'gobi' ? `<span class="champion-badge">(${t.championBadge})</span>` : ''}`;
    document.getElementById('modal-desc').innerText = h.desc;
    document.getElementById('modal-table').innerHTML = `
        <tr><td>${t.purposeLabel}</td><td>${h.purpose}</td></tr>
        <tr><td>${t.faoLabel}</td><td>${h.fao}</td></tr>
        <tr><td>${t.heightLabel}</td><td>${h.height} см</td></tr>
        <tr><td>${t.earLengthLabel}</td><td>${h.earLength} см</td></tr>
        <tr><td>${t.rowsLabel}</td><td>${h.rows}</td></tr>
        <tr><td>${t.grainsLabel}</td><td>${h.grainsPerRow}</td></tr>
        <tr><td>${t.massLabel}</td><td>${h.thousandSeedsMass} г</td></tr>
        <tr><td>${t.yieldAmountLabel}</td><td>${h.yield} ${t.yieldUnit}</td></tr>
    `;
    const modal = document.getElementById('hybrid-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

window.onclick = function(event) {
    const modal = document.getElementById('hybrid-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};


function toggleCompare(id, isChecked) {
    if (isChecked) {
        compareList.push(hybrids.find(h => h.id === id));
    } else {
        compareList = compareList.filter(h => h.id !== id);
    }
    renderComparison();
}

function renderComparison() {
    const section = document.getElementById('compare-section');
    const table = document.getElementById('compare-table');
    if (compareList.length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    const t = translations[currentLang];
    let headers = `<th>${t.compareTitleCard}</th>`;
    let rPurpose = `<tr><td><strong>${t.purposeLabel}</strong></td>`;
    let rFao = `<tr><td><strong>${t.faoLabel}</strong></td>`;
    let rYield = `<tr><td><strong>${t.yieldAmountLabel}</strong></td>`;
    let rHeight = `<tr><td><strong>${t.heightLabel}, ${t.unitCm}</strong></td>`;
    let rEar = `<tr><td><strong>${t.earLengthLabel}, ${t.unitCm}</strong></td>`;
    let rRows = `<tr><td><strong>${t.rowsLabel}</strong></td>`;
    let rGrains = `<tr><td><strong>${t.grainsLabel}</strong></td>`;
    let rMass = `<tr><td><strong>${t.massLabel}, ${t.unitGram}</strong></td>`;

    compareList.forEach(h => {
        headers += `<th>${h.name}</th>`;
        rPurpose += `<td>${h.purpose}</td>`;
        rFao += `<td>${h.fao}</td>`;
        rYield += `<td>${h.yield} т/га</td>`;
        rHeight += `<td>${h.height}</td>`;
        rEar += `<td>${h.earLength}</td>`;
        rRows += `<td>${h.rows}</td>`;
        rGrains += `<td>${h.grainsPerRow}</td>`;
        rMass += `<td>${h.thousandSeedsMass}</td>`;
    });

    table.innerHTML = `<thead><tr>${headers}</tr></thead><tbody>${rPurpose}${rFao}${rYield}${rHeight}${rEar}${rRows}${rGrains}${rMass}</tbody>`;
}

function recommendSeed() {
    const region = document.getElementById('wiz-region').value;
    const purpose = document.getElementById('wiz-purpose').value;
    let rec = hybrids[0];

    if (region === 'south') {
        if (purpose === 'grain') rec = hybrids.find(h => h.id === '958plus');
        if (purpose === 'drought') rec = hybrids.find(h => h.id === 'gobi');
        if (purpose === 'silage') rec = hybrids.find(h => h.id === 'celentano');
    }
    if (region === 'north') {
        if (purpose === 'grain') rec = hybrids.find(h => h.id === 'aurora');
        if (purpose === 'drought') rec = hybrids.find(h => h.id === 'aurora');
        if (purpose === 'silage') rec = hybrids.find(h => h.id === 'takelau');
    }

    const t = translations[currentLang];
    const resBox = document.getElementById('wiz-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `<strong>${t.recommendPrefix} FENIKKS ${rec.name}</strong><br>${t.recommendReason}: ${t.recommendDesc} ${t.faoLabel} ${rec.fao}, ${t.yieldAmountLabel.toLowerCase()} ${rec.yield} ${t.yieldUnit}.`;
}

function calculateSeeds() {
    const area = parseFloat(document.getElementById('calc-area').value);
    const density = parseFloat(document.getElementById('calc-density').value);
    const seedsPerBag = 80;

    if (!area || area <= 0) {
        const t = translations[currentLang];
        return alert(t.alertInvalidArea);
    }

    const totalSeedsThousands = area * density;
    const bagsNeeded = Math.ceil(totalSeedsThousands / seedsPerBag);

    const t = translations[currentLang];
    const resBox = document.getElementById('calc-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `${t.calcResultIntro} <strong>${area} га</strong> ${t.calcResultOutro}:<br>
                        <strong>${bagsNeeded} ${t.bagsLabel}</strong>.`;
}

function toggleFaq(el) {
    const answer = el.nextElementSibling;
    answer.classList.toggle('open');
    el.querySelector('span').innerText = answer.classList.contains('open') ? '−' : '+';
}

window.onscroll = function() {
    document.getElementById('fab-top').style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? 'flex' : 'none';
};

function toggleChat() {
    const chat = document.getElementById('ai-chat');
    chat.style.display = chat.style.display === 'block' ? 'none' : 'block';
}

function handleChatEnter(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.getElementById('chat-input-field');
    const msg = input.value.trim();
    if (!msg) return;

    const body = document.getElementById('chat-body');
    body.innerHTML += `<div class="chat-msg msg-user">${msg}</div>`;
    input.value = '';
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        const t = translations[currentLang];
        let reply = t.chatDefaultReply;
        const lowerMsg = msg.toLowerCase();
        if (lowerMsg.includes('алматы') || lowerMsg.includes('юг') || lowerMsg.includes('оңтүстік') || lowerMsg.includes('almaty')) {
            reply = t.chatSouthReply;
        }

        body.innerHTML += `<div class="chat-msg msg-ai">${reply}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 1000);
}

window.addEventListener('load', () => {
    renderCatalog();
    document.getElementById('searchInput').addEventListener('keyup', filterCatalog);
    document.getElementById('recommend-btn').addEventListener('click', recommendSeed);
    document.getElementById('calculate-btn').addEventListener('click', calculateSeeds);
    document.querySelectorAll('.faq-question').forEach(item => item.addEventListener('click', () => toggleFaq(item)));
    document.getElementById('fab-top').addEventListener('click', () => window.scrollTo(0, 0));
    document.getElementById('fab-ai').addEventListener('click', toggleChat);
    document.getElementById('chat-close').addEventListener('click', toggleChat);
    document.getElementById('chat-send').addEventListener('click', sendChatMessage);
    document.getElementById('chat-input-field').addEventListener('keydown', handleChatEnter);
    document.getElementById('lang-switch').addEventListener('click', toggleLanguage);
    document.getElementById('modal-close').addEventListener('click', () => {
        document.getElementById('hybrid-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    translatePage(currentLang);
});
