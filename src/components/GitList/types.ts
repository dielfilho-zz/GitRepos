import GitRepository from '../../types/GitRepository';

interface GitListProps {
    items: GitRepository[],
    emptyListMessage: string,
    onSetFavorite: Function,
    itemWidth?: string,
}

export default GitListProps;