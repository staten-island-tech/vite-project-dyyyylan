import "../styles/style.css";
import { gunpla } from './gundam';
import { DOMSelectors } from "./dom";
import { insert, sortpricelowhigh, sortpricehighlow, sortmg, sorteg, sortrg, sorthg, sortpg } from "./filt";

insert(gunpla);

DOMSelectors.clear.addEventListener("click", function(){
    insert(gunpla);
})

DOMSelectors.sortbylow.addEventListener("click", function() {
    sortpricelowhigh(gunpla);
})

DOMSelectors.sortbyhigh.addEventListener("click", function() {
    sortpricehighlow(gunpla);
})

DOMSelectors.MG.addEventListener("click", function() {
    sortmg(gunpla);
})

DOMSelectors.EG.addEventListener("click", function() {
    sorteg(gunpla);
})

DOMSelectors.RG.addEventListener("click", function() {
    sortrg(gunpla);
})

DOMSelectors.HG.addEventListener("click", function() {
    sorthg(gunpla);
})

DOMSelectors.PG.addEventListener("click", function() {
    sortpg(gunpla);
})