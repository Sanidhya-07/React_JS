import React from "react";
import Card from "./component/card";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";
import DynamicContent from "./component/DynamicContent";
import ProductInfo from "./component/ProductInfo";

const App = () => {
  return (
      <div>
        {/* <Card /> */}

{/*         

        <Header />
        <MainContent />
        <Footer /> 
*/}

      <DynamicContent />
      <ProductInfo />

      </div>
  );
};

export default App;