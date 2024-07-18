import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addVideoHistory, deleteVideoApi, deleteVideoHistoryApi } from '../services/allApi'
addVideoHistory

function VideoCard({video, setDeleteVideoStatus, isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => { 
    setShow(true);
    const caption = video?.caption;
    const url = video?.embedLink;
    const time = new Date();
    const timeStamp = new Intl.DateTimeFormat("en-GB",{year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}).format(time);
   

    const reqBody = {
      caption, url, timeStamp
    }

    const result = await addVideoHistory(reqBody)
    console.log(result);
  }
  const handleDelete = async(id)=>{
      const result = await deleteVideoApi(id);
      setDeleteVideoStatus(result.data)
  }

  const videoDrag = (e, video)=>{
   
    e.dataTransfer.setData("videoDetails", JSON.stringify(video));
    // console.log(`dragged video details is ${video}`);
  }

  return (
    <>
      <Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e, video)} >
      {!isPresent && <Card.Img variant="top" src={video?.imageUrl} height={'300px'} onClick={handleShow} />}
      <Card.Body>
        <div className="d-flex justify-content-between">
           <Card.Text>{video?.caption}</Card.Text>      
           {!isPresent &&<Button variant="danger" onClick={() =>handleDelete(video?.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>}
        </div>
       
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${video?.embedLink}?autoplay=1`} title="Top Gun: Maverick | NEW Official Trailer (2022 Movie) - Tom Cruise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
     </Modal>

    
    </>
  )
}

export default VideoCard