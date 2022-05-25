import { Request } from 'express';

type TBaseRequest<Params = never, Body = never, Query = never> = Request<
  Params,
  never,
  Body,
  Query,
  never
>;

export default TBaseRequest;
