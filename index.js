function myFunction() {



  //we reset so that we can re-run
  document.querySelector(".resultstxt").innerHTML = "Results: <br>";

  var randomNumber = 0;
  var spinResult = "0";
  var lastResult = 0;
  var dupResults = 0;
  var oddOrEven = "bodd";
  var loddOrEven = "rodd";
  var dupoddOrEven = 0;
  var highOrLow = "glow";
  var lhighOrLow = "flow";
  var duphighOrLow = 0;
  var spaceColor = "gred";
  var lspaceColor = "bred";
  var dupspaceColor = 0;
  var originalWager = 5;
  var currentWager = 5;
  var theBankroll = 155;
  var currentBankroll = 155;
  var timesToWait = 2;
  var highestDup = 0;
  var nSpins = 0;
  var theGoal = Number(document.querySelector("#goal").value);

  originalWager = Number(document.querySelector("#wager").value);
  currentWager = originalWager;

  theBankroll = Number(document.querySelector("#bankroll").value);
  currentBankroll = theBankroll;
  timesToWait = Number(document.querySelector("#wait").value);


  //make first spin
  spinResult = aSpin();

  loddOrEven = oddOrEven;
  lhighOrLow = highOrLow;
  lspaceColor = spaceColor;

  //spin until we hit min duplicates before we start betting
  dupResults = minSpins();

  function minSpins() {
    //spin until we hit specified amount of duplicates
    //as long as we haven't hit max spins or the goal
    if (nSpins > 500) {
      return;
    }
    if (currentBankroll >= theGoal) {
      return;
    }

    //wait for numbers of dupes to hit
    while (dupResults < (timesToWait - 1)) {

      //call our spin function to spin once
      spinResult = aSpin();

      //determine if the last black/odd/high,etc. matches the newest spin
      //and return the highest number of duplicates, storing what type (odd/high/black) it is in highestDup
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

      //after we determine the dupes,
      //the last spin variables are now the latest spin outcome
      loddOrEven = oddOrEven;
      lhighOrLow = highOrLow;
      lspaceColor = spaceColor;

      dupResults = highestDup;
    }
    return dupResults;
  }

  theHorse();  //bet on the Horse! (bad joke)

  function theHorse() {
    //rest of the calculator remains in this function as we exhaust spins, bankroll, or actually reach goal
    if (nSpins > 500) {
      return;
    }
    if (currentBankroll >= theGoal) {
      return;
    }

    //on to next step: start betting
    var betOnThe = "horse";  //we could have left this blank but..

    //determine which outside bet we should place our first wager
    if (dupoddOrEven >= duphighOrLow) {
      betOnThe = "oddeven";
    } else if (duphighOrLow > dupoddOrEven) {
      betOnThe = "highlow";
    }
    if (dupspaceColor > duphighOrLow && dupspaceColor > dupoddOrEven) {
      betOnThe = "redblack";
    }

    //while we still have money in the bank
    while (currentBankroll > 0) {

      if (nSpins > 500) {
        return;
      }
      if (currentBankroll >= theGoal) {
        return;
      }

      if (dupoddOrEven >= duphighOrLow) {
        betOnThe = "oddeven";
      } else if (duphighOrLow > dupoddOrEven) {
        betOnThe = "highlow";
      }
      if (dupspaceColor > duphighOrLow && dupspaceColor > dupoddOrEven) {
        betOnThe = "redblack";
      }

      var spinCycle = "soapy";  //sorry again...

      switch (betOnThe) {

        //if we are betting on odd/even
        case "oddeven":
          currentBankroll = currentBankroll - currentWager;
          if (oddOrEven == "odd") {
            //the last spin result was odd, so we will be betting on even

            if (currentBankroll < 0) {
              return;
            }
            document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on even..</strong>";
            spinResult = aSpin();
            if (oddOrEven == "even") {
              //we won the bet on even
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $" + currentBankroll + " in your bankroll!</span>";
              currentWager = Number(document.querySelector("#wager").value);

              //determine other dupes (besides odd/even) to possibly bet on upcoming spin
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
              //we lost the bet because the spin landed on odd

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

              //we begin our spinCycle for as long as the wheel continues to hit odd, zero/double-zero, or we go broke
              while (spinCycle != "even") {
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
                //each time we lose, we're doubling up on our wager
                currentWager = currentWager * 2;
                if (currentWager > currentBankroll) {
                  return;
                }
                currentBankroll = currentBankroll - currentWager;
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on even..</strong>";
                spinResult = aSpin();
                spinCycle = oddOrEven;
              }

              //another dupe compare after leaving the spinCycle
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

              //since we were able to make it this far (and out of spinCycle) it means we must have won
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $ " + currentBankroll + " in your bankroll!</span>";
              currentWager = Number(document.querySelector("#wager").value);
            }
          } else if (oddOrEven == "even") {
            //the last spin result was even, so we will be betting on odd

            if (currentBankroll < 0) {
              return;
            }

            document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on odd..</strong>";
            spinResult = aSpin();
            if (oddOrEven == "odd") {
              //we won the bet on odd
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $" + currentBankroll + " in your bankroll!</span>";
              currentWager = Number(document.querySelector("#wager").value);

              //determine other dupes (besides odd/even) to possibly bet on upcoming spin
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
              //we lost the bet because the spin landed on even

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

              //we begin our spinCycle for as long as the wheel continues to hit even, zero/double-zero, or we go broke
              while (spinCycle != "odd") {
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
                //each time we lose, we're doubling up on our wager
                currentWager = currentWager * 2;
                if (currentWager > currentBankroll) {
                  return;
                }

                currentBankroll = currentBankroll - currentWager;
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on odd..</strong>";
                spinResults = aSpin();
                spinCycle = oddOrEven;
              }

              //another dupe compare after leaving the spinCycle
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

              //since we were able to make it this far (and out of spinCycle) it means we must have won
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $ " + currentBankroll + " in your bankroll!</span>";
              currentWager = Number(document.querySelector("#wager").value);
            }
          }
          break;

        case "highlow":
          currentBankroll = currentBankroll - currentWager;
          if (highOrLow == "high") {

            if (currentBankroll < 0) {
              return;
            }

            document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on low..</strong>";
            spinResult = aSpin();
            if (highOrLow == "low") {
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $" + currentBankroll + " in your bankroll!</span>";
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

            } else if (highOrLow != "low") {


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

              while (spinCycle != "low") {
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
                currentWager = currentWager * 2;
                if (currentWager > currentBankroll) {
                  return;
                }

                currentBankroll = currentBankroll - currentWager;
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on low..</strong>";
                spinResult = aSpin();
                spinCycle = highOrLow;
              }
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
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $ " + currentBankroll + " in your bankroll!</span>";
              currentWager = Number(document.querySelector("#wager").value);
            }
          } else if (highOrLow == "low") {

            if (currentBankroll < 0) {
              return;
            }

            document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on high..</strong>";
            spinResult = aSpin();
            if (highOrLow == "high") {
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $" + currentBankroll + " in your bankroll!</span>";
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

            } else if (highOrLow != "high") {

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

              while (spinCycle != "high") {
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
                currentWager = currentWager * 2;
                if (currentWager > currentBankroll) {
                  return;
                }
                currentBankroll = currentBankroll - currentWager;
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on high..</strong>";
                spinResults = aSpin();
                spinCycle = highOrLow;
              }
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
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $ " + currentBankroll + " in your bankroll!</span>";
              currentWager = Number(document.querySelector("#wager").value);
            }
          }
          break;

        case "redblack":
          currentBankroll = currentBankroll - currentWager;
          if (spaceColor == "red") {

            if (currentBankroll < 0) {
              return;
            }

            document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on black..</strong>";
            spinResult = aSpin();
            if (spaceColor == "black") {
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $" + currentBankroll + " in your bankroll!</span>";
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

            } else if (spaceColor != "black") {


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

              while (spinCycle != "black") {
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
                currentWager = currentWager * 2;
                if (currentWager > currentBankroll) {
                  return;
                }
                currentBankroll = currentBankroll - currentWager;
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on black..</strong>";
                spinResult = aSpin();
                spinCycle = spaceColor;
              }
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
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $ " + currentBankroll + " in your bankroll!</span>";
              currentWager = Number(document.querySelector("#wager").value);
            }
          } else if (spaceColor == "black") {

            if (currentBankroll < 0) {
              return;
            }

            document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on red..</strong>";
            spinResult = aSpin();
            if (spaceColor == "red") {
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $" + currentBankroll + " in your bankroll!</span>";
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

            } else if (spaceColor != "red") {

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

              while (spinCycle != "red") {
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
                currentWager = currentWager * 2;
                if (currentWager > currentBankroll) {
                  return;
                }
                currentBankroll = currentBankroll - currentWager;
                document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<strong>You bet " + currentWager + " on red..</strong>";
                spinResults = aSpin();
                spinCycle = spaceColor;
              }
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
              currentBankroll = currentBankroll + (currentWager * 2);
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:green;'>..and you win $" + (currentWager * 2) + " for a total of $ " + currentBankroll + " in your bankroll!</span>";
              currentWager = Number(document.querySelector("#wager").value);
            }
          }
          break;


        default:

          //we really should be throwing an error here,
          //instead, we'll just reset and respin and the game goes on =]
          if (currentBankroll < 0) {
            return;
          }
          highOrLow = "glow";
          lhighOrLow = "flow";
          duphighOrLow = 0;
          spaceColor = "gred";
          lspaceColor = "bred";
          dupspaceColor = 0;
          highestDup = dupoddOrEven;
          dupResults = highestDup;
          dupResults = minSpins();
          theHorse();
          break;

      } //end of switch

      if (currentBankroll < 0) {
        return;
      }
      if (nSpins > 500) {
        return;
      }
      if (currentBankroll >= theGoal) {
        return;
      }
      dupResults = minSpins();

    } //end while (currentBankroll > currentWager)
  } //end of theHorse


  function aSpin() {
    //our spin function, for a singular spin

    if (currentBankroll >= theGoal) {
      return;
    }

    //we draw a random numbers, associate 1-36 as real roulette numbers,
    //and 37,38 as zero,double zero
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
        oddOrEven = "odd";
        highOrLow = "high";
        spaceColor = "red";
        break;
      case 22:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 23:
        oddOrEven = "odd";
        highOrLow = "high";
        spaceColor = "red";
        break;
      case 24:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 25:
        oddOrEven = "odd";
        highOrLow = "high";
        spaceColor = "red";
        break;
      case 26:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 27:
        oddOrEven = "odd";
        highOrLow = "high";
        spaceColor = "red";
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
        spaceColor = "red";
        break;
      case 31:
        oddOrEven = "odd";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 32:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "red";
        break;
      case 33:
        oddOrEven = "odd";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 34:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "red";
        break;
      case 35:
        oddOrEven = "odd";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 36:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "red";
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

    //keeping track of total number of spins in the game
    nSpins++;

    if (spaceColor == "zero" || spaceColor == "doublezero") {
      document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='background-color: YellowGreen;'>" + spinResult + " " + oddOrEven + " " + highOrLow + " " + spaceColor + "</span>";
    } else if (spaceColor == "red") {
      document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='background-color: Tomato;'>" + spinResult + " " + oddOrEven + " " + highOrLow + " " + spaceColor + "</span>";
    } else {
      document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='background-color: #262626;color:Azure'>" + spinResult + " " + oddOrEven + " " + highOrLow + " " + spaceColor + "</span>";
    }
    if (nSpins > 500) {
      return;
    }
    return spinResult;
  }

  //if this extra feature is checked, we will continue to bet, even if we don't have enought o double down,
  //as long as our bankroll is at least the minimum wager
  if (document.querySelector("#betbeyond").checked) {
    while (currentBankroll >= originalWager && nSpins < 501) {
      currentWager = originalWager;
      theHorse();
    }
  }

  document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>";
  if (currentBankroll > theBankroll) {
    //you've won, or made profit after 500 spins
    document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "Your game has ended.  You have made $" + (currentBankroll - theBankroll) + " profit in " + nSpins + " turns for a total time of " + (nSpins * (Number(document.querySelector("#time").value))) + " minutes.";
  } else if (currentBankroll < theBankroll) {
    //you've lost
    document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "Your game has ended.  You have lost in " + nSpins + " turns for a total time of " + (nSpins * (Number(document.querySelector("#time").value))) + " minutes.  Your remaining bankroll: $" + currentBankroll;
  }

  document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<hr>" + "Roulette Martingale Calculator,  v1.1." + "<br>" + "For the newest full version check out <a href='https://martingale.imail.cloud/'>https://martingale.imail.cloud/</a>" + "<br>" + "Copyright © 2022 David Hucks. All Rights Reserved.";
}
