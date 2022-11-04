# Defects

## Summary:- Clicking the Contact tab on the home page results in an error sign being displayed

**Steps to reproduce:-**
1. Navigate to the URL https://ensekautomationcandidatetest.azurewebsites.net/
2. Click the "Contact" tab in the header

**Expected results:-**

The user is taken to a page akin to https://ensek.com/contact

**Actual results:-**

The user sees an error image

Error is misspelt on the image

**Note:-**

This is different to clicking the "Sell energy" page which leads a maintenance page which presumably would be a better fit here

Especially so as clicking "Contact" doesn't appear to display any actual error in the console or network tab of the dev tools

**Screenshot:-**
![Error Page](./screenshots/Screenshot%202022-11-03%20093601.png)



## Summary:- Password validation messages on registration do not match the validation performed

**Steps to reproduce:-**
1. Navigate to the URL https://ensekautomationcandidatetest.azurewebsites.net/
2. Click "Register" in the header
3. Enter a valid email
4. Enter 6 lower case characters in the "Password" and "Confirm Password" field
5. Click "Register"
6. Observe the error message presented; "Passwords must have at least one non letter or digit character. Passwords must have at least one digit ('0'-'9'). Passwords must have at least one uppercase ('A'-'Z')."
7. Enter (and confirm) a password meeting these criteria e.b. Password1234
8. Observe the error message presented; "Passwords must have at least one non letter or digit character."

**Expected results:-**

The specified password criteria is correctly supplied to the user
Passwords submitted matching the specified password criteria are accepted

**Actual results:-**

Passwords submitted matching the specified password criteria are not accepted

**Note:-**

It is suggested here that if the string:

"Passwords must have at least one non letter or digit character."

Where changed to

"Passwords must have at least one non letter character."

The validation would work as expected

It is also suggested that when more than one criteria is present to the user that each criteria should be in its own `<li>` element so it appears as a more readable list to the user
The html is there but not constructed properly



## Summary:- Registration cannot be completed and results in an SQL connection error

**Steps to reproduce:-**
1. Navigate to the URL https://ensekautomationcandidatetest.azurewebsites.net/
2. Click "Register" in the header
3. Enter a valid email
4. Enter and confirm a valid password e.g. Password123!
5. Click "Register"
6. Wait (there is no progress indicator)
7. Observe the error message presented

**Expected results:-**

The registration completes and the user is taking them to a page notifying them off this

Presumably they would also be logged in at this point (or invited to)

**Actual results:-**

Registration cannot be completed and results in an SQL connection error

**Note:-**

Unlike the Log in page where a message is displayed indicating there is no authentication the registration page has no such message

**Screenshot:-**
![SQL Connection Error](./screenshots/Screenshot%202022-11-03%20100547.png)



## Summary:- The About page has a link to the production website

**Steps to reproduce:-**
1. Navigate to the URL https://ensekautomationcandidatetest.azurewebsites.net/
2. Click "About" in the header
3. Click the "Find out more about us" link
4. Observe the user is taken to https://www.ensek.com/about

**Expected results:-**

All links within a given test environment lead to another page within that test environment

**Actual results:-**

The About page has a link to the production website



## Summary:- There is no validation on the "Number of Units Required" field on the /Energy/Buy page

**Steps to reproduce:-**
1. Navigate to the URL https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy
2. Click "Buy Energy"
3. In any of the available "Energy Type" observer you can enter
    - A negative quantity (this increases the qty available)
    - A quantity higher than that available (this decreases the available qty available below zero)
    - A decimal quantity (this prompts a crash)
    - A string of alpha characters (this prompts a crash)
    - Zero (this leads to a sale of zero)

**Expected results:-**

The user is only allowed to enter a meaningful quantity that would result in a sale

All other entries should generate an appropriate error message (either on entry or on clicking "Buy")

The error message should be handled by the front end

**Actual results:-**

The lack of any validation leads to various error states



## Summary:- There are multiple HTML elements on the Buy Energy Page with the same Id

**Steps to reproduce:-**
1. Navigate to the URL https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy
2. Right Click on main table on the page and click "Inspect"
3. Inspect the attributes of the input elements within each row
4. Observe the the inputs of each row share ids (it looks like they have not been correctly set)
5. E.g. each the "Name" field has an id="energyType_EnergyTypeId" rather than an actual EnergyTypeId

**Expected results:-**

Any html element on the page that has an id attribute has a unique value

**Actual results:-**

Many html elements share identical (unset) ids

**Notes:-**

This was discovered when automating the E2E test case and looking for attributes/selectors to use

Whilst ids should always be unique and in many instance will suffice as selectors it is recommended to have specific data attributes for automation

E.g. `data-cy="energyTable_energyType_Gas"`

**Screenshot:-**
![Identical ids](./screenshots/Screenshot%202022-11-04%20091849.png)



## Summary:- There is a full stop missing in the sale confirmation message

**Steps to reproduce:-**
1. Navigate to the URL https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy
2. Enter a quantity for an energy type that is less than the amount available 
3. Click the Buy button
4. Observe after "Thank you for your purchase of 1 units of Gas" there is no full stop before the next segment of the message "We have popped it in the post and it will be with you shortly." which does correctly have a full stop

**Expected results:-**

Any messages to the user are correctly formatted

**Actual results:-**

There is a full stop missing in the sale confirmation message

**Screenshot:-**
![Missing full stop](./screenshots/Screenshot%202022-11-04%20092148.png)



## Summary:- The main table on the Buy Energy page is not always responsive

**Steps to reproduce:-**
1. Navigate to the URL https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy
2. Right Click on main table on the page and click "Inspect"
3. Toggle device emulation "On" and select a typical device e.g. iPhone 12 Pro
4. Observe that the header has changed to a responsive format i.e. the option now form a hamburger menu
5. Observe that the table is also responsive and fits the page
6. Navigate to the Home page (using the hamburger menu)
7. Navigate back to the Buy Energy Page (using the button on the page)
8. Observe the table is now no longer responsive and scrolls off the display

**Expected results:-**

The main table on the Buy Energy page is always responsive

**Actual results:-**

The main table on the Buy Energy page is not always responsive

**Screenshot:-**
![Table off screen](./screenshots/Screenshot%202022-11-04%20094506.png)



## The provided authentication does not allow use of endpoints that require it

**Steps to reproduce:-**
1. Navigate to the provide api example swagger page https://qacandidatetest.ensek.io/
2. Attempt to authenticate the page by pressing the "Authorize" button
3. Use the provide example
4. Observe the padlocks next to each endpoint close indicating success
5. Attempt to use an endpoint that requires authentication e.g. POST /ENSEK/reset
6. Observe the request fails with a 401 authentication error

**Expected results:-**

The provided authentication does allow use of endpoints that require it or authenticate requirements are removed from all end points

**Actual results:-**

The provided authentication does not allow use of endpoints that require it

**Screenshot:-**
![Endpoint failure](./screenshots/Screenshot%202022-11-04%20113808.png)



## The GET /ENSEK/orders/{orderId} endpoint returns a 500 error

**Steps to reproduce:-**
1. Navigate to the provide api example swagger page https://qacandidatetest.ensek.io/
2. Use the endpoint GET /ENSEK/orders/ to retrieve a valid order id
3. Use the GET /ENSEK/orders/{orderId} with the gathered id
4. Observe the end point returns a 500 error

**Expected results:-**

The GET /ENSEK/orders/{orderId} endpoint returns a 200 and provides the order details

**Actual results:-**

The GET /ENSEK/orders/{orderId} endpoint returns a 500 error

**Notes:-**

All other GET end points appear to function correctly (without authentication) there is no reason to suppose this one should not as well.



## The Buy Energy page indicates a discount with two conflicting percentages

**Steps to reproduce:-**
1. Navigate to the URL https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy
2. Observe the advert has text indicating 30% Gas discount and an image indicating 20%

**Expected results:-**

Any discounts have consistent percentages

**Actual results:-**

The Buy Energy page indicates a discount with two conflicting percentages

**Notes:-**

There is no indication whether the discount has been applied or not
The image used has a filename "/Content/Images/20-discount-Circle-1.png" but it appears there is no 30- version in the same directory

**Screenshot:-**
![Percentages](./screenshots/Screenshot%202022-11-04%20140336.png)