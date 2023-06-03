export interface Author {
    key: string;
    type: string;
    title: string;
    name: string;
    alternate_names?: string[];
    birth_date?: number;
    death_date?: number;
    top_work?: string;
    work_count?: number
    top_subjects?: string[];
    _version_?: number;
}

export interface Authorfull {
    numFound: number,
    start: number,
    numFoundExact: number,
    docs: Author[];
}

export interface AuthorDetails {
    name: string
}