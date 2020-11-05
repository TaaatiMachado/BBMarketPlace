import React from 'react';
import {MdModeEdit} from 'react-icons/md'
import {MdDeleteForever} from 'react-icons/md'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './prodfor-style.css'

export default function ProdutoFor() {
  return (
    
        <Card className="m-2 d-flex flex-column p-2">
          <Card.Img variant="top" className="prod-img" src="https://images.zonasul.com.br/imagem1000X1000/2020519_20087.jpg" alt="ALFACE"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Alface crespa</Card.Title>
            <Card.Text> R$ 1,68 </Card.Text>
            <Card.Text> Estoque: 9 </Card.Text>
            <Card.Text> Vendidos: 3 </Card.Text>


            <Button className="edit-btn" block> <MdModeEdit size={25} color="#FFF"/> Editar</Button>
            <Button className="remove-btn" block variant="outline-primary"> <MdDeleteForever size={25} /> Deletar</Button>

          </Card.Body>
        </Card>

  )
};

