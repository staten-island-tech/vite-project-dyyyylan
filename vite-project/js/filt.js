import { DOMSelectors } from "./dom";

export function insert(array) {
    DOMSelectors.container.innerHTML = ""
    array.forEach((g) => DOMSelectors.container.insertAdjacentHTML('beforeend', g.card))
}

export function sortpricelowhigh(array) {
    const x = array.sort((a, b) => a.price - b.price)
    insert(x)
}

export function sortpricehighlow(array) {
    const x = array.sort((a, b) => b.price - a.price)
    insert(x)
}

export function sortmg(array) {
    const w = array.filter((g) => g.type == "mg")
    insert(w)
}

export function sorteg(array) {
    const w = array.filter((g) => g.type == "eg")
    insert(w)
}

export function sortrg(array) {
    const w = array.filter((g) => g.type == "rg")
    insert(w)
}

export function sorthg(array) {
    const w = array.filter((g) => g.type == "hg")
    insert(w)
}

export function sortpg(array) {
    const w = array.filter((g) => g.type == "pg")
    insert(w)
}