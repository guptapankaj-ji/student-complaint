/* =================================
   COMMON VALIDATION FUNCTIONS
================================= */
/* Check empty input */
function isEmpty(value) {
    return value.trim() === "";
}
/* Check email */
function isValidEmail(email) {
    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
/* Check password */
function isValidPassword(password) {
    return password.length >= 4;
}
/* Show error */
function showError(message) {
    alert(message);
}
/* Show success */
function showSuccess(message) {
    alert(message);
}