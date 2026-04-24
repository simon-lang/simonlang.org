window.addEventListener('load', (event) => {

    const toggleReadMore = (container) => {
        const el = container.querySelector('.read-more-content')
        el.classList.toggle('hidden')
        const hidden = el.classList.contains('hidden')
        const link = container.querySelector('.read-more')
        link.innerText = hidden ? 'more info...' : 'collapse...'
        el.querySelectorAll('img').forEach(img => {
            const src = img.getAttribute('lazy-src')
            if (src && !img.getAttribute('src')) {
                img.classList.add('img-loading')
                const clear = () => img.classList.remove('img-loading')
                img.addEventListener('load', clear, { once: true })
                img.addEventListener('error', clear, { once: true })
                img.setAttribute('src', src)
            }
        })
    }

    // Skills cloud temporarily disabled
    // const cloud = document.getElementById('skills-cloud')
    // if (cloud) {
    //     fetch('src/skills.json').then(r => r.json()).then(list => {
    //         const sorted = [...list].sort((a, b) => b.relevance - a.relevance)
    //         const MIN_FS = 0.75, MAX_FS = 2.4
    //         const MIN_OP = 0.4,  MAX_OP = 1.0
    //         const lerp = (lo, hi, t) => lo + (hi - lo) * t
    //         const t = (r) => Math.max(0, Math.min(1, (r - 3) / (98 - 3)))
    //         cloud.innerHTML = sorted.map(s => {
    //             const k = t(s.relevance)
    //             const fs = lerp(MIN_FS, MAX_FS, k).toFixed(2)
    //             const op = lerp(MIN_OP, MAX_OP, k).toFixed(2)
    //             const name = s.name.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    //             return `<span class="skill skill--${s.type}" style="font-size:${fs}em;opacity:${op}" title="${s.type} · ${s.relevance}">${name}</span>`
    //         }).join('')
    //     })
    // }

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
