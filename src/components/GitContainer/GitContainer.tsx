import Container from './style'
import GitContainerProps from './types';

const GitContainer = (props: GitContainerProps) => {
    return (
        <Container row={props.row} justifyContent={props.justifyContent} alignItems={props.alignItems} marginTop={props.marginTop}>
            {props.children}
        </Container>
    );
}


export default GitContainer;