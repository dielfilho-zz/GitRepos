import Input from './style';
import SearchProps from './types';

const GitSearch = (props: SearchProps) => {
    return (
        <Input placeholder={props.placeholder} onChange={props.onChange}></Input>
    );
}

export default GitSearch;