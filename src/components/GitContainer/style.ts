import styled from 'styled-components';

const Container = styled('div') <{ row?: boolean, justifyContent? : string, alignItems? : string, marginTop? : string }>`
    display: flex;
    flex: 1;
    flex-direction: ${props => (props.row ? 'row' : 'column')};
    justify-content: ${props => (props.justifyContent ? props.justifyContent : "flex-start")};
    align-items: ${props => (props.alignItems ? props.alignItems : "stretch")};
    margin-top: ${props => (props.marginTop ? props.marginTop : "5px")};
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
`
export default Container;