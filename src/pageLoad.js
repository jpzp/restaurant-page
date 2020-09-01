const pageLoad = () => {
    const content = document.querySelector("#content");

    //info/resv
    const infoCol = document.createElement('section');
    infoCol.setAttribute('class', 'column');

    const name = document.createElement('h1');
    const text = document.createElement('p');
    name.appendChild(document.createTextNode('L\'Jep'));
    text.appendChild(document.createTextNode('Lorem ipsum dolor sit amet, quo labitur labores ullamcorper eu, et libris regione explicari qui. Quo eu dicam delicata postulant, recusabo abhorreant definiebas an ius, facer accommodare quo et.' +
        ' Ad his accusam sensibus postulant, veritus postulant scribentur ius id.'));

    infoCol.appendChild(name);
    infoCol.appendChild(text);

    //reserve
    const resv = document.createElement('div');
    resv.setAttribute('class', 'reserve')

    const res = document.createElement('h2');
    res.appendChild(document.createTextNode('Reserve'));

    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'inputBx');
    const fullname = document.createElement('input');
    fullname.setAttribute('type', 'text');
    fullname.setAttribute('name', '');
    fullname.setAttribute('placeholder', 'Full Name');
    nameDiv.appendChild(fullname);

    const dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'inputBx');
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('name', '');
    date.required = true;
    dateDiv.appendChild(date);

    const timeDiv = document.createElement('div');
    timeDiv.setAttribute('class', 'inputBx');
    const time = document.createElement('input');
    time.setAttribute('type', 'time');
    time.setAttribute('name', '');
    time.required = true;
    timeDiv.appendChild(time);

    resv.appendChild(res);
    resv.appendChild(nameDiv);
    resv.appendChild(dateDiv);
    resv.appendChild(timeDiv);
    infoCol.appendChild(resv);

    const addr = document.createElement('section');
    addr.setAttribute('class', 'address');
    const address = document.createElement('h2');
    address.appendChild(document.createTextNode('Address'));
    const addr1 = document.createElement('p');
    addr1.appendChild(document.createTextNode('4444 Forget-a-boutet Ln'));
    const addr2 = document.createElement('p');
    addr2.appendChild(document.createTextNode('Phantasy, Fl 32168'));
    addr.appendChild(address);
    addr.appendChild(addr1);
    addr.appendChild(addr2);

    infoCol.appendChild(addr);

    const socials = document.createElement('section');
    socials.setAttribute('class', 'socials');

    const list = document.createElement('ul');

    const socText = document.createElement('p');
    socText.appendChild(document.createTextNode('Follow us on : '));

    const li1 = document.createElement('li');
    const a1 = document.createElement('a');
    a1.setAttribute('href', '#');
    const img1 = document.createElement('img');
    img1.setAttribute('src', 'https://image.flaticon.com/icons/png/512/59/59439.png');
    a1.appendChild(img1);
    li1.appendChild(a1);

    const li2 = document.createElement('li');
    const a2 = document.createElement('a');
    a2.setAttribute('href', '#');
    const img2 = document.createElement('img');
    img2.setAttribute('src', 'https://image.flaticon.com/icons/svg/2111/2111738.svg');
    a2.appendChild(img2);
    li2.appendChild(a2);

    const li3 = document.createElement('li');
    const a3 = document.createElement('a');
    a3.setAttribute('href', '#');
    const img3 = document.createElement('img');
    img3.setAttribute('src', 'https://image.flaticon.com/icons/svg/747/747393.svg');
    a3.appendChild(img3);
    li3.appendChild(a3);

    list.appendChild(socText);
    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
    socials.appendChild(list);
    infoCol.appendChild(socials);

    content.appendChild(infoCol);
    return
};

export { pageLoad };
