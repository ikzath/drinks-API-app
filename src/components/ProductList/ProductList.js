import React, { useState, useEffect } from 'react';
import {
    ProductContainer,
    ProductContent,
    ProductTitle,
    ProductCardContent,
    ProductCard,
    ProductIconContainer,
    ProductIcon,
    ProductCardTitle,
    ProductCardText,
    ButtonModal
} from '../Products/ProductElements';
import Modal from './Modal';


export const ProductList = ({products}) => {

    const [active, setActive] = useState(false);
    const [currentState, setcurrentState] = useState({})
    const [ingredients1, setingredients1] = useState('')
    const [ingredients2, setingredients2] = useState('')
    const [ingredients3, setingredients3] = useState('')
    const [ingredients4, setingredients4] = useState('')
    const [ingredients5, setingredients5] = useState('')
      
    return (
        <div data-testid='Perfume-List'>
             <ProductContent>
                <ProductTitle >One Stop Drink Shop GMBH</ProductTitle>
                <ProductContainer>
                {products.map((item, idx)=> (
                    <ProductCardContent key={idx}>
                    <ProductCard>
                        <ProductIconContainer>
                        <ProductIcon src={item.strDrinkThumb}/>
                        </ProductIconContainer>
                            <ProductCardTitle>{item.strDrink}</ProductCardTitle>
                            <ProductCardText>{item.strAlcoholic}</ProductCardText>                         
                            <ButtonModal onClick={()=> {
                            setcurrentState(item);
                            setActive(true);
                            setingredients1(item.strIngredient1)
                            setingredients2(item.strIngredient2)
                            setingredients3(item.strIngredient3)
                            setingredients4(item.strIngredient4)
                            setingredients5(item.strIngredient5)
                            }}
                            >Ingredients & Instructions</ButtonModal>   
                                <Modal
                                    active={active}
                                    hideModal={() => setActive(false)}
                                    ing1={ingredients1} 
                                    ing2={ingredients2} 
                                    ing3={ingredients3} 
                                    ing4={ingredients4} 
                                    ing5={ingredients5}                                     
                                    children={currentState}
                                    >   
                                </Modal>
                        </ProductCard>
                    </ProductCardContent> 
                    ))}
                </ProductContainer>
            </ProductContent>
        </div>
    )
}

export default ProductList