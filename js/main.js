const selectors = document.querySelectorAll('.ico')

for (let s = 0; s < selectors.length; s++) {
    const selector = selectors[s];
    selector.addEventListener('click', (e) => {
        e.preventDefault()
        selector.classList.remove('active')
        selector.classList.add('active')
    })

}