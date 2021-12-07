let stateList = [
    ["A", "DIRTY", "DIRTY", "1"],
    ["A", "DIRTY", "CLEAN", "2"],
    ["A", "CLEAN", "DIRTY", "3"],
    ["A", "CLEAN", "CLEAN", "4"],
    ["B", "DIRTY", "DIRTY", "5"],
    ["B", "DIRTY", "CLEAN", "6"],
    ["B", "CLEAN", "DIRTY", "7"],
    ["B", "CLEAN", "CLEAN", "8"]
];

function checkState(state){
    stateList = stateList.filter(item =>{ 
        if(item[0] === state[0] && item[1] === state[1] && item[2] === state[2]){
            document.getElementById("title").innerHTML = "visited: " + (9-stateList.length)
            document.getElementById("visited").innerHTML += `<tr><td>${item[3]}</td><td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td></tr>`;
            console.log(item[3])
            return;
        }
        return item;
    })
}

function checkSpaces(state){
    if(state[1] === 'CLEAN' && state[2] == 'CLEAN'){
        let random = Math.random() * 10;
        state[1] = random > 5 ? 'DIRTY' : 'CLEAN';
        random = Math.random() * 10
        state[2] = random > 5 ? 'DIRTY' : 'CLEAN';
    }
}

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states) {
    checkState(states); // Se verifica en que estado está actualmente
    if(stateList.length === 0) {
        document.getElementById("visited").innerHTML += `<tr><h3>EJECUCIÓN FINALIZADA</h3></tr>`;
        document.getElementById("log").innerHTML += `<br><h3>EJECUCIÓN FINALIZADA</h3>`
        return; // Finaliza la ejecución
    }

    var location = states[0];
    var spaceA = states[1];
    var spaceB = states[2];
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    //document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);z
    document.getElementById("log").innerHTML += `<br>Location:${location} SpaceA:${spaceA} SpaceB:${spaceB} | Action:${action_result}`
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";
    checkSpaces(states)
    setTimeout(function () { test(states); }, 500);
}

var states = ["A", "DIRTY", "DIRTY"];
test(states);