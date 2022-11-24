function switchItUp(num){
 let text = "";
  switch (num) {
    case 1: mun = 1; text = "One"
    break;
    case 2: mun = 2; text = "Two"
    break;
    case 3: num = 3; text = "Three"
    break;
    case 4: num = 4; text = "Four"
    break;
    case 5: num = 5; text = "Five"
    break;
    case 6: num = 6; text = "Six"
    break;
    case 7: num = 7; text = "Seven"
    break;
    case 8: num = 8; text = "Eight"
    break;
    case 9: mun = 9; text = "Nine"
    break;
    case 0: mun = 0; text = "Zero"
    break;
  } 
  return text;
  }

  console.log(switchItUp(1)) //> "One"
  console.log(switchItUp(3)) //> "Three"
  console.log(switchItUp(5)) //> "Five"