export type User = {
    email:string,
    password: string,
}

export type UserData = {
    profiles?:Profile[] 
}

export type Profile = {
    name: string
}