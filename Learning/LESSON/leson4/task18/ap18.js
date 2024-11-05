const dollarToUah = 27;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const cost = dollars * dollarToUah;
    console.log(`${dollars} доларів коштує ${cost} гривень.`);
}
