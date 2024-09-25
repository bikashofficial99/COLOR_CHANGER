const { log } = require('console');
const { JSDOM } = require('jsdom');
const dom = new JSDOM ('<!DOCTYPE html><html><body></body><html>');
global.document = dom.window.document;

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
          }
          
        });
      });