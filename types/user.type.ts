export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    bio: string;
    username: string;
    email: string;
    profilePicture?: string;
    lastActive?: Date
    createdAt?: Date
    updatedAt?: Date
}
