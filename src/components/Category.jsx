import React, { useEffect, useState } from 'react'
import { Modal,Form,FloatingLabel,Button } from 'react-bootstrap'
import { saveCategoryAPI, saveVideoAPI,getAllCategoryAPI, deleteCategoryAPI, updateCategoryAPI, deleteVideoAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


const Category = ({setDeleteResponseFromCategory}) => {

  const [categoryName,setCategoryName] = useState("")
  const [allCategories,setAllCategories]=useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategories()
  },[setDeleteResponseFromCategory])


  const handleSaveCategory = async ()=> {
    if (categoryName) {
      const categoryDetails = {categoryName,allVideos:[]}
      try {
        const result = await saveCategoryAPI(categoryDetails)
        if (result.status>=200 && result.status<300) {
          alert("Category Created")
          handleClose()

        }
      } catch (err) {
        console.log(err);
        
      }
    } else {
      alert("Please provide a name")
    }
  }
  

  const getAllCategories=async()=>{
    try{
      const result=await getAllCategoryAPI()
      console.log(result);
      
      if(result.status>=200 && result.status<300){
        setAllCategories(result.data)
      }
    }catch(err){
      console.log(err);
      
    }

  }

  const removeCategory = async (id)=>{
    try {
      await deleteCategoryAPI(id)
      getAllCategories()
    } catch (err) {
      console.log(err);
      
    }
  }

  const dragOverCategory = (e)=>{
    e.preventDefault()
  } 

  const videoCardDropOverCategory = async (e,catDetails)=>{
    console.log("inside videoCardDropOverCategory");
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);
    // ipdate category by add video to its allVideo
    catDetails.allVideos.push(videoDetails)
    console.log(catDetails);
    // api call to make update the category
    await updateCategoryAPI(catDetails)
    getAllCategories()
    const result = await deleteVideoAPI(videoDetails.id)
    setDeleteResponseFromCategory(result)
  }

  return (
    <>
    <div className="d-flex justify-content-around align-items-center">
      <h3>All Category's</h3>
      <button onClick={handleShow} className="btn btn-light ms-3 rounded-circle fw-bolder fs-5">+</button>
    </div>
    {/* display all category */}
    <div className="container-fluid mt-3">
      {/* single catogory view */}
      {
        allCategories?.length>0?
        allCategories?.map(catDetails=>(
          <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoCardDropOverCategory(e,catDetails)} key={catDetails?.id} className="border rounded p-3 mb-3">
        <div className="d-flex justify-content-between">
          <h5>{catDetails?.categoryName}</h5>
          <button className='btn' onClick={()=>removeCategory(catDetails.id)}><i className="fa-solid fa-trash text-danger"></i></button>
        </div>
        {/* display category videos */}
        <div className="row mt-2">
          {
            catDetails?.allVideos?.length>0 &&
            catDetails?.allVideos?.map(video=>(
              <div className="col-lg-4">
              {/* video card */}
              <VideoCard insideCategory={true} displayData={video} />
            </div>
            ))
          }
        </div>
      </div>
        ))
        :
        <div>
          No Ctaegory are added
        </div>
      }
    </div>

    <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingCategory"
        label="Category name"
        className="mb-3"
      >
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category