const playerArry = [];


function display(player) {

    const tableBody = document.getElementById('player-table');
    tableBody.innerHTML = "";

    for (let i = 0; i < player.length; i++) {
        const name = playerArry[i].playerName;

        const tr = document.createElement("tr");
        tr.innerHTML =
            `
            <th>${1 + i}</th>
            <td>${name}</td>
        `;
        tableBody.appendChild(tr);
    }

}


function selectedV(element) {

    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    playerArry.push(playerObj);

    display(playerArry);
}


let nameOfSerial = playerArry.length;

document.getElementById('calculate-btn').addEventListener('click', function () {

    const perPlayerCostField = document.getElementById('per-player-coast');
    const perPlayerCostString = perPlayerCostField.value;
    const perPlayer = parseFloat(perPlayerCostString);

    const playerExpensesField = document.getElementById('player-expenses');
    const playerExpenses = perPlayer * 5;
    playerExpensesField.innerText = playerExpenses;
})

