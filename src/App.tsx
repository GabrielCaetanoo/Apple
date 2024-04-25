import React, {useState} from 'react';
import {Header, 
        ItemHeader, 
        TextHeader, 
        OptionsProductsApple, 
        ItemOptionProductApple, 
        TextOptionProductApple, 
        SpamNewOptionProductApple, BannerMacPro, } from './AppStyled';


import {AppleEducationBlock, BannerArea, PurschaseButton,BannerAreaButtons, SelectMac, OptionsMac, OptionMac, OptionMacc, OptionsMacc, ColorOptionsMac, ColorOptionMac, } from './App2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAffiliatetheme, faApple, faAppStore} from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faBagShopping, faComputer,faMobilePhone, faCableCar, faAnchor, faAppleWhole,  faChevronRight, faC } from '@fortawesome/free-solid-svg-icons';

function App() { 
  const imageURL = 'https://www.apple.com/v/macbook-air/s/images/overview/hero/hero_static__c9sislzzicq6_large.jpg';
  const ImageURL2 = 'https://www.mastertronic.com.br/media/interface/images/mnej3-4.jpg';
  const MacImage = 'https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png';
  const MacPro = 'https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png';
  const VideoMac = 'https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/small.mp4#t=6.076846'

  const [optionMac, setOptionMac] = useState<boolean>(true); // Corrigindo a definição do estado

  return (

      <>
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
        <SpamNewOptionProductApple marginTop="76px" type="span-new-option">Novo</SpamNewOptionProductApple>
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
        <SpamNewOptionProductApple marginTop="76px" type="span-new-option">Novo</SpamNewOptionProductApple>
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



    <BannerAreaButtons style={{ marginBottom: '10px' }}>
      <PurschaseButton background="#0071e3" color="white">Comprar</PurschaseButton>
      <PurschaseButton background="transparent" underline={true} color="#0071e3">Saiba mais <FontAwesomeIcon style={{ fontSize: 11, marginLeft: 5 }} icon={faChevronRight} /></PurschaseButton>
    </BannerAreaButtons>
    {/* Primeira imagem */}
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={imageURL} alt="Descrição da imagem" style={{ width: '1000px' }} />
  </div>
  </BannerArea>

  <BannerMacPro>
  <SpamNewOptionProductApple marginTop='45px'>Novo</SpamNewOptionProductApple>
    <h1>MacBook Pro de 13 pol.</h1>
    <h2>Pro em qualquer lugar.</h2>
    <p>A partir de R$ 15.299</p>

    <BannerAreaButtons style={{ marginBottom: '10px' }}>
      <PurschaseButton background="#0071e3" color="white">Comprar</PurschaseButton>
      <PurschaseButton background="transparent" underline={true} color="#0071e3">Saiba mais <FontAwesomeIcon style={{ fontSize: 11, marginLeft: 5 }} icon={faChevronRight} /></PurschaseButton>
    </BannerAreaButtons>

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {/* Segunda imagem */}
      <img src={ImageURL2} alt="Descrição da segunda imagem" style={{ width: '1000px' }} />
    </div>

  </BannerMacPro>

  <SelectMac>
  <h1>Qual é o Mac Ideal para você?</h1>

  <OptionsMac>
      <OptionMac
           onClick={() => {
           setOptionMac(!optionMac);
           }}
           selected={optionMac}
           style={{ width: "75px" }} // Usar uma abordagem de estilo inline para a largura
>
  Notebook
      </OptionMac>

      <OptionMac
           onClick={() => {
           setOptionMac(!optionMac);
           }}
           selected={!optionMac}
           style={{ width: "60px", float: "right" }} // Definir o estilo para alinhar à direita
>
  Desktop
     </OptionMac>
  </OptionsMac>

  <OptionsMacc>

    
    <OptionMacc>
        <img src={MacImage} alt='tanto faz' style={{ width: '167px' }} />
        <ColorOptionsMac>
          <ColorOptionMac background="#565353"></ColorOptionMac>
          <ColorOptionMac background="black"></ColorOptionMac>
          <ColorOptionMac background="#d8d8d8"></ColorOptionMac>
        </ColorOptionsMac>

        <SpamNewOptionProductApple fontSize="11px" marginTop="21px"></SpamNewOptionProductApple>


        <h1>MacBook Air.<br/><br/></h1>

        <h2>A partir de R$ 11.599</h2>

    <BannerAreaButtons style={{ marginBottom: '10px' }}>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <PurschaseButton background="#0071e3" color="white">Comprar</PurschaseButton>
       <PurschaseButton background="transparent" underline={true} color="#0071e3">Saiba mais <FontAwesomeIcon style={{ fontSize: 11, marginLeft: 5 }} icon={faChevronRight} /></PurschaseButton>
       </div>
    </BannerAreaButtons>


    </OptionMacc>

    <OptionMacc>
        <img src={MacImage} alt='tanto faz' style={{ width: '167px' }} />
        <ColorOptionsMac>
          <ColorOptionMac background="#565353"></ColorOptionMac>
          <ColorOptionMac background="black"></ColorOptionMac>
          <ColorOptionMac background="#d8d8d8"></ColorOptionMac>
          <ColorOptionMac background="#9e5858"></ColorOptionMac>
        </ColorOptionsMac>

        <SpamNewOptionProductApple fontSize="11px" marginTop="10px">Novo</SpamNewOptionProductApple>

        <h1>MacBook Air<br/> <br/></h1>

        <h2>A partir de R$ 11.599</h2>

    <BannerAreaButtons style={{ marginBottom: '10px' }}>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <PurschaseButton background="#0071e3" color="white">Comprar</PurschaseButton>
       <PurschaseButton background="transparent" underline={true} color="#0071e3">Saiba mais <FontAwesomeIcon style={{ fontSize: 11, marginLeft: 5 }} icon={faChevronRight} /></PurschaseButton>
       </div>
    </BannerAreaButtons>


    </OptionMacc>

    <OptionMacc>
        <img src={MacImage} alt='tanto faz' style={{ width: '167px' }} />
        <ColorOptionsMac>
          <ColorOptionMac background="black"></ColorOptionMac>
          <ColorOptionMac background="#d8d8d8"></ColorOptionMac>
        </ColorOptionsMac>

        <SpamNewOptionProductApple fontSize="11px" marginTop="10px">Novo</SpamNewOptionProductApple>

        <h1>MacBook Pro <br/> de 13 pol.</h1>

        <h2>A partir de R$ 11.599</h2>

    <BannerAreaButtons style={{ marginBottom: '10px' }}>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <PurschaseButton background="#0071e3" color="white">Comprar</PurschaseButton>
       <PurschaseButton background="transparent" underline={true} color="#0071e3">Saiba mais <FontAwesomeIcon style={{ fontSize: 11, marginLeft: 5 }} icon={faChevronRight} /></PurschaseButton>
       </div>
    </BannerAreaButtons>
       

        

    </OptionMacc>

    <OptionMacc>
        <img src={MacPro} alt='tanto faz' style={{ width: '167px' }} />
        <ColorOptionsMac>
          <ColorOptionMac background="#565353"></ColorOptionMac>
          <ColorOptionMac background="#d8d8d8"></ColorOptionMac>
        </ColorOptionsMac>

        <SpamNewOptionProductApple fontSize="11px" marginTop="21px"></SpamNewOptionProductApple>


        <h1>MacBook Pro <br/> de 14 e 16 pol.</h1>

        <h2>A partir de R$ 11.599</h2>

    <BannerAreaButtons style={{ marginBottom: '10px' }}>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <PurschaseButton background="#0071e3" color="white">Comprar</PurschaseButton>
       <PurschaseButton background="transparent" underline={true} color="#0071e3">Saiba mais <FontAwesomeIcon style={{ fontSize: 11, marginLeft: 5 }} icon={faChevronRight} /></PurschaseButton>
       </div>
    </BannerAreaButtons>   
    </OptionMacc>
  </OptionsMacc>
</SelectMac>



</>





    );

}
export default App;
