import React from 'react';
import Image from 'next/image'
import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/me.jpg" alt="imagee showing author" width={300} height={400}/>
            </div>
            <h1>Hi, I'm Jon</h1>
            <p>I blog abot WEB Development especially JS libraries and packages.</p>
        </section>
    )
}

export default Hero
