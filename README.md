# Intrapair_Task
INTRAPAIR BACKEND DEVELOPER APTITUDE TEST
TASK 1
Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the
right of that element in the original input array. For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:
● There is 1 smaller element to the right of 3
● There is 1 smaller element to the right of 4
● There are 2 smaller elements to the right of 9
● There is 1 smaller element to the right of 6
● There are no smaller elements to the right of 1
TASK 2
Given a string as an argument, write a function that returns the first recurring character in the string or null if there is no
recurring character. For example, given the string "acbbac", return "b". Given the string "abcdef", return null.
TASK 3
Assuming you are working on the backend of a laundry company mobile app, users can select the number of times they
want the laundry company to pick up their clothes in a month, create an API that:
● Accept pickup day (Monday - Saturday)
● Accept service recurrence (4 times, 2 times or once a month)
● Using today (current day) as the start date, generate the next pickup dates for the subscription
● Return the generated pickup dates as an array
Example request object
{
"pickup_day": "Saturday",
"recurrence": 4
}
Example response object
{
"pickup_dates": [
{
"date":"2021-07-24T22:41:50.219+00:00",
"readable_date":"24 July 2021"
},
{
"date":"2021-07-31T22:41:50.219+00:00",
"readable_date":"31 July 2021"
},
{
"date":"2021-08-07T22:41:50.219+00:00",
"readable_date:"7 August 2021"
},
{
"date":"2021-08-14T22:41:50.219+00:00",
"readable_date":"14 August 2021"
}
]
}
SUBMISSION
1. Provide your solution in a public git repository, each task should be in a separate folder and should have a readme.md file
stating the question and explaining your approach to the solution (ensure you use a good commit message pattern).
2. We love clean code, and hope you share the feeling.
3. For Task 3, publish the documentation of your API using postman and include the documentation link in your readme.md
file.
4. Reply to the email that sent the question with your public git repository link.
