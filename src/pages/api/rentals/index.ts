export const getRentals = async (address: string, queryString: string) => {
    const headers = {'Content-Type': 'application/json'};
    const response = await fetch((`https://search.outdoorsy.com/rentals?${queryString}&page[limit]=8&page[offset]=8&address=Atlanta`),
        {
            method: 'GET',
            headers
        }
    );
    return response;
};