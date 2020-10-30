import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(<div>
                <Grid>
                    <Cell col={2}></Cell>
                    <Cell className="about-col" col ={8}><h1>About Me</h1>
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <p>I am currently a Computer Science student that will be graduating December 2020 and I am aspiring to be a Software Engineer. At this current time, I have an interest in learning full stack and expanding my knowledge by learning Typescript, Express, React, Angular, and Node.js. In my free time, my hobbies consist of calisthenics, doing gymnastics, and participating in competitive programming. </p>
                    </Cell>
                    </Grid></div>
        )

    }
}

export default About;