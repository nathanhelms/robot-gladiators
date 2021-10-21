
//player info

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy info

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;




var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
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

-------------------

WHILE

In a while statement, if the condition evaluates to true, the statement executes. Then the condition is reevaluated on the loop's next pass, and so on. Let's write our code within the fight() function to look like the following:

var fight = function(enemyName) {
  // repeat and execute as long as the enemy-robot is alive 
  while(enemyHealth > 0) {
    // place fight function code block here . . .
  }


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







