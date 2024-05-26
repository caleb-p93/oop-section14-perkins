function Player(name) {
    this.name = name; /*object name property for player*/
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXP = function (experience) {
    this.points += experience;
    
    if (this.points >= 10) 
    {
        this.lvl++;
        this.points -= 10;
    }
}



Player.prototype.describe = function () {
    var levelMessage = "";
    levelMessage = `${this.name} is level ${this.lvl} with ${this.points} experience points`;
    return levelMessage;
}

const player1 = new Player('Simon');
const player2 = new Player('Bob');

player1.gainXP(5);
player2.gainXP(6);
player1.gainXP(7);
player2.gainXP(1);
player1.gainXP(5);
player2.gainXP(4);

console.log(player1.describe());
console.log(player2.describe());