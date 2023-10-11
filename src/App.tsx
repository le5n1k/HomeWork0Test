import React from 'react';
import './App.css';
import {myTheme} from "./styles/Theme.styled";
import {Box} from "./components/Box.styled";
import {Card} from "./components/Card.styled";
import {Img} from "./components/Img.styled";
import {CardTitle} from "./components/CardTitle";
import {CardText} from "./components/CardText";
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";

function App() {
    return (
        <div className="App">
            <Box color={myTheme.colors.backgroundColor}>
                <Card color={myTheme.colors.cardColor}>
                    <Img
                        src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1698019200&Signature=Tw421m5BaCFsNUCPNzLxB3VCbjA2Eg-9u2AJD6CvL5qv91Mb77qV7zyTDyYl~zitqdZtDC5YzR-YNhlOzvFEyw19DiUnbqU7Lf0~Vybe3W~qUJmK~ImRJa29USwSCnltQWilYHju~fcfV5ZrRtBqagqCBrgKgHXm2-D6ATLpE1vsj71XgIKvhSUInSH4jN~pM8BC1jueampadWsGuyDjQznAd8HSyyWkEPT4REYF-mNApgNU3APDNNSV~axA6mjjoWACzIiwUQndU2L3xcPGS3p8eFkrtkLOlp05CCRBMHdaiwWX9J6jsXTYDPh5WtsULdbRbdE29dv7ktdzGxX2zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                    <CardTitle>Headline</CardTitle>
                    <CardText><Pa>Faucibus. Faucibus. Sit sit sapien sit</Pa><Pa> tempusrisu ut. Sit molestie ornare in
                        venen.</Pa></CardText>
                    <StyledBtn btnType={"primary"}>See more</StyledBtn>
                    <StyledBtn btnType={"outlined"}>Save</StyledBtn>
                </Card>
                <Card color={myTheme.colors.cardColor}>
                    <Img
                        src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1698019200&Signature=Tw421m5BaCFsNUCPNzLxB3VCbjA2Eg-9u2AJD6CvL5qv91Mb77qV7zyTDyYl~zitqdZtDC5YzR-YNhlOzvFEyw19DiUnbqU7Lf0~Vybe3W~qUJmK~ImRJa29USwSCnltQWilYHju~fcfV5ZrRtBqagqCBrgKgHXm2-D6ATLpE1vsj71XgIKvhSUInSH4jN~pM8BC1jueampadWsGuyDjQznAd8HSyyWkEPT4REYF-mNApgNU3APDNNSV~axA6mjjoWACzIiwUQndU2L3xcPGS3p8eFkrtkLOlp05CCRBMHdaiwWX9J6jsXTYDPh5WtsULdbRbdE29dv7ktdzGxX2zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                    <CardTitle>2 Headline</CardTitle>
                    <CardText><Pa>Faucibus. Faucibus. Sit sit sapien sit</Pa><Pa> tempusrisu ut. Sit molestie ornare in
                        venen.</Pa></CardText>
                    <StyledBtn btnType={"primary"}>See more</StyledBtn>
                    <StyledBtn btnType={"outlined"}>Save</StyledBtn>
                </Card>
            </Box>
        </div>
    );
}

const Pa = styled.p`
  &:last-child {
    margin-top: -12px;
  }
`
export default App;





