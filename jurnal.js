students = []
groups = []
sum = 0
aver = 0

//создание списка групп и таблиц после нажатия кнопки
$(document).ready(function() {
    $("#load").click(function(){
        load_tables();
    }); 
});

//загружаем информацию с сайта
function load_from_site() {
	$.get('http://217.71.129.139:4003/students.php', function(data){
		students = JSON.parse(data)['response']
	});
}

function load_tables() {
	$('#load').css({'display':'none'})//убирает кнопку после нажатия
	//создание списка групп
	for (let i = 0; i < students.length; i++) {
		if (((groups.indexOf(students[i].group)) === -1) && (students[i].group !== undefined)) {
			groups.push(students[i].group)
		}
	}
	//создание списка с группами
	for (let i = 0; i < groups.length; i++) {
		let li = document.createElement('li')
		let a = document.createElement('a')
		a.href = '#tabs-' + i
		a.textContent = groups[i]
		$('ul').append(li)
		$(li).append(a)
	}
	//создание таблицы для каждой группы
	for (let i = 0; i < groups.length; i++) {
		let div = document.createElement('div')
		let table = document.createElement('table')
		let thead = document.createElement('thead')
		let tbody = document.createElement('tbody')
		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')
		let td4 = document.createElement('td')

		div.id = 'tabs-' + i
		table.id = 'group-' + i
		tbody.id = 'group-' + i
		table.classList.add('table')

        //задаем названия столбцов
		td1.textContent = 'id'
		td2.textContent = 'Имя'
		td3.textContent = 'Фамилия'
		td4.textContent = 'Средний балл'
		tr.appendChild(td1)
		tr.appendChild(td2)
		tr.appendChild(td3)
		tr.appendChild(td4)

		$('div#tabs').append(div)
		$(div).append(table)
		$(table).append(thead)
		$(thead).append(tr)
		$(table).append(tbody)
	}
	//добавление информации о студентах в таблицы
	for (let i = 0; i < groups.length; i++) {
		for (let j = 0; j < students.length; j++) {
			if (students[j].group == groups[i]) {
				let table = document.getElementById('group-' + i)
				let tr = document.createElement('tr')
				let td1 = document.createElement('td')
				let td2 = document.createElement('td')
				let td3 = document.createElement('td')
				let td4 = document.createElement('td')
				let tbody = document.getElementById('group-' + i)

				td1.textContent = students[j].id //записываем id студента
				td2.textContent = students[j].name //записываем имя студента
				td3.textContent = students[j].surname //записываем фамилию студента
                
                //ищем средний балл
				sum = 0
				for (let k = 0; k < students[j].scores.length; k++) {
					sum += students[j].scores[k]
				}
				aver = sum / students[j].scores.length
				td4.textContent = aver//записываем средний балл студента

				tr.appendChild(td1)
				tr.appendChild(td2)
				tr.appendChild(td3)
				tr.appendChild(td4)

				tbody.appendChild(tr)

				$(table).append(tbody)
			}
		}
	}
	$("#tabs").tabs()
}