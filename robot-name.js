// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
	constructor() {
		this.name = `AA${this.getRandomInt()}`
	}

	getRandomInt() {
  		return `${Math.random()}`.slice(2, 5)
	}

  reset() {
    this.name = `AA${this.getRandomInt()}`
  }
}


Robot.releaseNames = () => { };
