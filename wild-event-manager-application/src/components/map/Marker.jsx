import React from "react";

import './Map.scss';

const Marker = ({ children, feature, nav }) => {
  

    return (
      <button className="marker" >
        {children}
      </button>
    );
  };


  export default Marker;