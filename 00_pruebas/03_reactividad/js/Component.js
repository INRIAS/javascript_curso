const Component = (function () {
  const d = document;
  const Constructor = function (option) {
    this.el = option.el;
    this.data = option.data;
    this.template = option.template;
  };

  //Render UI
  Constructor.prototype.render = function () {
    console.log(this.data);
    const $el = d.getElementById(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
  };
  //Actualizar el estate de forma reactiva
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };
  //Obtener una copia inmutable del state
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
