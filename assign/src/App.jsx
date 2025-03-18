import React, { useEffect } from "react";
import JSONData from "./output";
import Header from "./comps/Header";

const App = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
         console.log("jsondata :",JSONData)
         setData(JSONData)
      } catch (error) {
        console.log("Some error occurred:", error);
      }
    };
  
    fetchData(); 
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-grow">
      </div>
      <div className="flex justify-center p-4">
      </div>
    </div>
  );
};

export default App;
