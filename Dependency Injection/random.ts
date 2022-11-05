interface User {
    email: string;
    password: string;
}

export interface UserRepository {
    save(user: User): Promise<User>
}

interface EmailService {
    sendEmail(to: string, subject: string, body?: string): Promise<void>;
}


class UserRegistrationService {
    constructor(
        private userRepository: UserRepository,
        private emailService: EmailService
    ) {}

    async registerUser(user: User) {
        await this.userRepository.save(user);

        await this.emailService.sendEmail(
            user.email, "Welcome to my Website"
        )
    }
}