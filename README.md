# POC-5 next.js e react
## Estrutura do Projeto Next.js

A estrutura padrão do Next.js inclui pastas principais, como `pages`, `styles` e `public`, para ajudar a organizar o projeto. 

![componentsgreeting](https://github.com/user-attachments/assets/63bb7188-dee5-4949-bdd3-92e3f7d26939)
Nesse código, o Greeting aceita uma prop chamada name. Isso permite reutilizar o componente para exibir uma saudação diferente dependendo do name passado.

Função do Componente: Este é um componente funcional (também conhecido como sem estado) em React, usado para renderizar uma saudação.
Uso de Props: Propriedades (ou props) permitem passar informações personalizadas para o componente. Aqui, name é uma prop opcional que, se não for fornecida, terá o valor padrão "Visitante".

![Screenshot 2024-10-25 202353](https://github.com/user-attachments/assets/427aceb2-ce2c-4909-861e-c7f8316ca219)
A página principal (index.js) utiliza o componente Greeting duas vezes, uma com o nome "Estudante" e outra sem um nome específico, usando o valor padrão.
![Screenshot 2024-10-25 202525](https://github.com/user-attachments/assets/af99b414-8d2e-4500-8619-5594d0506c6c)
Esse CSS global estiliza o body para que tenha uma fonte específica e uma cor de fundo para toda a aplicação. Ele também define um estilo padrão para todos os h1 do site.
![Screenshot 2024-10-25 202714](https://github.com/user-attachments/assets/1dc7a218-7ccb-4d22-8847-d9ce6e841413)
Este estilo específico define a aparência do componente Greeting, incluindo uma borda e um fundo específico.

Estilo Global: Configura o fundo e a fonte da aplicação inteira, e define um estilo padrão para os h1.


Estilo Modular: Aplica estilos exclusivos ao componente Greeting, usando uma borda azul, cor de fundo e arredondamento.
 
 CÓDIGO DO ESTILO MODULAR:
 
 ![Screenshot 2024-10-25 203234](https://github.com/user-attachments/assets/c73a2e40-4124-4e68-ae16-95190d3018f1)

