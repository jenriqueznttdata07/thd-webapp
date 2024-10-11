export interface Product {
    name: string;
    description: string;
    rating: number;
    sku: string;
    price: number;
    imageUrl: string;
    category: string; // Nueva propiedad
  }
  
  
  export const products: Product[] = [
    {
      name: 'Cortadora de Césped',
      description: 'Cortadora eficiente para tu jardín',
      rating: 4.5,
      sku: 'SKU001',
      price: 299.99,
      imageUrl: 'https://cdn.homedepot.com.mx/productos/224225/224225.jpg',
      category: 'Garden Center',
    },
    {
      name: 'Taladro Inalámbrico',
      description: 'Taladro potente y duradero',
      rating: 4.0,
      sku: 'SKU002',
      price: 149.99,
      imageUrl: 'https://cdn.homedepot.com.mx/productos/224225/224225.jpg',
      category: 'Power Tools',
    },
    // Agrega más productos con sus respectivas categorías
  ];
  
  // Generar más productos automáticamente con categorías
  const categories = [
    'Garden Center',
    'Outdoor Power Equipment',
    'Power Tools',
    'Vinyl Flooring',
    'Bathroom Vanities',
  ];
  
  for (let i = 3; i <= 20; i++) {
    products.push({
      name: `Producto ${i}`,
      description: `Descripción del producto ${i}`,
      rating: parseFloat((Math.random() * 5).toFixed(1)),
      sku: `SKU${String(i).padStart(3, '0')}`,
      price: parseFloat((Math.random() * 100).toFixed(2)),
      imageUrl: `https://cdn.homedepot.com.mx/productos/224225/224225.jpg?text=Producto+${i}`,
      category: categories[Math.floor(Math.random() * categories.length)],
    });
  }