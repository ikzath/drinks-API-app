import styled from 'styled-components';

export const PaginateBar = styled.div`
    display: flex; 
    margin-left: 65px;  
    margin-bottom: 20px;
`;

export const PaginateBarElements = styled.div`
    margin-left: 10px;   
`;

export const PaginateButton = styled.button`
    padding: 6px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
    background-color: #69a81b;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
    :active {
    background-color: #005fa3;
    }
`;

