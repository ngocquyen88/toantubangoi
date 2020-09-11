let login=prompt("Mời bạn đăng nhập:").toLowerCase();
let message=(login == 'employee')?'Hello':((login=='director')?'Greeting':((login=='')?'No login':''));
alert(message);