const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

$('.add').addEventListener("click", function (e) {
    $('.new').style.display='flex';
})


