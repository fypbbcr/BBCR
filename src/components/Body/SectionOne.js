import {Button, ButtonGroup} from 'react-bootstrap';


function SectionOne() {
  return (
    <div className="s1 animated fadeIn">
        <h1>Credit Report</h1>
        
        <div style={{margin: "15%"}}>
          <Button variant="info" size="lg" block style={{margin: "5px"}} >Lendor</Button>
          <Button variant="warning" size="lg" block style={{margin: "5px"}}>Borrower</Button>
        </div>
        
      
    </div>
  );
}

export default SectionOne;
