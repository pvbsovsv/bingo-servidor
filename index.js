const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bingo Server')
})
app.get('/frases', (req, res) => {
  
  let arrayFrases =  [
  "Esto es un timo",
  "Y la caja? la tiro?",
  "… hasta tengo el DNI!!!!",
  "Lo comentaré en todas mis redes/círculos sociales",
  "A ver si me puedes ayudar…",
  "Llevo intentando reservar hace 1 año / 2 años y es imposible descambiar el bono regalo",
  "Sois unos estafadores",
  "¿Ósea me estás diciendo que perdí el dinero?",
  "Voy a irme directo a realizar la reclamación pertinente",
  "No lo he podido utilizar porque estuve enferm@ y ahora se me ha caducado",
  "Trabajo en el área y sé que es ilegal los 14 días de tardanza para la devolución",
  "Pásame con tu superior",
  "¿Me estás diciendo que no hay nadie con un cargo más alto que el tuyo en esta empresa?",
  "Lo hablaré con mi abogado",
  "¡Ya se van a enterar!",
  "¿Entonces quién se queda con mi dinero? (Yo no señor@)",
  "Hola tengo un bono y no puedo registrarlo (No ha abierto la caja)",
  "Mi móvil se rompió y ya no tengo acceso a mi correo",
  "He terminado con mi ex novi@ y él se ha quedado con el voucher que mi mamá me regaló, fue un regalo para mí",
  "“Joé” en serio que me estás contando esto?",
  "Me estáis liando",
  "Mandé una solicitud de puy du FUÁ hace x días y no me han dado respuesta",
  "Cualquier variante de puy du fou (solo cuenta mal dicho)",
  "El establecimiento me dijo que me tenéis que dar un código nuevo",
  "Me parece muy fuerte que no haya nada para reservar",
  "Me sale código 3 cero cero cero",
  "Ya hablé con ellos y me dijeron que tenían sitio", 
  "Tengo un Cacharro de estos",
  "Tengo un libro de Smartbox",
  "Cualquier variante de stanfords",
  "¿Me aparecía xxxeuros a pagar, se lo tengo que pagar al hotel?",
  "Vamos a ver…..",
  "Le diré a mis amigos/familia/conocidos que no me regalen más",
  "Nos cambiamos de casa y en la mudanza encontramos la caja",
  "Mire le llamo porque tengo una caja",
  "Ya recibirán una carta de mi abogado",
  "¿Quiero hacer una reserva, pueden hacerla ustedes?",
  "Quiero hacer una reserva y todo lo que me sale tengo que pagar",
  "(No te dicen buen día/buenas tardes)",
  "Esto es un engañabobos",
  "Tengo una reserva pero mi (familiar) acaba de ingresar en el hospital/se está 'muriendo'/lo están sedando en este momento",
  "Es que ha sido un regalo, como voy a tener el ticket?",
  "Como le voy a pedir el ticket a la persona que me lo regaló?",
  "¿Y quién se queda con el dinero?",
  "¿Lo he perdio’?",
  "Todo junto y en minúsculas",
  "Muy Amable, y perdón, ¿eh?",
  "Es que soy una persona muy mayor y no me doy con esto",
  "Pero si nunca lo he registrado – te confirma el mail después de la pista",
  "Se me ha cerrado todo, tengo que volver a empezar (van 15 min de llamada y te pegas un tiro)",
  "Si todavía está precintado (bono registrado en 2023)",
  "¿Como que no tienen libro de reclamaciones? eso es ilegal",
  "¿Tiene el número del bono? 'sí' (silencio) '¿se lo digo?'",
  "Tu compañera Olivia…",
  "¿Tiene para apuntar?",
  "Ya me buscaré la vida",
  "Si la renovación es gratuita, no?",
  "Quiero poner una reclamación"
]
  
  
  
  
  
  
    res.send(arrayFrases)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
