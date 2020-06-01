import {el, tab, collapse, collapseSelect} from "./functions.js";

el('h1').on('mouseover', function () {
    console.log(this.innerHTML);
});

tab('.tab-wrap .tab-links li',
    'tab-link_active',
    '.tab-wrap .tab-items div',
    'tab-item_active',
    'click');

collapse('.collapse-wrap',
    '.collapse-wrap .collapse-items',
    'collapse-items_active',
    'click');

collapseSelect('.collapse-select-wrap',
    '.collapse-select-wrap .collapse-selected',
    '.collapse-select-wrap .collapse-items',
    'collapse-items_active',
    'click');