import createHtmlElement from './createHtmlElement'
export default function createList(objOfAttributes = undefined, arrayOfData) {
    const ul = createHtmlElement(objOfAttributes, 'ul');
    let borderId = 0;
    for (let i = 0; i < arrayOfData.length; i++) {
        const li = createHtmlElement({
            id: arrayOfData[i].id
        }, 'li');
        const liInnerText = createHtmlElement({
            className: 'liInnerText'
        }, 'span');
        if (arrayOfData[i].id > borderId) {
            borderId = arrayOfData[i].id;
        }
        liInnerText.innerText = arrayOfData[i].title;
        li.appendChild(liInnerText);
        ul.appendChild(li);
    }
    sessionStorage.setItem('borderId', borderId);
    return ul;
}