import React, { useState } from 'react'
import { Modal,Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { saveVideoAPI } from '../services/allAPI';


const Add = ({setAddResponseFromHome}) => {

  const [invalidYoutubeLink,setinvalidYoutubeLink] = useState(false)

    const [videoDetails,setVideoDetails] = useState({
      caption:"",
      imgUrl:"",
      youtubeLink:""
    })

    console.log(videoDetails);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const extreactingEmbedinkFromYoutube = (userInputYoutubelink) =>{
      // setps to create emded linkd
      if (userInputYoutubelink.includes("https://www.youtube.com/watch?v=")) {

        console.log(userInputYoutubelink.split("v=")[1].slice(0,11));
        const videoId = userInputYoutubelink.split("v=")[1].slice(0,11)
        setinvalidYoutubeLink(false)
        setVideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
        
        
      }else{
        setinvalidYoutubeLink(true)
        setVideoDetails({...videoDetails,youtubeLink:""})
      }
    }

    const handleUploadVideo = async ()=>{
      // object destructure : const {key1,key2,.....} = object-name
      const {caption,imgUrl,youtubeLink} = videoDetails
      if (caption && imgUrl && youtubeLink) {
        // store video details permanently
        // alert("Data stores succesfully")
        try {
          const result = await saveVideoAPI(videoDetails)
          console.log(result);
          if (result.status>=200 && result.status<300) {
            // video added to json file
            alert("Video uploaded successfully")
            handleClose()
            // pass value from to jsonfile
            setAddResponseFromHome(result)
          } else {
            console.log(result);
            
          }
          
        } catch (err) {
          console.log(err);
          
        }
        
      }else{
        alert("Please fill the form !")
      }
    }
    


  return (
    <>
    <div className="d-flex align-items-center pb-4">
        <h5>
            Upoad new video
        </h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5 '>+</button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
          controlId="floatingCaption"
          label="Video caption"
          className="mb-3"
        >
          <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Caption" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingUrl"
          label="Video Image URL"
          className="mb-3"
        >
          <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Video Image URL" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingLink"
          label="Video Youtube URL"
          className="mb-3"
        >
          <Form.Control onChange={e=>extreactingEmbedinkFromYoutube(e.target.value)} type="text" placeholder="Video Youtube Link" />
        </FloatingLabel>

        {
          invalidYoutubeLink && <div className='text-danger'>Invalid Youtube Link..</div>
        }

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} className='btn btn-primary' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add