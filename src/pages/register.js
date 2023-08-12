import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import TableReg from "../components/table";
import { BiCaretRight } from "react-icons/bi";
import ContactForm from "../components/form";
import formpdf from "../pdf/registrationform_pdf.pdf";
import { TabTitle } from "../utils/TabFunction";



const Register = () => {
     // Changes the title of the tab depedning on the page site loads on
     TabTitle('Register | Birmingham Impact Football Club')

    return (
    
    <div className="registercontainer">
        <h1>JOIN US</h1>
        <p id="registercontent">Birmingham Impact Football club welcomes children between the ages of 5 & 14, of all abilities and from all backgrounds. Our football training sessions provides children with a positive and safe environment where they can have fun whilst learning. All abilities welcome, the serious ballers who have long term ambitions and those want to have fun, get a little extra training and make new friends.
        Children will participate in training drills, develop their technical, social skills, play friendly matches and be given opportunities to JOIN one of our club squads.
        <br></br>
        <br></br>
        We have a long-term vision with respect to developing young players. It takes many years of coaching to develop elite footballers, which is why we try to attract young players whose families are committed to a long-term approach.
        We don't promise that all our footballers will play at professional level but we do want to give them abilities to enjoy continue playing football at any level they end up playing.
        <br></br>
        <br></br>
        All staff DBS checked.</p>

        
        <div className="scrolldown">
            <TiArrowSortedDown color="#DAA520" fontSize="35px" />
        </div>

        <h1 id="tabletitle">COST & PAYMENT OPTIONS</h1>

        <div className="registertbl">
            <TableReg />

            <p id="tableprocess">
                <br></br>
                Complete the enquiry from below
                <BiCaretRight color="DAA520" font-size="1.5rem" />
                We'll contact you in 24-48 hours to go through your enquiry
                <BiCaretRight color="DAA520"font-size="1.5rem" />
                Start date, time & location is confirmed
            </p>
        </div>

        <a href= {formpdf} target="_blank" rel="noreferrer"><button id="blk-btn">PDF FORM</button></a>

        <ContactForm/>

        <div className="reg-equipment">
            <h5>Equipment</h5>
            <p id="equipment-info">All that is required of players to participate are a pair of football boots. (no metal or screw-in studs). 
                You may use running shoes (trainers) however your child may find that they slip on the astro and grass pitches.</p>
        </div>
    </div>

)

}

export default Register;