import { gql } from "@apollo/client";

const GET_TRENDING_ANIME = gql`
    query GetTrendingAnime {
        Page (perPage: 6) {
            media(type: ANIME, sort: TRENDING_DESC) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
            }
        }
    }
`;

const GET_POPULAR_ANIME = gql`
    query GetPopularAnime {
        Page (perPage: 6) {
            media(type: ANIME, sort: POPULARITY_DESC) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
            }
        }
    }
`;

const GET_UPCOMING_ANIME = gql`
    query GetUpcomingAnime {
        Page (perPage: 6) {
            media(type: ANIME, sort: START_DATE) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
            }
        }
    }
`;

const GET_TOP_ANIME = gql`
    query GetTopAnime {
        Page (perPage: 6) {
            media(type: ANIME, sort: SCORE_DESC) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
            }
        }
    }
`;

const GET_ANIME = gql`
query ($id: Int) {
    Media(id: $id) {
        id
        title {
            romaji
        }
        description
        status
        averageScore
        popularity
        relations {
            edges {
                node {
                    id
                    title {
                        romaji
                    }
                    type
                }
            }
        }
        characters {
            edges {
                node {
                    id
                    name {
                        full
                    }
                    image {
                        large
                    }
                }
                voiceActors {
                    name {
                        full
                    }
                    image {
                        large
                    }
                }
            }
        }
        recommendations {
            edges {
                node {
                    id
                    media {
                        title {
                            romaji
                        }
                        coverImage {
                            large

                        }
                    }
                }
            }
        }
        trending
        source
        tags {
            name
        }
        format
        episodes
        duration
        startDate {
            year
            month
            day
        }
        endDate {
            year
            month
            day
        }
    }
}
`;

export type anime = {
    id:string,
    title:{romaji:string},
    description:string,
    status:string,
    averageScore:number,
    popularity:number,
    relations:{edges:{node:{id:string,title:{romaji:string},type:string}}[]},
    characters:{edges:{node:{id:string,name:{full:string},image:{large:string}},voiceActors:{name:{full:string},image:{large:string}}}},
    recommendations:{edges:{node:{id:string,media:{title:{romaji:string},coverImage:{large:string}}}}},
    trending:number,
    source:string,
    tags:{name:string}[],
    format:string,
    episodes:number,
    duration:string,
    startDate:{year:number,month:number,day:number},
    endDate:{year:number,month:number,day:number}
}

export {
    GET_TRENDING_ANIME,
    GET_POPULAR_ANIME,
    GET_UPCOMING_ANIME,
    GET_TOP_ANIME,
    GET_ANIME
}
