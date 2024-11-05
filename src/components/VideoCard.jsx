import React, { useState } from 'react'
import { Card,Modal,Button } from 'react-bootstrap'
import { deleteVideoAPI, saveVideoHistoryAPI } from '../services/allAPI';


const VideoCard = ({displayData,setDeleteVideoResponseFromVideoCard,insideCategory}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)
    // store history in json

    const {caption,youtubeLink} = displayData
    const sysDateTime = new Date()
    const timeSpan = sysDateTime.toLocaleDateString('en-US',{timeZoneName:'short'})
    const historyDetails = {caption,youtubeLink,timeSpan}
    try{
      await saveVideoHistoryAPI(historyDetails)
    }catch(err){
      console.log(err);
      
    }
  }

  const deleteVideo = async (id) => {
    try {
      const result = await deleteVideoAPI(id)
      setDeleteVideoResponseFromVideoCard(result)
    } catch (err) {
      console.log(err);
    }
  }

  const videoCardDragStarted = (e,dragVideoDetails)=>{
    console.log("inside videocard with video id"+dragVideoDetails?.id);
    // share data using event drag start
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
    
  }

  return (
    <>
      <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ height: '250px' }}>
      <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displayData?.imgUrl} />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between text-center'>
          <p>{displayData?.caption}</p>
          {
            !insideCategory && <button className="btn" onClick={()=>deleteVideo(displayData?.id)}>
            <i className="fa-solid fa-trash text-danger"></i>
          </button>
          }
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="360" src={`${displayData?.youtubeLink}?autoplay=1`} title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard