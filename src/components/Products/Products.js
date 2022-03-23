import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import { Select, Button, ButtonWrapper, ButtonContainer, ProductNoListing } from '../Products/ProductElements';
import Paginate from "../Paginate/Paginate";
import axios from 'axios';

const Products = () => {

    const [products, setProdcuts] = useState([]);
    const [filterByType, setFilterByType] = useState("All");
    const [filterByBrand, setFilterByBrand] = useState("All");
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const getUnique = ((items, value)=> {
        return [...new Set(items.map(item => item[value]))]
    })

    // get unique option value keys
    let types = getUnique(products, 'strCategory')
        types = ['All', ...types]
        types= types.map((option, idx) => (
        <option key={idx} value={option.type}>{option}</option>
    ))

    let brand = getUnique(products, 'strGlass')
    brand = ['All', ...brand]
    brand= brand.map((option, idx) => (
    <option key={idx} value={option.brand}>{option}</option>
))

    function onChangeBrand(e){
        setFilterByBrand(e.target.value)
    }

    function onChangeType(e){
        setFilterByType(e.target.value)
    }

    const dataSet = () => {
        return axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f')
        .then(({ data }) => setProdcuts(data.drinks))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        let result = [...products]; 

        if(filterByType === 'All' && filterByBrand === 'All' ){
            setResults(result)
        }           
        if(filterByType !== 'All') {
            result = result.filter(item => item.strCategory === filterByType);      
        }         
        if(filterByBrand !== 'All') {
            result = result.filter(item => item.strGlass=== filterByBrand);      
        }  
        
        setResults(result)
        }, [products, filterByBrand, filterByType])

        useEffect(() => {
          dataSet()
        }, [])
        
        
        function onClickSort(){
            const dataArray = [ ...results]
            setResults(dataArray.sort((a,b) => a.strDrink.localeCompare(b.strDrink)));
        }

        function onClickSortDesc(){
            const dataArray = [ ...results]
            setResults(dataArray.sort((a,b) => b.strDrink.localeCompare(a.strDrink)));
        }

        function filterByCategory(){
            const dataArray = [ ...results]
            setResults(dataArray.filter(drink => drink.strAlcoholic === "Non alcoholic"))
        }
                  
        // Get current posts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);

        // Change page
        const paginate = pageNumber => setCurrentPage(pageNumber);
        
    return (
        <div data-testid='product-1'>
             <label> Filter by Category : </label>
            <Select name='products' onChange={(e)=>onChangeType(e)}>
                {types}
            </Select><br />
            <label> Filter by Glass : </label>
            <Select name='products' onChange={(e)=>onChangeBrand(e)}>
                {brand}
            </Select>
            <div>
            <ButtonContainer>
                <ButtonWrapper>
                    <Button data-testid='button-1' primary onClick={filterByCategory}>Non- Alcoholic Drinks </Button>  
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button data-testid='button-1' primary onClick={onClickSort}> Sort by ascending order </Button>  
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button data-testid='button-1' primary onClick={onClickSortDesc}> Sort by descending order </Button>  
                </ButtonWrapper>
            </ButtonContainer>
            </div>
            {results.length ?
           <ProductList products={currentPosts}/> :  <ProductNoListing>No such Drinks available</ProductNoListing> }
            <Paginate
                postsPerPage={postsPerPage}
                totalPosts={results.length}
                paginate={paginate}
            />        
        </div>
    )
}

export default Products;







