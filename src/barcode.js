import React from "react";
import "./styles.css";

export default function Barcode(props) {
  var x="17801"
  var y="OC010"
  return (
    <div>
      <div style={{textAlign:"center"}}>
        {/* insert your custom barcode setting your data in the GET parameter "data"  */}
        <img
          alt="Barcode Generator TEC-IT"
          src={`https://barcode.tec-it.com/barcode.ashx?data=${x}+-${y}+&code=Code39&hidehrt=True`}
        />
      </div>
      
    </div>
  );
}
