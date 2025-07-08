    // Navegación móvil
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // FAQ Toggle
        function toggleFaq(element) {
            const answer = element.nextElementSibling;
            const icon = element.querySelector('span:last-child');
            
            answer.classList.toggle('active');
            icon.textContent = answer.classList.contains('active') ? '-' : '+';
        }

        // Funciones de tutorials
        function showTutorial(type) {
            const tutorials = {
                canva: "https://www.canva.com/learn/",
                web: "https://wordpress.com/learn/",
                social: "https://www.linkedin.com/help/linkedin",
                office: "https://support.google.com/docs/"
            };
            
            alert(`Redirigiendo al tutorial de ${type}. En una versión completa, esto abriría un modal con el tutorial paso a paso.`);
            // window.open(tutorials[type], '_blank');
        }

        function showInterviewTips() {
            alert("Mostrando tips adicionales para entrevistas. En la versión completa, esto abriría un modal con consejos detallados.");
        }

        function showExperienceGuide() {
            alert("Abriendo la guía para valorar tu experiencia. En la versión completa, esto sería un cuestionario interactivo.");
        }

        // Chatbot
        function openChatbot() {
            alert("En la versión completa, esto abriría nuestro chatbot de IA o redirigirían a una plataforma de chat como Tidio, Intercom, o directamente a ChatGPT con prompts personalizados.");
            // Aquí integrarías tu chatbot preferido
        }

        // Redes sociales
        function openSocial(platform) {
            const links = {
                instagram: "https://instagram.com/mujeresempoderadastech",
                youtube: "https://youtube.com/@mujeresempoderadastech",
                whatsapp: "https://wa.me/5491112345678",
                email: "mailto:contacto@mujeresempoderadastech.com"
            };
            
            alert(`Abriendo ${platform}. En la versión completa, esto te llevaría a nuestras redes sociales reales.`);
            // window.open(links[platform], '_blank');
        }

        // Smooth scrolling para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animaciones al hacer scroll
        function animateOnScroll() {
            const cards = document.querySelectorAll('.card, .testimonial');
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const cardVisible = 150;
                
                if (cardTop < window.innerHeight - cardVisible) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        }

        // Inicializar animaciones
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Cerrar menú móvil al hacer click en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('navLinks').classList.remove('active');
            });
        });
    
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        
    // Dynamic loading effect for the page
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Add typing effect to hero subtitle
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
         element.style.visibility = 'visible'; // <--- MUY IMPORTANTE
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize typing effect when page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            const subtitle = document.querySelector('.typing-subtitle');
            if (subtitle) {
                const originalText = subtitle.textContent;
                typeWriter(subtitle, originalText, 50);
            }
        }, 1000);
    });
 
function mostrarPopup(event) {
    event.preventDefault();
    document.getElementById('popup').classList.add('show');
}

function cerrarPopup() {
    document.getElementById('popup').classList.remove('show');
}

// Agregar listener para el botón cerrar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cerrarPopup').addEventListener('click', cerrarPopup);
});
function downloadCVTemplate() {
    const link = document.createElement('a');
    link.href = 'plantillas/CV-plantilla.docx.pdf'; // plantillas
    link.download = 'CV-plantilla.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}