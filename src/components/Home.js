import React from 'react' 
import {Container, Grid, Button, Icon, Embed} from 'semantic-ui-react'
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
                </Container> {/* end of banner container */}
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
                                <div className="why-reasons"><Icon name="check" color="red"/><span>No more counting calories. Learn to eat more effectively</span></div> 
                                <div className="why-reasons"><Icon name="check" color="red"/><span>No more feeling as though you have to work out seven days a week</span></div> 
                                <div className="why-reasons"><Icon name="check" color="red"/><span>Get used to reaching goals</span></div> 
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>

                <section style={{padding: "50px 0px 50px 0px"}}>
                <Grid className="why-outline" stackable columns={2} >
                    <Grid.Column className="why-outline__column">
                        <Icon name="food" className="why-outline__icon"/>
                        <h3 className="why-outline__title">Nutrition</h3>
                        <p className="why-outline__text">You will be introduced to a nutritional landscape and learn how to select the best foods for your goals</p>
                    </Grid.Column>
                    <Grid.Column className="why-outline__column">
                        <Icon name="universal access" className="why-outline__icon"/>
                        <h3 className="why-outline__title">Lifestyle</h3>
                        <p className="why-outline__text">By creating a new lifestyle maintaining your health and well-being will be much simpler</p>
                    </Grid.Column>
                </Grid>
                <Grid className="why-outline" stackable columns={2} >
                    <Grid.Column className="why-outline__column">
                        <Icon name="heart" className="why-outline__icon"/>
                        <h3 className="why-outline__title">Exercise</h3>
                        <p className="why-outline__text">We will develop an exercise program that fits into your new lifestyle</p>
                    </Grid.Column>
                    <Grid.Column className="why-outline__column">
                        <Icon name="cogs" className="why-outline__icon"/>
                        <h3 className="why-outline__title">Mind</h3>
                        <p className="why-outline__text">Mental balance is just as important as physical balance. You will learn to live a more focused, and enjoyable life</p>
                    </Grid.Column>
                </Grid>
                </section>
            </Grid.Row>
        </Container> {/* end of the why container */}
        </div> {/* end of the why wrapping div */}
        <section className="video">
            <h2>Develop new levels of strength</h2>
                <div style={{height: "275px", maxWidth: "500px", margin: "0 auto"}}>
                <Embed 
                    id='ZJGTn2EhKwE'
                    source='youtube'/>
                </div>
        </section>
        <div className="manifesto">
            <Container className="manifesto-content">
                <Grid divided="vertically">
                    <Grid.Row>
                        <Grid.Column mobile={16} table={10} computer={12} className="manifesto-text">
                        <h1>Van Halen Training Philosophy</h1>
                        <p>Clients come to me because they are in need of 
                        reconstruction. Reconstruction in the sense that their 
                        current foundation of diet, training, and mindfulness 
                        are either no longer working, or have never worked 
                        to their optimum level. We break down the bad habits and 
                        replace them with long lasting, beneficial habits. This is what they get in return...
                        </p>
                        <div className="manifesto-reasons"><Icon name="check" color="white"/><span>Feel good about yourself again</span></div> 
                        <div className="manifesto-reasons"><Icon name="check" color="white"/><span>Maintain a healthy lifestyle without sacrificing the things you love</span></div> 
                        <div className="manifesto-reasons"><Icon name="check" color="white"/><span>Wear the clothes you thought you could never fit in to</span></div> 
                        <div className="manifesto-reasons"><Icon name="check" color="white"/><span>No longer feel embarassed at public gatherings because you think you're too big or out of shape</span></div> 
                        <div className="manifesto-reasons"><Icon name="check" color="white"/><span>Enjoy eating healthy food without missing unhealthy food</span></div> 
                        </Grid.Column>
                        <Grid.Column > 
                            {/* empty column */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                    
            </Container>
        </div>
    </div>// master div containing all content
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