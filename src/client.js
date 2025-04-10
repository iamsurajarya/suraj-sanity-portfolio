import sanityClient from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';
 

export const client = sanityClient({
    projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2022-10-10',
    useCDN:true,
    token: process.env.REACT_APP__SANITY_TOKEN 
})

const builder = imageUrlBuilder(client)

export const urlFor = (source)=> builder.image(source)