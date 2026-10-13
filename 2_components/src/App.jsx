import React from "react";
import Card from "./component/card";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";

const App = () => {
  return (
      <div>
        <Card />
        
        <Header />
        <MainContent />
        <Footer />

      </div>
  );
};

export default App;