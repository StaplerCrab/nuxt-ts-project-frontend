export interface User {
    username: string
    email: string
    provider: string
    password: string
    resetPasswordToken: string
    confirmed: boolean
    blocked: boolean
}