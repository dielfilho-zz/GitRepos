import * as S from './style';
import GitItemProps from './types';
import GitContainer from '../GitContainer/GitContainer';
import { HeartFillIcon, HeartIcon, GitBranchIcon, StarFillIcon } from '@primer/octicons-react';
import IconButton from '@material-ui/core/IconButton';

const languageColors = {
    java: "blue",
    javascript: "green",
    typescript: "magenta",
    python: "orange",
    default: "grey"
} as Record<string, string>;

const getLanguageColor = (language: string) => {
    if (!language) return languageColors.default;

    let color = languageColors[language.toLowerCase()];
    return color ? color : languageColors.default;
}

const GitItem = (props: GitItemProps) => {
    let item = props.item;
    console.log("render", item.name);

    return (
        <S.Item width={props.width}>
            <GitContainer row>
                <GitContainer>
                    <S.ItemTitle>{item.name}</S.ItemTitle>
                    <S.ItemDescription>{item.description}</S.ItemDescription>
                </GitContainer>
                <S.ItemIcon>
                    {
                        item.isFavorited ?
                            <IconButton onClick={() => { props.onSetFavorite(item, false); }} color="primary" component="span"><HeartFillIcon size={24} /></IconButton> :
                            <IconButton onClick={() => { props.onSetFavorite(item, true); }} component="span"><HeartIcon size={24} /></IconButton>
                    }
                </S.ItemIcon>
            </GitContainer>
            <GitContainer row justifyContent="flex-end" alignItems="flex-end">
                <GitContainer row justifyContent="flex-start" alignItems="center">
                    {item.language ? <S.ItemBubble color={getLanguageColor(item.language)} size={12} /> : <></>}
                    <S.ItemSubDescription>{item.language}</S.ItemSubDescription>
                </GitContainer>
                <GitContainer justifyContent="flex-end" alignItems="flex-end">
                    <S.ItemExtraDescription> <StarFillIcon size={16} /> {item.starsCount} </S.ItemExtraDescription>
                    <S.ItemExtraDescription> <GitBranchIcon size={16} /> {item.forksCount} </S.ItemExtraDescription>
                </GitContainer>
            </GitContainer>
            <GitContainer justifyContent="flex-end" alignItems="flex-end">
                <S.ItemDate> Last Update: {item.updatedAt.toLocaleDateString()}</S.ItemDate>
            </GitContainer>
        </S.Item>
    )
}

export default GitItem;