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
        title {
            romaji
        }
        format
        status
        startDate {
            year
        }
        endDate {
            year
        }
        tags {
            name
        }
        bannerImage
        coverImage {
            large
        }
        description
        characters {
            nodes {

                name {
                    full
                }
                image {
                    large
                }
            }
        }
        averageScore
        meanScore
        popularity
        favourites
        stats {
            statusDistribution {
                amount
                status
            }
        }
        recommendations {
            nodes {
                mediaRecommendation {
                    id
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
}
`;

export interface AnimeType {
  title: {
    romaji: string;
  };
  format: string;
  status: string;
  startDate: {
    year: number;
  };
  endDate: {
    year: number;
  };
  tags: {
    name: string;
  }[];
  bannerImage: string;
  coverImage: {
    large: string;
  };
  description: string;
  characters: {
    nodes: {
      name: {
        full: string;
      };
      image: {
        large: string;
      };
    }[];
  };
  averageScore: number;
  meanScore: number;
  popularity: number;
  favourites: number;
  stats: {
    statusDistribution: {
      amount: number;
      status: string;
    }[];
  };
  recommendations: {
    nodes: {
      mediaRecommendation: {
        id:number,
        title: {
          romaji: string;
        };
        coverImage: {
          large: string;
        };
      };
    }[];
  };
}

export {
    GET_TRENDING_ANIME,
    GET_POPULAR_ANIME,
    GET_UPCOMING_ANIME,
    GET_TOP_ANIME,
    GET_ANIME
}
