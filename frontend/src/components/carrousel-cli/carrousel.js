import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {MdAddShoppingCart} from 'react-icons/md'
import './carcli-style.css'


export default () => (
    <Carousel>
        <div className="d-flex">
        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-cli" src="https://cxfartamedia.s3.sa-east-1.amazonaws.com/wp-content/uploads/2020/08/13171420/Cenoura-1-1.png" alt="Cenoura"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Cenoura</Card.Title>
            <Card.Text>
             R$ 2,69 (Kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-cli" src="https://cdn.garciasupermercados.com.br/media/catalog/product/cache/1/image/1000x1000/17f82f742ffe127f42dca9de82fb58b1/p/r/produto_341_batata_inglesa_copy_.jpg" alt="Batata Lisa"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Batata Lisa</Card.Title>
            <Card.Text>
             R$ 1,95 (Kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-cli" src="https://verandelivery.vteximg.com.br/arquivos/ids/168805-1000-1000/1503561.jpg?v=637274174702370000" alt="Alho"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Alho</Card.Title>
            <Card.Text>
             R$ 25,90 (Kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>


        </div>
        <div className="d-flex">
        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-cli" src="https://hiperideal.vteximg.com.br/arquivos/ids/170995-1000-1000/51055.jpg?v=636616549635870000" alt="Cebola"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Cebola</Card.Title>
            <Card.Text>
             R$ 3,48
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-cli" src="https://koch-img.azureedge.net/product/29820-alho-poro-unidade-g.jpg" alt="Alho Poró"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Alho Poró</Card.Title>
            <Card.Text>
             R$ 4,80
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-cli" src="https://d26lpennugtm8s.cloudfront.net/stores/746/397/products/chicoria-branca11-3b9d45bca026d7f74015220515182000-1024-1024.jpg" alt="Chicória"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Chicória</Card.Title>
            <Card.Text>
             R$ 1,49
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        </div>

 
    </Carousel>
);
