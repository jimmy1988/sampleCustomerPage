/*
  User name,Admin
*/
var userDetails = [
  "James McHugh",
  true
];

var notifications = [
  "Chase Customer", "See Lucy Turner"
];

/*
  Customer Reference, Title, Forename, Middlenames, Surname, DOBDay, DOBMonth, DOBYear, Email address, CLI, Mobile Number, PassPhrase, PassPhrase Hint, Marketing?, Phone, Email, Text, Letter
*/

var customerDetails = [
  "IT000000",
  "Mr",
  "Bill",
  null,
  "Smith",
  "15",
  "06",
  "1979",
  "bill.smith@ntlworld.com",
  "01273929232",
  "07756454564",
  "secret123",
  "shh123",
  "Yes",
  "No",
  "No",
  "No",
  "No"
];

/*
  Status, Acount Holder, SortCode1, SortCode2, SortCode3, Account Number
*/

var customerDirectDebitDetails=[
  "Live",
  "Mr B Smith",
  "22",
  "22",
  "22",
  "12345678"
];

/*Card Type, otherDetails, Card Number, Start Date Month, Start Date Year, Expiry Date Month, Start Date Year, Issue Number, 1st Line of Address, PostCode*/

var customerDebitCardDetails=[
  "Visa Debit",
  null,
  "1234567887654321",
  "08",
  "2012",
  "07",
  "2019",
  null,
  "21 High Street",
  "BN2 1JK"
];

/*
  ID, House/Flat No, Street, Town, City, County, PostCode, Primary Address
*/

var customerAddresses =[
  ["1", "21", "High Street", "Hove", "Brighton & Hove", "East Sussex", "BN2 1JK", "Yes"],
  ["2", "45", "Descent Drive", "Poole Valley", "Birmingham", "West Midlands", "B43 3JH", "No"]
];

/*
  Name, Relationship, Passphrase, Hint
*/

var auhorisedPersons = [
  ["Helen Carter", "Mother", "Dream", "Thinking"]
];

/*
  ID, Date, Time, Subject, Note, User, Done, Outcome
*/

var customerContactHistory = [
  ["1", "2016-06-01", "09:00", "Bill Production", "Bill Produced for £50 - Due on 14/06/2016", "Lucy Turner", "No", "No Outcome"],
  ["2", "2016-07-01", "09:00", "Bill Production", "Bill Produced for £100 - Due on 14/07/2016", "Alix Wooler", "No", "No Outcome"],
  ["3", "2016-08-01", "09:00", "Bill Production", "Bill Produced for £150 - Due on 14/08/2016", "Lucy Turner", "No", "No Outcome"],
  ["4", "2016-09-01", "09:00", "Bill Production", "Bill Produced for £200 - Due on 14/09/2016", "Alix Wooler", "No", "No Outcome"],
  ["5", "2016-09-20", "12:00", "Transfer to Collections", "No response from customer -transfer to collections", "Lucy Turner", "Yes", "No Outcome"],
  ["6", "2016-09-20", "13:00", "Acknowledgment from  collections", "Account With Collections", "Chloe Carter", "Yes", "No Outcome"],
  ["7", "2016-09-24", "12:45", "Send Letter", "Sent Letter to customer advising Debt of £200 -restriction on account", "Alice Woolley", "Yes", "Letter Sent - No Reply"],
  ["8", "2016-10-01", "13:00", "Send 2nd Letter", "Sent another Letter to customer advising Debt of £200", "Jenna Harvey", "Yes", "Customer Advised needed payment plan of £50PCM starting today on 1st of Every Month- restriction in force until full balance is paid - Paid £50 today"]
];

/*
  ID, Date, Type, Details, Reference, Debit, Credit, Balance, Taken By
*/

var customerTransactionHistory = [
  ["1", "01/05/2016", "Activation Start", "Balance Start", "Not Applicable", "0", "0", "0", "Not Applicable"],
  ["2", "01/06/2016", "Bill Production", "Bill produced", "Not Applicable", "0", "50", "-50", "Automatic"],
  ["3", "01/07/2016", "Bill Production", "Bill produced", "Not Applicable", "0", "50", "-100", "Automatic"],
  ["4", "01/08/2016", "Bill Production", "Bill produced", "Not Applicable", "0", "50", "-150", "Automatic"],
  ["5", "01/09/2016", "Bill Production", "Bill produced", "Not Applicable", "0", "50", "-200", "Automatic"],
  ["6", "01/10/2016", "Bill Payment", "Bill payment as subject to payment plan", "123456", "50", "0", "-150", "Jenna Harvey"],
];

/*
  ID, Customer Reference, Package, CLI, Termination Date, Status
*/

var customerPreviousiTalkAccounts = [
  ["1", "IT123456" , "iTalk All The Time", "021562121545", "2015-07-05", "2016-07-06", "Terminated"],
  ["2", "IT987654", "iTalk 3 Gold", "14512314564121", "2013-06-29", "2014-06-30", "Terminated"]
];

/*
  Package, Status, Restriction in Force, start date, live date, renewal date, e-Billing, Paper Billing
*/
var customerPackageLineStatus = [
  "iTalk 3 Gold", "In Collections" , "Yes", "2016-04-23", "2016-05-01", "2017-04-01", true, false
];

var customerAgentTasks = [
  ["1", "Yes", "Check For Payment", "Check for payment from customer to clear final balance", "Katie Mills", "2016-08-15", "Katie Mills", "High", "2016-08-30"],
  ["2", "Yes", "Transfer to Collections", "Acknowledgment from collections", "Lucy Turner", "2016-09-01", "Chloe Carter", "Medium", "2016-09-02"],
  ["3", "Yes", "Acknowledgment from collections", "ccount is now with collections", "Chloe Carter", "2016-09-02", "Not Assigned", "Normal", "Not Due"],
  ["4", "No", "Chase the customer for payment of outstanding balance", "Restrict the customers account until final balance is paid. Chase customer until contact is made", "Chloe carter", "2016-09-02", "Jenna Harvey", "Medium", "2016-09-03"]
];

var complaintsAgents = [
  "Lucy Turner",
  "Annie-Rose Butteris",
  "Alix Wooler"
]

/*Resolution*/
var complaintsStage2Notes = [];

/*Investigation*/
var complaintsStage1Notes = [];

/*Acknowledgment*/
var complaintsStage0Notes = [
  ["1", "CP2908201612345", "Acknowledgment to customer", "Yes", "2016-08-30", "2016-08-29"]
];

var customerComplaintsMain = [
  ["1", "CP2908201612345", "IT000000", "Mr", "Bill", "Smith","21", "High Street", "Hove", "Brighton & Hove","East Sussex", "BN2 1JK", "Kristie Coles", "2016-08-15", "12:01", "Yes", "Service", "Prefer not to say", null, "Waited for 3 days for engineer to fix line", "refund for 3 days of interuption", null,"Alix Wooler", "0", "2016-08-30", "No", "No","2016-09-26", null]
];
