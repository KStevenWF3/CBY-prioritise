//let criticalpriority = document.getElementsByClassName('criticality');
let criticalpriority = document.querySelectorAll('.criticality');

// for (i = 0; i < criticalpriority.length; i++){
//     if (criticalpriority[i].textContent == 1){
//         criticalpriority[i].style.backgroundColor = "green"
//     }else if (criticalpriority[i].textContent == 2){
//         criticalpriority[i].style.backgroundColor = "yellow"
//     }else if (criticalpriority[i].textContent == 3){
//         criticalpriority[i].style.backgroundColor = "orange"
//     }else if (criticalpriority[i].textContent == 4){
//         criticalpriority[i].style.backgroundColor = "orangered"
//     }
// }

// for (p = 0; p < criticalpriority.length; p++){
//     if (criticalpriority[p].textContent < 3){
//         //criticalpriority[p].parentNode.remove();
//         criticalpriority[p].parentNode.style.display = 'none';
//     }
// }

for (var priority of criticalpriority){
    if (priority.textContent == 1){
        priority.style.backgroundColor = "green"
    }else if (priority.textContent == 2){
        priority.style.backgroundColor = "yellow"
    }else if (priority.textContent == 3){
        priority.style.backgroundColor = "orange"
    }else if (priority.textContent == 4){
        priority.style.backgroundColor = "orangered"
    }
}

for (var urgence of criticalpriority){
    if (urgence.textContent < 3){
        //criticalpriority[p].parentNode.remove();
        urgence.parentNode.style.display = 'none';
    }
}