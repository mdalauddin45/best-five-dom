const playerArray = [];


function display(player) {
    if (playerArray.length > 5) {
        if (playerArray.length = 5) {
            alert('You cannot add 5 more player');
            return element.disabled = false;
        }

    }


    const tableBody = document.getElementById('player-table');
    tableBody.innerHTML = "";

    for (let i = 0; i < player.length; i++) {
        const name = playerArray[i].playerName;
        const tr = document.createElement("tr");
        tr.innerHTML =
            `
            <th>${1 + i}. </th>
            <th>${name}  </td>
        `;
        tableBody.appendChild(tr);
    }


}



function selectedV(element) {

    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    playerArray.push(playerObj);

    display(playerArray);


    element.disabled = true;
}

