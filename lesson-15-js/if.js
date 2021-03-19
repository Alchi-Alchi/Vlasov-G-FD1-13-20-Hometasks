let name = prompt ('Введите имя:');
let lastname = prompt ('Введите фамилию:');
let patronymic = prompt ('Введите отчество:');
let age = prompt ('Сколько вам полных лет?:');
let gender = confirm ('Нажмите ок если ваш пол мужской. Отмена если женский:');
let fio = lastname + ' ' + name + ' ' + patronymic;
let daysAge = (age/4) + age * 365;
let futureAge = parseInt(age) + 5;
let pension;

if (age > 60) {
  pension = 'Да';
}
else {
  pension = 'Нет';
} 

if (gender == true) {
  gender = 'Мужской';
}
else {
  gender = 'Женский';
}

alert ( `Ваше ФИО: ${fio}
  Ваш возраст в годах: ${age}
  Ваш возраст в днях: ${daysAge}
  Через 5 лет вам будет: ${futureAge}
  Ваш пол: ${gender}
  Вы на пенсии: ${pension}`
);