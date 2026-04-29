function EmailValidator(user) {
    return user.email.includes("@");
}

function PasswordValidator(user) {
    return user.password.length >= 8;
}

function AgeValidator(user) {
    return user.age >= 18;
}

export function validadorUsuario(user) {
    if (!EmailValidator(user)) return false;
    if (!PasswordValidator(user)) return false;
    if (!AgeValidator(user)) return false;

    return true;
}
