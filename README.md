# Relógio com Horário de Brasília

Este projeto em JavaScript oferece um relógio que exibe o horário atual de Brasília, sendo atualizado a cada segundo para garantir precisão. A estética do relógio é aprimorada com a adição de zeros às horas, minutos e segundos quando possuem apenas uma casa decimal.

## Funcionalidades

- **Atualização Dinâmica:** Utiliza a função nativa `setInterval` para atualizar o horário a cada segundo, mantendo-o sempre preciso.

- **Estética Aperfeiçoada:** Condições são aplicadas para adicionar zeros à frente de horas, minutos e segundos, assegurando uma apresentação visual consistente.

- **Imagem de Fundo Dinâmica:** O contêiner principal possui uma imagem de fundo que muda com base na hora do dia (manhã, tarde, noite), proporcionando uma experiência visual envolvente.

## Detalhes do Código

```javascript
if (hours <= 9) { hours = "0" + hours; }
if (minutes <= 9) { minutes = "0" + minutes; }
if (seconds <= 9) { seconds = "0" + seconds; }
```

```javascript
if (hours >= 0 && hours <= 12) {
    wallpaper.src = "ENDEREÇO DA IMG MANHÃ";
} else if (hours >= 13 && hours <= 18) {
    wallpaper.src = "ENDEREÇO DA IMG TARDE";
} else {
    wallpaper.src = "ENDEREÇO DA IMG NOITE";
}
```

## Instruções de Uso

1. Clone ou baixe os arquivos do projeto.
2. Abra o arquivo HTML em seu navegador.

**Observação:** Certifique-se de ter as imagens necessárias (manha.png, tarde.png, noite.png) no mesmo diretório do seu arquivo HTML.

```html
<html>
  <!-- Seu código HTML aqui -->
  <script src="seu-arquivo-js.js"></script>
</html>
```
