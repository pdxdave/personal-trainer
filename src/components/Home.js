import React from 'react' 
import {Container, Grid, Button, Icon} from 'semantic-ui-react'
import styled from 'styled-components'

const Home = () =>{
    return (
        <div>
            <div className="banner">
                <Container>
                    <Grid divided="vertically">
                        <Grid.Row>
                            <Grid.Column mobile={10} table={10} computer={8}>
                                <BannerTitle>Personal Trainer</BannerTitle>

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
export default Home;