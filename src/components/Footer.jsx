import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:"300px"}} className='mt-5 container w-100'>
      <div className="d-flex justify-content-between">
        {/* intro */}
        <div style={{width:"400px"}} className='flex'>
          <div className='d-flex'>
            <img
                alt=""
                src="./logo.png"
                width="35"
                height="35"
                className="d-inline-block align-top"
                style={{marginRight:"5px"}}
              />
            <h5>Spectrum</h5>
          </div>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/Landing'} style={{textDecoration:"none",color:"white"}}>Landing</Link>
          <Link to={'/Home'} style={{textDecoration:"none",color:"white"}}>Home</Link>
          <Link to={'/History'} style={{textDecoration:"none",color:"white"}}>History</Link>
        </div>
        {/* guides */}
        <div className="d-flex flex-column">
          <h5>Guides</h5>
          <a style={{textDecoration:'none', color:"white"}} href="https://react.dev/" target='_blank'>React</a>
          <a style={{textDecoration:'none', color:"white"}} href="https://reactrouter.com/en/main" target='_blank'>React Router</a>
          <a style={{textDecoration:'none', color:"white"}} href="https://react-bootstrap.netlify.app/" target='_blank'>React Boostrap</a>
        </div>
        {/* contact */}
        <div className="d-flex flex-column">
          <h5>Contact</h5>
          <div className='d-flex'>
            <input type="text" placeholder='Enter your Email here!' className='form-control me-2'/>
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <a href="https://x.com/i/flow/login?mx=2" style={{textDecoration:'none',color:"white"}} target='_blank'><i class="fa-brands fa-twitter"></i></a>
            <a href="https://x.com/i/flow/login?mx=2" style={{textDecoration:'none',color:"white"}} target='_blank'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/i/flow/login?mx=2" style={{textDecoration:'none',color:"white"}} target='_blank'><i class="fa-brands fa-facebook"></i></a>
            <a href="https://x.com/i/flow/login?mx=2" style={{textDecoration:'none',color:"white"}} target='_blank'><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://x.com/i/flow/login?mx=2" style={{textDecoration:'none',color:"white"}} target='_blank'><i class="fa-brands fa-github"></i></a>
            <a href="https://x.com/i/flow/login?mx=2" style={{textDecoration:'none',color:"white"}} target='_blank'><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className="text-center mt-3">Copyright &copy; July 2024 Batch, Media Player App. Build with React</p>
    </div>
  )
}

export default Footer