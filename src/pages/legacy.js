import React from 'react';
import '../sass/style.scss';
import video1 from '../videos/lovebrum.mp4'
import { TabTitle } from "../utils/TabFunction";

const Legacy = () => {
     // Changes the title of the tab depedning on the page site loads on
     TabTitle('Legacy | Birmingham Impact Football Club')

    return (
        <div className="landing-body">
        <div class="row">
            <div className='col-sm-12'>
                <div className='legacy-content'>
                    <div className='row'>
                        <div className="landing-heading">
                            <p id="heading-big-legacy">Our Legacy</p>
                            </div>
                            <p>“Birmingham Impact Football Club celebrates the diversity of our city and brings the youth together through sport. The building of this team, the connections and friendships that are made and the comradery made through the sport and their collective effort as a team help to bring our communities and our city closer together”
                                <br />
                                <br />
                                "BIFC is 1 the most diverse club in Birmingham with a wide range of ethnicities/faiths, based in one the most disadvantaged areas, and attempts to include as many children as possible. The community members have been resilient despite being disadvantaged, and actively participate in ways to better them".
                            </p>
                            </div>
                            <div className='video-section'>
          <video class="landing-video" controls src={video1} alt="video of Zehir talking about what Birmingham Impact stands for as a football club" type="video/mp4">
            Your browser does not support HTML video.
            </video>
      </div>
                </div>
                <div className='legacy-third-section'>
                    <div className='row'>
                        <p>Big shout out for Zehir Kadra as he has officially joined the latest CICs as Birmingham Impact Football Club becomes a recognised social enterprise today<br />
                        <a href="http://www.i-se.co.uk/news/congratulations-birmingham-impact-football-academy-cic/" target="_blank">http://www.i-se.co.uk/news/congratulations-birmingham-impact-football-academy-cic/</a>
        <br /><br />
        
        The changing face of social enterprise — Birmingham Impact Football Club CIC<br />
        <a href="http://bssec.org.uk/the-changing-face-of-social-enterprise-birmingham-impact-football-club-cic/" target="_blank">http://bssec.org.uk/the-changing-face-of-social-enterprise-birmingham-impact-football-club-cic/</a>
        </p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
    )
}

export default Legacy;