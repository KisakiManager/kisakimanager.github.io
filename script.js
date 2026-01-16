document.addEventListener('DOMContentLoaded', () => {
    
    // Referencias
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const iconPanel = document.getElementById('icon-panel');
    const iconClose = document.getElementById('icon-close');
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.content-section');

    // 1. Lógica del Botón Toggle (Círculo)
    toggleBtn.addEventListener('click', () => {
        // Alternar clase 'open' en la sidebar
        sidebar.classList.toggle('open');

        // Alternar iconos
        if (sidebar.classList.contains('open')) {
            // Si está abierto, mostramos la X
            iconPanel.classList.add('hidden');
            iconClose.classList.remove('hidden');
        } else {
            // Si está cerrado, mostramos el panel
            iconPanel.classList.remove('hidden');
            iconClose.classList.add('hidden');
        }
    });

    // 2. Lógica de Navegación (Cambio de contenido)
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remover clase active de todos los botones
            menuItems.forEach(i => i.classList.remove('active'));
            // Añadir active al presionado
            item.classList.add('active');

            // Ocultar todas las secciones
            sections.forEach(sec => sec.classList.remove('active'));
            
            // Mostrar la sección correspondiente
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Opcional: Cerrar el menú automáticamente al elegir una opción en móvil
            if (window.innerWidth < 768) {
                sidebar.classList.remove('open');
                iconPanel.classList.remove('hidden');
                iconClose.classList.add('hidden');
            }
        });
    });

});
