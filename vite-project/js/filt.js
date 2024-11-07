import { DOMSelectors } from "./dom";

export function insert(array) {
    DOMSelectors.container.innerHTML = ""
    array.forEach((g) => DOMSelectors.container.insertAdjacentHTML('beforeend', g.card))
}

export function sortpricelowhigh(array) {
    const arr = array.sort((a, b) => a.price - b.price)
    insert(arr)
}

export function sortpricehighlow(array) {
    const arr = array.sort((a, b) => b.price - a.price)
    insert(arr)
}