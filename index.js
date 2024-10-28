
// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N


let N = parseInt(prompt('Введіть ціле число'));
let result = '';
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        result += i + (i < N ? ', ' : '');
    }
}
console.log(result);
