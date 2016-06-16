// Создать программу, которая будет выполнять следующие действия:
//
// Циклом заполнить массив с помощью команды prompt в котором будет список из 5-ти любых имен
// Потом вывести с помощью prompt сообщение с просьбой ввести имя пользователя
// Введенное имя, циклом сравнивать с именами в массиве
// Если нет совпадения, то есть введенное имя пользователя не существует в массиве - выдавать с помощью alert сообщение об ошибке
// Если есть совпадение - выводить сообщение "Андрей, вы успешно вошли". Вместо "Андрей" должно быть имя текущего пользователя

var login = (function() {
  var names = [],
      user;

  var init = function() {
    var i;

    for (i = 0; i < 5; i++) {
      names.push( prompt('Enter user name #' + [ i + 1 ] ) );
    }
  };

  var welcome = function() {
    user = prompt('Enter user name');
  }

  var check = function() {
    if(names.indexOf(user) > -1) {
      alert(user + ', entered successfully!');
    }
    else {
      alert('Fatal error. User not found');
    }
  };

  return {
    init: init,
    welcome: welcome,
    check: check
  }

})();

login.init();
login.welcome();
login.check();
