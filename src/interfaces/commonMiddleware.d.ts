type TMiddlewareCall = <T>(error?: T) => T extends Error ? Error : void;

export { TMiddlewareCall };
