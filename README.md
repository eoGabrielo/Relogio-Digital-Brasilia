# Relógio Dinâmico - Horário de Brasília

Este projeto em JavaScript apresenta um relógio que exibe o horário atual de Brasília, sendo atualizado a cada segundo para assegurar máxima precisão. O aprimoramento estético inclui a adição de zeros às horas, minutos e segundos quando possuem apenas uma casa decimal, garantindo uma apresentação visual uniforme.

## Funcionalidades

- **Atualização Dinâmica:** Utiliza a função nativa `setInterval` para manter o horário preciso, atualizando-o a cada segundo.

- **Estética Aprimorada:** Condições são implementadas para adicionar zeros à frente de horas, minutos e segundos, proporcionando uma apresentação visual consistente.

- **Imagem de Fundo Dinâmica:** O contêiner principal incorpora uma imagem de fundo que varia conforme o período do dia (manhã, tarde, noite), proporcionando uma experiência visual envolvente.

## Detalhes do Código

```javascript
setInterval(
  (takeHours = () => {
    // Lógica para obtenção e formatação do horário
    const data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    // Adição de zeros à frente dos dígitos únicos
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;

    // Atualização dinâmica no HTML
    const hoursHTML = document.querySelector("#hours");
    hoursHTML.innerHTML = hours;

    const minuteHTML = document.querySelector("#minute");
    minuteHTML.innerHTML = minutes;

    const secondsHTML = document.querySelector("#seconds");
    secondsHTML.innerHTML = seconds;

    // Troca de fundo com base na hora do dia
    const wallpaper = document.querySelector("#imgBack");

    if (hours >= 0 && hours <= 12) {
      wallpaper.src = "URL_IMG_MANHA";
    } else if (hours >= 13 && hours <= 18) {
      wallpaper.src = "URL_IMG_TARDE";
    } else {
      wallpaper.src = "URL_IMG_NOITE";
    }
  }),
  "1000" // Intervalo de 1000ms (1 segundo)
);
```

## Instruções de Uso

1. Clone ou baixe os arquivos do projeto.
2. Abra o arquivo HTML em seu navegador.
