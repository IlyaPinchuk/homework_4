console.log(false && true || true) // && приоретет выше , && выводит первое ложное значение ,
                             // в то время  как || выводит истинное следовательно false || true = TRUE

console.log(false && (true || true)) // () имеют приоритет выше, выполнится || , а после && . Будет FALSE

console.log(+'40' + +'2') // преобразование в намбер , выведет 42

console.log('2' + 3 ** 2) //  3 взводится в степень, после происходит канкатенация строк   = 29

console.log(3 ** 2 / 3) // Взведение в степень, после деление числовых значений  =  3

console.log(3 ** (9 / 3)) //() имеют приоритет выше,  = 27

console.log('10' + (5 === 6)) // выполняется строгое сравнение с типизацией , после канкатенация  = "10false"

console.log('10' - 5 === 6) // 10-5=5 , 5===6 = FALSE

console.log(undefined + 1) // оба операнда приводятся к числу +undefined = NaN , NaN +1 = NaN

console.log((+null == false) < 1) //  ( 0 == 0 ) < 1, true < true = FALSE

console.log((+null == false) < 1 ** 5) // аналогично предыдущему примеру ↑

let number = 5;
2 * ++number; // ++number = 6
2 * number--; // number-- = 5
console.log(number) // number = 5




