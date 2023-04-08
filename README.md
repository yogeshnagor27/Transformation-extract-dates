## Function – Array of bonus times

This project contains a function toExtractDates that takes a customer object as input and returns an array of objects that contains time periods (start and end dates). In this case, an object (a customer) should be used as input of the function 'toExtractDates' an array of objects that contains time periods (start and end dates). One element of the array should contain one object at a time. This object contains a start date and a de-date. Relevant data can be found under the optional property 'ListOfPeriods'.

### Usage
The toExtractDates function takes a customer object with an optional property ListOfPeriods that contains a string with one or more time periods separated by | characters. Each time period consists of a start date and an end date separated by a - character.

### Error Handling
If the ListOfPeriods property is not a string or has an invalid length, the function will throw an error with the message 'string length is invalid'.

### For example, the results should look like this:

- toExtractDates(customer1) ("ListOfPeriods": " 15.03.2017 - 01.05.2017") => [{ startDate: '15.03.2017', endDate: '01.05.2017' }]

- toExtractDates(customer2) ("ListOfPeriods": "12.06.2008- 11.07.2008|12.08.2008 - 11.11.2008") => [{ startDate: '16.06.2008', endDate: '11.07.2008' }, { startDate: '12.08.2008' endDate: '11.11.2008' }]

- toExtractDates(customer3) ("ListOfPeriods": "NULL") => []

- toExtractDates(customer4) (no property "ListOfPeriods") => []

### Notes:

- TypeScript definitions are used.

- (any number) n periods can be defined in the 'ListOfPeriods'

- The format with "Date11 - Date12 | Date21 - Dautum22 | ..." fixed, but spaces at the beginning, at the end and in between can either exist or not be there.

- If the data as strings do not have the expected length an error string ('string length is invalid') should be output instead of an array.
