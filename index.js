/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

/* Your Code Here */

// Provided function
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);

    return payable;
};

// Function to create an employee record from an array
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Function to create multiple employee records from an array of arrays
function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
}

// Function to add a timeIn event to an employee's record
function createTimeInEvent(dateTime) {
    let [date, hour] = dateTime.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });
    return this;
}

// Function to add a timeOut event to an employee's record
function createTimeOutEvent(dateTime) {
    let [date, hour] = dateTime.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });
    return this;
}

// Function to calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date);
    let timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

// Function to calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}

// Function to find an employee by first name
function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
}

// Function to calculate payroll for an array of employee records
function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0);
}

// Mock data provided by Ultron data systems for testing
let csvData = [
    ["Thor", "Odinson", "God of Thunder", 45],
    ["Loki", "Laufeyson", "God of Mischief", 35],
    ["Natalia", "Romanoff", "Black Widow", 40]
];

// Creating employee records from CSV data
let employees = createEmployeeRecords(csvData);

// Adding time events
createTimeInEvent.call(employees[0], "2024-08-01 0900");
createTimeOutEvent.call(employees[0], "2024-08-01 1700");
createTimeInEvent.call(employees[1], "2024-08-01 1000");
createTimeOutEvent.call(employees[1], "2024-08-01 1800");
createTimeInEvent.call(employees[2], "2024-08-01 1100");
createTimeOutEvent.call(employees[2], "2024-08-01 1900");

// Testing calculations
console.log(hoursWorkedOnDate.call(employees[0], "2024-08-01")); // 8
console.log(wagesEarnedOnDate.call(employees[0], "2024-08-01")); // 360
console.log(allWagesFor.call(employees[0])); // 360
console.log(findEmployeeByFirstName(employees, "Loki")); // Loki's record
console.log(calculatePayroll(employees)); // 1240 (assuming all worked 8 hours)

// Adding more records and time events for full test
let moreCsvData = [
    ["Steve", "Rogers", "Captain America", 50],
    ["Tony", "Stark", "Iron Man", 100]
];

let moreEmployees = createEmployeeRecords(moreCsvData);

createTimeInEvent.call(moreEmployees[0], "2024-08-01 0900");
createTimeOutEvent.call(moreEmployees[0], "2024-08-01 1700");
createTimeInEvent.call(moreEmployees[1], "2024-08-01 0900");
createTimeOutEvent.call(moreEmployees[1], "2024-08-01 1700");

employees = employees.concat(moreEmployees);

console.log(calculatePayroll(employees)); // Total payroll burden




