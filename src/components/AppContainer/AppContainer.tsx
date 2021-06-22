import { useState } from 'react';
import { SearchIcon } from '@primer/octicons-react';
import GitContext from '../Context/GitContext';
import AppContainerView from './style';
import GitHeader from '../GitHeader/GitHeader';
import GitContainer from '../GitContainer/GitContainer';
import GitSearch from '../GitSearch/GitSearch';
import GitList from '../GitList/GitList';
import GitRepository from '../../types/GitRepository';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.github.com/"
})

const AppContainer = () => {

    const [repositories, setRepositories] = useState<GitRepository[]>([]);
    const [favRepositories, setFavRepositories] = useState<GitRepository[]>([]);
    const [search, setSearch] = useState("");
    const [showLoading, setLoading] = useState(false);
    const [requestMessage, setRequestMessage] = useState("Search at the top input to get the list of repositories.");

    const onSetFavoriteRepository = (repository: GitRepository, isFavorited: boolean) => {
        repository.isFavorited = isFavorited;
        if (!isFavorited) {
            setFavRepositories(favRepositories.filter((fRep: GitRepository) => {
                return repository.id !== fRep.id;
            }));
        } else {
            setFavRepositories([...favRepositories, repository]);
        }
    }

    const checkWasAlreadyFavorited = (newRepo: GitRepository, favRepos: GitRepository[]) => {
        let repo = favRepos.find((fRep) => {
            return fRep.id === newRepo.id;
        })
        return repo ? true : false;
    }

    const getUserRepositories = async () => {
        if (!search) {
            return;
        }
        try {
            setLoading(true);
            const result = await api.get(`users/${search}/repos`);

            if (result.status === 200 && result.data.length) {
                const repos: GitRepository[] = [];

                result.data.forEach((repo: any) => {
                    const repository: GitRepository = {
                        id: repo.id,
                        name: repo.name,
                        description: repo.description,
                        createdAt: new Date(repo.created_at),
                        updatedAt: new Date(repo.updated_at),
                        language: repo.language,
                        isFavorited: checkWasAlreadyFavorited(repo, favRepositories),
                        starsCount: repo.stargazers_count,
                        forksCount: repo.forks
                    };
                    repos.push(repository);
                });
                setRepositories(repos);
                setLoading(false);
            } else {
                setLoading(false);
                setRequestMessage(`Username ${search} not found.`);
            }
        } catch (error) {
            setRequestMessage(`Sorry, we were not able to complete your search. Try again later.`);
            setLoading(false);
        }
    }


    return (
        <AppContainerView>
            <GitContext.Provider value={{repositories, favRepositories, onSetFavorite : onSetFavoriteRepository}}>
                <GitHeader/>
            </GitContext.Provider>
            <GitContainer row justifyContent={"center"} marginTop="140px">
                <GitSearch placeholder={"Search for a username..."} onChange={(event: any) => setSearch(event.target.value)} />
                <Button onClick={getUserRepositories} variant="contained" color="primary" endIcon={<SearchIcon size={15} />}>Search</Button>
            </GitContainer>
            {
                showLoading ?
                    <GitContainer justifyContent={"center"} alignItems={"center"}>
                        <CircularProgress />
                    </GitContainer> :
                    <GitContainer justifyContent={"center"}>
                        <GitList items={repositories} onSetFavorite={onSetFavoriteRepository} emptyListMessage={requestMessage} itemWidth="45%"></GitList>
                    </GitContainer>
            }
        </AppContainerView>
    );
}


export default AppContainer;