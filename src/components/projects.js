import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, IconButton, CardMenu} from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                // <div><h1>This is Compilers</h1></div>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff',
                        height: '176px',
                        background: 'url(https://miro.medium.com/max/500/1*Qbm5_d5EYIbYa1-jN4JmSg.jpeg) center / cover'
                    }}> C minus Compiler</CardTitle>
                    <CardText>This is my project wrote in python that makes a compiler for c minus.</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Call of Halo</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is React</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Compilers</Tab>
                    <Tab>Call of Halo</Tab>
                    <Tab>React</Tab>

                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>
            </div>
        )

    }
}

export default Projects;