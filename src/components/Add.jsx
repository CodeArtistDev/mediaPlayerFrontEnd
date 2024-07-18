import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { allVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddVideoStatus}) {

  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption:"",
    imageUrl: "",
    embedLink: ""
  })
  console.log(videoDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
   
  const getLink = (e)=>{
    const link = e.target.value;
    console.log(link);
    if(link.startsWith('https://youtu.be/')){
      const emblink1 = link.slice(17,28);
      setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${emblink1}`});
    }else{
      const emblink1 = link.slice(-11);
      setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${emblink1}`});
    }
  }


  const handleUpload = async(e) =>{
  e.preventDefault()

  const {caption, imageUrl, embedLink} = videoDetails
  if(!caption || !imageUrl ||!embedLink){
    toast.success('Please fill the form completely');
  }
  else{
    const result = await allVideoApi(videoDetails);
  
  if(result.status>=200 && result.status<300){
    toast.success('Video added successfully');
    handleClose();
    setAddVideoStatus(result.data);
  }else{
    toast.error('Something went wrong');
    console.log(result);
  }
}
}
  

  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn fs-5'><FontAwesomeIcon icon={faCloudArrowUp} /></button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border rounded p-3'>
            <div className="mb-2">
              <input type="text" className='form-control' placeholder='Video Caption' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})}/>
            </div>
            <div className="mb-2">
              <input type="text" className='form-control' placeholder='Video Images' onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})}/>
            </div>
            <div className="mb-2">
              <input type="text" className='form-control' placeholder='Video Url' onChange={(e)=>getLink(e)} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload} >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme="colored" autoClose={2000}/>
    
    </>
  )
}

export default Add