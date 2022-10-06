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
if (nSpins>500){return;}
if (currentBankroll >= theGoal) {return;}



    while (dupResults < (timesToWait - 1)) {


      spinResult = aSpin();


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

theHorse();

function theHorse() {
if (nSpins>500){return;}
if (currentBankroll >= theGoal) {return;}
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


  while (currentBankroll > 0) {

if (nSpins>500){return;}
if (currentBankroll >= theGoal) {return;}


    if (dupoddOrEven >= duphighOrLow) {
      betOnThe = "oddeven";
    } else if (duphighOrLow > dupoddOrEven) {
      betOnThe = "highlow";
    }
    if (dupspaceColor > duphighOrLow && dupspaceColor > dupoddOrEven) {
      betOnThe = "redblack";
    }

    var spinCycle = "soapy";

    switch (betOnThe) {

      case "oddeven":
      currentBankroll = currentBankroll - currentWager;
        if (oddOrEven == "odd") {

            if (currentBankroll < 1) {
              return;
            }

          document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on even..";
          spinResult = aSpin();
          if (oddOrEven == "even") {
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

          } else if (oddOrEven != "even") {


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

            while (spinCycle != "even") {
              currentWager = currentWager * 2;
              if (currentWager > currentBankroll) {
                return;
              }


              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
              currentBankroll = currentBankroll - currentWager;
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on even..";
              spinResult = aSpin();
              spinCycle = oddOrEven;
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
        } else if (oddOrEven == "even") {

            if (currentBankroll < 1) {
              return;
            }

          document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on odd..";
          spinResult = aSpin();
          if (oddOrEven == "odd") {
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

          } else if (oddOrEven != "odd") {

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

            while (spinCycle != "odd") {
              currentWager = currentWager * 2;
              if (currentWager > currentBankroll) {
                return;
              }
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
              currentBankroll = currentBankroll - currentWager;
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on odd..";
              spinResults = aSpin();
              spinCycle = oddOrEven;
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
			
			      case "highlow":
      currentBankroll = currentBankroll - currentWager;
        if (highOrLow == "high") {

            if (currentBankroll < 1) {
              return;
            }

          document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on low..";
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
              currentWager = currentWager * 2;
              if (currentWager > currentBankroll) {
                return;
              }

              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
              currentBankroll = currentBankroll - currentWager;
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on low..";
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

            if (currentBankroll < 1) {
              return;
            }

          document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on high..";
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
              currentWager = currentWager * 2;
              if (currentWager > currentBankroll) {
                return;
              }
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
              currentBankroll = currentBankroll - currentWager;
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on high..";
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

            if (currentBankroll < 1) {
              return;
            }

          document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on black..";
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
              currentWager = currentWager * 2;
              if (currentWager > currentBankroll) {
                return;
              }

              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
              currentBankroll = currentBankroll - currentWager;
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on black..";
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

            if (currentBankroll < 1) {
              return;
            }

          document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on red..";
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
              currentWager = currentWager * 2;
              if (currentWager > currentBankroll) {
                return;
              }
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "<span style='color:red;'>..and you lose.  Your current bankroll is: $" + currentBankroll + "</span>";
              currentBankroll = currentBankroll - currentWager;
              document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "You bet " + currentWager + " on red..";
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

        if (currentBankroll < 1) {
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

    } //end switch

      if (currentBankroll < 1) {
        return;
      }
if (nSpins>500){return;}
if (currentBankroll >= theGoal) {return;}
    dupResults = minSpins();

  } //end while (currentBankroll > currentWager)
} //end of theHorse


  function aSpin() {

if (currentBankroll >= theGoal) {return;}

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
        spaceColor = "black";
        break;
      case 22:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 23:
        oddOrEven = "odd";
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
        oddOrEven = "odd";
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
        oddOrEven = "odd";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 32:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 33:
        oddOrEven = "odd";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 34:
        oddOrEven = "even";
        highOrLow = "high";
        spaceColor = "black";
        break;
      case 35:
        oddOrEven = "odd";
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
    nSpins++;
    document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + spinResult + " " + oddOrEven + " " + highOrLow + " " + spaceColor;
    // document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + nSpins;
    if (nSpins>500){return;}
    return spinResult;
  }

	document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>";
if (currentBankroll > theBankroll) {
  document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "Your game has ended.  You have made $" + (currentBankroll-theBankroll) + " profit in " + nSpins + " turns for a total time of " + (nSpins*(Number(document.querySelector("#time").value))) + " minutes.";
} else if (currentBankroll < theBankroll) {
  document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<br>" + "Your game has ended.  You have lost in " + nSpins + " turns for a total time of " + (nSpins*(Number(document.querySelector("#time").value))) + " minutes.  Your remaining bankroll: $" + currentBankroll;
}

document.querySelector(".resultstxt").innerHTML = document.querySelector(".resultstxt").innerHTML + "<hr>" + "Roulette Martingale Calculator,  v1.1." + "<br>" + "For the newest full version check out <a href='https://martingale.imail.cloud/'>https://martingale.imail.cloud/</a>" + "<br>" + "Copyright © 2022 David Hucks. All Rights Reserved.";
}
