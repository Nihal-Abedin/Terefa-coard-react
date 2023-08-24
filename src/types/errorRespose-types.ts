export interface ErrorResponseCustom {
    isOperational: boolean;
    messageArray: [{ key: string, message: string }]; // You can replace `any` with a more specific type if needed
    status: string;
    statusCode: number;
    message: string;
    stack: string;
}