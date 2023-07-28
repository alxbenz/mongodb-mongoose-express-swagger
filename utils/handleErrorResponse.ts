import { Response } from "express";

export const handleErrorResponse = (
    err: unknown,
    res: Response,
    statusCode: number = 500
) => {
    if (typeof err === "string") res.status(statusCode).json({ message: err });
    else if (err instanceof Error) {
        res.status(statusCode).json({ message: err.message });
    }
};
