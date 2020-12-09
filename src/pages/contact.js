import React from 'react';
import classes from './contact.module.scss';

const Contact = () => {
    return (  
        <div className={classes.contact}>
            <img src='https://images.unsplash.com/photo-1536640387894-cbc452a79a86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=80' alt=""/>
            <div className={classes.contactus}>
                <div className="title">
                    <div className="circle"></div>
                    <h2>CONTACT US</h2>
                    <div className="line"></div>
                </div>
                <div className={classes.location}>
                    <h3>LIVELY NEW YORK</h3>
                    <p>12 East 29th Street<br/>
                        10th Floor<br/>
                        New York, NY 10010<br/>
                        (212) 219-6500<br/>
                        ny@lively.com<br/>
                        </p>
                </div>
                <div className={classes.location}>
                    <h3>LIVELY CHICAGO</h3>
                    <p>855 West Jackson Blvd<br/>
                        Suite 400<br/>
                        Chicago, IL 60707<br/>
                        (312) 240-9000<br/>
                        chicago@lively.com<br/>
                        </p>
                </div>
                <div className={classes.location}>
                    <h3>LIVELY LOS ANGELES</h3>
                    <p>900 Wilshire Boulevard<br/>
                        Suite 100<br/>
                        Beverly Hills, CA 90612<br/>
                        (310) 206-8000<br/>
                        la@lively.com<br/>
                        </p>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;