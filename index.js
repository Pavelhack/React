var IsShop = React.createClass({

    displayName: 'IsShop',
  
    render: function(){
  
      return React.DOM.div( {className:'IsShopFrame'}, 
        React.DOM.h1( null, "Всем привет!" ),
        React.DOM.div( {className:'IsShopText'}, "Начинаем изучение React!" ),
      );
    },
  
  });