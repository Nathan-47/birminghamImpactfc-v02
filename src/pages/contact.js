import React from "react";
import '../sass/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import map1 from '../images/googlemaps-1.png';
import { TabTitle } from "../utils/TabFunction";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert2/dist/sweetalert2.js';


const Contact = () => {
     // Changes the title of the tab depedning on the page site loads on
     TabTitle('Contact | Birmingham Impact Football Club')

     function sendEmail(e) {
        e.preventDefault(); 

        emailjs.sendForm('service_69jap8k', 'template_fyjkxil', e.target, 'user_Ze17mWiIFRk0FMGS3ax3V')
          .then((result) => {
            // alert when form has been successfully send
            swal({
                title: "Form Completed!",
                text: "A member of staff will be in touch soon",
                icon: "success",
                button: "Ok",
              });
          }, 
          
          // alert when an error has taken place sending the form
          (error) => {
            swal({
                title: "Offside!",
                text: "Errors have occurred and form cannot be completed. Please try again later",
                icon: "error",
                button: "Ok",
              }); 
          });

          e.target.reset()
    }

    return (
        <div className="contact-body">
    
        <Container fluid id="contact-col-1">
            <Row>
                <Col>
                <div className="contact-heading">
        <p id="contact-title">Contact</p>
        <p id="contact-tel">Email : Birminghamimpact@gmail.com
        <br/>
        Tel : +44[0]7932 357 478
        </p>
        </div>
        </Col>

        <Col className="contact-form-space">
                <div className="form-container">
                    
        <form onSubmit={sendEmail}>
            <div className="row">
            <div className="column">
                <input type="text" className="contact-bx" placeholder="NAME" 
                required="true"
                name="name"/>
  
            <input type="email" className="contact-bx" placeholder="EMAIL"
            required="true" 
            name="email"/>
            </div>
            
            <div className="column">
                <input type="tel" className="contact-bx"  
                minlength={11}
                maxlength={11}
                placeholder="PHONE"
                required="true"
                 name="tel"/>

                <textarea className="contact-bx"  placeholder="MESSAGE"
                required="true"
                 name="message"/>
            </div>

            <div className="btn-container">
                <input type="submit" id="gld-btn" value="SEND"></input>
            </div>
            </div>
            </form>
        </div>
        </Col>
                </Row>
                </Container>

                <Container fluid id="map">
                    <div className="map-heading">
                    <h1>WHERE WE PLAY</h1>
                    </div>
                    <Row>
                        <div className="col-sm-6">
                        <a href="https://goo.gl/maps/R87fTUxuBBDu7bcp9" target="_blank"><img src={map1}
                        alt="map of moseley" className="map-img"  /></a>
                        </div>
                        <div className="col-sm-6">
                        <h2 id="map-date">SATURDAY | 10am to 12pm</h2>
                        <p id="map-location">
                        Birmingham Moseley Rugby Club<br />
                        Billesley Common<br />
                        Yardley Wood Road<br />
                        Billesley, B13 0HN</p>
                        </div>
                    </Row>

                    <Row className="map-park">
                    <div className="col-sm-6">
                        <a href="https://goo.gl/maps/318ZwttKXudTMcVH7" target="_blank"><img src={map1} alt="map of moseley" className="map-img"  /></a>
                        </div>
                        <div className="col-sm-6">
                        <h2 id="map-date">SATURDAY | 1pm to 3pm</h2>
                        <p id="map-location">
                        Recreational Park<br />
                        St Margarets Road<br />
                        Washwood Heath<br />
                        Birmingham, B8</p>
                        </div>
                    </Row>

                    <Row id="map-space">
                        <div className="col-sm-6">
                        <a href="https://goo.gl/maps/bHCf7CCS7Nr92MyX9" target="_blank"><img src={map1} alt="map of moseley" className="map-img"  /></a>
                        </div>
                        <div className="col-sm-6">
                        <h2 id="map-date">WEDNESDAY | 6pm to 7:30pm</h2>
                        <p id="map-location">
                        Saltley Wellbeing Centre<br />
                        120 Broadway Avenue<br />
                        Birmigham, B9 5YD</p>
                        </div>
                    </Row>
                    
                </Container>
        </div>
    )
};

export default Contact;