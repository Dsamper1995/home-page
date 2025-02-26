console.log("hello world", tailwind);

tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',
                secondary: '#1E40AF',
                neutral: {
                    100: '#F5F5F5',
                    200: '#E5E5E5',
                    300: '#D4D4D4',
                    800: '#262626',
                    900: '#171717',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
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
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        // Reset previous error messages
        document.querySelectorAll('.text-red-500').forEach(el => el.classList.add('hidden'));
        
        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const company = document.getElementById('company');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Validate name
        if (!name.value.trim()) {
            document.getElementById('nameError').classList.remove('hidden');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
            document.getElementById('emailError').classList.remove('hidden');
            isValid = false;
        }
        
        // Validate company
        if (!company.value.trim()) {
            document.getElementById('companyError').classList.remove('hidden');
            isValid = false;
        }
        
        // Validate message
        if (!message.value.trim()) {
            document.getElementById('messageError').classList.remove('hidden');
            isValid = false;
        }
        
        if (isValid) {
            // In a real implementation, you would send the form data to a server here
            
            // Hide form and show success message
            contactForm.reset();
            contactForm.style.display = 'none';
            successMessage.classList.remove('hidden');
            
            // For demo purposes, we'll reset the form after 5 seconds
            setTimeout(() => {
                contactForm.style.display = 'block';
                successMessage.classList.add('hidden');
            }, 5000);
        }
    });
            
});

