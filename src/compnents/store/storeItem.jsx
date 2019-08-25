import React from 'react';
import Card from 'react-bootstrap/Card'
import './storeitem.css'
const  storeItem= ({image,title,price,category}) => {
    

        return (<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} className="img"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  <p>Price : {price}</p>
                  <br/>
                  <p>Category: {category}</p>
    </Card.Text>
            </Card.Body>
           
          
        </Card>)

}   
export default storeItem ;