const redirect = (history, to, defaultPath = '/') => {
    const distination = to || defaultPath;
    history.replace(distination);
}

export default redirect;