import request, { gql } from "graphql-request";


const MASTER_URL="https://api-ap-southeast-2.hygraph.com/v2/clo4jkdnr82wl01ul3a4dcy3p/master";
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

    const result = await request(MASTER_URL, query);
    return result;
};


export const getLocationList = async ()  => {
  const query = gql`
    query LocationList {
      storesLocations {
        address
      }
    }
  `

    const result = await request(MASTER_URL, query);
    return result;
  
};

export const createBooking = async (formValue: any) => {
    const mutatuionQuery = gql``;

    const result = await request(MASTER_URL, mutatuionQuery);
    return result;
}
