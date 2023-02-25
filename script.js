//setInterval -> a cada 1 segundo atualizar as variaveis horas, minutos e segundos
setInterval(
  (takeHours = () => {
    const data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    //If para caso a hora, minuto ou segundo for de 1 digito, acrescentar o zero na frente
    if (hours <= 9) {
      hours = "0" + hours;
    }

    //Pegar o HTML da dom e substituir pela variavel hora que tem o horario, o mesmo se aplica para minutos e segundos
    const hoursHTML = document.querySelector("#hours");
    hoursHTML.innerHTML = hours;

    if (minutes <= 9) {
      minutes = "0" + minutes;
    }

    const minuteHTML = document.querySelector("#minute");
    minuteHTML.innerHTML = minutes;

    if (seconds <= 9) {
      seconds = "0" + seconds;
    }

    const secondsHTML = document.querySelector("#seconds");
    secondsHTML.innerHTML = seconds;

    //TROCA DE FUNDO

    //Dependendo da hora (variavel hours), sera alterado o fundo da pagina, manha/tarde/noite.
    const wallpaper = document.querySelector("#imgBack");

    if (hours >= 0 && hours <= 12) {
      wallpaper.src =
        "https://drscdn.500px.org/photo/65610621/m%3D900/v2?sig=ba12d12763739d754083351ca41e0dff953eabd43874e1b1c66a50fb2d307201";
    } else if (hours >= 13 && hours <= 18) {
      wallpaper.src =
        "https://drscdn.500px.org/photo/63195043/m%3D900/v2?sig=5bec57c565c8388a5c423fdb3deff79eddf6a3a660f58b7e14e5a0684dc5799c";
    } else {
      wallpaper.src =
        "https://drscdn.500px.org/photo/1037471651/m%3D900/v2?sig=41f825a88f1f446f0a1d09d61b4779ea27908a90af6ae87f2bf8cb60f4f5c528";
    }
  }),
  "1000"
);
