import { TrailerDetailDAO } from "../models/TrailerDetailDAO";

/**
 * Service for retrieving Trailer Details for DVA
 * @returns Promise
 */
export class TrailerDetailService {
  public readonly trailerDetailDAO: TrailerDetailDAO;

  constructor(trlrDetailDAO: TrailerDetailDAO) {
    this.trailerDetailDAO = trlrDetailDAO;
  }
  public async getTrailerDetails(trailerId: string) {
    return await this.trailerDetailDAO.getTrailerDetails(trailerId);
  }

}
