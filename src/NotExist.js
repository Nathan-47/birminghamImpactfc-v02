import logo1 from './images/bifclogo.png'

// This page displays when url link does not have a path to an existing file
const NotExist = () => {
    return (
        <div className="not-exist">
            <div className="row">
                <div className="col-sm-6">
                <div className='notExist-logo'>
                    <img src={logo1} alt="birmingham impact football club logo" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <h2 id='notExist-copy'>404 ERROR</h2>
                    <p>The page your looking for does not exist! Click button to go home</p>
                    <button id="gld-btn"><a href="/">BACK TO HOME</a></button>
                </div>
            </div>
        </div>
    );
}


export default NotExist;