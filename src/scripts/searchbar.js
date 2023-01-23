const userCardTemplate = document.querySelector("[data-game-template]")
const userCardContainer = document.querySelector("[data-game-container]")
const searchInput = document.querySelector("[data-search]")

let games = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    games.forEach(game => {
      const isVisible =
        game.name.toLowerCase().includes(value) ||
        game.email.toLowerCase().includes(value)
      game.element.classList.toggle("hide", !isVisible)
    })
  })

  fetch("games")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })