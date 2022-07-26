
export const toggleDarkModeClass = () => {
    const htmlTag = document.querySelector('#app-wrapper');
    if (htmlTag == null) return false;

    const hasClass = htmlTag.className.split(' ').indexOf('dark') > -1;

    localStorage.setItem('dark-mode', hasClass ? 'light' : 'dark');

    const bodyTag = document.querySelector('body');
    if (hasClass) {
        bodyTag?.classList?.add?.('light');
        bodyTag?.classList?.remove?.('dark');
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark');
    } else {
        bodyTag?.classList?.remove?.('light');
        bodyTag?.classList?.add?.('dark');
        htmlTag.classList.remove('light');
        htmlTag.classList.add('dark');
    }
};