import {TrailerDetailDAO} from "../models/TrailerDetailDAO";
import {TrailerDetailService} from "../services/TrailerDetailService";
import { HTTPResponse } from "../models/HTTPResponse";

export const getTrailerDetails = (event: {pathParameters: {trailerId: string} }) => {
  const trailerDetailDAO = new TrailerDetailDAO();
  const trailerDetailService = new TrailerDetailService(trailerDetailDAO);

  return trailerDetailService.getTrailerDetails(event.pathParameters.trailerId)
  .then((data) => {
      return new HTTPResponse(200, data);
    }).catch((error: any) => {
      return new HTTPResponse(error.statusCode, error.body);
    });

};
