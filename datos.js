// Invitación de Ana & Uriel · datos de la entrevista del 9-nov-2026 (contacto: Uriel)
window.BODA = {
  novia: "Ana",
  novio: "Uriel",
  frase: "La cuerda de tres hilos no se rompe fácilmente",
  fecha: "2027-01-30T12:00:00-06:00",
  portada: "img/portada-video.jpg",
  portadaVideo: "img/portada.mp4",
  versiculo: { texto: "Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de tres hilos no se rompe fácilmente!", cita: "Eclesiastés 4:12 (NVI)" },
  musica: "musica.mp3?v=2",               // "A Thousand Years", dueto de violín y sax

  // blanco, verde olivo, flores verdes y negro
  tema: { fondo: "#FAF8F3", tarjeta: "#FFFFFF", acento: "#556B2F", dorado: "#8C9A6B", texto: "#1C1C1A" },

  eventos: [
    { tipo: "Ceremonia", icono: "anillos", hora: "12:00 PM", lugar: "Iglesia Presbiteriana Antioquía", direccion: "2ª Sur #104, Col. Cuauhtémoc, Santa Rosa Panzacola", mapa: "https://www.google.com/maps/search/?api=1&query=Iglesia+Presbiteriana+Antioquia+2a+Sur+104+Santa+Rosa+Panzacola+Oaxaca" },
    { tipo: "Recepción", icono: "pastel", hora: "2:30 PM", lugar: "Jardín privado", direccion: "Calle Camino Real, San Andrés Ixtlahuaca", mapa: "https://maps.app.goo.gl/kWFfGPMq1Hoq41Np9" }
  ],

  galeria: { titulo: "Nuestra historia", subtitulo: "Gracias a Dios por cada momento juntos",
             fotos: ["img/f1.jpg", "img/f2.jpg", "img/f3.jpg", "img/f4.jpg", "img/f5.jpg", "img/f6.jpg", "img/f7.jpg", "img/f8.jpg", "img/f9.jpg", "img/f10.jpg"] },

  padres: { encabezado: "Con la bendición de nuestras mamás", tituloNovia: "Mamá de la novia", tituloNovio: "Mamá del novio",
            novia: ["Sra. Magdalena Ramírez Santiago"], novio: ["Sra. Cristina Ramírez Delgado"] },
  padrinos: [],

  itinerario: [],

  dressCode: { titulo: "Formal", texto: "Te pedimos evitar los colores verde olivo y negro.", colores: [], evitar: [["#556B2F", "Verde olivo"], ["#111111", "Negro"]] },

  notas: ["Por favor sé puntual.", "Confirma tu asistencia a la brevedad.", "Queremos que disfrutes de la fiesta con nosotros.", "Lleva abrigo: hay espacios al aire libre."],

  regalos: { texto: "Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, puedes traer tu regalo o habrá lluvia de sobres.",
             mesa: [], banco: { banco: "", titular: "", clabe: "" }, sobres: false },

  fotosQR: { texto: "", link: "" },

  whatsapp: "529516545435",
  confirmarAntes: "10 de enero",
  pasesMax: 4,                          // PENDIENTE: confirmar el máximo de personas por invitación
  sugerirCancion: false,
  follaje: true,

  hashtag: "",
  credito: "Invitación hecha por Nexo Digital",
  creditoLink: "https://nexoindigital.github.io/n/"
};
