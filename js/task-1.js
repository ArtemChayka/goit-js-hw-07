const items = document.querySelectorAll('.item')
function foo(arr) {
    console.log('Number of categories:', arr.length);
    arr.forEach(item => {
        let category = item.firstElementChild.textContent
        let element = item.firstElementChild.nextElementSibling.children.length
        console.log('Category:', category);
        console.log('Elements', element);
    })
}
foo(items)