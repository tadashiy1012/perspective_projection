(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.addEventListener('load', function () {
  var d3pos = [[100, 50, 1000], [300, 50, 1000], [300, 250, 1000], [100, 250, 1000], [100, 50, 1500], [300, 50, 1500], [300, 250, 1500], [100, 250, 1500]];
  var d2pos = [];
  var angle = 60;
  var w = 500;
  var h = 500;
  var size = (w >= h ? w : h) * 0.5;
  var fov = 1 / Math.tan(angle * 0.5 * Math.PI / 180);
  for (var i = 0; i < d3pos.length; i++) {
    d2pos[i] = [d3pos[i][0] / d3pos[i][2] * fov * size, d3pos[i][1] / d3pos[i][2] * fov * size];
    d2pos[i][0] += w / 2;
    d2pos[i][1] += h / 2;
  }
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  for (var _i = 0; _i < d2pos.length; _i++) {
    ctx.beginPath();
    var x = Math.floor(d2pos[_i][0]);
    var y = Math.floor(d2pos[_i][1]);
    var r = Math.floor(10 / d3pos[_i][2] * fov * size);
    console.log(x, y, r);
    ctx.arc(x, y, r, 0, 360, false);
    ctx.stroke();
  }
  for (var _i2 = 0; _i2 < d2pos.length / 2; _i2++) {
    var start = d2pos[_i2];
    var end = _i2 === d2pos.length / 2 - 1 ? d2pos[0] : d2pos[_i2 + 1];
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.stroke();
  }
  for (var _i3 = 0; _i3 < d2pos.length / 2; _i3++) {
    var _start = d2pos[_i3];
    var _end = d2pos[_i3 + 4];
    ctx.beginPath();
    ctx.moveTo(_start[0], _start[1]);
    ctx.lineTo(_end[0], _end[1]);
    ctx.stroke();
  }
  for (var _i4 = 0; _i4 < d2pos.length / 2; _i4++) {
    var _start2 = d2pos[_i4 + 4];
    var _end2 = _i4 === d2pos.length / 2 - 1 ? d2pos[4] : d2pos[_i4 + 5];
    ctx.beginPath();
    ctx.moveTo(_start2[0], _start2[1]);
    ctx.lineTo(_end2[0], _end2[1]);
    ctx.stroke();
  }
});

},{}]},{},[1]);
