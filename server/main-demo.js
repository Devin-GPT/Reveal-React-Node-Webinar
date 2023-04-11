var express = require('express');
var reveal = require('reveal-sdk-node');
var cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

// Step 0 - Create API to Retrieve Dashboards
app.get('/dashboards', (req, res) => {
  const directoryPath = './dashboards';
  fs.readdir(directoryPath, (err, files) => {
    const fileNames = files.map((file) => {
    const { name } = path.parse(file);
    return { name };
    });
    res.send(fileNames);
  });
});

// Step 1 - Set up your Authentication Provider
const authenticationProvider = async (userContext, dataSource) => {
  console.log("Enter Authentication Provider"); 
    if (dataSource instanceof reveal.RVSqlServerDataSource) {
      return new reveal.RVUsernamePasswordDataSourceCredential("username", "password"); }
  }

// Step 2 - Set up your Data Source Provider
const dataSourceProvider = async (userContext, dataSource) => {
    if (dataSource instanceof reveal.RVSqlServerDataSource) {
        dataSource.host = "servername";
        dataSource.database = "Northwind";
  }
  return dataSource;
}

// Step 3 - Set up your Data Source Item Provider
const dataSourceItemProvider = async (userContext, dataSourceItem) => {
  console.log("Enter dataSourceItemProvider");
  
  // SQL Server
  if (dataSourceItem instanceof reveal.RVSqlServerDataSourceItem) {

    console.log("in SQL Server dataSourceItem");  
    // This Database property needed for both SQL Express and SQL Server
    // Change to the correct database name
    dataSourceItem.database = "Northwind";            

        if (dataSourceItem.id == "CustOrderHist")
        {
            dataSourceItem.procedure = "CustOrderHist";
            dataSourceItem.procedureParameters = {"@CustomerID": 'ALFKI'};  //userContext.UserId
        }

        if (dataSourceItem.id == "CustOrdersOrders")
        {
            dataSourceItem.procedure = "CustOrdersOrders";
            dataSourceItem.procedureParameters = {"@CustomerID": 'ALFKI'};  //userContext.UserId
        }

        if (dataSourceItem.id == "TenMostExpensiveProducts")
        {
            dataSourceItem.procedure = "Ten Most Expensive Products";
        }

        if (dataSourceItem.id == "CustomerOrders")
        {
            dataSourceItem.customQuery = "Select * from Orders";    
        }
    }
 
    return dataSourceItem;
  }

// Step 4 - Set up your Reveal Options
const revealOptions = {
    authenticationProvider: authenticationProvider,
    dataSourceProvider: dataSourceProvider,
    dataSourceItemProvider: dataSourceItemProvider,
    localFileStoragePath: "data"
}

// Step 5 - Initialize Reveal with revealOptions
app.use('/', reveal(revealOptions));

// Step 6 - Start your Node Server
app.listen(5111, () => {
    console.log(`Reveal server accepting http requests`);
});
