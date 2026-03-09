const fecha = new Date('February 27, 2026 00:00:00').getTime();

setInterval(function() {
    const ahora = new Date().getTime();
    const diferencia = ahora - fecha;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;

}, 1000);