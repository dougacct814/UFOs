// import the data from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

// build Table function:
function buildTable(data) {
    // First, clear out any existing data
    tbody.html(""); 

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach( (dataRow) => {
       
        // Append a row to the table body
        let row = tbody.append("tr");   

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            // add new cells to the current row:
            let cell = row.append("td");
            // then return the value to that cell
            cell.html(val)
            });
    });
}

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  
  if (date) {
    filters["datetime"]=date
  } 
  else {
    if (filters.hasOwnProperty("datetime")){
      delete filters["datetime"]
    }
  };

  if (city) {filters["city"]=city
  } 
  else {
    if (filters.hasOwnProperty("city")){
      delete filters["city"]
    }
  };

  if (state) {
    filters["state"]=state
  } else {
    if (filters.hasOwnProperty("state")){
        delete filters["state"]
    }
  };

  if (country) {
    filters["country"]=country
  } else {
    if (filters.hasOwnProperty("country")){
        delete filters["country"]
    }
  };

  if (shape) {
    filters["shape"]=shape
  } else {
    if (filters.hasOwnProperty("shape")){
        delete filters["shape"]
    }
  };
    filterTable()

}


// Call function to apply all filters and rebuild the table
function filterTable() {

    // Set the filteredData to the tableData
    let filteredData = tableData;
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === filters[key]);
    });
    
    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
  }

// Function to clear input fields
function ClearFields() {

  document.getElementById("datetime").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
  document.getElementById("shape").value = "";
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the initial table when the page loads
buildTable(tableData);