import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* { 
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}

body {
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;
}

h2 {
    margin: 25px 120px ;
    font-family: Poppins, sans-serif;
    color: #350065;

}

img {
    width: 100%;
    padding: 0.8% 5%;
}

body, input, button {
    font: Roboto, 14px sans-serif;
}


button{ 

    cursor: pointer;
}

.control-dots{
    display: none;
}

.carousel-status{
    display: none;
}

.carousel .slide{
    background-color: #fff;
}

.carousel-root {
    margin: 0 50px;
    place-items: center;
    align-items: center;
    justify-content: center;
}

.carousel.carousel-slider .control-arrow {
    border-radius: 500px;
    margin: 10% 10%;
    place-items: center;
    background: #350065;

}

.carousel.carousel-slider .control-arrow:hover{
    background: #350065;

}

.carousel .carousel-slider {
    align-items: center;
    justify-content: center;
}
`