interface GitRepository {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    language: string;
    isFavorited: boolean;
    starsCount: number;
    forksCount: number;
}

export default GitRepository;