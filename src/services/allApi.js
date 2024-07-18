//API to add videos

import { commonAPI } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const allVideoApi =async(reqBody) =>{
    return await commonAPI('POST', `${serverUrl}/allVideos`,reqBody);
}

//api to get all video
export const getAllVideosApi = async()=>{
    return await commonAPI('GET',`${serverUrl}/allVideos`,'');
}

//API to delete a video
export const deleteVideoApi = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/allVideos/${id}`,{});
}

//API to add video to watch history
export const addVideoHistory = async(reqBody)=>{
    return await commonAPI('POST', `${serverUrl}/history`, reqBody);

}

//APi to get all video from history
export const getVideoHistoryApi = async()=>{
    return await commonAPI('GET', `${serverUrl}/history`)
}

//API to delete a video from history
export const deleteVideoHistoryApi = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/history/${id}`,{})
}

//API to add category
export const addCategoryApi = async(reqBody)=>{
    return await commonAPI('POST', `${serverUrl}/category`,reqBody)
}

//API to get all category
export const getAllCategoryApi = async()=>{
    return await commonAPI('GET', `${serverUrl}/category`)
}

//API to delete category
export const deleteCategoryApi =async (id) =>{
    return await commonAPI('DELETE', `${serverUrl}/category/${id}`,{})
}

//API to update category
export const updateCategoryApi = async(id, reqBody)=>{
    return await commonAPI('PUT',`${serverUrl}/category/${id}`, reqBody);
}
