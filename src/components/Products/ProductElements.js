import styled from 'styled-components';
import { BiDetail, BiDish } from 'react-icons/bi';
import { Container } from '../../GlobalStyles';

export const ProductContent = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 90rem;
`;

export const ProductContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));   */
    grid-auto-rows: 1fr;
    grid-gap: 20px;
    align-items: left;
    padding: 5rem 8rem;
    color: #333333;
    ${Container};
`;

export const ProductTitle = styled.h2`
    font-size: 4rem;
    font-weight: bold;
    color: #69a81b;
    `;

export const ProductCardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
    @media only screen and (max-width:900px){
        flex-direction: column;
    }
`;

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    text-align: center;
    width: 30rem;
    height: 30rem;
    background-color: #fff;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    transition: all .5s ease;
&:not(:last-child) {
    margin-right: 5rem;
    @media only screen and (min-width: 1300px){
        margin-right: 10rem;
    }
    @media only screen and (min-width: 1500px){
        margin-right: 20rem;
    }
    @media only screen and (max-width:900px){
        margin-bottom: 10rem;
    }
    @media only screen and (max-width: 800px){
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
    }
}
@media only screen and (max-width:900px){
        width: 20rem;
        margin-right: 5rem;

}
@media only screen and (max-width:500px){
        width: 20rem;
        margin-right: 5rem;
}
@media only screen and (min-width:1890px){
        width: 20rem;
        margin-right: 5rem;
}
/* &:hover {
    box-shadow:  0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #E38B06;
    color: #fff;
    
} */
`;

export const ProductIconContainer = styled.div`
    width: 12rem;
    height: 12rem;
    transition: all .3s ease-out;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ProductIcon = styled.img`
    width: 100px;
    height: 100px
`;

export const ProductIcon2 = styled(BiDetail)`
    color: #333;
    font-size: 6rem;
`;
export const ProductIcon3 = styled(BiDish)`
    color: #333;
    font-size: 6rem;
`;

export const ProductCardTitle = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    padding-top: 1rem;   
    color: blue; 
`;

export const ProductCardText = styled.p`
    font-size: 1.5rem;
    padding: 1rem 2rem;
    color: blue;
`;

export const Select = styled.select`
    width: 25%;
    height: 60px;
    background: #e6e4dc;
    color: black;
    padding-left: 5px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    margin-left: 10px;
    margin-top: 20px;
    border-radius: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    background-color: whitesmoke;
  }
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-right: 20px;
    `

export const ButtonWrapper = styled.section`
    background-color: whitesmoke;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
    border-radius: 20px;
    background-color: ${({ primary }) => primary ? '#69a81b' : 'lightgreen'};
    color: ${({ primary }) => primary ? 'whitesmoke' : '#fff'};
    padding: 18px 30px;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    border: none;
    transition: transform .2s ease;
    &:hover{
        background-color: ${({ primary }) => primary ? 'white' : '#E38B06'};  
    transform: translateY(-.5rem) scale(1.02);
    color: #000;
    }
`;

export const ProductNoListing = styled.div`
    height: 90rem;
    font-size: 3rem;
`
export const ButtonModal = styled.button`
  background: #69a81b;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 2px solid #69a81b;
  border-radius: 10px;
  cursor: pointer;
`;