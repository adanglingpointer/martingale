function myFunction() {

  //we reset so that we can re-run
  document.querySelector(".resultstxt").innerHTML = "Results: <br>";

  var randomNumber = 0;
  var spinResult = "0";
  var lastResult = 0;
  var dupResults = 0;
  var oddOrEven = "odd";
  var loddOrEven = 0;
  var dupoddOrEven = 0;
  var highOrLow = "low";
  var lhighOrLow = 0;
  var duphighOrLow = 0;
  var spaceColor = "red";
  var lspaceColor = 0;
  var dupspaceColor = 0;
  var originalWager = 5;
  var currentWager = 5;
  var theBankroll = 155;
  var currentBankroll = 155;
  var timesToWait = 2;
  var highestDup = 0;

  originalWager = Number(document.querySelector("#wager").value);
  theBankroll = Number(document.querySelector("#bankroll").value);
  timesToWait = Number(document.querySelector("#wait").value);

  //make first spin
  spinResult = aSpin();

  loddOrEven = oddOrEven;
  lhighOrLow = highOrLow;
  lspaceColor = spaceColor;

  //add first spin to the results
  document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + spinResult + " " + oddOrEven + " " + highOrLow + " " + spaceColor;

  //spin until we hit min duplicates before we start betting
  dupResults = minSpins();
  function minSpins() {
    while (dupResults < (timesToWait - 1)) {

      spinResult = aSpin();

      document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + spinResult + " " + oddOrEven + " " + highOrLow + " " + spaceColor;



      if (loddOrEven == oddOrEven) {
        dupoddOrEven++;
      } else if (loddOrEven != oddOrEven) {
        dupoddOrEven = 0;
      }

      if (lhighOrLow == highOrLow) {
        duphighOrLow++;
      } else if (lhighOrLow != highOrLow) {
        duphighOrLow = 0;
      }

      if (lspaceColor == spaceColor) {
        dupspaceColor++;
      } else if (lspaceColor != spaceColor) {
        dupspaceColor = 0;
      }

      if (dupoddOrEven >= duphighOrLow) {
        highestDup = dupoddOrEven;
      } else if (duphighOrLow > dupoddOrEven) {
        highestDup = duphighOrLow;
      }

      if (dupspaceColor > highestDup) {
        highestDup = dupspaceColor;
      }

      loddOrEven = oddOrEven;
      lhighOrLow = highOrLow;
      lspaceColor = spaceColor;

      dupResults = highestDup;
    }
    return dupResults;
  }

  //on to next step: start betting
  var betOnThe = "horse";

  if (dupoddOrEven >= duphighOrLow) {
    betOnThe = "oddeven";
  } else if (duphighOrLow > dupoddOrEven) {
    betOnThe = "highlow";
  }
  if (dupspaceColor > duphighOrLow && dupspaceColor > dupoddOrEven) {
    betOnThe = "redblack";
  }

  currentBankroll = Number(document.querySelector("#bankroll").value);
  currentWager = Number(document.querySelector("#wager").value);

  while (currentBankroll > currentWager) {
    var spinCycle = "soapy";
    currentBankroll = currentBankroll - currentWager;
    switch (betOnThe) {

      case "oddeven":
        if (oddOrEven == "odd") {
          document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on even..";
          spinResult = aSpin();
          if (oddOrEven == "even") {
            currentBankroll = currentBankroll + (currentWager * 2);
            document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "..and you win $" + (currentWager * 2) + " for a total of $" + currentBankroll + " in your bankroll!";
            currentWager = Number(document.querySelector("#wager").value);

            if (loddOrEven == oddOrEven) {
              dupoddOrEven++;
            } else if (loddOrEven != oddOrEven) {
              dupoddOrEven = 0;
            }
            if (lhighOrLow == highOrLow) {
              duphighOrLow++;
            } else if (lhighOrLow != highOrLow) {
              duphighOrLow = 0;
            }
            if (lspaceColor == spaceColor) {
              dupspaceColor++;
            } else if (lspaceColor != spaceColor) {
              dupspaceColor = 0;
            }
            if (dupoddOrEven >= duphighOrLow) {
              highestDup = dupoddOrEven;
            } else if (duphighOrLow > dupoddOrEven) {
              highestDup = duphighOrLow;
            }
            if (dupspaceColor > highestDup) {
              highestDup = dupspaceColor;
            }
            loddOrEven = oddOrEven;
            lhighOrLow = highOrLow;
            lspaceColor = spaceColor;
            dupResults = highestDup;

          } else if (oddOrEven != "even") {
            currentWager = currentWager * 2;

            if (loddOrEven == oddOrEven) {
              dupoddOrEven++;
            } else if (loddOrEven != oddOrEven) {
              dupoddOrEven = 0;
            }
            if (lhighOrLow == highOrLow) {
              duphighOrLow++;
            } else if (lhighOrLow != highOrLow) {
              duphighOrLow = 0;
            }
            if (lspaceColor == spaceColor) {
              dupspaceColor++;
            } else if (lspaceColor != spaceColor) {
              dupspaceColor = 0;
            }
            if (dupoddOrEven >= duphighOrLow) {
              highestDup = dupoddOrEven;
            } else if (duphighOrLow > dupoddOrEven) {
              highestDup = duphighOrLow;
            }
            if (dupspaceColor > highestDup) {
              highestDup = dupspaceColor;
            }
            loddOrEven = oddOrEven;
            lhighOrLow = highOrLow;
            lspaceColor = spaceColor;
            dupResults = highestDup;

            document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "..and you lose.  Your current bankroll is: $" + currentBankroll;
            while (spinCycle != "even") {
              if (currentWager > currentBankroll) {
                break;
              }
              currentBankroll = currentBankroll - currentWager;
              spinResult = aSpin();
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on even..";
              if (oddOrEven != "even") {
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "..and you lose.  Your current bankroll is: $" + currentBankroll;
                currentWager = currentWager * 2;

                if (loddOrEven == oddOrEven) {
                  dupoddOrEven++;
                } else if (loddOrEven != oddOrEven) {
                  dupoddOrEven = 0;
                }
                if (lhighOrLow == highOrLow) {
                  duphighOrLow++;
                } else if (lhighOrLow != highOrLow) {
                  duphighOrLow = 0;
                }
                if (lspaceColor == spaceColor) {
                  dupspaceColor++;
                } else if (lspaceColor != spaceColor) {
                  dupspaceColor = 0;
                }
                if (dupoddOrEven >= duphighOrLow) {
                  highestDup = dupoddOrEven;
                } else if (duphighOrLow > dupoddOrEven) {
                  highestDup = duphighOrLow;
                }
                if (dupspaceColor > highestDup) {
                  highestDup = dupspaceColor;
                }
                loddOrEven = oddOrEven;
                lhighOrLow = highOrLow;
                lspaceColor = spaceColor;
                dupResults = highestDup;

              } else if (oddOrEven == "even") {
                currentBankroll = currentBankroll + (currentWager * 2);
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "..and you win $" + (currentWager * 2) + " for a total of $ " + currentBankroll + " in your bankroll!";
                currentWager = Number(document.querySelector("#wager").value);

                if (loddOrEven == oddOrEven) {
                  dupoddOrEven++;
                } else if (loddOrEven != oddOrEven) {
                  dupoddOrEven = 0;
                }
                if (lhighOrLow == highOrLow) {
                  duphighOrLow++;
                } else if (lhighOrLow != highOrLow) {
                  duphighOrLow = 0;
                }
                if (lspaceColor == spaceColor) {
                  dupspaceColor++;
                } else if (lspaceColor != spaceColor) {
                  dupspaceColor = 0;
                }
                if (dupoddOrEven >= duphighOrLow) {
                  highestDup = dupoddOrEven;
                } else if (duphighOrLow > dupoddOrEven) {
                  highestDup = duphighOrLow;
                }
                if (dupspaceColor > highestDup) {
                  highestDup = dupspaceColor;
                }
                loddOrEven = oddOrEven;
                lhighOrLow = highOrLow;
                lspaceColor = spaceColor;
                dupResults = highestDup;

              }
              spinCycle = oddOrEven;
            }
          }
        } else if (oddOrEven == "even") {
          document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on odd..";
          spinResult = aSpin();
          if (oddOrEven == "odd") {
            currentBankroll = currentBankroll + (currentWager * 2);
            document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "..and you win $" + (currentWager * 2) + " for a total of $" + currentBankroll + " in your bankroll!";
            currentWager = Number(document.querySelector("#wager").value);

            if (loddOrEven == oddOrEven) {
              dupoddOrEven++;
            } else if (loddOrEven != oddOrEven) {
              dupoddOrEven = 0;
            }
            if (lhighOrLow == highOrLow) {
              duphighOrLow++;
            } else if (lhighOrLow != highOrLow) {
              duphighOrLow = 0;
            }
            if (lspaceColor == spaceColor) {
              dupspaceColor++;
            } else if (lspaceColor != spaceColor) {
              dupspaceColor = 0;
            }
            if (dupoddOrEven >= duphighOrLow) {
              highestDup = dupoddOrEven;
            } else if (duphighOrLow > dupoddOrEven) {
              highestDup = duphighOrLow;
            }
            if (dupspaceColor > highestDup) {
              highestDup = dupspaceColor;
            }
            loddOrEven = oddOrEven;
            lhighOrLow = highOrLow;
            lspaceColor = spaceColor;
            dupResults = highestDup;

          } else if (oddOrEven != "odd") {
            currentWager = currentWager * 2;

            if (loddOrEven == oddOrEven) {
              dupoddOrEven++;
            } else if (loddOrEven != oddOrEven) {
              dupoddOrEven = 0;
            }
            if (lhighOrLow == highOrLow) {
              duphighOrLow++;
            } else if (lhighOrLow != highOrLow) {
              duphighOrLow = 0;
            }
            if (lspaceColor == spaceColor) {
              dupspaceColor++;
            } else if (lspaceColor != spaceColor) {
              dupspaceColor = 0;
            }
            if (dupoddOrEven >= duphighOrLow) {
              highestDup = dupoddOrEven;
            } else if (duphighOrLow > dupoddOrEven) {
              highestDup = duphighOrLow;
            }
            if (dupspaceColor > highestDup) {
              highestDup = dupspaceColor;
            }
            loddOrEven = oddOrEven;
            lhighOrLow = highOrLow;
            lspaceColor = spaceColor;
            dupResults = highestDup;

            document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "..and you lose.  Your current bankroll is: $" + currentBankroll;
            while (spinCycle != "odd") {
              if (currentWager > currentBankroll) {
                break;
              }
              currentBankroll = currentBankroll - currentWager;
              spinResults = aSpin();
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on odd..";
              if (oddOrEven != "odd") {
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "..and you lose.  Your current bankroll is: $" + currentBankroll;
                currentWager = currentWager * 2;

                if (loddOrEven == oddOrEven) {
                  dupoddOrEven++;
                } else if (loddOrEven != oddOrEven) {
                  dupoddOrEven = 0;
                }
                if (lhighOrLow == highOrLow) {
                  duphighOrLow++;
                } else if (lhighOrLow != highOrLow) {
                  duphighOrLow = 0;
                }
                if (lspaceColor == spaceColor) {
                  dupspaceColor++;
                } else if (lspaceColor != spaceColor) {
                  dupspaceColor = 0;
                }
                if (dupoddOrEven >= duphighOrLow) {
                  highestDup = dupoddOrEven;
                } else if (duphighOrLow > dupoddOrEven) {
                  highestDup = duphighOrLow;
                }
                if (dupspaceColor > highestDup) {
                  highestDup = dupspaceColor;
                }
                loddOrEven = oddOrEven;
                lhighOrLow = highOrLow;
                lspaceColor = spaceColor;
                dupResults = highestDup;

              } else if (oddOrEven == "odd") {
                currentBankroll = currentBankroll + (currentWager * 2);
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "..and you win $" + (currentWager * 2) + " for a total of $ " + currentBankroll + " in your bankroll!";
                currentWager = Number(document.querySelector("#wager").value);

                if (loddOrEven == oddOrEven) {
                  dupoddOrEven++;
                } else if (loddOrEven != oddOrEven) {
                  dupoddOrEven = 0;
                }
                if (lhighOrLow == highOrLow) {
                  duphighOrLow++;
                } else if (lhighOrLow != highOrLow) {
                  duphighOrLow = 0;
                }
                if (lspaceColor == spaceColor) {
                  dupspaceColor++;
                } else if (lspaceColor != spaceColor) {
                  dupspaceColor = 0;
                }
                if (dupoddOrEven >= duphighOrLow) {
                  highestDup = dupoddOrEven;
                } else if (duphighOrLow > dupoddOrEven) {
                  highestDup = duphighOrLow;
                }
                if (dupspaceColor > highestDup) {
                  highestDup = dupspaceColor;
                }
                loddOrEven = oddOrEven;
                lhighOrLow = highOrLow;
                lspaceColor = spaceColor;
                dupResults = highestDup;

              }
              spinCycle = oddOrEven;
            }
          }
        }
        // document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "bankroll is " + currentBankroll + " current wager: " + currentWager;
        break;

      default:
        myFunction();
        break;

    } //end switch
    minSpins();

  } //end while (currentBankroll > currentWager)


  function aSpin() {
    randomNumber = Math.floor(Math.random() * 38) + 1;
    if (randomNumber === 37) {
      spinResult = "0";
      oddOrEven = "zero";
      highOrLow = "zero";
      spaceColor = "zero";
    } else if (randomNumber === 38) {
      spinResult = "00";
      oddOrEven = "doublezero";
      highOrLow = "doublezero";
      spaceColor = "doublezero";
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
        oddOrEven = "odd";
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
        oddOrEven = "zero";
        highOrLow = "zero";
        spaceColor = "zero";
        break;
      case 38:
        oddOrEven = "doublezero";
        highOrLow = "doublezero";
        spaceColor = "doublezero";
        break;
      default:
        break;
    }
    return spinResult;
  }

  // alert("done");
}
