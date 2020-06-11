const apiKey = "p362pXNCGrCP7oSPtNH1BDlanngYYyGBneE6nfQ_Kiq4FrkA7UllPAVRGPEsQZn_uivnxpffB0Io-w6q5a9jav9iQN1FsgcCH-oGd0C5OS51qzDlc9jUpkGLFEbiXnYx"


const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}` 
              }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({            
                        id: business.id, 
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }));
                }
            });
        }
    };

export default Yelp;
