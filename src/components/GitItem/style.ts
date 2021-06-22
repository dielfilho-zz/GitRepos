import styled from 'styled-components';
import { CircleIcon } from '@primer/octicons-react';

export const Item = styled.div <{ width?: string }>`
    width: ${props => (props.width ? props.width : '60%')};
    height: 130px;
    padding: 10px;
    margin-top: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const ItemTitle = styled.span`
    font-size: 24px;
    text-align: left;
    font-weight: bold;
`
export const ItemDescription = styled.span`
    font-size: 14px;
    text-align: left;
    margin-top: 5px;
    font-style: italic;
`
export const ItemSubDescription = styled.span`
    margin: 3px;    
    font-size:14px;
`

export const ItemExtraDescription = styled.span`
    font-size: 11px;    
`

export const ItemDate = styled.span`
    font-size: 11px;    
`

export const ItemIcon = styled.div`
    margin-left: auto;
`

export const ItemBubble = styled(CircleIcon) <{ color: string }>`
    background-color : ${props => (props.color)};
    border-radius: 10px;
`