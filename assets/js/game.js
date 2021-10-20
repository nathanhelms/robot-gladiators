
//player info

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy info

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;




var fight = function (enemyName) {
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );
    
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
    
      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
    
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
      // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      window.alert(playerName + " has chosen to skip the fight!");
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          playerMoney = playerMoney - 2;
      }
      console.log(
          playerName + " has " + playerMoney + " gold remaining."
      );
  
    } else {
      window.alert("You need to choose a valid option. Try again!");
    }
}

for(var i = 0; i < enemyName.length; i++) {
  fight(enemyName[i]);
}






/*

LOOPS

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

for(var i = 0; i < 3; i++) {
  console.log("apple");
}

for([initial expression]; [condition]; [increment expression]) {
   statement
}

var i = 0;

(0 in the index)

i < 3;

(cap to the list)

i++ 

(adds one to each iteration, i = i + 1)


-------------------------------


for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
}


-------------------------------


for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}


iteration starts at 0, and ends at the total length of enemyNames. i++ means we will keep iterating through the loop

the console will display list of enemyNames, their index number, and a string explaining where they are in the index


-------------------------------

ARGUMENTS

console.log(enemyNames);      // array argument
alert("Hello");               // string argument
console.log(enemyNames[i], i); // two arguments, comma-separated


-------------------------------

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);




*/























// Notes

/*

enemyHealth = enemyHealth - playerAttack

console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  //check enemy health 

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

playerHealth = playerHealth - enemyAttack

console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }








var confirmSkip = true;

if (confirmSkip === true) {
  // do something
}

if (confirmSkip) {
  // do something
}






*/







