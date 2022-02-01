import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Container = styled.div`
    height: 100vh;
`;

function Home() {
    return (
        <Container>
            <Section 
                title="Model S" 
                description="Order for Touchless Delivery" 
                backgroundImg="model-s.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory" 
            />

            <Section 
                title="Model Y" 
                description="Order for Touchless Delivery" 
                backgroundImg="model-y.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />

            <Section
                title="Model 3" 
                description="Order for Touchless Delivery" 
                backgroundImg="model-3.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />

            <Section 
                title="Model X" 
                description="Order for Touchless Delivery" 
                backgroundImg="model-x.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />

            <Section 
                title="Lowest Cost Solar Panels in America" 
                description="Money-back Guarantee" 
                backgroundImg="solar-panel.jpg"
                leftButtonText="Learn More"
                rightButtonText="Order Now"
            />

            <Section 
                title="Solar for New Roofs" 
                description="Solar Roofs Cost Less Than a New Roof Plus Solar Panels" 
                backgroundImg="solar-roof.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn More"
            />

            <Section 
                title="Accessories" 
                description="" 
                backgroundImg="accessories.jpg"
                leftButtonText="Shop Now"
            />
        </Container>
    )
}

export default Home
