export default function createHtmlElement(objOfAttributes = undefined, tagName) {
    const htmlElement = document.createElement(tagName);
    if (objOfAttributes !== undefined) {
        for (let key in objOfAttributes) {
            htmlElement[key] = objOfAttributes[key];
        }
    }
    return htmlElement;
}