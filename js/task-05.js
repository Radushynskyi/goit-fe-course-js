console.log("Задание 5");

const userCountry = prompt('Укажите страну для доставки товара ');
let cost;


if (userCountry === null) {
    console.log('Отменено пользователем!');
} else {
    switch(userCountry.toLowerCase()) {
        case 'китай': cost = 100;
        console.log(`Доставка в ${userCountry} будет стоить ${cost} кредитов`);
        break;

        case 'чили': cost = 250;
        console.log(`Доставка в ${userCountry} будет стоить ${cost} кредитов`);
        break;

        case 'австралия': cost = 170;
        console.log(`Доставка в ${userCountry} будет стоить ${cost} кредитов`);
        break;

        case 'индия': cost = 80;
        console.log(`Доставка в ${userCountry} будет стоить ${cost} кредитов`);
        break;

        case 'ямайка': cost = 120;
        console.log(`Доставка в ${userCountry} будет стоить ${cost} кредитов`);
        break;
        
        default:
            alert('В вашей стране доставка не доступна');
    }
}



console.log("--------------");