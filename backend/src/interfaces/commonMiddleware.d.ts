type TMiddlewareCall = <T>(error?: T) => T extends Error ? TErrorHandler : void;

export { TMiddlewareCall };
