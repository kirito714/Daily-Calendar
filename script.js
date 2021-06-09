// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar*
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours*
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future*
// WHEN I click into a timeblock
// THEN I can enter an event*
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist*

//Using Momentjs is how we are getting the current hour
let currentHour = +moment().format("H");
console.log(currentHour);
// seeting current day
const today = moment().format("MMMM DD YYYY");
$("#currentDay").html(today);

//We are slecting all elements with the class of time-block and executing a function for each one
$(".time-block").each(function () {
  //"this" is refering to .time-block
  //".attr" gets the element id
  //".split" used to split a string into an array
  //".pop" picking the last element of the newly created array
  // this is selecting all time blocks and selecting all the ID's.
  const elementId = $(this).attr("id");
  // hour is getting the last element in the elementsId with the use of split to creat a array and then using pop() to select the last element.
  const hour = elementId.split("-").pop();
  //  this is selecting the index of 1 which is hte 2nd child("time-block")
  const textArea = $(this).children()[1];
  // this is selecting the 3rd child("time-block")
  const saveButton = $(this).children()[2];
  // presistedValue is getting the elementId from local storage.
  const persistedValue = localStorage.getItem(elementId);
  // $(textArea) is being called .html is getting the element presistedValue which was stored in local storage and eing displayed on our browser.
  $(textArea).html(persistedValue);
  // if hour is greater then current hour, then display green background
  if (hour > currentHour) {
    $(this).addClass("future");
    // if hour is equal to, then current hour, then display red background
  } else if (hour == currentHour) {
    $(this).addClass("present");
  } else {
    // if it isnt greater or equal then (else) current background is grey
    $(this).addClass("past");
  }
  // $(saveButton) is being call to have a click event added to save textArea.value to localstorage.
  $(saveButton).click(() => {
    // localstorage is being used to set. elementId is being called to save textArea.vale to local storage from the user.
    localStorage.setItem(elementId, textArea.value);
  });
});
