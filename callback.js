function greetings(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function welcome() {
    console.log("Welcome");
  }
  
  greetings("X", welcome);