import View from './style'

const GitView = (props: any) => {
    return (
        <View selfAlign={props.selfAlign}>
            {props.children}
        </View>
    );
}


export default GitView;