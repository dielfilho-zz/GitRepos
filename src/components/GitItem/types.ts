import GitRepository from '../../types/GitRepository';
interface GitItemProps {
    key: number,
    item: GitRepository,
    onSetFavorite: Function,
    width?: string;
}

export default GitItemProps;