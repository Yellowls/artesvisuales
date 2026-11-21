const stars = document.querySelectorAll('.star');
const output = document.getElementById('ratingOutput');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-value'));
      
        // Usamos 'stars' (el NodeList completo) para iterar sobre cada estrella
        stars.forEach(s => {
            const value = parseInt(s.getAttribute('data-value'));
            if (value <= rating) {
                s.classList.add('filled');
            } else {
                s.classList.remove('filled'); // Corregido: comillas simples normales
            }
        });

        // Corregido: 'textContent' con C mayúscula y comillas invertidas `` correctamente cerradas
        output.textContent = `Calificación seleccionada: ${rating} estrella${rating > 1 ? 's' : ''}`;
    });
});