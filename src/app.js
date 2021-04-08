/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse_generator").innerHTML = excuse_generator();
  });
  function excuse_generator() {
    let who = ["My dog", "The cat", "The Hulk", "A Dinasour", "The president"];
    let what_did = ["ate", "stole", "hid", "smashed", "burned"];
    let the_object = [
      "the homework",
      "my food",
      "the newspaper",
      "my phone",
      "the computer"
    ];
    let when = [
      "yesterday",
      "last night",
      "a month ago",
      "a week ago",
      "last weekend"
    ];

    let who_position = Math.floor(Math.random() * 5);
    let what_did_position = Math.floor(Math.random() * 5);
    let the_object_position = Math.floor(Math.random() * 5);
    let when_position = Math.floor(Math.random() * 5);

    return (
      who[who_position] +
      " " +
      what_did[what_did_position] +
      " " +
      the_object[the_object_position] +
      " " +
      when[when_position]
    );
  }
};
