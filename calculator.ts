type Operation = "multiply" | "add" | "divide";
type Result = number;

const calculator = (a: number, b: number, op: Operation): Result => {
  switch (op) {
    case "multiply":
      return a * b;
    case "add":
      return a + b;
    case "divide":
      if (b === 0) throw new Error("can't divide by 0!");
      return a / b;
    default:
      throw new Error("Operation is not multiply, add, or divide!");
  }
};

try {
  console.log(calculator(1, 5, "divide"));
} catch (e) {
  console.log("something went wrong, error message: ", e.message);
}

console.log(process.argv);
