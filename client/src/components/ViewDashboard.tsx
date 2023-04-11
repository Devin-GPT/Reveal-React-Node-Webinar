import React, { useEffect, useState } from 'react';

declare let $: any;

const apiURL = 'http://localhost:5111/dashboards';

const ViewDashboard = (props: any) => {

    const [dashboardId, setDashboardId] = useState('Campaigns');
    const [dashboards, setDashboards] = useState([]);

    let changeDashboard = (e: any) => {
        setDashboardId(e.target.value);
    };

    useEffect(() => {
        fetch(apiURL, { method: 'GET' }).then((res: any) => res.json())
            .then((dashboards: any) => {
                setDashboards(dashboards);
            });
    }, []);

    useEffect(() => {
        $.ig.RVDashboard.loadDashboard(dashboardId).then((dashboard: any) => {
            var revealView = new $.ig.RevealView('#revealView');
            revealView.dashboard = dashboard;
        });
    }, [dashboardId]);

    return (
        <div>
            <div>
                <h3>Load Dashboard</h3>
                <select name='dashboards' id='dashboards-select' value={dashboardId} onChange={changeDashboard}>
                    {
                        dashboards.map((dashboard: any, index: number) => {
                            return (
                                <option key={index} value={dashboard.name}>{dashboard.name}</option>
                            );
                        })
                    }
                </select>
            </div>
            <div id='revealView' style={{ height: 'calc(100vh - 130px)', width: '100%' }}></div>
        </div>
    );

};

export default ViewDashboard;