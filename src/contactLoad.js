const contactLoad = () =>
{
    const content = document.querySelector("#content");

    const contact = document.createElement('section');
    contact.setAttribute('class', 'contact');
    
    //TEXT
    const textDiv = document.createElement('div');
    textDiv.setAttribute('class', 'text');

    const header = document.createElement('h1');
    header.appendChild(document.createTextNode('Contact'));
    const p1 = document.createElement('p');
    p1.appendChild(document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic, et dolorum laudantium sed, nam consectetur quisquam, exercitationem nostrum nulla fugiat ea odit qui tempora quaerat laborum recusandae voluptas veniam?'));
    const p2 = document.createElement('p');
    p2.appendChild(document.createTextNode("If you need to get in contact with us imediately please call:  (305)-123-4567"));
    const p3 = document.createElement('p');
    p3.appendChild(document.createTextNode("Or email us at: l'Jep@ljp.com"));

    textDiv.appendChild(header);
    textDiv.appendChild(p1);
    textDiv.appendChild(p2);
    textDiv.appendChild(p3);   
    contact.appendChild(textDiv);

    //FORM
    const formDiv = document.createElement('div');
    formDiv.setAttribute('class', 'form');

    const inBx1 = document.createElement('div');
    inBx1.setAttribute('class', 'inputBx');
    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('name', '');
    input1.setAttribute('placeholder', 'Name');
    inBx1.appendChild(input1);

    const inBx2 = document.createElement('div');
    inBx2.setAttribute('class', 'inputBx');
    const input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('name', '');
    input2.setAttribute('placeholder', 'Phone No.');
    inBx2.appendChild(input2);

    const inBx3 = document.createElement('div');
    inBx3.setAttribute('class', 'inputBx');
    const input3 = document.createElement('input');
    input3.setAttribute('type', 'text');
    input3.setAttribute('name', '');
    input3.setAttribute('placeholder', 'Email');
    inBx3.appendChild(input3);

    const inBx4 = document.createElement('div');
    inBx4.setAttribute('class', 'inputBx');
    const input4 = document.createElement('input');
    input4.setAttribute('type', 'text');
    input4.setAttribute('name', '');
    input4.setAttribute('placeholder', 'Subject');
    inBx4.appendChild(input4);

    const inBx5 = document.createElement('div');
    inBx5.setAttribute('class', 'inputBx');
    const input5 = document.createElement('textarea');
    input5.setAttribute('placeholder', 'Write your message here');
    inBx5.appendChild(input5);

    const inBx6 = document.createElement('div');
    inBx6.setAttribute('class', 'inputBx');
    const input6 = document.createElement('input');
    input6.setAttribute('type', 'submit');
    input6.setAttribute('name', '');
    input6.setAttribute('Value', 'Share Feedback');
    inBx6.appendChild(input6);
    
    formDiv.appendChild(inBx1);
    formDiv.appendChild(inBx2);
    formDiv.appendChild(inBx3);
    formDiv.appendChild(inBx4);
    formDiv.appendChild(inBx5);
    formDiv.appendChild(inBx6);

    contact.appendChild(formDiv);
    content.appendChild(contact);

    return
};

export{ contactLoad };