import React from "react"
import styled, { keyframes } from "styled-components"
import PurchasedButton from "../buttons/PurchasedButton"
import { H1, MediumText } from "../styles/TextStyles.Js"
import { themes } from "../styles/ColorStyles"
import MockupAnimations from "../animations/MockupAnimations"
import WaveBackground from "../backgrounds/WaveBackground"

const HeroSection = () => {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design
            <br />
            and code <span> React</span> apps
          </Title>
          <Description>
            Don’t skip design. Learn design and code, by building real apps,
            collaborate and solving product UI problems.
          </Description>
          <PurchasedButton
            title="Start learning "
            subtitle="120+ hours of video"
          />
        </TextWrapper>
        <MockupAnimations />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

// Components

const animation = keyframes`
  
  0%{ 
    opacity: 0; 
    transform: translateY(10px); filter:blur(20px);
  }


  100%{
    opacity: 1;
    transform: translateY(0px); filter:blur(0px);
  }
`

const Wrapper = styled.div`
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px){
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
    
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip : text;
  -webkit-background-clip: text;
  color: transparent;

  span{
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip : text;
  -webkit-background-clip: text;
  color: transparent;
  }

  @media (max-width: 450px){
  	font-size: 48px;
  	
  }
`
const Description = styled(MediumText)``
