import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

const Home = () => {

  const [deleteResponseFromCategory,setDeleteResponseFromCategory] = useState("")
  const [addResponseFromHome,setAddResponseFromHome] = useState("")
  const [deleteResponseFromView,setDeleteResponseFromView] = useState("")

  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container mb-5 d-flex justify-content-between">
        <Add setAddResponseFromHome={setAddResponseFromHome}/>
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div className="container-fluid row my-5">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View addResponseFromHome={addResponseFromHome} deleteResponseFromCategory={deleteResponseFromCategory} setDeleteResponseFromView={setDeleteResponseFromView}/>
        </div>
        <div className="col-lg-6">
        <Category setDeleteResponseFromCategory={setDeleteResponseFromCategory} deleteResponseFromView={deleteResponseFromView}/>
        </div>
      </div>
    </div>
  )
}

export default Home