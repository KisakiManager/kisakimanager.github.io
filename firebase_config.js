/* =============================================
   CONFIGURACIÓN DE FIREBASE (firebase_config.js)
   ============================================= */

// 1. Importamos las herramientas desde la nube (Google CDN)
// Esto permite que funcione sin instalar nada en tu PC.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// 2. Tus credenciales (Las que me pasaste)
const firebaseConfig = {
  apiKey: "AIzaSyBHabVfSJo3_xFqZUMCVvHsXtCJrS1NUP4",
  authDomain: "kisaki-manager-85953.firebaseapp.com",
  projectId: "kisaki-manager-85953",
  storageBucket: "kisaki-manager-85953.firebasestorage.app",
  messagingSenderId: "714700025635",
  appId: "1:714700025635:web:9d526f9bb4e63531206696"
};

// 3. Inicializar la conexión
const app = initializeApp(firebaseConfig);

// 4. Exportar las herramientas para usarlas en upload.html y marketplace.html
export const db = getFirestore(app); // Base de Datos
export const storage = getStorage(app); // Archivos
