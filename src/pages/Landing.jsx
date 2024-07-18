import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'


function Landing() {
  return (
    <>
    <Row className="w-100 mt-5 d-flex justify-content-center align-items-center ps-4">
      <Col md={1}></Col>
      <Col md={5} className="p-3">
        <h3>Welcome to <span className="text-warning">Media Player</span></h3>
        <p style={{textAlign:'justify'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officiis necessitatibus commodi maxime voluptates impedit explicabo omnis ad adipisci et aliquid aut corporis autem, modi culpa iste iusto. Placeat, cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis obcaecati laudantium natus ad ex quaerat, recusandae perspiciatis sit corrupti. Accusamus alias accusantium a sapiente facilis maiores saepe incidunt neque magnam.
        </p>
        <button className="btn btn-warning mt-5">Get started</button>
      </Col>
      <Col md={1}></Col>
      <Col md={5} className="d-flex justify-content-center align-items-center p-5">
      <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className="w-75"/>
      </Col>
    </Row>
    

    <div className="contaainer">
      <h3 className="text-center my-5">Features</h3>
      <Row>
        <Col md={1}></Col>
        <Col md={3}>
        <Card style={{ width: '100%' }} className='p-3'> 
          <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" height={'300px'} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
       </Card>
        </Col>
        <Col md={4} className='px-md-5'>
            <Card style={{ width: '100%' }} className='p-3 pb-4'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
           </Card>
        </Col>
        <Col md={3}>
            <Card style={{ width: '100%' }} className='p-3'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
           </Card>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 border border-2 rounded border-secondary p-3 mt-5">
          <div className="row p-4">
            <div className="col-md-6">
                <h3 className='text-warning'>Simple fast and Powerful</h3>
                <p className='mt-5'><span className='fs-4'>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt. </p>
                <p><span className='fs-4'>Play Everything</span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt. </p>
                <p><span className='fs-4'>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt. </p>
            </div>
            <div className="col-md-6">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/IWOPRFRNj3g" title="Parayuvaan Video Song | Ishq Movie | ShaneNigam | Ann Sheethal | Jakes Bejoy | SidSriram | Neha Nair" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    </>
      )
}

export default Landing