<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1600px-Marvel_Logo.svg.png" align="center" height="128px" width="300px">
</p>

# Marvel Challenge

Este é um desafio técnico para seleção de um desenvolvedor mobile com foco em React Native.

## Descrição do desafio

Crie um app utilizando a [**API pública da Marvel**](https://developer.marvel.com)

O app deverá listar os personagens da Marvel em uma tela com scroll,
podendo clicar em um dos itens da lista para exibir os detalhes deste personagem, com a possibilidade de adicionar o personagem como favorito, armazenando estes dados localmente via AsyncStorage.
Será necessário criar uma outra tela nas abas da Home com a listagem dos personagens favoritos, armazenados localmente.

## Wireframe do app

| ![Page1](Characters.png)  | ![Page2](Favorites.png) | ![Page3](Detail.png) |
|:---:|:---:|:---:|
| Lista de Personagens | Favoritos | Detalhes do Personagem |


## Interface

* A interface do app é dividida em **3 partes** e deve ser desenvolvida conforme os pontos abaixo.

### Home - Personagens

- [x] Listagem dos personagens ordenados por ordem alfabética.
- [x] Botão para favoritar personagem nas células.
- [x] Pull-to-refresh para atualizar a lista.
- [x] Interface de :warning: lista vazia, erro ou sem internet.

### Detalhes do personagem

- [x] Botão de favorito.
- [x] Foto em tamanho maior.
- [x] Nome do personagem na barra de navegação.
- [x] Descrição do personagem se houver, caso contrário exibir uma mensagem  *"sem descrição."* .
- [x] Lista horizontal de Comics *(se houver)*.
- [x] Lista horizontal de Series *(se houver)*.
- [x] Interface de lista vazia, :no_mobile_phones: erro ou sem internet.

### Favoritos

- [x] Listagem dos personagens favoritados pelo usuário *(exibindo apenas o nome e imagem do personagem)*.
- [x] Não há limite de personagens a serem favoritados.
- [x] Favoritos devem ser persistidos (apenas nome e imagem do personagem) localmente via AsyncStorage, para serem acessados em qualquer situação.


### Requisitos

* React Native > 0.60
* AsyncStorage
* Axios

### Observações

* Na página de detalhes, não é necessário exibir todos os dados disponibilizados pela API da Marvel, apenas os mais relevantes. *Fica a seu critério decidir o que é relevante, e o que não é*.
* Fica a seu critério buscar todos os dados do personagem de uma vez na lista (detalhes), ou buscar apenas na função de clique.
* Não é necessário mudar o ícone padrão do app, ou criar artes para a splash screen. O foco deste teste é avaliar código bem escrito, bem organizado e utilizando boas práticas de engenharia de software.
