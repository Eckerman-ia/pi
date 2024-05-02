function * generateDigitsOfPi() {
    let q = 1n;
    let r = 180n;
    let t = 60n;
    let i = 2n;
    while (true) {
        let digit = ((i * 27n - 12n) * q + r * 5n) / (t * 5n);
        yield Number(digit);
        let u = i * 3n;
        u = (u + 1n) * 3n * (u + 2n);
        r = u * 10n * (q * (i * 5n - 2n) + r - t * digit);
        q *= 10n * i * (i++ * 2n - 1n);
        t *= u;
    }
}
var totaldigits = 0
// Demo
let iter = generateDigitsOfPi();

let output = document.querySelector("div");
(function displayTenNextDigits() {
    let digits = "";
    for (let i = 0; i < 10; i++) digits += iter.next().value;
    totaldigits = totaldigits + 10
    console.log(totaldigits)
    alert(totaldigits)
    output.insertAdjacentHTML("beforeend", digits);
    scrollTo(0, document.body.scrollHeight);
    requestAnimationFrame(displayTenNextDigits);
})();
