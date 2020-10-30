import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        {/*<div style={{textAlign: 'center'}}>*/}
                        {/*    <img*/}
                        {/*        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"*/}
                        {/*        alt="avatar"*/}
                        {/*        style={{height: '200px'}}*/}
                        {/*    />*/}
                        {/*</div>*/}

                        <h2 style={{paddingTop: '1em'}}>Arfan Lokman</h2>
                        <h4 style={{color: 'grey'}}>Objective</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>To obtain a full-time position in the Computer Science field with preference of Software Engineering.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>10331 Marble Egret Dr, Jacksonville, FL 32257</p>
                        <h5>Phone</h5>
                        <p>(904) 207-4633</p>
                        <h5>Email</h5>
                        <p>arfanlok@gmail.com</p>
                        {/*<h5>Web</h5>*/}
                        {/*<p>mywebsite.com</p>*/}
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2017}
                            endYear={2020}
                            schoolName="University of North Florida"
                            schoolDescription="•	Bachelor of Science in Computing & Information Science – Computer Science"
                        />

                        {/*<Education*/}
                        {/*    startYear={2007}*/}
                        {/*    endYear={2009}*/}
                        {/*    schoolName="My 2nd University"*/}
                        {/*    schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"*/}
                        {/*/>*/}
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2018}
                            endYear={"Current"}
                            jobName="Technician Assistant, UNF ITS Help Desk"
                            jobDescription="•	Assisted a userbase of 17,000+ with software and hardware deployment and support for an enterprise system.
                            •	Provided live support troubleshooting software problems with users of different types of devices and operating systems such as Linux, Macintosh, and Windows.
•	Ensured users were assigned correct Active Directory roles to access proper system resources
"
                        />

                        {/*<Experience*/}
                        {/*    startYear={2012}*/}
                        {/*    endYear={2016}*/}
                        {/*    jobName="Second Job"*/}
                        {/*    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"*/}
                        {/*/>*/}
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Python"
                            progress={100}
                        />
                        <Skills
                            skill="Java"
                            progress={80}
                        />
                        <Skills
                            skill="C#"
                            progress={70}
                        />
                        <Skills
                            skill="Html/css"
                            progress={70}
                        />
                        <Skills
                            skill="Javascript"
                            progress={70}
                        />
                        <Skills
                            skill="Node.js"
                            progress={50}
                        />
                        <Skills
                            skill="Unity"
                            progress={50}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;