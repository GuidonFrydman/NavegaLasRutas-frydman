const products = [
  {
    id: "dest1",
    name: "Santorini",
    description: "Hermosa isla griega con vistas espectaculares y playas de arena negra.",
    price: 1200,
    stock: 5,
    image: "../public/img/santorini.jpg",
    category: "Destinos"
  },
  {
    id: "dest2",
    name: "París",
    description: "La ciudad del amor, famosa por la Torre Eiffel, el Louvre y su encanto bohemio.",
    price: 1500,
    stock: 8,
    image: "../public/img/paris.jpg",
    category: "Destinos"
  },
  {
    id: "hotel1",
    name: "Hotel Plaza Athénée",
    description: "Hotel de lujo en el corazón de París con vistas a la Torre Eiffel.",
    price: 500,
    stock: 12,
    image: "../public/img/hotelatenas.jpg",
    category: "Hoteles"
  },
  {
    id: "hotel2",
    name: "Grace Hotel Tokio",
    description: "Elegante hotel boutique en Tokio con vistas al mar Egeo.",
    price: 450,
    stock: 10,
    image: "../public/img/hoteltokyo.jpg",
    category: "Hoteles"
  },
  {
    id: "paq1",
    name: "Paquete Grecia Esencial",
    description: "Incluye 7 noches en Atenas y Santorini con excursiones y traslados.",
    price: 2500,
    stock: 4,
    image: "../public/img/grecia.jpg",
    category: "Paquetes"
  },
  {
    id: "paq2",
    name: "Paquete París Romántico",
    description: "5 días en París, con visitas guiadas y cena romántica en un crucero por el Sena.",
    price: 2200,
    stock: 6,
    image: "../public/img/pariscircle.png",
    category: "Paquetes"
  }
  ]

  const getProducts = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

export {getProducts}