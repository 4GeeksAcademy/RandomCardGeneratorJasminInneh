/* eslint-disable */
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add("heart");
  setTimeout(() => {
    document.querySelector(".card").classList.remove("heart");
    document.querySelector(".card").classList.add("spade");
  }, 1000);
};

let generateRandomNumber(){
  let num = Math.floor(Math.random() * 12);
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
};