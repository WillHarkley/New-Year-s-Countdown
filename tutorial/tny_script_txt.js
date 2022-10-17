"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: William Harkleey
   Date: 09/25/2022

   Last updated: 9/26/2022
*/

/*Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */

function runClock() {

    /* Store current date and time */
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    /* Display the current date and time */
    document.getElementById("dateNow").innerHTML =
        dateStr + "<br />" + timeStr;

    /* Calculate the days until January 1st */
    var newYear = new Date("Januaray 1, 2023");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

    /* Calculate hours, minutes, and hours left until New Years */
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;


    /* Display the time left until New Years Eve */
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}