//Game States
//"WIN" - player has defeated all enemy robots
//         *Fight and defeat each enemy robot*

//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;

var fight = function (enemyName) {
    //Alert players they area startung the round
    window.alert("Welcome to Robot Gladiator!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    //Subtract playerAttack from enemyHealth and use it to update enemyHealth
    enemyHealth -= playerAttack;
    //Log a resulting message to the console so we know that it worked
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining`);
    //Subtract the value of enemyAttack from the value of playerHealth and use that result to update playerHealth
    playerHealth -= enemyAttack;
    //log resulting message to the console so we know it worked
    console.log(`${enemyNames} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining`);

    //if player chooses to fight
if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth -= playerAttack;
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

    //Check player health
    if (playerHealth <= 0) {
        window.alert(`${playerName} has died!`);
    }
    else {
        window.alert(`${playerName} still has ${playerHealth} health left`);
    };

    //Check enemy health
    if (enemyHealth <= 0) {
        window.alert(`${enemyName} has died!`);
    }
    else {
        window.alert(`${enemyName} still has ${enemyHealth} health left.`);
    };

} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirmation
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
        window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
        //money penalty
        playerMoney -= 2;
        console.log(playerMoney);
    }

    else {
        fight();
    }
   
} else {
    window.alert("You need to choose a valid option. Try again!");
}
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}