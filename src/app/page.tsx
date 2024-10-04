'use client'
import styles from "@/styles/Home.module.css";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import "@/styles/Navbar.css";
import "@/styles/Footer.css";


const Home = () => {
    return (
        <>
         <Navbar />
            <div>
                 {/* Contenedor Principal */}
      <div className="container">

{/* Encabezado */}
<div className="header text-center my-4">
  <h2>NAVBAR</h2>
</div>

{/* Contenido Principal */}
<div className="main-content">

  {/* Sección 1 */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 mb-4">
      <div className="banner p-4 border bg-light rounded">
        <h2 className="text-center">SLIDER</h2>
      </div>
    </div>
  </div>

  {/* Sección 2 */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 mb-4">
      <div className="banner p-4 border bg-light rounded">
        <h2 className="text-center">PROMOCIONES DESCUENTOS</h2>
      </div>
    </div>
  </div>

  {/* Sección 3 */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 mb-4">
      <div className="features p-4 border bg-light rounded">
        <h2 className="text-center">SLIDER - Compra por categorías</h2>
      </div>
    </div>
  </div>

  {/* Sección 4 */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 mb-4">
      <div className="testimonials p-4 border bg-light rounded">
        <h2 className="text-center">Las Mejores Promociones</h2>
      </div>
    </div>
  </div>

  {/* Sección 5 */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 mb-4">
      <div className="testimonials p-4 border bg-light rounded">
        <h2 className="text-center">Días de Iluminación</h2>
      </div>
    </div>
  </div>

  {/* Sección 6 */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 mb-4">
      <div className="testimonials p-4 border bg-light rounded">
        <h2 className="text-center">Descubre lo que menos esperas</h2>
      </div>
    </div>
  </div>

  {/* Sección 7 */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 mb-4">
      <div className="testimonials p-4 border bg-light rounded">
        <h2 className="text-center">SLIDER COMPRAS RÁPIDAS</h2>
      </div>
    </div>
  </div>

  {/* Sección 8 */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 mb-4">
      <div className="testimonials p-4 border bg-light rounded">
        <h2 className="text-center">Juntos logramos más</h2>
      </div>
    </div>
  </div>

  {/* Sección 9 */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 mb-4">
      <div className="testimonials p-4 border bg-light rounded">
        <h2 className="text-center">Juntos hacemos tu proyecto</h2>
      </div>
    </div>
  </div>

  {/* Sección 10 */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 mb-4">
      <div className="testimonials p-4 border bg-light rounded">
        <h2 className="text-center">Métodos de pago</h2>
      </div>
    </div>
  </div>

  {/* Sección 11 */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 mb-4">
      <div className="testimonials p-4 border bg-light rounded">
        <h2 className="text-center">Especiales para ti</h2>
      </div>
    </div>
  </div>

</div>
</div>
                <Footer />
            </div>
        </>
    )
}

export default Home;