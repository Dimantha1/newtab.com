(() => {

    let search_form = document.querySelector('#search-form')
    let search_input = document.querySelector('#search-input')
    
    search_form.addEventListener('submit', (e) => {
        if (!search_input.value.length)
            e.preventDefault()
    })
    
    })()