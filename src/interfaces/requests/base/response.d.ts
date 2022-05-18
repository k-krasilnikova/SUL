import { Response } from 'express';

type TBaseResponse<Payload, Locals = never> = Response<Payload, Locals>;

export default TBaseResponse;
