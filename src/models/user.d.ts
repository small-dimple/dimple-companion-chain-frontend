/**
 * @description: 用户信息
 */


export type UserType = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl?: string;
    profile?: string;
    gender:number;
    phone: string;
    email: string;
    userStatus: number;
    userRole: number;
    orderNum: string;
    tags: string;
    createTime: Date;
};
