const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const agreementMessage = document.getElementById('agreement-message');
    const tick = document.getElementById('tick');
    const agreementTick = document.getElementById('agreement-tick');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

   

    function showAgreementMessage() {
        agreementMessage.style.animation = 'agreementFadeIn 0.5s forwards';
        agreementMessage.style.pointerEvents = 'auto';
        agreementTick.style.display = 'inline'; 

        setTimeout(() => {
            agreementMessage.style.animation = 'agreementFadeOut 0.5s forwards';
            agreementMessage.style.pointerEvents = 'none';
        }, 3500);
    }

    document.getElementById('agree-button').addEventListener('click', () => {
        localStorage.setItem('userAgreement', 'true'); 
        showAgreementMessage();
        tick.style.display = 'inline'; 
    });

    // document.getElementById('disagree-button').addEventListener('click', () => {
    //     window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
    // });

    window.addEventListener('load', () => {
        showNotification();
        if (localStorage.getItem('userAgreement') === 'true') {
            tick.style.display = 'inline'; 
            agreementMessage.style.display = 'block';
            agreementTick.style.display = 'inline'; 
        }
    });

    setInterval(showNotification, 600000);

    const animatedSections = document.querySelectorAll('.fade-slide-in');
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        animatedSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);