import React from 'react' 
import {Container, Grid, Button, Icon} from 'semantic-ui-react'
import styled from 'styled-components'

const Home = () =>{
    return (
        <div>
            <div className="banner">
                <Container >
                    <Grid divided="vertically" style={{margin: "0", padding:"0"}}>
                        <Grid.Row>
                            <Grid.Column mobile={10} table={10} computer={8} >
                                <BannerTitle>Personal Trainer</BannerTitle>
                                <BannerSubTitle>Transform your life through personalized weight loss management and mind & body training</BannerSubTitle>
                                <Button style={{marginBottom: "10px"}} color="orange">Click here</Button>
                                <Button color="blue">Click here</Button>
                            </Grid.Column>
                            <Grid.Column > 
                                 {/* empty column */}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
            <div>
            <Container className="why-container"> {/* the why */}
                <Grid.Row>
                    <Grid.Column>
                        <h1 className="why-title">Why <span className="why-title-span">Van Halen Personal Training</span> Is The Right Choice</h1>
                        <p className="why-subtitle">Over 15 years of helping clients reach and even exceed their own expectations</p>
                        <Grid.Row>
                            <Grid.Column style={{textAlign: "center"}}>
                                <div className="why-reasons"><Icon name="check" color="red"/><span>Get off the starvation diet and eat reasonably</span></div> 
                                <div className="why-reasons"><Icon name="check" color="red"/><span>Become more active and actually enjoy it</span></div> 
                                <div className="why-reasons"><Icon name="check" color="red"/><span>No more counting caloires. Learn to eat more effectively</span></div> 
                                <div className="why-reasons"><Icon name="check" color="red"/><span>No more feeling as though you have to work out seven days a week</span></div> 
                                <div className="why-reasons"><Icon name="check" color="red"/><span>Get used to reaching goals</span></div> 
                            </Grid.Column>
                        </Grid.Row>
                        

                    </Grid.Column>
                </Grid.Row>
        </Container>
        </div>
        </div>
    )
}

const BannerTitle = styled.h1 `
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    padding-top: 50px;

    @media (min-width: 423px) {
        padding-top: 120px;
    }
    @media (min-width: 768px) {
        font-size: 5rem;
        font-weight: 700;
        padding-top: 75px;
        margin: 0px;
        text-transform: uppercase;
    }

    @media (min-width: 1200px) {
        padding-top: 50px;
    }

    @media (min-width: 1290px) {
        padding-top: 100px;
    }
`
const BannerSubTitle = styled.p `

    font-size: 1.2rem;
    @media (min-width: 768px) {
        padding-top: 16px;
        font-size: 2rem;
    }
`
export default Home;