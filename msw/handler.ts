import { rest } from "msw";
import { dynamic } from "./api/dynamic";

export const handlers = [
  rest.get(`/dynamic`, dynamic),
];
