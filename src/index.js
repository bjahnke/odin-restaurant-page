import { loadHomeContent } from './home-content'

const content = document.querySelector('#content')

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    content.innerHTML = ''
  })
})

document.querySelector('#home').addEventListener('click', () => {
  loadHomeContent(content)
})

document.querySelector('#menu').addEventListener('click', () => {
  const menu = document.createElement('div')
  menu.textContent = 'Menu coming soon...'
  content.appendChild(menu)
})

document.querySelector('#contact').addEventListener('click', () => {
  const contact = document.createElement('div')
  contact.textContent = 'Contact us at: 123-456-7890'
  content.appendChild(contact)
})

loadHomeContent(content)
