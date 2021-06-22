import { useContext, useState } from 'react';
import Header from './style'
import GitContainer from '../GitContainer/GitContainer'
import GitView from '../GitView/GitView'
import GitContext from '../Context/GitContext';
import GitModal from '../GitModal/GitModal';
import GitList from '../GitList/GitList';
import Button from '@material-ui/core/Button';
import { HeartFillIcon, MarkGithubIcon } from '@primer/octicons-react';

const GitHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const { repositories, favRepositories, onSetFavorite } = useContext(GitContext);

    return (
        <Header>
            <GitView row><MarkGithubIcon size={44} />GitHub Repositories</GitView>
            <GitContainer row justifyContent="center">
                <GitView>
                    <Button>{repositories?.length} repositories found.</Button>
                </GitView>
                <GitView>
                    <Button
                        onClick={() => setShowModal(true)}
                        variant="outlined" endIcon={<HeartFillIcon size={12} />}>
                        Favorites ({favRepositories?.length})
                    </Button>
                </GitView>
            </GitContainer>
            <GitModal show={showModal} onClose={() => setShowModal(false)} title={`Favorites (${favRepositories?.length})`}>
                <GitList items={favRepositories} onSetFavorite={onSetFavorite} emptyListMessage={"Your favorite list is empty."} itemWidth="80%"></GitList>
            </GitModal>
        </Header>
    );
}

export default GitHeader;