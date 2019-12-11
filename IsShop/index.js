let IsShop = React.createClass({
  
    displayName: 'IsShop',
  
    render: function(){
    let ok = [];
    let fun = [];
                  this.props.item.forEach(function(item, index){
                      keyItem = index, nameItem = item.name, modelItem = item.model, costItem = item.cost
                     fun =
                        React.DOM.div({key:keyItem, className: "Item"},
                          React.DOM.p( null, nameItem ),
                          React.DOM.div( {className: "photo"},
                              React.DOM.p( null, "this is photo of item")
                              ),
                            React.DOM.p(null, modelItem),
                           // React.DOM.div({className:"divP"},     
                             //  React.Dom.p(null, costItem),
                         //)    
                        )
                        ok.push(fun)
                  })
    return React.DOM.div( {className:'IsShopFrame'},
              React.DOM.div({className:'header'},
              React.DOM.h1(null, "STORE REACT")), 
              React.DOM.div({className: "ItemDiv"},ok),
            )
       },
     });

 