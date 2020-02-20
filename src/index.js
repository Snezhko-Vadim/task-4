import createHtmlElement from './createHtmlElement.js'
import getListFromUrl from './getListFromUrl.js'
import createList from './createList.js'
import './styles/style.css'
//import './libs/Fonts-awesome/css/all.css'

const url = 'https://jsonplaceholder.typicode.com/todos';

(async () => {
    const list = await getListFromUrl(url);
    const ul = createList({
        id: 'table'
    }, list);
    for (let child of ul.querySelectorAll('li')) {
        const openChangeWindowBtn = createHtmlElement({
            className: 'fas fa-ellipsis-h'
        }, 'i');
        child.isOpen = false;
        child.isChanged = false;
        child.appendChild(openChangeWindowBtn);
    }
    document.body.appendChild(ul);

    document.getElementById('table').addEventListener('click', (event) => {
        if (event.target.tagName === 'I') {
            const openChangeWindowBtn = event.target;
            const elemOfTable = openChangeWindowBtn.parentNode;
            if (elemOfTable.isOpen === false) {
                openChangeWindowBtn.style.transform = 'rotate(90deg)';
                const changeWindow = createHtmlElement({
                    id: 'changeWindow'
                }, 'div');
                const changeWindowWrapper = createHtmlElement({
                    id: 'changeWindowWrapper',
                }, 'div')
                const btnSave = createHtmlElement({
                    id: 'saveChangeBtn',
                    className: 'changeWindowBtns',
                    innerText: 'Save',
                    disabled: 'disabled'
                }, 'button');
                const btnChange = createHtmlElement({
                    id: 'changeElemBtn',
                    className: 'changeWindowBtns',
                    innerText: 'Change'
                }, 'button');
                const btnDelete = createHtmlElement({
                    id: 'deleteElemBtn',
                    className: 'changeWindowBtns',
                    innerText: 'Delete'
                }, 'button');
                const changeWindowBtns = createHtmlElement({
                    id: 'btnsWrapper'
                }, 'div');
                elemOfTable.appendChild(changeWindow);
                changeWindow.appendChild(changeWindowWrapper);
                changeWindowWrapper.appendChild(changeWindowBtns);
                changeWindowBtns.appendChild(btnChange);
                changeWindowBtns.appendChild(btnDelete);
                changeWindowBtns.appendChild(btnSave);
                changeWindowWrapper.style.display = 'flex';
                elemOfTable.isOpen = true;
                btnDelete.addEventListener('click', () => {
                    elemOfTable.remove();
                })
                btnChange.addEventListener('click', () => {
                    if (!elemOfTable.isChanged) {
                        btnChange.setAttribute('disabled', 'disabled');
                        btnSave.removeAttribute('disabled');
                        elemOfTable.isChanged = true;
                        const changingText = createHtmlElement({
                            id: 'changingText',
                            value: elemOfTable.querySelector('span').innerText
                        }, 'input');
                        sessionStorage.setItem('oldText', changingText.value);
                        elemOfTable.querySelector('span').innerText = '';
                        elemOfTable.prepend(changingText);
                    }
                })
                btnSave.addEventListener('click', () => {
                    if (elemOfTable.isChanged) {
                        elemOfTable.querySelector('span').innerText = elemOfTable.querySelector('#changingText').value;
                        sessionStorage.removeItem('oldText');
                        changingText.remove();
                        elemOfTable.isChanged = false;
                        btnSave.setAttribute('disabled', 'disabled');
                        btnChange.removeAttribute('disabled');
                    }
                })
            } else {
                if (elemOfTable.isChanged) {
                    elemOfTable.querySelector('span').innerText = sessionStorage.getItem('oldText');
                    sessionStorage.removeItem('oldText');
                    changingText.remove();
                    elemOfTable.isChanged = false;
                }
                openChangeWindowBtn.nextSibling.remove();
                elemOfTable.isOpen = false;
                openChangeWindowBtn.style.transform = 'rotate(0deg)';
            }
        }
    })
})();

// ----------------Дальше идёт создание модального окошка---------------

const modalWindow = createHtmlElement({
    id: 'modalWindow'
}, 'div');
const wrapper = createHtmlElement({
    id: 'modalWrapper'
}, 'div');
const inputText = createHtmlElement({
    id: 'modalInputText',
    placeholder: 'Enter your string'
}, 'input');
const btnAdd = createHtmlElement({
    id: 'modalBtnAdd',
    innerText: 'Add'
}, 'button');
const btnOpenModalWindow = createHtmlElement({
    id: 'openModalBtn',
    innerText: 'Add'
}, 'button');
const btnClose = createHtmlElement({
    id: 'modalClose'
}, 'span');

document.body.appendChild(btnOpenModalWindow);
document.body.appendChild(modalWindow);
modalWindow.appendChild(wrapper);
wrapper.appendChild(inputText);
wrapper.appendChild(btnAdd);
wrapper.appendChild(btnClose);

btnOpenModalWindow.addEventListener('click', function () {
    modalWindow.style.display = 'flex';
})
btnClose.addEventListener('click', function () {
    modalWindow.style.display = 'none';
    inputText.value = '';
})
btnAdd.addEventListener('click', function () {
    let borderId = Number(sessionStorage.getItem('borderId'));
    if (inputText.value != '') {
        sessionStorage.setItem('borderId', ++borderId);
        const li = createHtmlElement({
            id: sessionStorage.getItem('borderId')
        }, 'li');
        const openChangeWindowBtn = createHtmlElement({
            className: 'fas fa-ellipsis-h'
        }, 'i');
        const liInnerText = createHtmlElement({
            className: 'liInnerText'
        }, 'span');
        liInnerText.innerText = inputText.value;
        li.isOpen = false;
        li.isChanged = false;
        li.appendChild(liInnerText);
        li.appendChild(openChangeWindowBtn);
        document.getElementById('table').appendChild(li);
        inputText.value = '';
    }
})