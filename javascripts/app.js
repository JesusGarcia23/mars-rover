// Rover Object Goes Here

var rover ={
  direction: "North",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================

//Mars Grid
var marsBoard = [
  [null, "Stone", null, null, null, null, "Rover", null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "Stone", null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null , null, null, null, "Stone"],
  [null, null, null, null, null, "Stone", null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, "Stone", null, null, null, "Stone", null, null],
  [null, null, null, null, null, null, null, "Stone", null, null],
  [null, null, null, null, null, null, null, null, null, "Rover"]
]
// ======================

//TURNLEFT FUNCTION
function turnLeft(){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "North":
      console.log("Rover is facing now West");
      rover.direction = "West";
      break;
    case "West":
      console.log("Rover is facing now South");
      rover.direction = "South";
      break;
    case "South":
      console.log("Rover is facing now East");
      rover.direction = "East";
      break;
    case "East":
      console.log("Rover is facing now North");
      rover.direction = "North";
      break;
    
      
  }
  }
//TURNRIGHT FUNCTION
function turnRight(){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "North":
      console.log("Rover is facing now East");
      rover.direction = "East";
      break;
    case "East":
      console.log("Rover is facing now South");
      rover.direction = "South";
      break;
    case "South":
      console.log("Rover is facing now West");
      rover.direction = "West";
      break;
    case "West":
      console.log("Rover is facing now North");
      rover.direction = "North";
      break;
  }
}
//MOVEFORWARD FUNCTION
function moveForward(){
  console.log("moveForward was called");
  moveOtherRovers();
  if(rover.direction === "North"){
    rover.y -= 1;
    if((rover.y >= 0) && (rover.y <= 9)){
      locateObject();
      if(locateObject() === true){
        console.log("Objec Found at: [" + rover.y + "," + rover.x + "]: " + marsBoard[rover.y][rover.x]);
        rover.y += 1;
      }else{
        rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
        console.log("Rover is in position " + rover.y + "," + rover.x);  
    }   
    }else{
      rover.y += 1;
      console.log("LIMIT REACHED\n " + "Actual Position: " + rover.y + "," + rover.x);
    }

  }else if(rover.direction === "East"){
    rover.x += 1;
    if((rover.x >= 0) && (rover.x <= 9)){
      locateObject();
      if(locateObject() === true){
        console.log("Objec Found at: [" + rover.y + "," + rover.x + "]: " + marsBoard[rover.y][rover.x]);
        rover.x -= 1;
      }else{
        rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
        console.log("Rover is in position " + rover.y + "," + rover.x);  
    }   
    }else{
      rover.x -= 1;
      console.log("LIMIT REACHED\n " + "Actual Position: " + rover.y + "," + rover.x);
    }

  }else if(rover.direction === "West"){
    rover.x -= 1;
    if((rover.x >= 0) && (rover.x <= 9)){
      locateObject();
      if(locateObject() === true){
        console.log("Objec Found at: [" + rover.y + "," + rover.x + "]: " + marsBoard[rover.y][rover.x]);
        rover.x += 1;
      }else{
        rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
        console.log("Rover is in position " + rover.y + "," + rover.x);  
    }   
      } else{
        rover.x += 1;
        console.log("LIMIT REACHED\n " + "Actual Position: " + rover.y + "," + rover.x);
      }

  } else if(rover.direction === "South"){
    rover.y += 1; 
    if((rover.y >= 0) && (rover.y <= 9)){
      locateObject();
      if(locateObject() === true){
        console.log("Objec Found at: [" + rover.y + "," + rover.x + "]: " + marsBoard[rover.y][rover.x]);
        rover.y -= 1;
      }else{
        rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
        console.log("Rover is in position " + rover.y + "," + rover.x);  
    }   
    }
      else{
        rover.y -= 1;
        console.log("LIMIT REACHED\n " + "Actual Position: " + rover.y + "," + rover.x);
      }
    } else{
    console.log("SYSTEM ERROR");
  }
}

//MOVEBACKWARDS FUNCTION
function moveBackward(){
  console.log("moveBacward was called");
  moveOtherRovers();
  if(rover.direction === "North"){
    rover.y += 1;
    if((rover.y >= 0) && (rover.y <= 9)){
      locateObject();
      if(locateObject() === true){
        console.log("Objec Found at: [" + rover.y + "," + rover.x + "]: " + marsBoard[rover.y][rover.x]);
        rover.y -= 1;
      }else{
        rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
        console.log("Rover is in position " + rover.y + "," + rover.x);  
    }   
    }else{
      rover.y -= 1;
      console.log("LIMIT REACHED\n " + "Actual Position: " + rover.y + "," + rover.x);
    }

  }else if(rover.direction === "East"){
    rover.x -= 1;
    if((rover.x >= 0) && (rover.x <= 9)){
      locateObject();
      if(locateObject() === true){
        console.log("Objec Found at: [" + rover.y + "," + rover.x + "]: " + marsBoard[rover.y][rover.x]);
        rover.x += 1;
      }else{
        rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
        console.log("Rover is in position " + rover.y + "," + rover.x);  
    } 
    } else{
      rover.x += 1;
      console.log("LIMIT REACHED\n " + "Actual Position: " + rover.y + "," + rover.x);
    }

  }else if(rover.direction === "West"){
    rover.x += 1;
    if((rover.x >= 0) && (rover.x <= 9)){
      locateObject();
      if(locateObject() === true){
        console.log("Objec Found at: [" + rover.y + "," + rover.x + "]: " + marsBoard[rover.y][rover.x]);
        rover.x -= 1;
      }else{
        rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
        console.log("Rover is in position " + rover.y + "," + rover.x);  
    } 
      } else{
        rover.x -= 1;
        console.log("LIMIT REACHED\n " + "Actual Position: " + rover.y + "," + rover.x);
      }

  } else if(rover.direction === "South"){
    rover.y -= 1; 
    if((rover.y >= 0) && (rover.y <= 9)){
      locateObject();
      if(locateObject() === true){
        console.log("Objec Found at: [" + rover.y + "," + rover.x + "]: " + marsBoard[rover.y][rover.x]);
        rover.y += 1;
      }else{
        rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
        console.log("Rover is in position " + rover.y + "," + rover.x);  
    } 
   }else{
        rover.y += 1;
        console.log("LIMIT REACHED\n " + "Actual Position: " + rover.y + "," + rover.x);
      }
}else{
    console.log("SYSTEM ERROR");
  }
}
//COMMANDS FUNCTION
function listCommands(letter){
for(var i = 0; i < letter.length; i++){
  if(letter[i] === "f"){
    moveForward();
  }else if(letter[i] === "l"){
    turnLeft();
}else if(letter[i] === "r"){
  turnRight();
}else if(letter[i] === "b"){
  moveBackward();
}else{
  console.log(`Wrong: ${letter[i]} is not a command`);
}
}
console.log(`Log: ${rover.travelLog}`);
}

//FUNCTION TO LOCATE OBJECTS IN MARS BOARD
function locateObject(){
  if(marsBoard[rover.y][rover.x] !== null){
    return true;
}
}
// FUNCTION TO PRINT ROVER'S ACTUAL POSITION
function printPosition(){
  console.log("Rover is facing " + rover.direction);
  console.log("Actual Position: " + rover.y + "," + rover.x);
}
//FUNCTION TO PRINT MARS BOARD
function printMarsBoard(){
  for(var i = 0; i < marsBoard.length; i++){
    for(var j = 0; j < marsBoard[i].length; j++){
      console.log(marsBoard[i][j]);
}
  }
  }
//FUNCTION TO MOVE OTHERS ROVERS
function moveOtherRovers(){
for(var i = 0; i < marsBoard.length; i++){
  for(var j = 0; j < marsBoard[i].length; j++){
    if(marsBoard[i][j] === "Rover"){
      marsBoard[i][j] = null;
      var randomRow = Math.floor(Math.random() * 9);
      var randomColumn = Math.floor(Math.random() * 9);
      marsBoard[randomRow][randomColumn] = "Rover";
      }
    }
  }
}

// FUNCTION TO PRINT THE MENU 
function printMenu(){
  console.log("Welcome to Mars Rover.\n" +
  "List of  available commands:\n" +
  "1. turnLeft() --> Rover turns to Left\n" +
  "2. turnRight() --> Rover turns to Right\n" +
  "3. moveForward() --> Rover moves Forward\n" +
  "4. moveBackward() --> Rover moves backward\n" +
  "5. listCommands() --> receives a list of commands: (f)orward, (r)ight, (l)eft, or (b)ackward.\n" +
  "6. printPosition() --> Displays Rover's actual Position\n" +
  "7. moveOthersRovers() --> Moves others rovers\n" +
  "8. printMarsBoard() --> Displays Mars Board\n" +
  "9. printMenu() --> Displays menu");
  }

printMenu();
printPosition();



