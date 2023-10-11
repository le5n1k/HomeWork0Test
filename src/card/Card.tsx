import React from "react";
import {Card} from "./Card.styled";
import {CardTitle} from "./CardTitle";
import {CardText} from "./CardText";
import {Img} from "./Img.styled";
import {StyledBtn} from "./Button.styled";
import {CardDescription} from "./CardDescription";

type CardPropsType = {
    CardTitle: string
    CardText: string
    ImgSrc: string
    btnTextPrimary: string
    btnTextOutlined: string
}

export function CardFunction(props: CardPropsType) {
    return <Card>
        <Img src={props.ImgSrc}/>
        <CardDescription>
            <CardTitle>{props.CardTitle}</CardTitle>
            <CardText>{props.CardText}</CardText>
            <StyledBtn btnType={"primary"}>{props.btnTextPrimary}</StyledBtn>
            <StyledBtn btnType={"outlined"}>{props.btnTextOutlined}</StyledBtn>
        </CardDescription>

    </Card>
}