// create basic user object
type BasicUser = {
    _id: number;
    email: string;
    token: string;
}

// create an admin object type
type Admin = {
    accessPages: string[]
    lastLogin: Date
}

// create backupUser object type
type Backup = {
    lastBackUp: Date;
    backUpLocation: string;
}

// combine user and admin to create the user object
type SuperUser = BasicUser & Admin
const superUser: SuperUser = {
    _id: 1,
    email: "mytext@gmail.com",
    token: "12345",
    accessPages: ['profile', 'adminConsole', 'userReset'],
    lastLogin: new Date()
}

// create a backup user
type BackupUser = BasicUser & Backup
const backUpUser: BackupUser = {
    _id: 2,
    email: "mytext@gmail.com",
    token: "12345",
    lastBackUp: new Date(),
    backUpLocation: "~/backup"
}

// console out superUser props
console.log(superUser)

// console out backup user props
console.log(backUpUser )
