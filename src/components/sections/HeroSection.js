import React from "react"
import styled from "styled-components"
import PurchasedButton from "../buttons/PurchasedButton"
import { H1, MediumText } from "../styles/TextStyles.Js"
import { themes } from "../styles/ColorStyles"
import MockupAnimations from "../animations/MockupAnimations"

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design
            <br />
            and code React apps
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

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)``
