import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



const expect = require("chai").expect;
const request = require("request");

describe("API Routes Test", () => {
  it("Get Request To Root", done => {
    request("http://localhost:3002", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Get Request Made From Products", done => {
    request("http://localhost:3002/api/products", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
})

  it("Get Request That Filters Soaps A to Z", done => {
    request("http://localhost:3002/api/productA-Z", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Get Request That Filters Soaps from Z to A", done => {
    request("http://localhost:3002/api/productZ-A", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });