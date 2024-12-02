import { gql } from "@apollo/client";

export const SEARCH_ANIME = gql`
    query SearchAnime($search: String!,$perPage: Int,$type: MediaType) {
        Page (perPage: $perPage) {
            media(search: $search,type: $type) {
                id
                title {
                    english
                    native
                }
                coverImage {
                    large
                }
            }
        }
    }
`
