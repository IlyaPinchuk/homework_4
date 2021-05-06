let age = +prompt("Your age?" )

if ( age !== age) {
    alert('Нужно писать число!');
}

else if(age % 10 === 0 ||  age % 10 >= 5 ||  age % 100 >= 5 && age % 100 <= 14   ){

    alert(age + ' лет')
}
else if ( age % 10 === 1){
    alert(age + ' год')
}

else if ( age % 10 <= 4)
{
    alert(age + ' года')
}

// if (age < 2 ){
//     alert(age + ' год')
// }
//
// else if(age < 5){
//     alert(age + ' года')
// }
// if(age > 4 || 0 ) {
//     alert(age + ' лет')
// }