export class AppError extends Error{
    constructor(messge, statusCode=500){
        super(messge);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
} 