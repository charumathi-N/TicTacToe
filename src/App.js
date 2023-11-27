import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button, CardBody, Container ,Row , Col, ToastBody, Toast} from "reactstrap";
import Icon from "./icon.js";
import { useState ,useEffect} from "react"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const itemArray = new Array(9).fill("empty");

export default function App() {
  const [isCross,setIsCross] = useState(false);
  const [winnerMessage, setWinnerMessage] = useState("");

  useEffect(()=>{
if(winnerMessage !== ''){
  toast("game completed");
}
  },{winnerMessage});
  const checkIsWinner = ()=>{
    if(itemArray[0]===itemArray[1]&&itemArray[0]===itemArray[2] && itemArray[0]!=='empty'){
      setWinnerMessage(`${itemArray[0]} wins`);
    }
    else if(itemArray[3]===itemArray[4]&&itemArray[3]===itemArray[5] && itemArray[3]!=='empty'){
      setWinnerMessage(`${itemArray[3]} wins`)
    }
    else if(itemArray[6]===itemArray[7]&&itemArray[6]===itemArray[8] && itemArray[6]!=='empty'){
      setWinnerMessage(`${itemArray[6]} wins`)
    }
    else if(itemArray[0]===itemArray[3]&&itemArray[0]===itemArray[6] && itemArray[0]!=='empty'){
      setWinnerMessage(`${itemArray[0]} wins`)
    }
    else if(itemArray[1]===itemArray[4]&&itemArray[1]===itemArray[7] && itemArray[1]!=='empty'){
      setWinnerMessage(`${itemArray[1]} wins`)
    }
    else if(itemArray[2]===itemArray[5]&&itemArray[2]===itemArray[8] && itemArray[2]!=='empty'){
      setWinnerMessage(`${itemArray[2]} wins`)
    }
    else if(itemArray[0]===itemArray[4]&&itemArray[0]===itemArray[8] && itemArray[0]!=='empty'){
      setWinnerMessage(`${itemArray[0]} wins`)
    }
    else if(itemArray[2]===itemArray[4]&&itemArray[2]===itemArray[6] && itemArray[2]!=='empty'){
      setWinnerMessage(`${itemArray[2]} wins`)
    }
    else if(
    itemArray[0]!== "empty"&&
    itemArray[1] !== "empty"&&
    itemArray[2] !== "empty"&&
    itemArray[3] !== "empty"&&
    itemArray[4] !== "empty"&&
    itemArray[5] !== "empty"&&
    itemArray[6] !== "empty"&&
    itemArray[7] !== "empty"&&
    itemArray[8] !== "empty"
    ){
     setWinnerMessage("Draw");
    }
  }



  const changeItem = (itemIndex) =>{
    if(winnerMessage){
      return toast.success(winnerMessage);
    }
    if(itemArray[itemIndex] === "empty"){
    itemArray[itemIndex] = isCross ? "cross":"circle";
    setIsCross(!isCross);
    }
    else{
      toast.error("already filled");
    }
    checkIsWinner();
  }

  const reloadGame = () =>{
    itemArray.fill("empty");
    setIsCross(false);
    setWinnerMessage("");

  }
  return (
    <div className="App">
      <ToastContainer/>
      <Container>
        <Row> 
          <Col md="6" className="offset-ms-3">
          <h1 className="text-center">TIC TAC TOE Game<br/>
          </h1>
          {winnerMessage?<div className="mb-2 mt-2">
              <h1 className="text-center">{winnerMessage}</h1>
               <Button color="warning" onClick={reloadGame} className="w-100">Reload Game</Button>
          </div>:
          <div>{isCross? 'Cross':'Circle'} turn</div>}
          <div className="grid">
            {itemArray.map((item, index) => {
              return (
                <Card key={index}  onClick={()=>changeItem(index)}>
                  <CardBody className="box"><Icon item={item}/></CardBody>
                </Card>
              );
            })}
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


