import request, { gql } from "graphql-request";


export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        image {
            url
        }
        carType
        carBrand
      }
    }
  `

    const result = await request('https://api-ap-southeast-2.hygraph.com/v2/clo4jkdnr82wl01ul3a4dcy3p/master', query);
    return result;
};
