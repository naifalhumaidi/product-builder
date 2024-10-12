const isInRange = (text: string, range:number[]) => 
    text.length >= range[0] && text.length <= range[1];

export const productValidation = 
(   {
    title,
    description,
    imageURL,
    price
    }:{
    title:string,
    description:string,
    imageURL:string,
    price:string
    }
) => {
        const errors: { title:string, description:string, imageURL:string, price:string } = {
            title:"",
            description:"",
            imageURL:"",
            price:""
        }
        if(!isInRange(title.trim(), [3,15])) errors.title = "must be between 3 and 15";
        if(!isInRange(description.trim(), [10,50])) errors.description = "must be between 10 and 50";
        const validUrl = /^(ftp|http|https):\/\/[^."]+$/.test(imageURL);
        if(!validUrl) errors.imageURL = "Invalid image URL;"
        if(!price.trim() || isNaN(Number(price.trim()))) errors.price = "Invalid price;"
        return errors;
    }

    