// Your code here
function createEmployeeRecord(employee){
  return {
  
    firstName :employee[0],
    familyName : employee[1],
    title : employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  
  }
}

function createEmployeeRecords(employeeData){
  return employeeData.map(employee => {
     return  createEmployeeRecord(employee)
    })
  }

function createTimeInEvent (employeeRecordObj, dateStamp){
  let [date, hour] = dateStamp.split(" ")

  employeeRecordObj.timeInEvents.push({
    type : "TimeIn",
    hour : parseInt(hour, 10),
    date,
  })
  return employeeRecordObj;
}


function createTimeOutEvent(employeeRecordObj, dateStamp){
  let [date, hour] = dateStamp.split(" ")

  employeeRecordObj.timeOutEvents.push({
    type : "TimeOut",
    hour : parseInt(hour, 10),
    date,
  })
  return employeeRecordObj;
}

function hoursWorkedOnDate(employeeRecordObj, specificDate){
  let hoursWorked = employeeRecordObj.timeInEvents.find(event => {
    return event.date === specificDate;
  })

  let hoursOff = employeeRecordObj.timeOutEvents.find(event => {
    return event.date === specificDate;
  })
  return (hoursOff.hour - hoursWorked.hour) / 100
 }


function wagesEarnedOnDate (employeeRecordObj, specificDate){
  let wagesOwed = hoursWorkedOnDate(employeeRecordObj, specificDate)
  * employeeRecordObj.payPerHour;
  return parseFloat(wagesOwed.toString())
}

function allWagesFor(employeeRecordObj){
  let availableDates = employee.timeInEvents.map(e => {
    return e.date
  })
  let allOwedWages = availableDates.reduce((salary, days) => {
    return salary + wagesEarnedOnDate(employeeRecordObj, days)
  }, 0)
  return allOwedWages;
}


function calculatePayroll (employeeRecordArray){
 let sumOwed = allWagesFor.reduce((salary, days) => {
  return salary + wagesEarnedOnDate(days)

 })
}