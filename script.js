function calcBMI() {
    const vaha = parseInt(document.getElementById("weight").value)
    const vyska = parseInt(document.getElementById("height").value)
    var x = document.getElementById("check").checked;

    if (vaha <= 0 || vyska <= 0 ) {
        document.getElementById("result").innerHTML = "Nesprávný input";
        return;
    }


    const result = (vaha / vyska**2) * 10000

    if (result < 18.5 && x == true) {
        document.getElementById("result").innerHTML = "Podváha";
    }   else if (result >= 18.5 && result < 25 && x == true) {
        document.getElementById("result").innerHTML = "Normální váha";
    } else if (result >= 25 && result < 30 && x == true) {
        document.getElementById("result").innerHTML = "Nadváha";
    } else if (result > 30 && x == true) {
        document.getElementById("result").innerHTML = "Obezita";
    }

    console.log(result)
}

function startSem() {
    for(i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log("Červená");
        }, 0);
        setTimeout(function() {
            console.log("Oranzova");
        }, 5000);
        setTimeout(function() {
            console.log("Zelena");
        }, 7000);
        setTimeout(function() {
            console.log("Oranzova");
        }, 11000);
        setTimeout(function() {
            console.log("Červená");
        }, 13000);
    }
}