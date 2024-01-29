
 'use client'
    import { useState } from "react";
    import { items } from "../public/Items.json";
    import { Carousel } from "react-bootstrap";
    import "bootstrap/dist/css/bootstrap.css";
    
    export default function BootstrapCarousel() {
      const { bootstrap } = items;
      const [index, setIndex] = useState(0);
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
      return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {bootstrap.map((item) => (
            <Carousel.Item key={item.id} className="itemP"interval={4000}>
              <img src={item.imageUrl} style={{ width: '100%' , height: '40rem' }} alt="slides" />
              <Carousel.Caption className="caption">
                
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      );
    }

