/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then(text => {
        expect(text).to.equal('Movie Finder');
      }));

  it('returns the correct status code', () => axios.get(url).then(response => expect(response.status === 200)));

  it('should have an input for searching', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('input'))
      .end()
      .then(input => {
        expect(input).to.exist;
      })).timeout(20000);

  it('should have a button for submitting search', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.getElementsByClassName('btn'))
      .end()
      .then(button => {
        expect(button).to.exist;
      })).timeout(20000);

  it('should show an error message when blank query submitted', () =>
    nightmare
      .goto(url)
      .click('.btn')
      .wait('.card')
      .evaluate(() => document.querySelector('.card h1').innerText)
      .end()
      .then(cardText => {
        expect(cardText).to.equal('Enter a valid movie title!');
      })).timeout(3000);

  it('should return the correct movie title for search input', () =>
    nightmare
      .goto(url)
      .type('input', 'Annihilation')
      .click('.btn')
      .wait('.card')
      .evaluate(() => document.querySelector('.card h2').innerText)
      .end()
      .then(cardTitle => {
        expect(cardTitle).to.equal('Annihilation');
      })).timeout(30000);

  it('should return the correct release year for search input', () =>
    nightmare
      .goto(url)
      .type('input', 'Annihilation')
      .click('.btn')
      .wait('.card')
      .evaluate(() => document.querySelector('.card h4').innerText)
      .end()
      .then(cardYear => {
        expect(cardYear).to.equal('2018');
      })).timeout(30000);

  it('should display a movie poster', () =>
    nightmare
      .goto(url)
      .type('input', 'Annihilation')
      .click('.btn')
      .wait('.card')
      .evaluate(() => document.querySelector('.card img').src)
      .end()
      .then(cardPoster => {
        expect(cardPoster).to.not.equal('');
      })).timeout(5000);

  it('should display detail view when a movie is returned and more info clicked', () =>
    nightmare
      .goto(url)
      .type('input', 'Annihilation')
      .click('.btn')
      .wait('.card')
      .click('.btn-primary')
      .wait('.row')
      .evaluate(() => document.getElementsByClassName('.row'))
      .end()
      .then(movieDetail => {
        expect(movieDetail).to.exist;
      })).timeout(5000);

  it('should display the runtime in the second badge in detail view', () =>
    nightmare
      .goto(url)
      .type('input', 'Annihilation')
      .click('.btn')
      .wait('.card')
      .click('.btn-primary')
      .wait('.row')
      .evaluate(() => document.querySelector('.badge-primary:nth-of-type(2)').innerText)
      .end()
      .then(runtime => {
        expect(runtime).to.equal('115 min');
      })).timeout(5000);
});
