package ar.edu.unq.ciu

import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.api.annotation.Get

class Saludador {
	def saludar() {
		"Hola Mundo"
	}
}

@Controller
class MainController {

	@Get("/hola")
	def hello() {
		ok(	"<h2>" + new Saludador().saludar + "</h2>" 	)
	}

	def static void main(String[] args) {
		XTRest.start(MainController, 9000)
	}
	
}
