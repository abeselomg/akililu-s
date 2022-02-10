import React,{useState} from "react";
import "./styles.css";
import toy from './toy.png'

export default function Group1() {
  const[title,settitle]=useState("")
  const [data, setdata] = useState("");
  const [enabled, setenabled] = useState(false);
  
if (data!="") {
    // var data = "17801-OC010";
    var a = data.split("-");
    var x = a[0];
    var y = a[1];

}


    
  return (
    <div style={{ textAlign: "center" }}>
      {enabled ? (
        <div className=" frame-11 clip-contents1">
          <div className="group-1 flex-col-hcenter">
            <div className="upper-text flex-row-vend-hsb">
              <p className="txt-863">{title}</p>
              <p className="txt-785 flex-vend-hcenter">AB</p>
            </div>
            <p className="txt-1027 flex-vcenter-hcenter">{`${x}-${y}`}</p>
            <img
              src={`https://barcode.tec-it.com/barcode.ashx?data=${x}+-${y}+&code=Code39&hidehrt=True`}
              alt="image not found"
              className="barcode-1"
            />
            <div className="lower flex-col-hend-vsb">
              <div className="flex-row-vend">
                <div className="toyota-genuine flex-col-vsb">
                  <img
                    // src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/oF7dgTK09dDuOaokdffuvE-4%3A13?alt=media&token=03a036f5-da7a-4e1a-9aa4-52039ef2088c"
                    src={toy}
                    alt="image not found"
                    className="toyota-1"
                  />
                  <div className="genuine">
                    <p className="txt-10107 flex-vcenter">GENUINE PARTS</p>
                  </div>
                </div>
                <div className="group-836 flex-col-hend-vsb">
                  <p className="txt-336 flex-vcenter-hcenter">QTY:</p>
                  <div className="lexus-genuine">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/oF7dgTK09dDuOaokdffuvE-4%3A24?alt=media&token=668bca28-deae-4bc7-b0d2-4c00f2a1db59"
                      alt="image not found"
                      className="lexus"
                    />
                    <div className="genuine-2">
                      <p className="txt-628 flex-vcenter">GENUINE PARTS</p>
                    </div>
                  </div>
                </div>
                <p className="txt-486 flex-vcenter-hcenter">1</p>
                <p className="txt-363 flex-vcenter-hcenter">235T</p>
                <p className="txt-485 flex-vcenter-hcenter">42C25</p>
              </div>
              <div className="lower-lower">
                <p className="txt-899 flex-vcenter">TOYOTA MOTOR CORPORATION</p>
                <p className="txt-183">
                  MADE IN JAPAN <span className="txt-389">13</span>
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setdata("");
              settitle("");
              setenabled(false)
            }}
          >
            Generate Another
          </button>
        </div>
      ) : (
        <div>
          <div>Title:</div>
          <input
            placeholder="eg. CABLE ASSY, PAR. BRK."
            title="Title"
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <div>Data:</div>
          <input
            placeholder="eg. 17801-OC010"
            title="Data"
            onChange={(e) => {
              setdata(e.target.value);
            }}
          />
          <div></div>

          <button onClick={()=>{setenabled(true)}}>Generate</button>
        </div>
      )}
    </div>
  );
}
