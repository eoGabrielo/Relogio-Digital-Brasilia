
<h2> Desenvolvido em JavaScript: Relogio com horario de brasilia </h2>

<p>No código do projeto foi usado uma função nativa do JavaScript que executa algo em tempo, sabendo disso usei essa função para pegar uma nova data e pegar as horas dela, após ter o código atualizando a cada um segundo, foi atribuído as horas, minutos e segundos para cada variável, tendo as horas atualizadas a cada atualização da função setInterval do JavaScript.</p>

<p>Fazendo somente isso causaria uma estética ruim no relógio, aonde se o horário fosse numero com 1 casa do 0 ao 9 o relógio ficaria com um aspecto ruim, para solucionar esse problema foi criado if's para caso a hora, minuto ou segundo tiver apernas 1 casa decimal acrescentar o 0 na frente. </p>

<p> 

if (hours <= 9) {
      hours = "0" + hours;
    }

</p>

<p> 

 if (minutes <= 9) {
      minutes = "0" + minutes;
    }

</p>

<p> 

 if (seconds <= 9) {
      seconds = "0" + seconds;
    }

</p>

<p>Para um aspecto melhor no contêiner principal foi adicionado uma img de fundo com position: absolute; para ficar dentro do contêiner centralizado e um z-index: -1; para ficar abaixo dos itens no contêiner, foi feito dessa forma para conseguir mudar o valor do src da tag img para cada hora do dia, das 00 as 12 manhã, das 13 as 18 tarde e entre as 18 as 23:59 noite.  </p>

<p> 

if (hours >= 0 && hours <= 12) { <br>
        wallpaper.src = "ENDEREÇO DA IMG"; <br>
    } else if (hours >= 13 && hours <= 18) { <br>
        wallpaper.src = "ENDEREÇO DA IMG"; <br>
    } else { <br>
      wallpaper.src = "ENDEREÇO DA IMG"; <br>
    }
</p>
