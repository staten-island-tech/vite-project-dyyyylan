import { DOMSelectors } from "./dom";

export function insert(array) {
    DOMSelectors.container.innerHTML = ""
    array.forEach((g) => DOMSelectors.container.insertAdjacentHTML('beforeend', g.card))
}