const loadHomeContent = () => {
  const content = document.querySelector('#content')
  const image = document.createElement('img')
  image.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  image.height = 300
  image.width = 400

  const h1 = document.createElement('h1')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')

  h1.textContent = 'Welcome to our restaurant'
  p1.textContent = 'Where you can find the best food in town'
  p2.textContent = 'Our menu is filled with delicious food that will make you come back for more'
  p3.textContent = 'Our chefs are the best in the world and they will make sure you have the best experience'

  content.append(image, h1, p1, p2, p3)
}

export { loadHomeContent }
