#Faixa de Gaza

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Conhecimentos adquiridos](#3-conhecimenos-adquiridos)
* [4. Como usar](#4-como-usar)
* [5. Checklist](#9-checklist)
* [6. Autoria](#4-Autoria)


## 1. Prefácio

Com base na Cifra de César, foi proposto para as alunas SAP004 da Laboratória criar
um codificador de mensagens. 


## 2. Resumo do projeto

*Produto
Web Messenger que codifica e descodifica mensagens sensíveis na zona de conflito
Palestina/Israel.

*Descrição
Entre em contato com palestinos em estado de perigo e outros militantes 
para ajudar na fuga e proteção da população que habita o território.

*Processo
Depois de criar o planejamento e fluxograma de atividades que precisaria para 
completar o projeto, segui os primeiros passos indicados para dar o start. 
Configurando o HTML, já deixei algumas partes do CSS prontas, obtendo o produto
estático sem funcionalidade.
Como obtive certa dificuldade em conseguir desenvolver a criptografia, deixei
esta parte para o final com o objetivo de seguir com o planejamento (que
neste ponto, havia sido modificado para se adequaar aos meus presentes desafios
que não haviam sido levantados por mim anteriormente).
Chegando na fase final, desenvolvi primeiramente o código JS que seria responsável
pela ativação do DOM no arquivo cipher, onde estaria o código reponsável pela codificação
das mensagens e onde os as funções estariam armazenadas.


## 3. Conhecimentos adquiridos

*Criar um planejamento com base na metodologia ágil e colocá-lo em prática
ao mesmo tempo que é alterado de acordo com a demanda.

*Discutir com colegas de squad e sala sobre possíveis resoluções dos problemas enfrentados
e desenvolver solo.

*Entender necessidades do usuário (exercicío proposto) e a partir disso, criar 
a melhor solução que atenda aos requisitos.

*Criar um fluxograma de ativdades e prototipação do produto.

*Fazer o fork e clone do projeto.

*Utilizar HTML,CSS,JavaScript e trabalhar com seus códigos em conjunto.

*Entender a importancia do teste e localizar erros apresentados podendo assim serem 
corrigidos.

*Implementar funções, controle de fluxo e DOM.


## 4. Como usar

Basta clicar [aqui](https://cecilialevenstein.github.io/SAP004-cipher/src/)



Para instalar em sua máquina:

*Entre no link: (https://github.com/cecilialevenstein/projeto-cifra-de-cesar)

*Faça cópia do repositório (fork) em seu github.

*Faça o clone do seu fork em sua máquina.

*Em seu terminal, crie uma pasta para seu clone.

*Instale o node.js e rode o clone no terminal.


## .5 Checklist

### Parte Obrigatória

* [x] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [x] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [x] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [x] Usar VanillaJS.
* [x] **Não** usar `this`.
* [x] Implementar `cipher.encode`.
* [x] Implementar `cipher.decode`.
* [x] Passar o linter com a configuração definida.
* [x] Passar as provas unitárias.
* [x] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [x] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [x] Interface que permita escrever um texto para ser cifrado.
* [x] Interface que mostre o resultado da cifra corretamente.
* [x] Interface que permita escrever um texto para ser decifrado.
* [x] Interface que mostre o resultado decifrado corretamente.

### Parte Opcional: "Hacker edition"

* [x] Cifrar/decifrar minúsculas.
* [x] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
* [x] Permitir usar `offset` negativo.


## .6 Autoria

Cecília Levenstein @cecilialevenstein

A partir de projeto base da @Laboratoria

Licença
Projeto distribuído sob a licença CC BY-NC.
