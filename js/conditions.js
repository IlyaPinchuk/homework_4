let age = +prompt("Your age?" )

if (!parseInt(age)) {
    alert('Нужно писать число!');
}

if (age < 2 ){
    alert(age + ' год')
}

else if(age < 5){
    alert(age + ' года')
}
if(age > 4 || 0 ) {
    alert(age + ' лет')
}