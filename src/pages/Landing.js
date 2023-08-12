import Carousel from 'react-bootstrap/Carousel'
import pic1 from '../images/team1.jpg'
import pic2 from '../images/team2.jpg'
import pic3 from '../images/oldbanner.jpg'
import background from '../images/testimonial-bkgrnd.png'
import logo1 from '../images/bifclogo.png'
import pic4 from '../images/accredited_image.png'
import sponsor1 from '../images/barclays_logo.png'
import sponsor2 from '../images/lottery_logo.png'
import sponsor3 from '../images/englandac_logo.png'
import video1 from '../videos/lovebrum.mp4'
import HomeNav from '../pages';
import { TabTitle } from "../utils/TabFunction";
import { Link } from "react-router-dom";


const Landing = () => {
<HomeNav />
// Changes the title of the tab depedning on the page site loads on
TabTitle('Home | Birminmgham Impact Football Club')

return (
    <div className="landing-body">
        <div class="row">
            <div className='col-sm-12'>

{/* carousel */}
       <Carousel>
  <Carousel.Item>
    <Link to="/accreditedclubnews">
      <img
      className="carousel-block"
      src={pic1}
      alt="Team huddle before a match"
    />
    <Carousel.Caption>
      <p className='carousel-heading'>We are now an england accredited club
</p>
    </Carousel.Caption></Link>
  </Carousel.Item>

  <Carousel.Item>
    <Link to="/accreditedclubnews">
    <img
      className="carousel-block"
      src={pic2}
      alt="All the player lined up taking a photo"
    />

    <Carousel.Caption>
      <p className='carousel-heading'>Join our club</p>
    </Carousel.Caption></Link>
  </Carousel.Item>

  <Carousel.Item>
  <Link to="/accreditedclubnews">
    <img
      className="carousel-block"
      src={pic3}
      alt="Graphic of poster to join BIFC"
    />

    <Carousel.Caption>
      <p className='carousel-heading'>BIFC enter Tournament</p>
    </Carousel.Caption></Link>
  </Carousel.Item>

</Carousel>
    </div>
    </div>

{/* start first section */}
    <div className='landing-first-section'>
      <div className='row'>
  {/* slogan */}
        <p className='slogan'>Kicking it to the top</p>
      </div>
      <div className='landing-logo'>
        <img src={logo1} alt="birmingham impact football club logo" />
      </div>
      <div className='landing-btn'>
        {/* link will change once a server is found */}
      <a href="/register">
        <button id="register-btn">REGISTER </button>
       </a>
      </div>
    </div>
{/* end first section */}

{/* start second section */}
    <div className='landing-second-section'>
      <div className='row'>
      <div className="landing-heading">
        <p id="heading-big">Welcome</p>
      </div>

      <div className='col-sm-7'>
      <p id="landing-font">Birmingham Impact Football Club was established in 2017 and provides a safe, fun environment for players (children) of all abilities to learn, develop and enjoy playing football as a community sport, with community values.
      The club is run by Birmingham based sports (football) professionals as well as youth-friendly people with various skills, experiences and connections. These include FA & UEFA qualified coaches, sports fitness workers and football scouts with links to local professional clubs.
      All children between the ages of 5 & 14 are welcome to join us at either the Birmingham Moseley Rugby Club on Saturday mornings, the Recreational park Washwood heath (B8) Saturday afternoons and at the Saltley Wellbeing Centre on Wednesday evenings.
      <br /><br />
      "BIFC is 1 the most diverse club in Birmingham with a wide range of ethnicities/faiths, based in one the most disadvantaged areas, and attempts to include as many children as possible. The community members have been resilient despite being disadvantaged, and actively participate in ways to better them".
      <br /><br />
      Would you like your child to play in a league in the coming 2019/20 season?
      <br /><br /> 
      We've still got places for players to join our u13's.</p>
      </div>

      <div className='col-sm-5'>
        {/* Welcome hero image */}
        <img className='welcomeHeroImage'
        src={pic4}
        alt='Coach training with player and both smiling'
        width={450}
        height={300}>
        </img>
      </div>


{/* sponsors row  */}
      <div className='landing-sponsors'>
        <div className='row justify-content-center'>
        <div class="col-sm-4">
      <img 
      id="resizeImg"
      src={sponsor1} 
      alt="Barclays" 
      width={150}
      height={50}
      />
      </div>

      <div class="col-sm-4">
      <img
      src={sponsor2} 
      alt="The National Loterry Community fund"
      width={150}
      height={50}
      />
      </div>

      <div class="col-sm-4">
      <img id='thirdSponsor'
      src={sponsor3} 
      alt="England Accredited, part of England football" 
      width={150}
      height={70} 
      />
      </div>
        </div>
      </div>

      </div>
    </div>
    {/* end second section */}


    {/* { start third section} */}
    <div className='landing-third-section'>
      <div className='row'>  

  {/* { testimonial section } */}
  <div className='testimonial-section'>
    <div className='row'>
    <Carousel >
  <Carousel.Item interval={3000}>
  <img
      className="testimonial-block"
      src={background}
      alt="Third slide"
    />
    <Carousel.Caption>
      <p className='slider-reviews'>
      My son has been coming for a while now an he loves it so much... 
      he struggles with alot of things and doesn't like leaving the house much.. 
      But he is always up an ready for his football club.. thanks so much .amazing teachers too.
      </p>
      <br />
      <p className='quote'>- Hayley Wood, 22nd July 2017</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
  <img
      className="testimonial-block"
      src={background}
      alt="Third slide"
    />
    <Carousel.Caption>
      <p className='slider-reviews'>
      My son attended his first session today, he really liked the training and the coaches. Will definitely be back next week.
      </p>
      <br />
      <p className='quote'>- Oum Mohammed, 13 Jan 2018 </p>

    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={6000}>
  <img
      className="testimonial-block"
      src={background}
      alt="Third slide"
    />
    <Carousel.Caption>
      <p className='slider-reviews'>
      'The club is amazing and it builds talent of young kids in the Washwood Heath, Ward End, Bromford and surrounding areas. It promotes community cohesiveness. Kids are all well into it and always excited to go to training sessions and matches. It keeps kids focused and out of trouble. Coach and his team are brilliant with the children. He encourages them to focus in school, study hard and achieve good grades and be assets to the community.
      </p>
      <br />
      <p className='quote'>- Mrs Gibba, 24 Nov 2018</p>

    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={6000}>
  <img
      className="testimonial-block"
      src={background}
      alt="Third slide"
    />
    <Carousel.Caption>
      <p className='slider-reviews'>
      I'm so sorry Zehir, my post wasn't meant to make more work for you, you've got so much on your plate already! I just wanted to acknowledge the amazing work that you and your coaches have put into this club over the years. It's too easy to take someone like you for granted, but I for one know how much effort you put in behind the scenes to make the club what it is today. You face, and have faced some huge challenges, not least your health, yet you selflessly turn up each week, in all weathers. That was the point I was trying to make! Thanks @Zehir, @Rico Gardner-Blake & the coaches. It was a really good vibe & credit to everyone for making the new rules work. The boys loved it!
      </p>
      <br />
      <p className='quote'>- James, 22 Aug 2020 </p>

    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={6000}>
  <img
      className="testimonial-block"
      src={background}
      alt="Third slide"
    />
    <Carousel.Caption>
      <p className='slider-reviews'>
      'The club is amazing and it builds talent of young kids in the Washwood Heath, Ward End, Bromford and surrounding areas. It promotes community cohesiveness. Kids are all well into it and always excited to go to training sessions and matches. It keeps kids focused and out of trouble. Coach and his team are brilliant with the children. He encourages them to focus in school, study hard and achieve good grades and be assets to the community.
      </p>
      <br />
      <p className='quote'>- Mrs Gibba, 24 Nov 2018</p>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  </div>
      </div>
      </div>
{/* {end third section} */}


{/* { start fourth section} */}
<div className='landing-fourth-section'>
      <div className='row'>
      <div className="landing-heading">
        <p id="heading-big">Mission Statement</p>
      </div>
      <p id="landing-font">
      Create a positive and inclusive atmosphere, getting young people active whilst developing personal skills such as confidence, self-esteem and respect for others in their community.
      <br /><br />
      For all our children to enjoy and benefit from taking part in our sessions, we will ensure that they are encouraged to:
      <br /><br /> 
      <ul>
        <li>Take an active part in the sport</li>
        <li>Form relationships and work together</li>
        <li>Develop their skills and improve over time</li>
        <li>Be able to take part whatever their ability</li>
        <li>Develop personal skills in key areas: technical, psychological, physical and social</li>
        <li>Appreciate and demonstrate a good sporting attitude</li>
        <li>Understand the laws of the game</li>
        <li>Be listened to and valued</li>
        <li>Be positive about themselves and others</li>
        </ul>
        </p>
        <br />

        <div className='video-section'>
          <video class="landing-video" alt="Owner Zehir, talks about the birmingham impact football club" controls src={video1} type="video/mp4">
            Your browser does not support HTML video.
            </video>
      </div>
      </div>
      </div>
{/* { end fourth section} */}

    </div>
)
}

export default Landing;