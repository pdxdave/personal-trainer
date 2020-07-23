import React from 'react' 
import {Container, Grid, Button} from 'semantic-ui-react'
import styled from 'styled-components'

const Home = () =>{
    return (
        <div>
            <div className="banner">
                <Container>
                    <Grid divided="vertically" style={{margin: "0", padding:"0"}}>
                        <Grid.Row>
                            <Grid.Column mobile={10} table={10} computer={8}>
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
        padding-top: 100px;
        margin: 0px;
        text-transform: uppercase;
    }
    @media (min-width: 1200px) {
        padding-top: 150px;
    }
`
const BannerSubTitle = styled.p `

    @media (min-width: 768px) {
        padding-top: 16px;
        font-size: 2rem;
    }
`
export default Home;