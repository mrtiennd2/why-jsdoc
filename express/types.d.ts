export { };

declare global {
    type User = {
        userId: string;
        username: string;
        refreshTokenVersion?: number;
        otherInfo?: any;
    };
}

// requires @types/express to augment the Request type
declare module 'express' {
    interface Request {
        user?: User;
    }
}
