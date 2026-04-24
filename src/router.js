const template = id => id // TODO

var routes = {}

function addRoute(path, templateId, controller) {
    routes[path] = { templateId: templateId, controller: controller }
}

var el = null

function router() {
    el = el || document.getElementById('view')
    var url = location.hash.slice(1) || '/'
    var route = routes[url]
    // console.log(url, el, url, route)
    if (el && route && route.controller) {
        // el.innerHTML = template(route.templateId, new route.controller())
        // temporary solution instead of real templating
        el.querySelectorAll('section').forEach(view => {
            view.classList.add('hidden')
            view.classList.remove('section-enter')
        })
        const active = el.querySelector('#' + route.templateId)
        active.classList.remove('hidden')
        void active.offsetWidth
        active.classList.add('section-enter')
        // const c = new route.controller
        // document.title = c.title || 'scratch'
        document.querySelectorAll('nav a').forEach(el => {
            const active = el.getAttribute('href') === `#${url}`
            el.classList.toggle('tabs__item--selected', active)
        })
    }
}

// export default addRoute

const defaultController = () => {
    // ...
}

addRoute('/', 'home', defaultController)
addRoute('/home', 'home', defaultController)
addRoute('/employment', 'employment', defaultController)
addRoute('/portfolio', 'portfolio', defaultController)
addRoute('/skills', 'skills', defaultController)
addRoute('/about', 'about', defaultController)

window.addEventListener('hashchange', router)
window.addEventListener('load', () => {
    router()
})
