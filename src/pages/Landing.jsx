import React from 'react'
import { Link } from 'react-router-dom'
import mainImg from '../assets/main.png'
import feature1 from '../assets/img1.jpg'
import feature2 from '../assets/img2.jpg'
import feature3 from '../assets/img3.png'
import { Card } from 'react-bootstrap'

function Landing() {
  return (
    <div style={{paddingTop:"100px"}} className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Spectrum</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img src={mainImg} alt="" className="ms-5 img-fluid p-4" />
        </div>
      </div>

      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
              <Card.Img height={'200px'} variant="top" src={feature1} />
                <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>Users can categorise the videos by drag and drop feature
            </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
              <Card.Img height={'200px'} variant="top" src={feature2} />
                <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>Users can upload, view and remove the videos.
            </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
              <Card.Img height={'200px'} variant="top" src={feature3} />
                <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>Users can manage the watch history of all videos.
            </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
      </div>

      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}>
            <span className="fs-5 fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id assumenda quaerat
          </p>
          <p style={{textAlign:'justify'}}>
            <span className="fs-5 fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id assumenda quaerat
          </p>
          <p style={{textAlign:'justify'}}>
            <span className="fs-5 fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id assumenda quaerat
          </p>
        </div>
        <div className="col">

        </div>
        <div className="col-lg-6">
        <iframe width="100%" height="365" src="https://www.youtube.com/embed/W4RanbR4r64" title="SoundCloud x Monday to Monday - Pass the Aux (Sept 10, 2024)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing