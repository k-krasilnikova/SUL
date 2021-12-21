import { Request } from 'express';

type MiddlewareCall = (error?: unknown) => void;

export { MiddlewareCall };
