import { useMemo } from 'react';
import List from './style';
import GitItem from '../GitItem/GitItem';
import GitView from '../GitView/GitView';
import GitContainer from '../GitContainer/GitContainer';
import GitRepository from '../../types/GitRepository';
import GitListProps from './types';

const GitList = (props: GitListProps) => {
    const items: GitRepository[] = props.items;

    if (!items || !items.length) {
        return (
            <GitContainer justifyContent={"center"} alignItems={"center"}>
                <GitView>{props.emptyListMessage}</GitView>
            </GitContainer>
        )
    } else {
        
        const gitItens = items.map((item: GitRepository) => {
            return <GitItem key={item.id} item={item} onSetFavorite={props.onSetFavorite} width={props.itemWidth} />
        });

        return (
            <List>
                {gitItens}
            </List>
        );
    }
}

export default GitList;