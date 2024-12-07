function checkCookieConsent() {
    const cookieConsent = getCookie('cookieConsent');
    if (cookieConsent) {
        document.getElementById('cookie-consent-icon').style.display = 'none';
    } else {
        document.getElementById('cookie-consent-icon').style.display = 'block';
    }
}

function setCookieConsent(consent) {
    document.cookie = `cookieConsent=${JSON.stringify(consent)}; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/`;
    document.getElementById('cookie-consent-icon').style.display = 'none';
    closeModal();
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

document.getElementById('cookie-consent-icon').addEventListener('click', function() {
    openModal();
});

function openModal() {
    document.getElementById('cookie-consent-modal').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('cookie-consent-modal').style.opacity = 1;
    }, 10);
}

function closeModal() {
    document.getElementById('cookie-consent-modal').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('cookie-consent-modal').style.display = 'none';
    }, 300);
}

document.getElementById('accept-cookies').addEventListener('click', function() {
    const consent = { necessary: true, performance: true, marketing: true };
    setCookieConsent(consent);
});

document.getElementById('deny-cookies').addEventListener('click', function() {
    const consent = { necessary: true, performance: false, marketing: false };
    setCookieConsent(consent);
});

document.getElementById('save-cookies').addEventListener('click', function() {
    const consent = {
        necessary: document.getElementById('necessary-cookies').checked,
        performance: document.getElementById('performance-cookies').checked,
        marketing: document.getElementById('marketing-cookies').checked
    };
    setCookieConsent(consent);
});

checkCookieConsent();
const fadeIns = document.querySelectorAll('.fade-in');

function handleScroll() {
  fadeIns.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll();
