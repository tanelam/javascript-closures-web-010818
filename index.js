const app = "I don't do much."

function fatBastard(meal){
  function whatsForDinner(){
    //whatsForDinner is the inner function, a closure
    if(!meal) {
      console.log("My belly is empty. woe is me.");
    } else if (meal === "Mini-Me"){
      //whatsForDinner() uses argument provided to the parent
      //function
      console.log("The wee man is in my belly!");
    } else {
      console.log(`Im eatin a bit of ${meal}!`);
    }
  }
  function digest(){ //digest() is an inner function, a closure
      meal = undefined;
  }
  return { whatsForDinner,
    digest //we are now returning an object with refereces
            // to our whatsForDinner() and digest() functions
  };
  //we are not excecuting the function, we're returning it
}
