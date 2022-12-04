const Components=(function() {
  

  const Constructor=function(options) {
    this.el=options.el;
    this.data=options.data;
    this.template=options.template;
  };

  //Render UI
  Constructor.prototype.render=function () {};
  //Actualizar el estate de forma reactiva
  Constructor.prototype.setState=function () {};
  //Obtener una copia inmutable del state
  Constructor.prototype.getState=function () {};
})()