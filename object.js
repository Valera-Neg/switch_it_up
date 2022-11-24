const days = {
  1: "One", 2:"Two", 3:"Three", 4:"Four", 
  5:"Five", 6:"Six", 7:"Seven", 8:"Eigth",
   9:"Nine",0:"Zero"
  }

  function switchItUp(num){
  return days[num];   
  }

  console.log(switchItUp(1)) //> "One"
  console.log(switchItUp(3)) //> "Three"
  console.log(switchItUp(5)) //> "Five"