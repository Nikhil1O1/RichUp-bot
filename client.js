function keepClickingRollDiceButton() {
  const buttons = document.getElementsByTagName('button');
  const buyXpath = '/html/body/div[1]/div[5]/div/div[2]/div/div/div[1]/div/div[2]/div[2]/div[1]/div/button/div';
  const bankruptXpath = '/html/body/div[1]/div[4]/div/div[3]/div/div[2]/div/button/div'
  const bankruptXpath2 = '/html/body/div[6]/div/div/div/button[1]/div'
  let count = Number(localStorage.getItem('count')) || 0;
  localStorage.setItem('count', count);
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const buttonBuy = document.evaluate(buyXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    const bankruptButton = document.evaluate(bankruptXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    const bankruptButton2 = document.evaluate(bankruptXpath2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    const buttonText = button.textContent.trim();

    if(buttonText === "Another game" || (buttonText === "Start") || (buttonText === "Start Game") || (buttonText === "Enter Game") || (buttonText === "Join game")){
      localStorage.setItem('count', 0);
      console.log(localStorage.getItem('count'));
      button.click();
    }

    if (buttonBuy) {
      buttonBuy.click();
      console.log('button buy is present')
      if(buttonText === 'Roll again'){
        button.click();
      }
      break;
    }

    if (Number(localStorage.getItem('count')) >= 70){
      if(buttonText === "Bankrupt"){
        button.click();
        setTimeout(()=>{
          button.click();
        },2000)
      }
    }

    else if (buttonText === "Roll the dice" || 
        buttonText === "Roll again" || 
        buttonText === "End turn") {
      button.click();
      localStorage.setItem('count', Number(localStorage.getItem('count')) + 1);
      console.log(localStorage.getItem('count'));
      break;
    }
  }

  setTimeout(keepClickingRollDiceButton, 2000); 
}

keepClickingRollDiceButton();