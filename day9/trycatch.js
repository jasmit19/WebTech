function calculate() {
    let result;
    try {
      let num = prompt("Enter a number:");
      if (!num) throw "No input provided";
      if (isNaN(num)) throw "Not a valid number";
      result = Number(num) * 10;
      document.getElementById("output").innerText = "Result: " + result;
    } catch (error) {
      document.getElementById("output").innerText = "Error: " + error;
    } finally {
      console.log("Execution completed.");
    }
  }