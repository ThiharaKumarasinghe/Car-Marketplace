const FormatResult=(res)=>{
    let result =[];
    let finalResult = [];

     res.forEach((item)=>{
        const listingID = item.carListing?.id;
        if(!result[listingID]){
            result[listingID] = {
                car: item.carListing,
                images:[]
            }
        }

        if(item.carImages){
            result[listingID].images.push(item.carImages);
        }



     })

     result.forEach((item)=>{
        finalResult.push({
            ...item.car,
            images:item.images
            
        });
     })

     return finalResult;

}

export default {
    FormatResult
}