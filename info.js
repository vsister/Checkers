let xhr = new XMLHttpRequest()
xhr.open('GET', '/qwerty1234qwerty1234', true)

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    document.getElementById('name').innerHTML = '<b>'+data.FirstName + ' ' +data.LastName+ '</b>'
    document.getElementById('total').innerHTML = 'Games: ' + data.Total
    document.getElementById('black').innerHTML = 'Black won: ' + data.Black
    document.getElementById('white').innerHTML = 'White won: ' + data.White
    document.getElementById('draw').innerHTML = 'Draws: ' + data.Draw
}
xhr.send()