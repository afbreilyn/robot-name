// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

// introduce a checker or set for numbers/alpha chars or the combination of the two

let usedNames = {}

export class Robot {

  constructor() {
    this.internalName = ''
    this.setNewName()
  }

  getRandomInt() {
    return `${Math.random()}`.slice(2, 5)
  }

  reset() {
    this.setNewName()
  }

  generateName() {
    const alphaCharacters = this.getRandomAlphaCharacters()
    const digitCharacters = this.getRandomInt()
    return `${alphaCharacters}${digitCharacters}`
  }

  setNewName() {
    let shouldBeLooping = true

    let newName
    while (shouldBeLooping) {
      newName = this.generateName()
      shouldBeLooping = usedNames[newName]
    }

    this.internalName = newName
    usedNames[newName] = true
  }

  getRandomAlphaCharacters() {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const charactersLength = characters.length

    for (var i = 0; i < 2; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result;
  }

  get name() {
    return this.internalName
  }
}

Robot.releaseNames = () => {
  usedNames = {}
};
