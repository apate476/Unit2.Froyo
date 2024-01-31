const choose = prompt("enter your flavors separated with commas");

const orderArray = choose.split(",");

console.log(orderArray);

let flavor = {};

for (let i = 0; i < orderArray.length; i++) {
  let currentFlavor = orderArray[i].toLowerCase().trim();

  if (flavor[currentFlavor] === undefined) {
    flavor[currentFlavor] = 1;
  } else {
    flavor[currentFlavor] += 1;
  }
}

console.table(flavor);
