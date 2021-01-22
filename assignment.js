//Kilometer To Meter Converter

function kilomiterToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var totalMeter = kilomiterToMeter(50);
console.log(totalMeter);


// Budget Calculator

function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop) {
    var watchPrice = numOfWatch * 50;
    var phonePrice = numOfPhone * 100;
    var laptopPrice = numOfLaptop * 500;
    var budget = watchPrice + phonePrice + laptopPrice;
    return budget;
}
var totalBudget = budgetCalculator(10, 10, 10);
console.log(totalBudget);

// Hotel Cost

function hotelCost(numOfDays) {
    var rent = 0;
    if (numOfDays <= 10) {
        rent = numOfDays * 100;
    } else if (numOfDays <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = numOfDays - 10;
        var secondTenDays = remainingDays * 80;
        rent = firstTenDays + secondTenDays;

    } else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = numOfDays - 20;
        var moreDays = remainingDays * 50;
        rent = firstTenDays + secondTenDays + moreDays;
    }
    return rent;
}
var totalRent = hotelCost(25);
console.log(totalRent);

// Mega Friend

var friendsName = ["Salman", "Shohidullah", "Saifullah", "Shamsuddhuha", "Shamsulalam"];

function megaFriend(name) {
    var result = "";
    for (var i = 0; i < name.length; i++) {
        var currentName = name[i];
        if (currentName.length > result.length) {
            result = name[i];
        }

    }
    return result;
}
console.log(megaFriend(friendsName));