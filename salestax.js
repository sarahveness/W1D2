var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, salesTaxRates) {
  var total = {};
  var sumOfSales = 0;
  var taxRate = 0;
  for (i in salesData) {
    sumOfSales = salesData[i].sales.reduce((a, b) => a + b, 0);
    taxRate = salesTaxRates[salesData[i].province];
    var nameOfComp = salesData[i].name;
    if (total[nameOfComp] === undefined) {
      total[nameOfComp] = {};
      total[nameOfComp].totalSales = sumOfSales;
      total[nameOfComp].totalTax = sumOfSales * taxRate;
    } else {
      total[nameOfComp].totalSales += sumOfSales;
      total[nameOfComp].totalTax += sumOfSales * taxRate;
    }

  } return total;
}

console.log(calculateSalesTax(companySalesData, taxRates));

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/