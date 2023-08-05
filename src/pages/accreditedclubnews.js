import React from 'react';
import '../sass/style.scss';
import pic1 from '../images/accredited_image.png'


const Accreditedclubnews = () => {
    return (
        <div className="news-first-section">
        <div className='row'>
        <div className='col-sm-12' id='news-details'>
            <div className='news-hero'>
            <img src={pic1} alt="accredited club image" />
                </div>
                <p className='news-date'>25th April 2026</p>
                        <p className='news-title'>We are now an England accredited club</p>
                </div>

                <div className='news-content'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales. Egestas egestas fringilla phasellus faucibus scelerisque. Fringilla est ullamcorper eget nulla facilisi. 
                            
                            Varius sit amet mattis vulputate enim nulla aliquet. Sem et tortor consequat id porta nibh venenatis cras. Platea dictumst vestibulum rhoncus est. Aenean vel elit scelerisque mauris. Aenean vel elit scelerisque mauris pellentesque pulvinar. Pellentesque diam volutpat commodo sed. Feugiat nibh sed pulvinar proin. Varius quam quisque id diam vel quam elementum. Lorem dolor sed viverra ipsum nunc. Egestas maecenas pharetra convallis posuere morbi. Eu lobortis elementum nibh tellus. Sodales ut etiam sit amet nisl. Ut venenatis tellus in metus vulputate eu. Venenatis a condimentum vitae sapien pellentesque habitant.
                            <br />
                            <br />
                            Varius sit amet mattis vulputate enim nulla aliquet. Sem et tortor consequat id porta nibh venenatis cras. Platea dictumst vestibulum rhoncus est. Aenean vel elit scelerisque mauris. Aenean vel elit scelerisque mauris pellentesque pulvinar. Pellentesque diam volutpat commodo sed. Feugiat nibh sed pulvinar proin. Varius quam quisque id diam vel quam elementum. Lorem dolor sed viverra ipsum nunc. Egestas maecenas pharetra convallis posuere morbi. Eu lobortis elementum nibh tellus. Sodales ut etiam sit amet nisl. Ut venenatis tellus in metus vulputate eu. Venenatis a condimentum vitae sapien pellentesque habitant.</p>
                </div>
                </div>
                </div>
    )
}

export default Accreditedclubnews;