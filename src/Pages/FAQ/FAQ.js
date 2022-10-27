import React from "react";
import Accordion from 'react-bootstrap/Accordion';
const FAQ=()=>{

return(
    <div style={{width:"70%",margin:"0 auto"}}>
      <div className="my-4"><h2 className="text-center">Frequently Asked Questions</h2></div>
         <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header><h4>What is Alpha Math?</h4></Accordion.Header>
        <Accordion.Body>
          <p>Alpha Math is an online system that gives you briefl m-y description
            about higher mathematics .It offers a range of useful online tools
            for improvement of math skills.Alpha math mainly useful for those 
            who are doing BSc in mathematics.Everyone can join Alpha Math regardless of their 
            mathematical background .Latest technologies are used to ensure an accurate
            display of mathematical expressions by all the existing internet browser.

          </p>
     
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h4>What is our mission?</h4></Accordion.Header>
        <Accordion.Body>
          <p>Alpha Math is aspired to provide its users with a platform for preparation for
            math exams.we have been mostly focused on adding BSc courses which subjects
            are most in demand.And many students find these subjects too difficult.
            So thinking about those students,we basically create this platform.
          </p>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h4>Why should i use Alpha Math?</h4></Accordion.Header>
        <Accordion.Body>
          <p>As an unique online system,Alph Math provides lots of examples ,figure,
            graphs and charts about relatd topis.Alpha Math offers an opportunity
            to challenge and track knowledge in math with Alpha Math rankings at the sametime
            effectively preparing for math exam.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><h4>Who are the creators of Alpha Math?</h4></Accordion.Header>
        <Accordion.Body>
          <p>Alpha Math team consistes a group of mathematics and technology
            enthusiasts consequently expanding Alpha Math in order to provide the best user experience.
            We have created Alpha Math with the passion to mathematics and we hope that it will bring users
            lots of benefits and fun.

          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><h4>Who can use Alpha Math?</h4></Accordion.Header>
        <Accordion.Body>
          <p>we invite students and mathematics enthusiaststo improve knowledge in math with Alpha Math.
            Because it is an unique online platform providing math ,that can be easily atjusted to meet the
            needs of every students.

          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
)


}
export default FAQ