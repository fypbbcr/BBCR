import {Button, Navbar, ButtonGroup} from 'react-bootstrap';
import logo from './b-chain-logo-bg-removed.png'


function Header(){
    return(
        <div>
            <Navbar bg='transparent'  expand="lg">
            <Navbar.Brand href="#home" className="text-light">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Blockchain Based Credit Report
            </Navbar.Brand>   
                <ButtonGroup style={{marginLeft: "auto"}} >
                    <Button variant='outline-success'  style={{margin: "5px"}}> LOGIN </Button>    
                    <Button variant='outline-primary' style={{margin: "5px"}}> SIGNUP </Button>
                </ButtonGroup>
            </Navbar>    
        </div>
    );
}
export default Header;