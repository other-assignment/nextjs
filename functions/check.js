function checkFullName(name) {
    let pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let result = pattern.test(name);
    return result;
}

function checkAge(age) {
    let pattern = /\d{1,3}/;
    let result = pattern.test(age);
    return result;
}

export { checkFullName, checkAge }