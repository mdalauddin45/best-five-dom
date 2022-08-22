const playerArry = [];


function display(player) {

    const tableBody = document.getElementById('player-table');
    tableBody.innerHTML = "";

    for (let i = 0; i < player.length; i++) {
        const name = playerArry[i].playerName;

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
    playerArry.push(playerObj);

    display(playerArry);


    element.disabled = true;
}



// function selectedV() {
//     let a = document.getElementsByName('sbt');
//     let limit = 0;
//     let i;
//     for (i = 0; i < a.length; i++) {
//         if (a[i].tr == true) {
//             limit = limit + 1;
//         }
//     }
//     if (i > 5) {
//         alert('hello');
//         return false;
//     }
// }
