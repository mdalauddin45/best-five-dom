const playerArry = [];

function display(player) {
    console.log(player);
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
    // playerArry.length
    display(playerArry);
}