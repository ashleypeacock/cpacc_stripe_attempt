import { handleError } from '../utils/error-handler';

export function errorHandler(err, req, res, next) {
  handleError(err, req, res);
}