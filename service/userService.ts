export interface CreateUserRequest {
    username: string;
    password: string;
    reCaptchaKey: string;
}

export type CreateUserResponse =
    { type: 'Ok' } |
    { type: 'UsernameTaken' } |
    { type: 'InvalidCaptchaCode' } 

export const userService = {
    async createUser(req: CreateUserRequest): Promise<CreateUserResponse> {
         return { type: 'Ok' };
    }
}