import React, { useEffect, useState } from "react";
import HomeView from "./views/HomeView/HomeView";

interface mockDataModel {
    users: string[];
}

function App() {
    const [mock, setMockData] = useState<mockDataModel>();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5000/api");

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            setMockData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="container-lg">
            <HomeView />
        </div>
    );
}

export default App;
