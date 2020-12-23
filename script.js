/* Задание 1 */
console.log('Задание 1, Считаем овец');
let n = prompt('Введите кол-во овец:');
for (let i = 1; i <= n; i++) {
    console.log(`${i} овечка...`)
}
console.log('\n')

/* Задание 2 */
console.log('Задание 2, Четное-нечетное');
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

/* Задание 3 */
console.log('Задание 3, Шахматная доска');
let x = 0;
while(x < 8) {
    if (x % 2 == 0) {
        console.log(' # # # #');
    } 
    else {
        console.log('# # # # ');
    }
    x++;
}
console.log('\n')

/* Задание 4 */
console.log('Задание 4, Сортировка');
let num1 = -3;
let num2 = 2;
let num3 = 0;
if (num1 <= num2 && num2 <= num3) {
    console.log(num1, num2, num3)
}
if (num1 <= num3 && num3 <= num2) {
    console.log(num1, num3, num2)
}
if (num2 <= num1 && num1 <= num3) {
    console.log(num2, num1, num3)
}  
if (num2 <= num3 && num3 <= num1) {
    console.log(num2, num3, num1)
}
if (num3 <= num1 && num1 <= num2) {
    console.log(num3, num1, num2)
}
if (num3 <= num2 && num2 <= num1) {
    console.log(num1, num2, num3)
}   
console.log('\n')





