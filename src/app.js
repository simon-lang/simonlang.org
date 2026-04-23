window.addEventListener('load', (event) => {

    const toggleReadMore = (container) => {
        const el = container.querySelector('.read-more-content')
        el.classList.toggle('hidden')
        const hidden = el.classList.contains('hidden')
        const link = container.querySelector('.read-more')
        link.innerText = hidden ? 'more info...' : 'collapse...'
        el.querySelectorAll('img').forEach(img => {
            var src = img.getAttribute('lazy-src')
            if (src) {
                img.setAttribute('src', src)
            }
        })
    }

    document.querySelectorAll('.read-more-items > li').forEach(el => {
        el.addEventListener('click', function (e) {
            // Clicks inside the expanded content shouldn't toggle (and links there should work normally).
            if (e.target.closest('.read-more-content')) return
            // The .read-more anchor has href="#" — suppress navigation.
            if (e.target.closest('.read-more')) e.preventDefault()
            toggleReadMore(el)
        })
    })
})
