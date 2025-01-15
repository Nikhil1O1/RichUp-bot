 
  function keepClickingRollDiceButton() {
    const buttons = document.getElementsByTagName('button');
    const xpath = '/html/body/div[1]/div[5]/div/div[2]/div/div/div[1]/div/div[2]/div[2]/div[1]/div/button/div';
  
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      const buttonBuy = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      const buttonText = button.textContent.trim();

      if(buttonText === "Another game" || (buttonText === "Start") || (buttonText === "Start Game") || (buttonText === "Enter Game") || (buttonText === "Join game")){
        button.click();
      }
  
      if (buttonBuy) {
        console.log('button buy is present')
        buttonBuy.click();
        break;
      }
  
      else if (buttonText === "Roll the dice" || 
          buttonText === "Roll again" || 
          buttonText === "End turn") {
        button.click();
        break;
      }
    }
  
    setTimeout(keepClickingRollDiceButton, 2000); 
  }
  
  keepClickingRollDiceButton();