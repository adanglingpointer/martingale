var randomNumber = 0;
var spinResult = "0";
var lastResult = 0;
var dupResults = 0;
var oddOrEven = "odd";
var loddOrEven = "nodd";
var dupoddOrEven = 0;
var highOrLow = "low";
var lhighOrLow = "glow";
var duphighOrLow = 0;
var spaceColor = "red";
var lspaceColor = "bred";
var dupspaceColor = 0;
var originalWager = 5;
var currentWager = 5;
var theBankroll = 155;
var currentBankroll = 155;
var timesToWait = 2;
var highestDup = 0;

function myFunction() {

  originalWager = document.querySelector("#wager").value;
  theBankroll = document.querySelector("#bankroll").value;
  timesToWait = document.querySelector("#wait").value;

  randomNumber = Math.floor(Math.random() * 38) + 1;
  if (randomNumber === 37) {
    spinResult = "0";
  } else if (randomNumber === 38) {
    spinResult = "00";
  } else {
    spinResult = randomNumber.toString();
  }

  switch (randomNumber) {
    case 1:
      oddOrEven = "odd";
      highOrLow = "low";
      spaceColor = "red";
      break;
    case 2:
      oddOrEven = "even";
      highOrLow = "low";
      spaceColor = "black";
      break;
    case 3:
      oddOrEven = "odd";
      highOrLow = "low";
      spaceColor = "red";
      break;
    case 4:
      oddOrEven = "even";
      highOrLow = "low";
      spaceColor = "black";
      break;
    case 5:
      oddOrEven = "odd";
      highOrLow = "low";
      spaceColor = "red";
      break;
    case 6:
      oddOrEven = "even";
      highOrLow = "low";
      spaceColor = "black";
      break;
    case 7:
      oddOrEven = "odd";
      highOrLow = "low";
      spaceColor = "red";
      break;
    case 8:
      oddOrEven = "even";
      highOrLow = "low";
      spaceColor = "black";
      break;
    case 9:
      oddOrEven = "odd";
      highOrLow = "low";
      spaceColor = "red";
      break;
    case 10:
      oddOrEven = "even";
      highOrLow = "low";
      spaceColor = "black";
      break;
    case 11:
      oddOrEven = "odd";
      highOrLow = "low";
      spaceColor = "black";
      break;
    case 12:
      oddOrEven = "even";
      highOrLow = "low";
      spaceColor = "red";
      break;
    case 13:
      oddOrEven = "odd";
      highOrLow = "low";
      spaceColor = "black";
      break;
    case 14:
      oddOrEven = "even";
      highOrLow = "low";
      spaceColor = "red";
      break;
    case 15:
      oddOrEven = "odd";
      highOrLow = "low";
      spaceColor = "black";
      break;
    case 16:
      oddOrEven = "even";
      highOrLow = "low";
      spaceColor = "red";
      break;
    case 17:
      oddOrEven = "odd";
      highOrLow = "low";
      spaceColor = "black";
      break;
    case 18:
      oddOrEven = "even";
      highOrLow = "low";
      spaceColor = "red";
      break;
    case 19:
      oddOrEven = "odd";
      highOrLow = "high";
      spaceColor = "red";
      break;
    case 20:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 21:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 22:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 23:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 24:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 25:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 26:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 27:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 28:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 29:
      oddOrEven = "odd";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 30:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 31:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 32:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 33:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 34:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 35:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 36:
      oddOrEven = "even";
      highOrLow = "high";
      spaceColor = "black";
      break;
    case 37:
      oddOrEven = "even";
      highOrLow = "zero";
      spaceColor = "black";
      break;
    case 38:
      oddOrEven = "even";
      highOrLow = "doublezero";
      spaceColor = "black";
      break;
    default:
  }
  loddOrEven = oddOrEven;
  lhighOrLow = highOrLow;
  lspaceColor = spaceColor;

  document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + spinResult + " " + oddOrEven + " " + highOrLow + " " + spaceColor;

  // while(currentWager < currentBankroll){

  while (dupResults < timesToWait) {

    randomNumber = Math.floor(Math.random() * 38) + 1;
    if (randomNumber === 37) {
      spinResult = "0";
    } else if (randomNumber === 38) {
      spinResult = "00";
    } else {
      spinResult = randomNumber.toString();
    }

    switch (randomNumber) {
      case 1:
        oddOrEven = "odd";
        highOrLow = "low";
        spaceColor = "red";
        break;
      case 2:
        oddOrEven = "even";
        highOrLow = "low";
        spaceColor = "black";
        break;
      case 3:
        oddOrEven = "odd";
        highOrLow = "low";
        spaceColor = "red";
        break;
      case 4:
        oddOrEven = "even";
        highOrLow = "low";
        spaceColor = "black";
        break;
      case 5:
        oddOrEven = "odd";
        highOrLow = "low";
        spaceColor = "red";
        break;
      case 6:
        oddOrEven = "even";
        highOrLow = "low";
        spaceColor = "black";
        break;
      case 7:
        oddOrEven = "odd";
        highOrLow = "low";
        spaceColor = "red";
        break;
      case 8:
        oddOrEven = "even";
        highOrLow = "low";
        spaceColor = "black";
        break;
      case 9:
        oddOrEven = "odd";
        highOrLow = "low";
        spaceColor = "red";
        break;
      case 10:
        oddOrEven = "even";
        highOrLow = "low";
        spaceColor = "black";
        break;
      case 11:
        oddOrEven = "odd";
        highOrLow = "low";
        spaceColor = "black";
        break;
      case 12:
        oddOrEven = "even";
        highOrLow = "low";
        spaceColor = "red";
        break;
      case 13:
        oddOrEven = "odd";
        highOrLow = "low";
        spaceColor = "black";
        break;
      case 14:
        oddOrEven = "even";
        highOrLow = "low";
        spaceColor = "red";
        break;
      case 15:
        oddOrEven = "odd";
        highOrLow = "low";
        spaceColor = "black";
        break;
      case 16:
        oddOrEven = "even";
        highOrLow = "low";
        spaceColor = "red";
        break;
      case 17:
        oddOrEven = "odd";
        highOrLow = "low";
        spaceColor = "black";
        break;
      case 18:
        oddOrEven = "even";
        highOrLow = "low";
        spaceColor = "red";
        break;
      case 19:
        oddOrEven = "odd";
        highOrLow = "high";
        spaceColor = "red";
        break;
      case 20:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 21:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 22:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 23:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 24:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 25:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 26:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 27:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 28:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 29:
        oddOrEven = "odd";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 30:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 31:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 32:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 33:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 34:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 35:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 36:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 37:
        oddOrEven = "even";
        highOrLow = "zero";
        spaceColor = "black";
        break;
      case 38:
        oddOrEven = "even";
        highOrLow = "doublezero";
        spaceColor = "black";
        break;
      default:
        break;
    }

    document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + spinResult + " " + oddOrEven + " " + highOrLow + " " + spaceColor;

    document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "dupResults = " + dupResults + " timesToWait = " + timesToWait;

    if (lOddOrEven == oddOrEven) {
      dupoddOrEven++;
    } else if (lOffOrEven != oddOrEven) {
      dupoddOrEven = 0;
    }
    if (lhighOrLow == highOrLow) {
      duphighOrLow++;
    } else if (lhighOrLow != highOrLow) {
      duphighOrLow = 0;
    }
    if (lspaceColor == spaceColor) {
      dupspaceColor++
    } else if (lspaceColor != spaceColor) {
      dupspaceColor = 0;
    }

    if (dupOddOrEven > duphighOrLow) {
      highestDup = dupOddOrEven;
    } else if (duphighOrLow > dupOddOrEven) {
      highestDup = duphighOrLow;
    }
    if (dupspaceColor > highestDup) {
      highestDup = dupspaceColor;
    }

    dupResults = highestDup;

    //
    // if(loddOrEven==oddOrEven){
    //   dupResults++;
    // }
    // else if(lhighOrLow==highOrLow){
    //   dupResults++;
    // }
    // else if(lspaceColor==spaceColor){
    //   dupResults++;
    // }
    // else{
    //   dupResults=0;
    // }

    loddOrEven = oddOrEven;
    lhighOrLow = highOrLow;
    lspaceColor = spaceColor;
  }

  document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "dupResults = " + dupResults;
  alert(dupResults);
}
