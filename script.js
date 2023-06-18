
const billAmount = document.querySelector("#billAmount");
const discount = document.querySelector("#discountPercentage");
const calculate = document.querySelector("#calculate");
const totalDiscount = document.querySelector("#total");

calculate.addEventListener ('click', () => {
    // Validation
    const billAmountValue = billAmount.value;
    const discountValue = discount.value;
    
    const validBillAmountValue = isValidBill(billAmountValue);
    if (validBillAmountValue) {
        const totalDiscountValue = billAmountValue-(billAmountValue*discountValue) /100;
        console.log(totalDiscountValue);

        totalDiscount.innerHTML = `Total Amount to pay is: ${totalDiscountValue}`;
    } else {
        alert(`Invalid Biil Amount: ${billAmountValue}`)
    }

    const validDiscountValue = isValidDiscount(discountValue)
    if (validDiscountValue) {
        const totalDiscountValue = billAmountValue-(billAmountValue*discountValue) /100;
        console.log(totalDiscountValue);

        totalDiscount.innerHTML = `Total Amount to pay is: ${totalDiscountValue}`;
    } else {
        alert(`Invalid Discount: ${discountValue}`)
    }
} )
function isValidBill(bill) {
    if (bill<=0 || bill=="") {
        return false;
    } else {
        return true;
    }
}

function isValidDiscount(discount) {
    if (discount<0 || discount>100) {
        return false;
    } else {
        return true;
    }
}
