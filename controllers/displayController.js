// const { text } = require("express")


const navLinks = [
    {href: '/', text: 'Home'},
    {href: '/about', text: 'About'},
    {href: '/contact', text: 'Contact'}
]

// async function displayHomePage(req, res) {
//     res.render('pages/home', {title: "This is our home page", navLinks})
// }

async function displayCreateItemPage(req, res) {
    res.render('pages/addCloth', {title: "Create New Item"})
}

module.exports = { displayCreateItemPage }