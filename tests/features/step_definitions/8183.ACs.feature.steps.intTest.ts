import {defineFeature, loadFeature} from "jest-cucumber";
import supertest from "supertest";
import path from "path";

const url = "http://localhost:3006/";
const request = supertest(url);

import mockData from "../../resources/dva-trailer-details.json";
import * as _ from "lodash";

const feature = loadFeature(path.resolve(__dirname, "../8183.ACs.feature"));

defineFeature(feature, (test) => {
  test("AC1.1 fetch all trailer details", ({given, when, then, and}) => {
    let requestUrl: string;
    let response: any;
    let expectedResponse: any;
    let trailerId: string;
    given("I am an API Consumer", () => {
      requestUrl = "dva-trailer-details";
    });
    and("I provide a trailerId as a path parameter", () => {
      trailerId = "/C432678";
    });
    when("I send a GET request to localhost/dva-trailer-details/{trailerId}", async () => {
      response = await request.get(requestUrl + trailerId);
    });
    then("the the system returns a trailerDetail stub", () => {
      expectedResponse = _.cloneDeep(mockData);
      expect(expectedResponse).toEqual(response.body);
    });
    and("the system returns an HTTP status code 200 OK", () => {
      expect(response.status).toEqual(200);
    });
  });
});
