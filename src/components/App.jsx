import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

const components = [<Header />, <Note />, <Footer />];

function App (){
    return <div>{components}</div>;
}


export default App;