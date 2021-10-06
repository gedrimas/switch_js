const calculateSum = (...args) => {
  let outcome = args.reduce((acc, arg) => acc + arg, 0);
  
  const sum = (param) => {
    console.log("outcome", outcome);

    outcome += param;
    return sum;
  };

  sum.valueOf = () => outcome;
  return sum;
};

//console.log(Number(calculateSum(1, 2)(2)(3)(4)));
console.log(calculateSum(1)(2)(3)(4));
