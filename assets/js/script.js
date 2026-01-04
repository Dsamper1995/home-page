console.log("hello world", tailwind);

tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#2E1065', // Deepest Masculine Purple (Violet 950)
                secondary: '#020617', // Deepest Dark Slate (Slate 950)
                accent: '#4C1D95', // Deep Purple (Violet 900)
                slate: {
                    950: '#020617',
                    900: '#0F172A',
                    800: '#1E293B',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
            letterSpacing: {
                tighter: '-0.05em',
                tightest: '-0.075em',
            },
            backgroundImage: {
                'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'marquee': 'marquee 40s linear infinite',
                'marquee2': 'marquee2 40s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-secondary/95', 'py-2');
            header.classList.remove('bg-secondary/80', 'py-0');
        } else {
            header.classList.remove('bg-secondary/95', 'py-2');
            header.classList.add('bg-secondary/80', 'py-0');
        }
    });

    // Mobile menu toggle
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = menuButton.querySelector('i');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        });
    });
    
    // Form handling
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server here
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Transmitting...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                contactForm.reset();
                contactForm.classList.add('opacity-50', 'pointer-events-none');
                successMessage.classList.remove('hidden');
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Intersection Observer for fade-in effects
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section > div').forEach(el => {
        el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});

