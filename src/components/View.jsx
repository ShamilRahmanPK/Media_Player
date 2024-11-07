import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI,getAllCategoryAPI, updateCategoryAPI, saveVideoAPI } from '../services/allAPI'



const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {

  const [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard] = useState("")
  const [allVideos,setAllVideos] = useState([])

  useEffect(()=>{
    getAllVideos()
    getAllCategory() 
  },[addResponseFromHome,deleteVideoResponseFromVideoCard,deleteResponseFromCategory])
  

  console.log(allVideos);
  
    const getAllVideos = async ()=>{
      try {
        const result = await getAllVideosAPI()
        console.log(result);
        if (result.status>=200 && result.status<300) {
          setAllVideos(result.data)
        }
      } catch (err) {
        console.log(err);
        
      }
    }

    const getAllCategory = async ()=>{
      try {
        const result = getAllCategoryAPI()
        console.log(result);
        
      } catch (err) {
      console.log(err);
      
      }

    }

    const dragOverView = (e)=>{
      e.preventDefault()
    }

    const categoryVideoDropView = async (e)=>{
      console.log("inside categoryVideoDropView");
      const {video,categoryDetails} = JSON.parse(e.dataTransfer.getData("dragData"))
      console.log(video,categoryDetails);
      const updateCategoryVideoList = categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)
      const updateCategory = {...categoryDetails,allVideos:updateCategoryVideoList}
      console.log(updateCategory);
      // update the category by deleting the item
      const result = await updateCategoryAPI(updateCategory)
      // usestate ifting to communicate data from view to category
      setDeleteResponseFromView(result)
      // use api to upload video
      await saveVideoAPI(video)
      // call getAllVideo function
      getAllVideos()
    }

  return (
    <>
    <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDropView(e)}>
      {
        allVideos?.length>0?
         allVideos?.map(video=>(
          <Col key={video?.id} className='mb-2' sm={12} md={6} lg={4}>
        <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard}  displayData={video}/>
      </Col>
         ))
         :
         <div>
          "No videos uploaded yet!!"
         </div>
      }
    </Row>
    </>
  )
}

export default View