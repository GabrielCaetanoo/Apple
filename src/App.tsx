import React, {useState} from 'react';
import {Header, 
        ItemHeader, 
        TextHeader, 
        OptionsProductsApple, 
        ItemOptionProductApple, 
        TextOptionProductApple, 
        SpamNewOptionProductApple,} from './AppStyled';

import {AppleEducationBlock, BannerArea} from './App2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAffiliatetheme, faApple, faAppStore} from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faBagShopping, faComputer,faMobilePhone, faCableCar, faAnchor, faAppleWhole,  faChevronRight, faC } from '@fortawesome/free-solid-svg-icons';

function App() { 
  const imageURL = 'https://cdn.iconscout.com/icon/free/png-256/free-apple-595-434158.png';



  return (

      <div>
      <Header>
        <ItemHeader>
          <FontAwesomeIcon style={{color: '#f5f5f7', fontSize: '18px', opacity: '.8', cursor: 'pointer' }} icon={faApple} />
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Loja</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Mac</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Ipad</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Iphone</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Watch</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>TV e Casa</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Entreterimento</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Acessórios</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Suporte</TextHeader>
        </ItemHeader>

        <ItemHeader>
        <FontAwesomeIcon style={{color: '#f5f5f7', fontSize: '13px', opacity: '.8', cursor: 'pointer'}} icon={faMagnifyingGlass} />
        </ItemHeader>

        <ItemHeader>
        <FontAwesomeIcon style={{color: '#f5f5f7', fontSize: '14px', opacity: '.8', cursor: 'pointer'}} icon={faBagShopping} />
        </ItemHeader>

      </Header>

      <OptionsProductsApple>
        <ItemOptionProductApple>
        <FontAwesomeIcon style={{color: 'black', fontSize: '40px'}} icon={faComputer} />
        <TextOptionProductApple>Computador</TextOptionProductApple>
        <SpamNewOptionProductApple type="span-new-option">Novo</SpamNewOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
        <FontAwesomeIcon style={{color: 'black',fontSize: '40px'}} icon={faMobilePhone} />
        <TextOptionProductApple>Celular</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
        <FontAwesomeIcon style={{color: 'black',fontSize: '45px'}} icon={faCableCar} />
        <TextOptionProductApple>Cabos</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
        <FontAwesomeIcon style={{color: 'black',fontSize: '45px' }} icon={faAffiliatetheme} />
        <TextOptionProductApple>Trocas</TextOptionProductApple>
        <SpamNewOptionProductApple type="span-new-option">Novo</SpamNewOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
        <FontAwesomeIcon style={{color: 'black',fontSize: '45px'}} icon={faAppStore} />
        <TextOptionProductApple>AppStore</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
        <FontAwesomeIcon style={{color: 'black',fontSize: '45px' }} icon={faAnchor} />
        <TextOptionProductApple>Ancore</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
        <FontAwesomeIcon style={{color: 'black',fontSize: '45px' }} icon={faAppleWhole} />
        <TextOptionProductApple>Make it</TextOptionProductApple>
        </ItemOptionProductApple>
      </OptionsProductsApple>

      <AppleEducationBlock>
        
        <p>Economize na compra do MacBook Air e do MacBookPro de 13 polegadas na Apple Store Educacional*. <a href="https://apple.com.br">Comprar <FontAwesomeIcon style={{fontSize: 9}} icon={faChevronRight} /> </a> </p>
      </AppleEducationBlock>
      <BannerArea>
        <SpamNewOptionProductApple>Novo</SpamNewOptionProductApple>
        <h1>MacBook Air</h1>
        <h2>Livre, leve e voa.</h2>
        <p>A partir de R$ 13.999</p>

      </BannerArea>
        
      <img src={imageURL} alt="Descrição da imagem"/>
      </div>


    );

}
export default App;
