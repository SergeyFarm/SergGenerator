let inpNum = document.querySelector('.wrapper__number');
let inpNum2 = document.querySelector('.wrapper__number2');
let labNum = document.querySelector('.wrapper__lab-num');
let labNum2 = document.querySelector('.wrapper__lab-num2');
let checSim = document.querySelector('#checkSim');
let checNam = document.querySelector('#checkNam');
let checNam2 = document.querySelector('#checkNam2');
let checNum = document.querySelector('#checkNum');
let btSubm1 = document.querySelector('.wrapper__submit');
let btSubm2 = document.querySelector('.wrapper__submit2');
let wpInt = document.querySelector('.wrapper__iner');
let wpInt2 = document.querySelector('#myIner');



let arreNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arreMin = ['a',' b', 'c', 'd', 'q', 'r', 't', 'y', 'u', 'h', 'j', 'k', 'l', 'i', 'p', 'z', 'x', 'v', 'n', 'm', 's', 'w', 'e'];
let arreMax = ['A', 'S', 'D', 'F', 'G', 'H',' J', 'K', 'L', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'P', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
let arreSim = ['$', '&', '!', '@', '#', '%', '^', '*', '(', ')'];

inpNum.oninput = function () {
    labNum.innerHTML = this.value;
    labNum.style.color = 'green';
}

inpNum2.oninput = function () {
    labNum2.innerHTML = this.value;
    labNum2.style.color = 'green';
}
btSubm2.onclick = function (e) {
    e.preventDefault();
    wpInt.innerHTML = "";
}

btSubm1.onclick = function (e) {
    e.preventDefault();
    let result = [];
    if (checNum.checked) {
        result = result.concat(arreNumb);
    } if (checSim.checked) {
        result = result.concat(arreSim);
    } if (checNam.checked) {
        result = result.concat(arreMin);
    } if (checNam2.checked) {
        result = result.concat(arreMax);
    }
    let pass2Lenght = parseInt(inpNum2.value);
    result.sort(compareRandom);
    wpInt.innerHTML = "";
    for (let k = 0; k < pass2Lenght; k++) {
        var pass = [];
        let passLenght = parseInt(inpNum.value);
        pass.sort(compareRandom);
        for (let i = 0; i < passLenght; i++) {
            pass += result[getRandomIntInclusive(0,result.length - 1)];
        }  
        wpInt.innerHTML += `${'<p>'+ pass + '</p>'}`; 
    }
}


function compareRandom(a,b) {
    return Math.random() - 0.5;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}





















