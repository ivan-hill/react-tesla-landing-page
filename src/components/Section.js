import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    position: relative;
    z-index: -1;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const Buttons = styled.div`
    overflow: hidden;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    cursor: pointer;
    width: 256px;
    height: 40px;
    background-color: rgba(23, 26, 32, 0.8);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
`;

const RightButton = styled(LeftButton)`
    background-color: #fff;
    color: #000;
    opacity: 0.65;
`;

const DownArrow = styled.img`
    height: 40px;
    animation: animationDown infinite 1.5s;
`;

function Section({ title, description, leftButtonText, rightButtonText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            { leftButtonText }
                        </LeftButton>
                        {rightButtonText && 
                            <RightButton>
                                { rightButtonText }
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>

                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section
