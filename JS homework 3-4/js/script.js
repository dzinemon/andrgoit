var header = document.createElement('h1');
    header.innerHTML = 'Тест по программированию';
    header.classList.add('text-center');

var form = document.createElement('form');
    form.classList.add('form-horizontal');

var list = document.createElement('ol');
    list.classList.add('list-group');

var container = document.createElement('div');
    container.classList.add('container');

var button = document.createElement('button');
    button.innerHTML = 'Проверить мои результаты';
    button.setAttribute('type', 'submit');
    button.classList.add('btn');
    button.classList.add('btn-lg');
    button.classList.add('center-block');
	button.style.margin = '20px auto';
	button.style.border = '2px solid black';
    button.style.cursor = 'pointer';

document.body.appendChild(container);
container.appendChild(header);
container.appendChild(form);
form.appendChild(list);

var i;
for ( i = 1 ; i < 4 ; i++ ) {
    var listItem = document.createElement('li');
        listItem.innerHTML = 'Вопрос №' + [i];
		listItem.style.fontSize = '20px';
    
    list.appendChild(listItem);
    
    var y;
    var k = 0;
    
    for ( y = 1 ; y < 4 ; y++ ) {
        var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
			checkbox.classList.add('pull-left');
            checkbox.style.marginRight = '10px';
        
        var label = document.createElement('label');
            label.classList.add('left-block');
            label.innerHTML = 'Вариант ответа №' + [y];
			label.style.display = 'block';
			label.style.marginLeft = '25px';
			label.style.fontSize = '17px';
			label.style.fontWeight = '200';
        
        listItem.appendChild(label);
        label.appendChild(checkbox);
        k++;
    }
    
}

form.appendChild(button);