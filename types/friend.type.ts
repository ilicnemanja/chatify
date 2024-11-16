import { IUser } from "./user.type"

export interface IFriendsResponse {
    closeFriends: IUser[];
    allFriends: IUser[];
}