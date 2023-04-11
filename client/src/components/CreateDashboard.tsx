import React, {useEffect} from 'react';

declare let $: any;

const CeateDashboard = () => {

    useEffect(() => {
        var revealView = new $.ig.RevealView('#revealView');
        revealView.startInEditMode = true;

        revealView.onDataSourcesRequested = (callback: any) => {
        
        // SQL Server Full Database
        let sqlServerDataSource = new $.ig.RVSqlServerDataSource();
        sqlServerDataSource.id='sqlServer';
        sqlServerDataSource.host = 's0106linuxsql1.infragistics.local';
        sqlServerDataSource.title = 'SQL Server Data Source';
        sqlServerDataSource.subtitle = 'Full Northwind Database';

        // SQL Server Curated Items
        let sqlDataSourceItem1 = new $.ig.RVSqlServerDataSourceItem(sqlServerDataSource);
        sqlDataSourceItem1.id='CustomerOrders';
        sqlDataSourceItem1.title = 'Customer Orders';
        sqlDataSourceItem1.subtitle = 'Custom SQL Query';
        
        let sqlDataSourceItem2 = new $.ig.RVSqlServerDataSourceItem(sqlServerDataSource);
        sqlDataSourceItem2.id='CustOrderHist';
        sqlDataSourceItem2.title = 'Customer Orders History';
        sqlDataSourceItem2.subtitle = 'Stored Procedure';
        
        let sqlDataSourceItem3 = new $.ig.RVSqlServerDataSourceItem(sqlServerDataSource);
        sqlDataSourceItem3.id='CustOrdersOrders';
        sqlDataSourceItem3.title = 'Customer Orders Orders';
        sqlDataSourceItem3.subtitle = 'Stored Procedure';
        
        let sqlDataSourceItem4 = new $.ig.RVSqlServerDataSourceItem(sqlServerDataSource);
        sqlDataSourceItem4.id='TenMostExpensiveProducts';
        sqlDataSourceItem4.title = 'Ten Most Expensive Products';
        sqlDataSourceItem4.subtitle = 'Stored Procedure';

        callback(new $.ig.RevealDataSources([sqlServerDataSource], [sqlDataSourceItem1, sqlDataSourceItem2, sqlDataSourceItem3, sqlDataSourceItem4], false));
        };

    }, [] );

    return <div id='revealView' style={{ height: 'calc(100vh - 60px)', width: '100%' }}></div>;
};

export default CeateDashboard;