class Configuracion {
  constructor() {
    this._configuracion = null;
  }

  static getInstance() {
    if (!this._configuracion) {
      this._configuracion = new Configuracion();
    }
    return this._configuracion;
  }
}

const configuracion = Configuracion.getInstance();
const configuracion2 = Configuracion.getInstance();

console.log(configuracion === configuracion2); // true

// Path: Algorithms/Patrones/State.js
