var lm = parseInt(prompt("how long did you watch The little Mermaid"));
var bb = parseInt(prompt("how long did you watch Brother Bear"));
var h = parseInt(prompt("how long did you watch Hercules"));
var Cost = 3;
var TotalCost = (lm + bb + h) * 3;
alert("The total cost fo you watching these movies is: " + TotalCost);

var G = parseInt(prompt("how long did you work Google"));
var A = parseInt(prompt("how long did you work for Amazon"));
var FB = parseInt(prompt("how long did you work for Facebook"));
var Pay = ((G*400)+(FB*350)+(A*380))
alert("You were paid $"+Pay+" for all your hours worked this week");

var classfull = confirm("Is the class full?");
var scheduleopen = confirm("Is your schedule open?");
var canenroll = classfull && scheduleopen;
alert("You are able to enroll, this is: "+canenroll);

var bought2 = confirm("Did you buy at least 2 items");
var offer = confirm("Is the offer still available");
var premium = confirm("Are you a premium member?");
var result = (bought2 || premium) && offer;
alert("You are able to use offer, this is: "+result);