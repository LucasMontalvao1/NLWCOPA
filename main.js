function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player1}" />
    </li>
  `
}

let delay = 0
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
         ${games}
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "05/11",
    "sabado",
    createGame("brazil", "16:00", "serbia") +
      createGame("cameroon", "18:00", "uruguai") +
      createGame("switzerland", "20:00", "portugal")
  ) +
  createCard("06/11", "domingo", createGame("brazil", "16:00", "serbia")) +
  createCard("07/11", "segunda", createGame("brazil", "16:00", "serbia"))
