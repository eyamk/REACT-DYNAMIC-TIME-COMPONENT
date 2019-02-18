import React from 'react'
import './time.css'
import { Container, Row, Col } from 'react-grid-system';


function MsToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds
  }
  console.log(MsToTime(300000))




  const Time = ({duration}) => {
    
    return (
        <div>
        
<Container>
      <Row>
        <Col sm={2}>
        </Col>
        <Col sm={8} className="times" >
          
         <div>{MsToTime (duration)}</div>
        </Col>
        <Col sm={2}>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
        </Col>
        <Col sm={8} className="time" >
         <div className="hour">Hour</div>
         <div className="minute">Minute</div>
         <div className="second">Second</div>
        </Col>
        <Col sm={2}>
        </Col>
      </Row>
    
    </Container>
    
    </div>
);
}
export default Time



  