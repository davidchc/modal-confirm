# Plugin Modal Confirm

Esse plugin consiste em apenas numa função javascript chamada confirmModal, e um arquivo de css com estilo para exibição de modal. Com ele você consegue exibir uma mensagem personalizada, e executar ações, ao clicar no botão de ok ou cancelar.

Se você precisa algo simples e direto, sem necessidade de biblioteca, fique a vontade em utilizar.

## Exemplo de Utilização

Um exemplo de como chamar a função e passar um objeto de confirmações, para definir uma mensagem a ser exibida.

```javascript
  confirmModal({
          message:  'Você deseja essa ação?',
          ok:  function(){
                alert('OK');
         },
         cancel:  function(){
                alert('Cancel');
          }
    });
```

# English

This plugin consists of just a javascript function called confirmModal, and a styled css file for displaying modal. With it you can display a personalized message, and perform actions, by clicking the ok or cancel button.

If you need something simple and direct, without the need for a library, feel free to use it.

## Example of Use
    

An example of how to call the function and pass a confirmation object, to define a message to be displayed.

```javascript
  confirmModal({
          message:  'Do you want this action?',
          ok:  function(){
                alert('OK');
         },
         cancel:  function(){
                alert('Cancel');
          }
    });
```


