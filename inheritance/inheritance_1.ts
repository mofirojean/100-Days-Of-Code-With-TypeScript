class UserOne {
    email: string = "";
    createDate: number = 0;
    lastLogin: number = 0;
    private token: string = "";

    setToken (token: string): void {
        // set user token
        this.token = token;
    }

    resetPassword(password: string): string {
        // return string of new password
        return password;
    }
}

// class level inheritance
class AdminUser extends UserOne {
    // pages admis has access to
    adminPages: string[] = ["admins", "settings"];

    // method that allows the admin to reset other users
    resetUserPassword(email: string):string {
        // return default user password
        return "password123"
    }
}

class AdminUserTwo extends UserOne {
    constructor(email : string) {
        super()
        this.email = email
    }

    adminPages: string[] = ["admin", "settings"];

    resetUserPassword(): string {
        // return default user password
        return "password123";
    }
}

// multi-level inheritance
class SuperAdmin extends AdminUser {
    superPages: string[] = ["super", "ultimates"];
    readonly myHash: string

    constructor() {
        super()
        this.myHash = "1234567"
    }

    createAdminUser(adminUser: AdminUser): AdminUser {
        return adminUser
    }

    resetPassword(password: string): string {
        // add hash to password
        return password + this.myHash;
    }
}

const superAdmin  = new SuperAdmin()
const newAdmin = new AdminUser()
const adminUserTwo = new AdminUserTwo('home@home.com');
console.log(superAdmin.resetPassword("pass"))
console.log(newAdmin.resetPassword("pass"))
console.log("hello world")
