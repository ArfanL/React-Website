import React, { Component } from 'react';
import { Grid, Cell} from "react-mdl";

class Landing extends Component {
    render() {
        return(<div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://lh3.googleusercontent.com/pw/ACtC-3eVyh1mZLQ2qOF-jCgZVDCPyUpzLKPakCbMe9MehPHtEh5DBJVs3iU6WqMxFxCJ7AIHr8nz_tD4jxSOvZw8ROqPqTO2FVOzpcMb2uSdaGIXQlwDxPIAwLSTbPrsqnJF69qHjDrTnHAQgwrpRE27YiywCg=w735-h979-no?authuser=0"
                            alt="avatar"
                            className="avatar-img"
                            />
                        <div className="banner-text">
                            <h1>Welcome to my Page</h1>
                        <hr/>
                        <p>HTML/CSS | JavaScript | Node.js | Python | C# | Java</p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/arfan-lokman" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/arfanl" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/*/!* Freecodecamp *!/*/}
                                {/*<a href="http://google.com" rel="noopener noreferrer" target="_blank">*/}
                                {/*    <i className="fa fa-free-code-camp" aria-hidden="true" />*/}
                                {/*</a>*/}

                                {/*/!* Youtube *!/*/}
                                {/*<a href="http://google.com" rel="noopener noreferrer" target="_blank">*/}
                                {/*    <i className="fa fa-youtube-square" aria-hidden="true" />*/}
                                {/*</a>*/}

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )

    }
}

export default Landing;