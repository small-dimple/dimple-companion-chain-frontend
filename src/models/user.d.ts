/**
 * @description: 用户信息
 */


export type UserType = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl?: string;
    gender: number;
    phone: string;
    email: string;
    profile?: string;
    userStatus: number;
    userRole: string;
    orderNum: string
    tags: string[];
    createTime: string;
}