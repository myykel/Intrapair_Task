# TASK 3
Assuming you are working on the backend of a laundry company mobile app, users can select the number of times they
want the laundry company to pick up their clothes in a month, create an API that:
● Accept pickup day (Monday - Saturday)
● Accept service recurrence (4 times, 2 times or once a month)
● Using today (current day) as the start date, generate the next pickup dates for the subscription
● Return the generated pickup dates as an array

## SOLUTION

I used the moment library to handle date and time operations. This create an array of all pickup days in a month by looping through all days of the month, checking if the day's name matches the "pickup_day" provided in the request body, and if so, adding the day to the allPickupDays array.
I used a loop to iterate over the recurrence, creating a new nextPickupDate by adding the current loop iteration number of weeks to the start of the day and then getting the day with the name of the "pickup_day"
This then pushes the nextPickupDate to the pickupDates array with the date in ISO string format and readable_date format.
The pickup dates is then returned in the response in the form of an object containing a "pickup_dates" field with an array of pickup dates.

###  DOCUMENTATION LINK
https://documenter.getpostman.com/view/24984165/2s935hPS4L