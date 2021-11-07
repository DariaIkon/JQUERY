$(document).ready(() => {

// В поле "Full Name" запретите вводить цифры.
    $('#full_name').keypress((event) => {
        var number = parseInt(event.key);
            if (!isNaN(number)) {
                event.preventDefault();
            }
    });
// В поле "Your username" запретите вводить точки и запятые.
    $('#username').keypress((event) => {
            if (event.key === '.' || event.key === ',') {
                event.preventDefault();
            } 
    });
// При изменении значения чекбокса выводите в консоль соответствующее предложение: “Согласен” или “Не согласен”.
    var checkbox = $('#checkbox');
    checkbox.change(() => {
        if (checkbox.prop('checked') === true) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    });
    

// При нажатии на кнопку “Sign Up”:
// Проверьте на существование значения в каждом текстовом поле. 
// Если какое - то поле не заполнено, выведите об этом ошибку,
//  используя alert.Ошибка должна быть следующего вида "Заполните 
// поле E - mail".
// Проверьте совпадают ли пароли из двух текстовых полей. Если пароли 
// не совпадают, выведите об этом ошибку, используя alert.
// Проверьте выбран ли чекбокс. Если чекбокс не выбран, выведите об этом 
// ошибку, используя alert.
// Если код по всем проверкам успешно - вывести “OKAY”, используя alert.

    var button = $('#button');
    var inputs = $('input');
    console.log(inputs);
    button.click((event) => {
        if ($($('input')[0]).val() === '') {
            alert('Заполните поле Full Name');
            return;
        }
        if ($($('input')[1]).val() === '') {
            alert('Заполните поле Your username');
            return;
        }
        if ($($('input')[2]).val() === '') {
            alert('Заполните поле E-mail');
            return;
        }
        if ($($('input')[3]).val() === '') {
            alert('Заполните поле Password');
            return;
        }
        if ($($('input')[4]).val() === '') {
            alert('Заполните поле Repeat Password');
            return;
        } 
        if ($($('input')[3]).val() !== $($('input')[4]).val() ) {
            alert('Пароль введен не верно');
            return;
        }
        if (checkbox.prop('checked') !== true) {
            alert('Подтвердите соглашение');
            return;
        } 
        alert('Okey');
        return;
    });
       

    
// При нажатии на ссылку "Already have an account?" 
// сделать следующие действия со страницей:
// Текст "Get your free account" заменить на "Log in to the system".
// Блоки с полями "Full Name", "E-mail", "Repeat Password" удалите.
// Блок с чекбоксом также удалите.
// Текст в кнопке замените на "Sign In"
// Ссылку "Already have an account?" также удалите
   
    var link = $('#form__link');
    var formInputRepeatPassword = $('#form__input__wrapper__repeat__password');
    var formInputFullName = $('#form__input__wrapper__full_name');
    var formInputMail = $('#form__input__wrapper__mail');
    var formInputCheckbox = $('#form__input__wrapper__checkbox');
    var title = $('#form__title');
    link.click((event) => {
        formInputRepeatPassword.remove();
        formInputFullName.remove();
        formInputMail.remove();
        formInputCheckbox.remove();
        title.text = 'Log in to the system';
        button.text = 'Sign In';
        link.remove();
    });
});