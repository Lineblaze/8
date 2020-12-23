/* Задание 1 */
console.log('Задача 1, Считаем овец');
let n = prompt('Введите кол-во овец:');
for (let i = 1; i <= n; i++) {
    console.log(`${i} овечка...`)
}
console.log('\n')

/* Задание 2 */
console.log('Задача 2, Четное-нечетное');
let i = 0;
while(i < 16) {
    if (i % 2 == 0) {
        console.log(`${i} - ${'четное'}`);
    } 
    else {
        console.log(`${i} - ${'нечетное'}`);
    }
    i++;
}
console.log('\n')

