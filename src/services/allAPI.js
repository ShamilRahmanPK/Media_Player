import commonAPI from "./commoAPI"
import serverURL from "./serverURL"

// saveVideoAPI - post http rqst called add component

export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${serverURL}/uploadVideos`,videoDetails)
}

// getAllVideoAPI - get http rqst called 

export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/uploadVideos`,{})
}

// saveVideoHistoryApi -post

export const saveVideoHistoryAPI = async (historyDetails)=>{
    return await commonAPI("POST",`${serverURL}/history`,historyDetails)
}

// getAllHistoryAPI 

export const getAllHistoryAPI  = async ()=>{
    return await commonAPI("GET",`${serverURL}/history`,{})
}

// deleteHistoryAPI - delete http rqst called by history component

export const deleteHistoryAPI  = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}


// deleteVideoAPI - delete http rqst called by videocard 

export const deleteVideoAPI  = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/uploadVideos/${id}`,{})
}

// saveCategoryAPI 
// categoryDetails = {catoryName,allVideos}

export const saveCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${serverURL}/categories`,categoryDetails)
}

// getAllCategoryAPI  called by category
export const getAllCategoryAPI  = async ()=>{
    return await commonAPI("GET",`${serverURL}/categories`,{})
}

// deleteCategoryAPI called by category
export const deleteCategoryAPI  = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}

// updateCategoryAPI PUT reqest called by category video droped over category
export const updateCategoryAPI  = async (categoryDetails)=>{
    return await commonAPI("PUT",`${serverURL}/categories/${categoryDetails.id}`,categoryDetails)
}