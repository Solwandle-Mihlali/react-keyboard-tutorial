import { useState } from "react";
import "./App.css";

function App() {
  const rowOneVals = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const rowTwoVals = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const rowThreeVals = ["z", "x", "c", "v", "b", "n", "m"];
  const [clicked, setClicked] = useState("")
  return <>
    <span id="outPut"> 
     {
      clicked
     }
    </span>
    <div className="keyBoardContainer">
       <ul>
        {
          rowOneVals?.map((val,index)=>{
            return(
              <li key={index} onClick={()=>{setClicked(val)}}> 
                {
                  val
                }
              </li>
            )
          })
        }
       </ul>
       <ul id="rowTwo">
       {
          rowTwoVals?.map((val,index)=>{
            return(
              <li key={index} onClick={()=>{setClicked(val)}}>
                {
                  val
                }
              </li>
            )
          })
        }
       </ul>
       <ul id="rowThree" >
       {
          rowThreeVals?.map((val,index)=>{
            return(
              <li key={index} onClick={()=>{setClicked(val)}}>
                {
                  val
                }
              </li>
            )
          })
        }
       </ul>
       <ul>
        <li id="spaceBtn">
          space
        </li>
       </ul>
    </div>
  </>;
}

export default App;
