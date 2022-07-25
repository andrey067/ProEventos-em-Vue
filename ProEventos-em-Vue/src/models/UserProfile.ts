export interface UserProfile {
    userName: String,
    email: String,
    firstName: String,
    lastName: String,
    passwords: {
        password: String,
        confirmPassword: String
    }
}