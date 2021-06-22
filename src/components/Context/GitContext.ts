import { createContext } from "react";
import GitRepository from "../../types/GitRepository";

const GitContext = createContext<{repositories: GitRepository[], favRepositories: GitRepository[], onSetFavorite: Function }>(
    {
        repositories: [], favRepositories: [], onSetFavorite: () => { }
    });

export default GitContext;

