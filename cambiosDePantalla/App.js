class App {
  constructor() {
    //DECLARAMOS DIFERENTES INSTANCIAS DE BOTONES
    //PARA SIGUIENTE Y VOLVER, USAREMOS LOS MISMOS
    //PERO PARA IR A PANTALLAS "random"
    //CREAREMOS DIFERENTES BOTONES QUE NOS LLEVEN AHI
    //PASANDO UN PARAMETRO DE TIPO NUMERICO
    this.cantidadDePantallas = 5
    this.pantalla = 0
      this.botonSiguiente = new Boton(width/2, height/2, 100, 50, "Siguiente", "siguiente") //importante ultimo parametro
      this.botonVolver = new Boton(width/4, height/2, 100, 50, "Volver", "volver") //importante ultimo parametro
      this.botonUniversal1 = new Boton(width/4, height/4, 100, 50, "Ir a pantalla 3", 3) //importante ultimo parametro
      this.botonUniversal2 = new Boton(width/4, height/4, 100, 50, "Ir a pantalla 0", 0) //importante ultimo parametro
  }

  dibujar() {
    if (this.pantalla == 0) {
      background(0)
        this.botonSiguiente.dibujar()
    }
    if (this.pantalla == 1) {
      background(55)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
    }
    if (this.pantalla == 2) {
      background(100)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
    }
    if (this.pantalla == 3) {
      background(155)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
    }
    if (this.pantalla == 4) {
      background(200)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
        this.botonUniversal1.dibujar()
    }
    if (this.pantalla == 5) {
      background(255)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
        this.botonUniversal2.dibujar()
    }
  }

  actualizar() {
  }

  mouseClicked() {
    this.botonSiguiente.mouseClicked()
      this.botonVolver.mouseClicked()
      //RESTRINGIMOS FUNCIONAMIENTO ACORDE A CADA PANTALLA
      if (this.pantalla == 4) {
      this.botonUniversal1.mouseClicked()
    }
    if (this.pantalla == 5) {
      this.botonUniversal2.mouseClicked()
    }
  }

  cambiarPantalla(param) {
    console.log(this.pantalla)
          console.log(param)

    if (param == "siguiente" && this.pantalla < this.cantidadDePantallas) {

      this.pantalla++
    } else if (param == "volver" && this.pantalla > 0) {
      this.pantalla--
    } else if (param != "volver" && param != "siguiente"){
        this.pantalla=param
    }
  }
}
