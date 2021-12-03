import React from 'react'
// import {CardGroup} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import '../styles/Category.css'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Category = () => {
    return (   
              
<Container >
  <Row className='row-cols-2 row-cols-md-6 g-2'>
    <Col>
        <Card className='h-100'>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/9d0c0944ccd05a4d3b390465266fa5b9.png" />
                <Card.Body>
                    <Card.Title>
                        <div className = "title">Sembako</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/f4053da971378138bbf188d2d34a4e4b.png" />
                <Card.Body>
                     <Card.Title>
                        <div className = "title">Lauk Pauk</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>
    
    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/47146072dd9c514fbfdcb09c01810baf.png" />
                <Card.Body>
                     <Card.Title>
                        <div className = "title">Sayuran & Bumbu Dapur</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>
    
    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/c2f096e7f9144734ebb585e6aa3ab4b2.png" />
                <Card.Body>
                    <Card.Title>
                        <div className = "title">Elektronik</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/localtbanner/532349a96103e1b3e4579e60c32a633f1d5a218280.png" />
                <Card.Body>
                     <Card.Title>
                        <div className = "title">Souvenir & Pesta</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>
    
    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/3be2302a48414f8759510f8eb1cb04da.png" />
                <Card.Body>
                    <Card.Title>
                        <div className = "title">Fashion & Aksesoris</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/63ebe4923e28d1c5ef868aa4f1a81bf9.png" />
                <Card.Body>
                    <Card.Title>
                        <div className = "title">Handphone & Aksesoris</div>

                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/4eec7769efd33776fa7a32b1fa192044.png" />
                <Card.Body>
                    <Card.Title>
                        <div className = "title">Perlengkapan Rumah Tangga</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/5fe4146c38c6047649f83592c4ed997c.png" />
                <Card.Body>
                    <Card.Title>
                        <div className = "title">Makanan & Minuman</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/a26456ec34b62afaec67cb2dae0a7308.png" />
                <Card.Body>
                    <Card.Title>
                        <div className = "title">Ibu & Anak</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/b34b067d721bfbfcb73e0289325b86e2.png" />
                <Card.Body>
                    <Card.Title>
                        <div className = "title">Hobi & Koleksi</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/1d624eaa2ed995f6535ad497bc3ce52c.png" />
                <Card.Body>
                    <Card.Title>
                        <div className = "title">Buku & Alat Tulis</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/a2bd2f43f4e4d363cd07a2eb73a6225c.png" />
                <Card.Body>
                     <Card.Title>
                        <div className = "title">Otomotif</div>
                    </Card.Title>
                </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src="https://assets.tokodistributor.com/dev-category-icon/735c08e6321f42277f474d8aa9f3a33d.png" />
                <Card.Title>
                    <div className = "title">Kecantikan</div>
                </Card.Title>
        </Card>
    </Col>
  </Row>
</Container>

  )

}

export default Category