const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let bigGame = array.find(game => game.result === "W")
      
  if (bigGame !== undefined) {
    return bigGame.year
  } else {
    return undefined
  }
  
  
}
