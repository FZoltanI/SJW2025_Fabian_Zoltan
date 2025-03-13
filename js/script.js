const fruits = [
    {
        id: 1, 
        name: "Banán",
        fat: 0.33,
        fiber: 2.6,
        calory: 89,
        protein: 1.09,
        carbohydrate: 22.8
    },
    {
        id: 2, 
        name: "Alma",
        fat: 0.17,
        fiber: 1.3,
        calory: 52,	
        protein: 0.26,
        carbohydrate: 13.8
    },
    {
        id: 3, 
        name: "Narancs",	
        fat: 0.12,	
        fiber: 2,
        calory: 47, 	
        protein: 0.94,
        carbohydrate: 11.8
    },
];

for (const fruit of fruits) {
    var option = document.createElement("option");
    option.value = fruit.id;
    option.innerHTML = fruit.name;

    document.getElementById("gyumolcs_neve").add(option);
}

function szamitas(){
    var value = document.getElementById("gyumolcs_neve").value;

    console.log(value);
    

    if (value == "-1"){
        document.getElementById("hibauzenet").classList.remove("d-none");
    } else {
        var mennyiseg = document.getElementById("mennyiseg").value;

        var selectedFruit = fruits.filter(element => (element.id * 1) == (value * 1))[0];
        
        document.getElementById("calc_fat").innerHTML = selectedFruit.fat * mennyiseg + " g";
        document.getElementById("calc_fiber").innerHTML = selectedFruit.fiber * mennyiseg + " g";
        document.getElementById("calc_calory").innerHTML = selectedFruit.calory * mennyiseg + " kcal";
        document.getElementById("calc_protein").innerHTML = selectedFruit.protein * mennyiseg + " g";
        document.getElementById("calc_carbohydrate").innerHTML = selectedFruit.carbohydrate * mennyiseg + " g";
    }
}

function reset(){
    document.getElementById("mennyiseg").value = 1;
    document.getElementById("gyumolcs_neve").value = "-1";
    closeError();
}

function closeError(){
    document.getElementById("hibauzenet").classList.add("d-none");
}

