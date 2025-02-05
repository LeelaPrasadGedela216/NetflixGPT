export const Validation = (email, password) => {
    // Email Validation
    if (!email.includes("@")) {
        return "Email must contain '@'.";
    }
    if (!email.includes(".")) {
        return "Email must contain a domain (e.g., '.com', '.net').";
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        return "Email format is incorrect.";
    }

    // Password Validation
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!/\d/.test(password)) {
        return "Password must contain at least one number.";
    }
    if (!/[@$!%*?&]/.test(password)) {
        return "Password must contain at least one special character (@, $, !, %, *, ?, &).";
    }
    if (password.length < 4 || password.length > 8) {
        return "Password must be between 4 and 8 characters long.";
    }

    return null; // No errors found
};
