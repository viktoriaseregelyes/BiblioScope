export interface Book {
    key: string
    title: string
    cover_i: number
    first_publish_year: number
    author_name: string[]
    author_key: string[]
    isbn: string[]
    subject?: string[]
    edition_key: string[]
    number_of_pages_median: number
    readinglog_count: number
    want_to_read_count: number
    currently_reading_count: number
    already_read_count: number
    first_sentence: string
}

export interface Bookfull {
    numFound: number,
    start: number,
    numFoundExact: number,
    docs: Book[];
}

export interface BookDetails {
    key: string
    title: string
    covers: number[]
    description?: {type: string, value: string}
    authors: {author: {key: string}, type: {key: string}}[]
    subject_times: string[]
    subject_places: string[]
    first_publish_date?: string
    subject_people: string[]
    subjects?: string[]
    created: {type: string, value: Date}
    last_modified: {type: string, value: Date}
}