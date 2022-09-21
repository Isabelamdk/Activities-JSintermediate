const showDate = document.getElementById("date");
const showHour = document.getElementById("hour");
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

function todayDate(today) {
    let date = zeroFill(today.getDate()) + '/' + zeroFill((today.getMonth() + 1)) + '/' + today.getFullYear();
    return date;
}

function todayHour(today) {
    let hour = zeroFill(today.getHours()) + ':' + zeroFill(today.getMinutes()) + ':' + zeroFill(today.getSeconds());
    return hour;
}

const atualizarData = () => {
    let today = new Date();
    showDate.innerText = todayDate(today);
    showHour.innerText = todayHour(today);
}

setInterval(atualizarData, 1000)