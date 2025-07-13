var data = {
    version: "1.0",
    money: 0,
    moneypersecond: 0,
    moneyperclick: 1,
    upgrades: {
        reinforcedmouse1: {
            owned: false,
            cost: 100,
            description: "REINFORCED MOUSE I\n\nReinforce your mouse to make\nit stronger granting you +1 money per click\n\ncost: $100",
        },
        reinforcedmouse2: {
            owned: false,
            cost: 5000,
            description: "REINFORCED MOUSE II\n\nUpgrade your mouse by giving\nit muscles making it mega\nbuff granting +5 money per click\n\ncost: $5000"
        },
        reinforcedmouse3: {
            owned: false,
            cost: 25000,
            description: "REINFORCED MOUSE III\n\nYour mouse has now unlocked\nits true potential multiplying money per click by 5\n\ncost: $25000"
        },
        reinforcedmouse4: {
            owned: false,
            cost: 100000,
            description: "REINFORCED MOUSE IV\n\nYour mouse has fused with\na diamond giving it newfound\nstength granting +50 money per click\n\ncost: $100000"
        },
        reinforcedmouse5: {
            owned: false,
            cost: 200000,
            description: "REINFORCED MOUSE V\n\nYour mouse is now at full power\nand is a force to be reckoned with grsnting +100 money per click\n\ncost: $200000"
        },
        autoclicker: {
            owned: false,
            cost: 500000,
            description: "AUTO CLICKER\n\nYou're mouse works overtime and clicks even while you aren't clicking yourself.\n\ncost: $500000"
        }
    }
};

var MoneyImg = document.getElementById("MoneyImg");
var Money = document.getElementById("Money");
var MoneyPerSecond = document.getElementById("MoneyPerSecond");
var info = document.getElementById('info');
var reinforcedmousei = document.getElementById("reinforcedmousei");
var reindorcedmouseii = document.getElementById("reinfocredmouseii");


//Loads the click functions for upgrades
data.upgrades.reinforcedmouse1.use = function(callback){
    if(data.money >= data.upgrades.reinforcedmouse1.cost){
        callback();
    } else {
        alert("You don't have enough money to afford this");
    }
}


//Main Clicking lolol

MoneyImg.addEventListener("click", function(){
    data.money += data.moneyperclick;
    Money.textContent = "$" + data.money;
});



reinforcedmousei.addEventListener("mouseover", function(){
    info.innerText = data.upgrades.reinforcedmouse1.description;
});

reinforcedmousei.addEventListener("mouseout", function(){
    info.innerText = "";
});


reinforcedmouseii.addEventListener("mouseover", function(){
    info.innerText = data.upgrades.reinforcedmouse2.description;
});

reinforcedmouseii.addEventListener("mouseout", function(){
    info.innerText = "";
});













//Mouse Drag



    document.addEventListener('mousemove', (event) => {
      var mouseX = event.clientX;
      var mouseY = event.clientY;

      // Update the position of the <p> tag
      info.style.left = `${mouseX}px`; // Offset by 10px for better visibility
      info.style.top = `${mouseY}px`;
    });