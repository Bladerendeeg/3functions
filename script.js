function numbers1(n1, n2) {
    const n1kwad = n1 * n1;
    const n2kwad = n2 * n2;
    const n3optel = n1kwad + n2kwad;
    const n4kwad = n3optel * n3optel;
    return n4kwad;
}
console.log(numbers1(2, 3));

const numbers2 = function (n1, n2) {
    const n1kwad = n1 * n1;
    const n2kwad = n2 * n2;
    const n3optel = n1kwad + n2kwad;
    const n4kwad = n3optel * n3optel;
    return n4kwad;
}
console.log(numbers2(2, 2));

const numbers3 = (n1, n2) => {
    const n1kwad = n1 * n1;
    const n2kwad = n2 * n2;
    const n3optel = n1kwad + n2kwad;
    const n4kwad = n3optel * n3optel;
    return n4kwad;
}
console.log(numbers3(3, 3));
