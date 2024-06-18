document.addEventListener('DOMContentLoaded', function() {
    // Añadir clase visible a la vista de introducción después de un pequeño retraso
    setTimeout(() => {
        const introView = document.getElementById('introView');
        introView.classList.add('opacity-100');
    }, 100); // 100ms delay

    document.getElementById('startButton').addEventListener('click', function() {
        const introView = document.getElementById('introView');
        const mainView = document.getElementById('mainView');
        
        // Ocultar la vista de introducción
        introView.classList.remove('opacity-100');
        introView.classList.add('opacity-0');

        // Escuchar el final de la transición de la vista de introducción
        introView.addEventListener('transitionend', function() {
            introView.classList.add('hidden');
            // Mostrar la vista principal
            mainView.classList.remove('hidden');
            mainView.classList.add('opacity-100');
        }, { once: true });
    });
});
