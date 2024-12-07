function setLanguagePreference(lang) {
    document.cookie = `language=${lang}; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/`;
}

function getLanguagePreference() {
    let lang = getCookie('language');
    if (lang) {
        console.log(`Language preference: ${lang}`);
    } else {
        console.log('No language preference set');
    }
}

function setTimeZoneCookie() {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.cookie = `timezone=${timeZone}; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/`;
}

function getTimeZoneCookie() {
    let timeZone = getCookie('timezone');
    if (timeZone) {
        console.log(`User's time zone: ${timeZone}`);
    } else {
        console.log('No time zone preference set');
    }
}

function setThemePreference(theme) {
    document.cookie = `theme=${theme}; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/`;
}

function getThemePreference() {
    let theme = getCookie('theme');
    if (theme) {
        document.body.classList.add(theme);
    }
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function setSessionCookie(sessionId) {
    document.cookie = `sessionId=${sessionId}; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/`;
}

function getSessionCookie() {
    let sessionId = getCookie('sessionId');
    if (sessionId) {
        console.log("User is logged in with session:", sessionId);
    }
}

function storeApiData(data) {
    document.cookie = `apiData=${JSON.stringify(data)}; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/`;
}

function getApiData() {
    let data = getCookie('apiData');
    if (data) {
        console.log("Using cached API data:", JSON.parse(data));
    } else {
        console.log("Fetching data from the server...");
    }
}

function storeDataInLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function storeDataInSessionStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

function getDataFromSessionStorage(key) {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
