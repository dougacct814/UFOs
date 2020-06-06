# UFO Sightings!

## Challenge Assignment 11:

Challenge assignment was to enhance the article and web page by adding additional filters to display the UFO data.  This includes the ability to filter by a single item or multiple items to make the application more robust.

### GOALS

- Create, update, and deploy JavaScript functions to provide additional table filters.
- Update and deploy forEach (for loop) to loop through the filters and update them with user input.
- Update and populate the dynamic filters and table using JavaScript and HTML.

### Completed Effort

 - Include five total filters in the table: Date, City, State, Country, Shape.
 - You will need to create a new function that will replace your handleClick(); function. This function saves the element, value, and the id of the filter that was changed.
 - Create an if-else statement to add filter data from input, or clear the filter if no input data exists.
 - Additionally, create a function named filterTable(); that will perform the following actions:
 1. Set the filtered data to the table.
 2. Loop through all of the filters and keep any data that matches the filter values.
 3. Rebuild the table by calling the buildTable(); function created earlier.
 - Finally, using d3.selectAll();, attach an event listener to pick up changes that are made to each filter.
 
### Additional
- Added a second buttom with link to function for clearing user input fields.
