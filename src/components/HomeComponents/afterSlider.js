import React,{useEffect, useRef} from 'react';
import ModelsOptions from '../HomeComponents/modelsOptions'
import FeaturedNews from '../HomeComponents/featuredNews';
import Instagram from '../HomeComponents/instagram';
import classes from './afterSlider.module.scss';
import {gsap, TimelineLite} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
 
const AfterSlider = () => {

    let modelsRef = useRef(null);
    let newsRef = useRef(null);
    let instaRef = useRef(null);
    useEffect(()=> {

        gsap.fromTo(newsRef, {
            autoAlpha: 0
        }, {
            duration: 0.5,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: newsRef,
                start: 'top bottom-=100px',
                toggleActions: 'play none none reverse'
            }
        });
        gsap.fromTo(modelsRef, {
            autoAlpha: 0
        }, {
            duration: 0.5,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: modelsRef,
                start: 'top bottom-=100px',
                toggleActions: 'play none none reverse'
            }
        });
        gsap.fromTo(instaRef, {
            autoAlpha: 0
        }, {
            duration: 0.5,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: instaRef,
                start: 'top bottom-=100px',
                toggleActions: 'play none none reverse'
            }
        });

    })

    return (  
        <div className={classes.AfterSlider} >
            <div className="models" ref={el => modelsRef = el}>
                <ModelsOptions/>
            </div>
            <div className={classes.news} ref={el => newsRef = el}>
                <FeaturedNews/>
            </div>
            <div className="instagram" ref={el => instaRef = el}>
                <Instagram/>
            </div>
        </div>
    );
}
 
export default AfterSlider;