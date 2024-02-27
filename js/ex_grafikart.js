/* 
Fonction qui crée un article et renvoie un elt HTML (que l'on pourra ensuite rajouter dans le DOM)
@param {{title: string, body: string}} post
@return{HTMLElement}   <-- précise que que cela retourne
*/

function createArticle(post) {
    const article = document.createElement('article')
/*    article.innerHTML = '
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    '
OU    */

    const h2 = document.createElement('h2')
    h2.innerText = post.title
    article.append(h2)

    const p = document.createElement('p')
    p.innerText = post.body
    article.append(p)

    return article
}

/* OU ENCORE en créant un fonction au lieu de répéter x fois la m^me chose */
/*

function createArticle(post) {
    const article = document.createElement('article')
    article.append(createElementWithText('h2', post.title))
    article.append(createElementWithText('p', post.body))
    return article
}

ET

function createElementWithText (tagName, content) {
    const element = document.createElement(tagName)
    element.innerText = content
    return element
}
*/

async function main () {
    const wrapper = document.querySelector("nom_div")
    const loader = document.createElement('p')
    loader.innerText = 'Chargement...'
    wrapper.append(loader)
    try {
        const r = await fetch ('https://...', {
            headers: {
                Accept: 'application/json'
            }
        })
        if (!r.ok) {
            throw new Error('Erreur serveur')
        }

        const posts = await r.json()
        loader.remove() // on supprime le loader quand la page est chargée

        // for -> parcourt chaque article à partir du tableau des articles

        for (let post of posts) {
        
            wrapper.append(createArticle(post)) // crée l'elt et rajoute le au wrapper
        } 
        
    } catch (e) {
            loader.innerText = 'impossible de charger la page'
            loader.style.color = 'red'
            return
    }
}

main()