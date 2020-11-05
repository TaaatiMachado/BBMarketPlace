import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {MdAddShoppingCart} from 'react-icons/md'
import './car-style.css'


export default () => (
    <Carousel>
        <div className="d-flex">
        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://images.zonasul.com.br/imagem1000X1000/2020519_20087.jpg" alt="ALFACE"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Alface crespa</Card.Title>
            <Card.Text>
             R$ 1,68 (Un)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes"> <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://www.emporiumterrara.com.br/wp-content/uploads/2018/09/tomate-italiano.png" alt="Tomate"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Tomate</Card.Title>
            <Card.Text>
             R$ 6,35 (Kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://cxfartamedia.s3.sa-east-1.amazonaws.com/wp-content/uploads/2020/08/13171420/Cenoura-1-1.png" alt="Cenoura"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Cenoura</Card.Title>
            <Card.Text>
             R$ 2,69 (Kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://cdn.garciasupermercados.com.br/media/catalog/product/cache/1/image/1000x1000/17f82f742ffe127f42dca9de82fb58b1/p/r/produto_341_batata_inglesa_copy_.jpg" alt="Batata Lisa"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Batata Lisa</Card.Title>
            <Card.Text>
             R$ 1,95 (Kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://verandelivery.vteximg.com.br/arquivos/ids/168805-1000-1000/1503561.jpg?v=637274174702370000" alt="Alho"/>
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
          <Card.Img variant="top" className="img-prd" src="https://images.zonasul.com.br/imagem1000X1000/2020519_19725.jpg" alt="Brócolis"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Brócolis</Card.Title>
            <Card.Text>
             R$ 4,68 (Un)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://hiperideal.vteximg.com.br/arquivos/ids/170995-1000-1000/51055.jpg?v=636616549635870000" alt="Cebola"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Cebola</Card.Title>
            <Card.Text>
             R$ 3,69 (Kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://koch-img.azureedge.net/product/29820-alho-poro-unidade-g.jpg" alt="Alho Poró"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Alho Poró</Card.Title>
            <Card.Text>
             R$ 4,98 (Un)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://d26lpennugtm8s.cloudfront.net/stores/746/397/products/chicoria-branca11-3b9d45bca026d7f74015220515182000-1024-1024.jpg" alt="Chicória"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Chicória</Card.Title>
            <Card.Text>
             R$ 2,74 (Un)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://muffatosupermercados.vteximg.com.br/arquivos/ids/217383-1000-1000/Maca-Gala-Kg-3346.jpg?v=636080856944330000" alt="Maçã"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Maçã</Card.Title>
            <Card.Text>
             R$ 4,35 (Kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        </div>
        <div className="d-flex">
        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://cd.shoppub.com.br/cenourao/media/cache/c5/c9/c5c9a07e53bb4570784f12553e31ded9.jpg" alt="mamão"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Mamão papaya</Card.Title>
            <Card.Text>
             R$ 5,21 (Kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://images.zonasul.com.br/imagem1000X1000/201494_1060a.jpg" alt="Chuchu"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Chuchu</Card.Title>
            <Card.Text>
             R$ 2,25 (Kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/beterraba[1]-1000x1000.jpg" alt="Beterraba"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Beterraba</Card.Title>
            <Card.Text>
             R$ 4,68 (kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://organicossaocarlos.com.br/wp-content/uploads/2019/07/morango.jpg" alt="Morango"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Morango</Card.Title>
            <Card.Text>
             R$ 4,98 (Bx)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" className="img-prd" src="https://images.zonasul.com.br/imagem1000X1000/2020424_kiwi_1081-2.jpg" alt="Quiwi"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Quiwi</Card.Title>
            <Card.Text>
             R$ 6,24 (Kg)
            </Card.Text>
            <Button className="buy-btn" block href="/prodDetalhes" > <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>
        </div>
 
    </Carousel>
);
