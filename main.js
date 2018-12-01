function divisors(integer) {
  let divs=[];
  for (let i = 2; i < integer; i++){
    if (integer % i == 0) {
      divs.push(i);
    }
  }
  if (divs.length > 0) {
    return divs;
  }
  return (integer + " is prime");
};
