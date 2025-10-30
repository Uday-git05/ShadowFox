
document.addEventListener('DOMContentLoaded', () => {
    
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navMenu.classList.toggle('hidden');
        });
    }

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    
                    if (navMenu && !navMenu.classList.contains('hidden')) {
                        navMenu.classList.add('hidden');
                        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    });

   
    const copyBtn = document.getElementById('copyEmail');
    const copyMsg = document.getElementById('copyMessage');
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            const email = 'Udaya@gmail.com';
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(email);
                } else {
                    
                    const ta = document.createElement('textarea');
                    ta.value = email;
                    ta.style.position = 'fixed'; ta.style.left = '-9999px';
                    document.body.appendChild(ta);
                    ta.focus(); ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                }
                if (copyMsg) copyMsg.classList.remove('hidden');
                copyBtn.textContent = '(Email Copied!)';
                setTimeout(() => {
                    if (copyMsg) copyMsg.classList.add('hidden');
                    copyBtn.textContent = '(Click to Copy)';
                }, 2000);
            } catch (err) {
                console.error('Copy failed', err);
            }
        });
    }

   
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();

            if (!name || !email || !message || !validateEmail(email)) {
                if (formMessage) {
                    formMessage.textContent = 'Please complete all fields and provide a valid email.';
                    formMessage.classList.remove('hidden');
                    formMessage.classList.remove('text-green-400');
                    formMessage.classList.add('text-red-400');
                    setTimeout(() => {
                        formMessage.classList.add('hidden');
                        formMessage.classList.remove('text-red-400');
                    }, 3000);
                }
                return;
            }

           
            if (formMessage) {
                formMessage.textContent = 'Thanks — your message was received (demo).';
                formMessage.classList.remove('hidden');
                formMessage.classList.remove('text-red-400');
                formMessage.classList.add('text-green-400');
            }
            form.reset();
            setTimeout(() => {
                if (formMessage) formMessage.classList.add('hidden');
            }, 3500);
        });
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
