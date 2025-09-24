// App.js - Código completo de la landing page en React
// Para ejecutar: Crea un proyecto con npx create-react-app bakery-landing
// Instala dependencias: npm install react-bootstrap bootstrap
// Agrega en public/index.html: <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
// Y <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
// Para animaciones, usamos CSS transiciones y hover effects. Opcional: Instala AOS para fade-in (npm install aos), pero aquí lo mantenemos simple con CSS.

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 

  const productos = [
  {
    id: 1,
    title: "Torta de Café",
    subtitle: "Un postre con aroma y distinción",
    description: `Bizcocho esponjoso con buttercream de café y un toque de cocoa.`,
    ctaText: "Agregar al Carrito",
    precio: 35000,
    imagen: process.env.PUBLIC_URL + "/img/tortacafe.png",
  },
  {
    id: 2,
    title: "Torta de Vainilla Oreo",
    subtitle: "Un clásico renovado con el toque perfecto",
    description: `Suave base de vainilla con trozos de Oreo y buttercream cremoso.`,
    ctaText: "Agregar al Carrito",
    precio: 35000,
    imagen: process.env.PUBLIC_URL + "/img/tortaoreo.png",
  },
  {
    id: 3,
    title: "Torta de Vainilla Arequipe",
    subtitle: "Un sabor auténtico con tradición y dulzura",
    description: `Bizcocho de vainilla relleno y cubierto con cremoso arequipe.`,
    ctaText: "Agregar al Carrito",
    precio: 35000,
    imagen: process.env.PUBLIC_URL + "/img/tortavainillaarequipe.png",
  },
  {
    id: 4,
    title: "Torta de Maracuyá",
    subtitle: "Frescura tropical en cada porción",
    description: `Base de yogurt suave con buttercream y salsa fresca de maracuyá.`,
    ctaText: "Agregar al Carrito",
    precio: 35000,
    imagen: process.env.PUBLIC_URL + "/img/tortamaracuya.png",
  },
  {
    id: 5,
    title: "Torta de Zanahoria y Frutos Secos",
    subtitle: "Tradición, suavidad y un toque crujiente",
    description: `Bizcocho de zanahoria con frutos secos y cobertura de buttercream.`,
    ctaText: "Agregar al Carrito",
    precio: 35000,
    imagen: process.env.PUBLIC_URL + "/img/tortazanahoria.png",
  },
  {
    id: 6,
    title: "Torta de Naranja",
    subtitle: "Refrescante, vibrante y llena de sabor",
    description: `Bizcocho de naranja con buttercream y toques de naranja deshidratada.`,
    ctaText: "Agregar al Carrito",
    precio: 35000,
    imagen: process.env.PUBLIC_URL + "/img/tortanaranja.png",
  },
  {
    id: 7,
    title: "Torta Red Velvet",
    subtitle: "Clásica, sofisticada y llena de encanto",
    description: `bizcocho rojo a base de yogur, con el equilibrio perfecto entre la suavidad de la vainilla, el frescor del limón y el toque sutil de la cocoa.`,
    ctaText: "Agregar al Carrito",
    precio: 35000,
    imagen: process.env.PUBLIC_URL + "/img/tortaredvelvet.png",
  },
  {
    id: 8,
    title: "Torta de Arándanos",
    subtitle: "Ligera, fresca y naturalmente deliciosa",
    description: `Bizcocho de yogurt con buttercream y frescos arándanos.`,
    ctaText: "Agregar al Carrito",
    precio: 35000,
    imagen: process.env.PUBLIC_URL + "/img/tortaarandanos.png",
  },
  {
    id: 9,
    title: "Torta de Milky Way",
    subtitle: "Intensa, cremosa y simplemente irresistible",
    description: `Bizcocho de chocolate con arequipe y chips crocantes.`,
    ctaText: "Agregar al Carrito",
    precio: 35000,
    imagen: process.env.PUBLIC_URL + "/img/tortamilkwhite.png",
  },
  {
    id: 10,
    title: "Torta de Chocolate",
    subtitle: "Intensa, crocante y llena de contraste",
    description: `Bizcocho de chocolate con maní tostado y virutas blancas.`,
    ctaText: "Agregar al Carrito",
    precio: 35000,
    imagen: process.env.PUBLIC_URL + "/img/tortachocomani.png",
  },
  {
    id: 11,
    title: "Torta de Amapola y Coco",
    subtitle: "Exótica, suave y con un toque tropical",
    description: `Bizcocho de amapola con buttercream y contorno de coco rallado.`,
    ctaText: "Agregar al Carrito",
    precio: 35000,
    imagen: process.env.PUBLIC_URL + "/img/tortaamapolacoco.png",
  },
];


// Componente Navbar
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-pastel fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-accent" href="#hero">
          Shalito Dulce y Sal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link textocol" href="#productos">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link textocol" href="#quienes-somos">
                Quiénes Somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link textocol" href="#contactanos">
                Contáctanos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-accent" href="#carrito">
                Carrito
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Componente ProductCard
const ProductCard = ({ producto, onAgregar }) => {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100 product-card animate-fade-in">
        <img
          src={producto.imagen}
          className="card-img-top"
          alt={producto.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-accent">{producto.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{producto.subtitle}</h6>
          <p className="card-text">{producto.description}</p>
          <p className="card-text fw-bold textocol">
            ${producto.precio.toLocaleString("es-CO")} COP
          </p>
          <button
            className="btn btn-outline-accent mt-auto"
            onClick={() => onAgregar(producto)}
          >
            {producto.ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente Cart
const Cart = ({ carrito, onEliminar, onComprarWhatsApp }) => {
  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );
  const mensaje =
    carrito
      .map(
        (item) =>
          `${item.title} (x${item.cantidad}) - $${item.precio * item.cantidad}`
      )
      .join("\n") + `\nTotal: $${total}`;
  const whatsappUrl = `https://wa.me/3125928990?text=${encodeURIComponent(
    `Hola! Quiero comprar:\n${mensaje}`
  )}`;

  return (
    <div id="carrito" className="container my-5">
      <h2 className="text-center mb-4 text-accent">Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p className="text-center text-muted">
          Tu carrito está vacío. ¡Agrega algunos dulces!
        </p>
      ) : (
        <>
          <div className="row">
            {carrito.map((item) => (
              <div key={item.id} className="col-12 mb-3">
                <div className="card cart-item">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h6>{item.title}</h6>
                      <p>
                        ${item.precio} x {item.cantidad}
                      </p>
                    </div>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onEliminar(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-end mt-3">
            <h4>Total: ${total}</h4>
            <a
              href={whatsappUrl}
              className="btn btn-success btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar por WhatsApp
            </a>
          </div>
        </>
      )}
    </div>
  );
};

// Componente AboutUs
const AboutUs = () => {
  return (
    <section id="quienes-somos" className="py-5 bg-crema">
      <div className="container">
        <h2 className="text-center mb-4 text-accent">Quiénes Somos</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              className="img-fluid rounded animate-fade-in"
              alt="Shalito Dulce y Sal"
              style={{ maxWidth: "250px", height: "auto" }}
            />
          </div>
          <div className="col-md-6">
            <p className="lead textocol">
              Somos Shalito Dulce y Sal, un equipo apasionado por crear tortas que
              endulzan tus momentos especiales. Con ingredientes frescos y
              recetas artesanales, cada bocado es una experiencia de sabor y
              alegría. ¡Ven y descubre nuestra magia dulce!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente Contact
const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado! Te contactaremos pronto.");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contactanos" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-accent">Contáctanos</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label textocol">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label textocol">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label textocol">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-accent w-100">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Shalito Dulce y Sal</h5>
            <p>¿Quieres saber más de lo que hacemos? Escríbenos, estaremos felices de contarte.</p>
          </div>
          <div className="col-md-6 text-end">
            <h6>Síguenos</h6>
            <a
              href="https://www.facebook.com/profile.php?id=100095311225331&mibextid=ZbWKwL"
              className="text-white me-3"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/shalitodulceysal?igsh=MTJ0cjJpMnI3cDhtdw=="
              className="text-white me-3"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/3125928990" className="text-white">
              <i className="fab fa-whatsapp"></i>
            </a>
            <p className="mt-2">
              Tel: +57 3125928990 | Email: shalitodys@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Componente principal App
const App = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const comprarWhatsApp = () => {
    // El link se genera en el componente Cart
  };

  return (
    <div className="App">
      <Navbar />

      {/* Hero Section */}
      <section className="hero bg-pastel text-center py-5" id="hero">
        <div className="container">
          <h1 className="display-4 fw-bold text-accent animate-fade-in">
            Somos Shalito Dulce y Sal
          </h1>
          <p className="lead textocol">
            Bienvenido al arte de lo dulce y lo salado… ¡qué alegría tenerte aquí!
          </p>
          <a href="#productos" className="btn btn-accent btn-lg">
            Explorar Productos
          </a>
        </div>
      </section>

      {/* Sección Productos */}
      <section id="productos" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 text-accent">Nuestros Productos</h2>
          <div className="row">
            {productos.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onAgregar={agregarAlCarrito}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Carrito */}
      <Cart
        carrito={carrito}
        onEliminar={eliminarDelCarrito}
        onComprarWhatsApp={comprarWhatsApp}
      />

      {/* Quiénes Somos */}
      <AboutUs />

      {/* Contáctanos */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
