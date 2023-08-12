import React from "react";
import { FormContainer } from "./FormElements";
import emailjs from '@emailjs/browser';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { MdHelpOutline } from "react-icons/md";
import swal from 'sweetalert2/dist/sweetalert2.js';


const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault(); 

        emailjs.sendForm('service_9e9a6h5', 'template_dai5woq', e.target, 'user_Ze17mWiIFRk0FMGS3ax3V')
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
                text: "Errors have occurred and registration cannot continue. Please try again later",
                icon: "error",
                button: "Ok",
              }); 
          });

          e.target.reset()
    }



    return (
        <FormContainer>
            <form onSubmit={sendEmail}>
            <h1 id="form-head">REGISTRATION FORM</h1>
            <p id="form-info">Complete the form and a member of staff will be in touch with your start date</p>

            {/* Player name input box */}
            <div className="col-8 form-group mx-auto" id="box-col">
                <input type="name" 
                className="input-bx" 
                placeholder="Player name" 
                required="true" 
                name="name"/>
            </div>
            
            {/* Email address input box */}
            <div className="col-8 form-group mx-auto" id="box-col">
                <input type="email" 
                className="input-bx" 
                placeholder="Email Address" 
                required="true" 
                name="email"/>
            </div>
            
            {/* Location of player input box */}
            <div className="col-8 form-group mx-auto" id="box-col">
            <select className="input-bx" name="location">
                <option value="#">What location would you like to join us at ?</option>

                <option value="Birmingham Moseley Rugby Club">Birmingham Moseley Rugby Club</option>

                <option value="Stechford Playing Fields">Stechford Playing Fields</option>
                
                <option value="Rec Park, St Margarets Road">Rec Park, St Margarets Road</option>

                <option value="Saltley Wellbeing Centre">Saltley Wellbeing Centre</option>

                <option value="Norton Hall Childrens Centre">Norton Hall Childrens Centre</option>
                </select>
            </div>
            

            {/* Player Date of Birth input box */}
             <div className="col-8 form-group mx-auto" id="box-col">
                <input type="tel" 
                className="input-bx" 
                 minlength={10}
                 maxlength={10} 
                 placeholder="Provide your childs Date of Birth" 
                 name="dob"/> 
                <Tooltip title="Example - 01 01 2003">
                    <IconButton style={{
                    padding: '0px',
                    margin: '-12px',
                    position: 'relative',
                    left: '-20px',
                    size: '100px',
                }} > 
                        <MdHelpOutline />
                        </IconButton>
                        </Tooltip>
            </div>
            

            {/* Player address input box */}
            <div className="col-8 form-group mx-auto" id="box-col">
                <input type="textarea" 
                className="input-bx"  
                placeholder="Provide street address and postcode" 
                name="address"/>
                <Tooltip title="Example - 32 Road Name, Birmingham, West Midlands, B01 1HQ">
                    <IconButton style={{
                    padding: '0px',
                    margin: '-12px',
                    position: 'relative',
                    left: '-20px',
                    size: '100px',
                }} > 
                        <MdHelpOutline />
                        </IconButton>
                        </Tooltip>
            </div>


            {/* Past team input box */}
             <div className="col-8 form-group mx-auto" id="box-col">
             <select className="input-bx" 
             name="clubs">
                <option value="#">Has your child played for a team before?</option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </select>
            </div>
            

            {/* Player medicals input box */}
            <div className="col-8 form-group mx-auto" id="box-col">
                <input type="text" 
                className="input-bx" 
                placeholder="Any medical conditions they may have?" 
                name="medical"/>
            </div>


            <div className="btn-container">
                <input type="submit" id="gld-btn" value="SUBMIT"></input>
            </div>
            </form>
            </FormContainer>
    )
};

export default ContactForm;