export interface ISignUp {
     Firstname: string,
     Lastname: string,
     Role: string,
     Email: string,
     Password: string,
     State : string,
     LicenseNumber : number,
     Specialization : string
}


export interface ISignIn {
     Email: string,
     Password: string,
     Role: string
}

export interface IChangePassword {
     OldPassword: string,
     NewPassword: string
}


export interface IValidateEmailDTO {
     Otp : number
}