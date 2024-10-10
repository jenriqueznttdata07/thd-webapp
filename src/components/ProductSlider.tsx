import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Product } from '../app/data/products';
import styles from '../styles/ProductSlider.module.css';

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 5;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'Garden Center',
    'Outdoor Power Equipment',
    'Power Tools',
    'Vinyl Flooring',
    'Bathroom Vanities',
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Obtener los productos de la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage - 1 > 0 ? prevPage - 1 : totalPages
    );
  };

  const [quantities, setQuantities] = useState<{ [sku: string]: number }>({});

  const handleIncrease = (sku: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [sku]: (prevQuantities[sku] || 1) + 1,
    }));
  };

  const handleDecrease = (sku: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [sku]: prevQuantities[sku] > 1 ? prevQuantities[sku] - 1 : 1,
    }));
  };

  return (
    <div>
      {/* Botones de clasificación */}
      <div className="d-flex flex-wrap justify-content-center mb-3">
        {['All', ...categories].map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'outline-primary'}
            onClick={() => handleCategoryChange(category)}
            className="m-1"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Información de paginación */}
      <div className="text-center mb-3">
        <span>
          Página {currentPage} de {totalPages} - {filteredProducts.length} productos encontrados
        </span>
      </div>

      {/* Controles de paginación */}
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={handlePrev}>
          Anterior
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Siguiente
        </Button>
      </div>

      {/* Contenedor de productos */}
      <div className={`d-flex flex-wrap ${styles.productContainer}`}>
        {currentProducts.map((product) => {
          const quantity = quantities[product.sku] || 1;

          return (
            <div className={styles.productItem} key={product.sku}>
              <Card className={`${styles.productCard} h-100`}>
                <div className="d-flex">
                  {/* Imagen del producto */}
                  <div className={styles.imageContainer}>
                    <Card.Img
                      src={product.imageUrl}
                      alt={product.name}
                      className={styles.productImage}
                    />
                  </div>

                  {/* Datos del producto */}
                  <div className="d-flex flex-column flex-grow-1">
                    <Card.Body className="d-flex flex-column">
                      {/* Información del producto */}
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <div>Calificación: {product.rating} / 5</div>
                      <div>SKU: {product.sku}</div>
                      <div className="mt-2">
                        <strong>Precio: ${product.price.toFixed(2)}</strong>
                      </div>
                    </Card.Body>
                  </div>
                </div>

                {/* Controles de cantidad y botón */}
                <div className="d-flex w-100 px-2 py-2">
                  {/* Controles de cantidad */}
                  <div className="d-flex align-items-center" style={{ flex: 1 }}>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleDecrease(product.sku)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleIncrease(product.sku)}
                    >
                      +
                    </Button>
                  </div>

                  {/* Botón Agregar al carrito */}
                  <Button
                    variant="outline-warning"
                    size="sm"
                    className={`${styles.addToCartButton} ml-2`}
                    style={{ flex: 1 }}
                  >
                    Agregar al carrito
                  </Button>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
