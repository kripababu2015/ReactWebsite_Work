import React,{Component} from 'react';

class About extends Component

{
 
    render()
    {
    return(
        <React.Fragment>
        <h2>Welcome to Gallery Page</h2>
        <div className="row container mt-5  ml-5">
            
            <div className="col-4">
                <img src="./image/nature.jpg" className="d-block w-100"></img>
            </div>
            <div className="col-4">
                <img src="./image/nature1.jpg" className="d-block w-100"></img>
            </div>
            <div className="col-4">
                <img src="./image/nature2.jpg" className="d-block w-100"></img>
            </div>
        </div>

        <div className="row container mt-5  ml-5">
            
            <div className="col-4">
                <img src="./image/nature.jpg" className="d-block w-100"></img>
            </div>
            <div className="col-4">
                <img src="./image/nature1.jpg" className="d-block w-100"></img>
            </div>
            <div className="col-4">
                <img src="./image/nature2.jpg" className="d-block w-100"></img>
            </div>
        </div>
        </React.Fragment>
    );
}
}

export default About;