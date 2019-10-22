import fs from "fs";
import path from "path";
import {ITrailerDetail} from "../../@Types/ITrailerDetail";
/* tslint:enable */

export class TrailerDetailDAO {
  // tslint:disable-next-line: no-empty
  constructor() {
  }

  public getTrailerDetails(trailerId: string) {
    return Promise.resolve<ITrailerDetail>(JSON.parse(fs.readFileSync(path.resolve(__dirname, "../resources/dva-trailer-details.json"), "utf8")));
  }
}
