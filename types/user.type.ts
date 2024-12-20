export interface IUser {
    _id?: string;
    clerkId: string;
    firstName: string;
    lastName: string;
    bio?: string;
    username: string;
    email: string;
    profilePicture: string;
    lastActive: string
    createdAt: string
    updatedAt: string
    areCloseFriends?: boolean
    areFriends?: boolean
    isFriendRequestSent?: boolean
}
