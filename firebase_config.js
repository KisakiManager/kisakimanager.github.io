/* =============================================
   CONFIGURACIÓN DE FIREBASE (CONECTADO AL NUEVO PROYECTO)
   ============================================= */

// 1. Importamos las herramientas directamente desde Google (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// 2. TUS CREDENCIALES NUEVAS (Copiadas de lo que me enviaste)
const firebaseConfig = {
  apiKey: "AIzaSyBHabVfSJo3_xFqZUMCVvHsXtCJrS1NUP4",
  authDomain: "kisaki-manager-85953.firebaseapp.com",
  projectId: "kisaki-manager-85953",
  storageBucket: "kisaki-manager-85953.firebasestorage.app", // Ojo: Aquí Firebase a veces pone .appspot.com, pero .firebasestorage.app también es válido en versiones nuevas.
  messagingSenderId: "714700025635",
  appId: "1:714700025635:web:9d526f9bb4e63531206696"
};

// 3. Inicializar la conexión
const app = initializeApp(firebaseConfig);

// 4. Exportar las herramientas para que upload.html las pueda usar
export const db = getFirestore(app);     // Base de Datos
export const storage = getStorage(app);  // Almacenamiento de archivos

console.log("🔥 Configuración de Firebase cargada para: " + firebaseConfig.projectId);
