const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const autoclicker = document.getElementById("autoclicker");

let numberOfCookies = 0;
let numberOfCookiesOnClick = 1;
let upgradePrice = 50;
let autoclickerPrice = 1000;
let numberOfAutoClickerCookies = 0;

cookie.onclick = () => {
    // numberOfCookies += 1; upgrade numberOfCookies += 2...
    numberOfCookies += numberOfCookiesOnClick;
    counter.innerHTML = `Počet: ${numberOfCookies}`;
};

upgrade.onclick = () => {
    if (numberOfCookies >= upgradePrice) {
        numberOfCookies -= upgradePrice;
        upgradePrice *= 2;
        upgrade.innerHTML = `Buy upgrade: ${upgradePrice}`;
        counter.innerHTML = `Počet: ${numberOfCookies}`;
        numberOfCookiesOnClick++;
    }
}

autoclicker.onclick = () => {
    if (numberOfCookies >= autoclickerPrice){
        numberOfCookies -= autoclickerPrice;
        counter.innerHTML = `Počet: ${numberOfCookies}`;
        if (numberOfAutoClickerCookies == 0) {
            setInterval(() => {
                numberOfCookies += numberOfAutoClickerCookies;
                counter.innerHTML = `Počet: ${numberOfCookies}`;
            }, 1000);
        }
        numberOfAutoClickerCookies++;
        autoclickerPrice *= 2;
        autoclicker.innerHTML = `Buy autoclicker: ${autoclickerPrice}`;
    }
}