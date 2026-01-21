/* =============================================
   BASE DE DATOS SIMULADA (items_db.js)
   ============================================= */

// Simulamos el usuario que está navegando actualmente
const CURRENT_USER = "@VicenteUser"; 

const productsDB = [
  {
    id: 1,
    type: 'art',
    title: 'Pack Anime Premium V1',
    seller: '@VicenteUser', // Este eres TÚ (aparecerá botón borrar)
    priceTon: 2.5,
    priceStars: 500,
    discount: 0.20, // 20% de descuento
    color: '#ec4899', // Color de fondo si no hay imagen
    image: '', // URL de la imagen (opcional)
    description: 'Colección exclusiva de 50 ilustraciones estilo anime en resolución 4K. Ideales para fondos de pantalla o proyectos personales. Incluye licencia de uso comercial básico.',
    verified: true
  },
  {
    id: 2,
    type: 'sub', // Suscripción
    title: 'Canal VIP Señales',
    seller: '@TraderPro',
    priceTon: 10,
    priceStars: 2500,
    discount: 0, // Sin descuento
    color: '#3b82f6',
    description: 'Acceso exclusivo a mi canal privado de Telegram donde comparto señales de trading diarias y análisis de mercado. El bot gestionará tu entrada y salida automáticamente.',
    subDuration: '1 Mes',
    subLink: 'https://t.me/+AbCd...' // Enlace privado (solo visible al comprar)
  },
  {
    id: 3,
    type: 'sticker',
    title: 'Cyberpunk Stickers',
    seller: '@DesignLab',
    priceTon: 1.0,
    priceStars: 200,
    discount: 0.50, // 50% descuento!
    color: '#f59e0b',
    description: 'Pack de 20 stickers animados con temática Cyberpunk 2077. Expresiones divertidas y futuristas para tus chats.',
    verified: false
  }
];

// Función para obtener producto por ID
function getProductById(id) {
  return productsDB.find(p => p.id == id);
}
