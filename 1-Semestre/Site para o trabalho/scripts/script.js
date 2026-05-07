let horas = document.querySelector('div.horas')
let data = new Date()
let dia = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
horas.innerHTML = `${data.getHours()}:${data.getMinutes()} - ${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} - ${dia[data.getDay()]}`