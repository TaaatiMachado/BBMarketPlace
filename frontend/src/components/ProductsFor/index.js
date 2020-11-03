import React from 'react';
import {MdModeEdit} from 'react-icons/md'
import {MdDeleteForever} from 'react-icons/md'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './prodfor-style.css'

export default function ProdutoFor() {
  return (
    
        <Card className="prod">
          <Card.Img variant="top" src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" alt="FONE JBL "/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Fone JBL</Card.Title>
            <Card.Text> R$ 750,00 </Card.Text>
            <Card.Text> Estoque: 9 </Card.Text>
            <Card.Text> Vendidos: 3 </Card.Text>


            <Button className="edit-btn" block> <MdModeEdit size={25} color="#FFF"/> Editar</Button>
            <Button className="remove-btn" block variant="outline-primary"> <MdDeleteForever size={25} /> Deletar</Button>

          </Card.Body>
        </Card>

  )
};

