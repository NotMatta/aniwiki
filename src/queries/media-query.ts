import { gql } from "@apollo/client";

const GET_TRENDING_MEDIA = gql`
    query GetMedia($type: MediaType) {
        Page (perPage: 16) {
            media(type: $type, sort: TRENDING_DESC) {
                id
                type
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

const GET_POPULAR_MEDIA = gql`
    query GetMedia($type: MediaType) {
        Page (perPage: 16) {
            media(type: $type, sort: POPULARITY_DESC) {
                id
                type
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

const GET_UPCOMING_MEDIA = gql`
    query GetMedia($type: MediaType) {
        Page (perPage: 16) {
            media(type: $type, sort: START_DATE) {
                id
                type
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

const GET_TOP_MEDIA = gql`
    query GetMedia($type: MediaType) {
        Page (perPage: 16) {
            media(type: $type, sort: SCORE_DESC) {
                id
                type
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

const SEARCH_MEDIA = gql`
    query ($perPage: Int, $page: Int, $search: String, $sort: [MediaSort], $type: MediaType) {
      Page(perPage: $perPage,page: $page){
        pageInfo {
          currentPage
          total
          perPage
          lastPage
        }
        media(search: $search,sort: $sort,type: $type, isAdult: false){
          id
          type
          title {
            romaji
          }
          coverImage {
            large
          }
        }
      }
    }
`;

const GET_MEDIA = gql`
query ($id: Int,$format: MediaType) {
    Media(id: $id, type: $format) {
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
            extraLarge
        }
        description
        relations {
            nodes {
                id
                type
                title {
                    romaji
                }
                coverImage {
                    large
                }
            }
        }
        characters(sort:ROLE){
            edges {
                role
                node {
                    name {
                        full
                    }
                    image {
                        large
                    }
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
                    type
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

export interface MediaType {
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
    extraLarge: string;
  };
  relations: {
    nodes: {
      id: number;
      type: string;
      title: {
        romaji: string;
      };
      coverImage: {
        large: string;
      };
    }[];
  };
  description: string;
  characters: {
    edges: {
      role: string;
      node: {
        name: {
          full: string;
        };
        image: {
          large: string;
        };
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
        type:string,
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
    GET_TRENDING_MEDIA,
    GET_POPULAR_MEDIA,
    GET_UPCOMING_MEDIA,
    GET_TOP_MEDIA,
    GET_MEDIA,
    SEARCH_MEDIA
}
