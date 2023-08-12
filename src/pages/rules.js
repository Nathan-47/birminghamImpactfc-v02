import React from 'react';
import '../sass/style.scss';
import rulespdf from '../pdf/bifcrules.pdf';
import { TabTitle } from '../utils/TabFunction';

const Rules = () => {
    //  Changes the title of the tab depedning on the page site loads on
     TabTitle('Rules | Birmingham Impact Football Club')

    return (
            
    <div className="headingcontainer">
    <h1>RULES AND RESPONSIBILITIES FOR PLAYERS, PARENTS AND COACHES</h1>
   

    <div className='rules-section1'>
        <h2>PLAYERS RESPONSIBILITIES</h2>
        <p id="registercontent">
        <span id="rules-number">1.</span> Work hard, have fun and give your best effort every time you are on the field for practices or games.<br /><br />

        <span id="rules-number">2.</span> Wear all required equipment (shin guards, training/match kit & appropriate footwear).
        <br /><br />

        <span id="rules-number">3.</span> Pay attention to the coaches when they are speaking and providing instructions on or off the field. Respect the decisions of the referee.
        <br /><br />

        <span id="rules-number">4.</span> Be a team player. Players should learn the rules and play by them at all times. Learn and develop teamwork, discipline and sportsmanship and practice them.
        <br /><br />

        <span id="rules-number">5.</span> Be on time for all games and practices. Persistent lateness or absence will result in reduction of playing time.
        <br /><br />

        <span id="rules-number">6.</span> Disrespectful behaviour to coaches, referees or other players will not be tolerated. The use of indecent or profane language is unacceptable. Use of such language may result in suspension.
        <br /><br />

        <span id="rules-number">7.</span> Fighting, horseplay or any physical or verbal abuse will not be tolerated. Penalties may include issuing a red card, ejection from a game or be asked to sit out the remaining training session. The Board may impose additional penalties up to and including suspension from the team.
        </p>
    </div>

    <div className='rules-section2'>
        <h2>PARENTS RESPONSIBILITIES</h2>
        <p id="registercontent">
        <span id="rules-number">1.</span> Be sure that your child attends all practices and games. Coordinate transportation to ensure that the player is prompt when arriving and departing. If unable to attend a game or practice, notify the coach and/or manager of the team. Persistent, unexcused absences and lateness may affect the future inclusion of a player on the game roster.
        <br /><br />

        <span id="rules-number">2.</span> Ensure that your child brings all equipment and uniforms to games and practices. Shin pads and appropriate footwear.
        <br /><br />

        <span id="rules-number">3.</span> Support your child’s coach and help when you can. Disagreements with your coach do not belong on the field. Questions, input and positive suggestions should be voiced to the coach in the absence of players.
        <br /><br />

        <span id="rules-number">4.</span> Parents are encouraged to come and watch but should not shout instructions from the side lines. This causes confusion. Players should listen for coaches and referee’s instructions only.
        <br /><br />

        <span id="rules-number">5.</span> Parents and spectators for each team should remain at least six feet behind the side-lines and across the field from players. Parents should not stand behind the goal posts or goal line. Parents should not go on the field before, during, or in-between games.
        <br /><br />

        <span id="rules-number">6.</span> Parents are always expected to set a good example for children, by their positive behaviour, sportsmanship, attitude and language. Abusive language, behaviour or physical assault may result in immediate suspension from the club.
        <br /><br />

        <span id="rules-number">7.</span> Parents are expected to demonstrate respect for the referees.
        </p>
    </div>

    <div className='rules-section3'>
        <h2>COACHES RESPONSIBILITIES</h2>
        <p id="registercontent">
        <span id="rules-number">1.</span> Coaches are expected to demonstrate good sportsmanship and treat players fairly. 
        <br /><br />

        <span id="rules-number">2.</span> Organize practices to train soccer fundamentals appropriate to the age group.
        <br /><br />

        <span id="rules-number">3.</span> Provide a safe environment, ensure player safety and ensure that every child is picked up by an authorized adult.
        <br /><br />

        <span id="rules-number">4.</span> Ensure that players and no more than two coaches are on one side of the field, with parents and spectators situated on the opposite side. Coaches should not go beyond their half line, nor should they go on the field or stand behind the goal line.
        <br /><br />

        <span id="rules-number">5.</span> Know the rules, respect the referees and act in a controlled manner on the field.
        <br /><br />

        <span id="rules-number">6.</span> Disrespectful behaviour to players, coaches, spectators or referees will not be tolerated. The Board may impose additional penalties up to and including suspension from the team.
        </p>
    </div>

    {/* pdf download */}
    <a href={rulespdf} target="_blank" rel="noreferrer"><button id="blk-btn">DOWNLOAD PDF</button></a>
    </div>

    )
}

export default Rules;