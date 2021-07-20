class Character {
	constructor(health) {
		if (isNaN(health) || health < 0)
			throw Error("Health must be a positive number!");
		this._health = health;
	}
	set health(health) {
		this._health = (isNaN(health) || health < 0) ? 0 : health;
	}
	get health() {
		return this._health;
	};
}

class Player extends Character {
	constructor(name, health) {
		super(health);
		if (!isNaN(name))
			throw Error("Name must be a string!");
		this._name = name;
	}
	set name(name) {
		this._name = (!isNaN(name)) ? "" : name;
	}
	get name() {
		return this._name;
	}
}

let player = new Player("Ertugul", 5000);
player.health -= 1000;

console.log(`Name: ${player.name}`);
console.log(`HP: ${player.health}`);
console.log("__________________________________________________");