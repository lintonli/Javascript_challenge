let items = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

function cartTotal(item) {
  let total = 0;
  for (let i = 0; i < item.length; i++) {
    total += item[i].price;
  }
  return total;
}
console.log(`Total cost is ` + cartTotal(items) + `$`);
