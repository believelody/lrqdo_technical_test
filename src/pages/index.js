import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Loader, Segment } from 'semantic-ui-react'
import List from '../components/list'
import Paginations from '../components/paginations'
import Search from '../components/search/Search'
import config from '../config'
import { useContextApp } from '../context'

const Home = () => {
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(false)
    const { search, setSearch, index, setIndex, setElementId } = useContextApp()

    const handleIndex = (e, { activePage }) => {
        setElementId("")
        setIndex(activePage)
    }

    useEffect(() => {
        const fetchProducts = async (word, index) => {
            try {
                setLoading(true)
                const { data } = await axios.get(`${config.searchApiUrl}?search_terms=${word}&page=${index}&json=1`)
                setProducts(data?.products)
                setTotalPages(data?.page_size)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(false)
            }
        }
        if (search) {
            fetchProducts(search, index)
        }
    }, [search, index])

    return (
        <Container>
            <Segment inverted>
                <Search fluid resetIndex={setIndex} search={search} setSearch={setSearch} />
            </Segment>
            {
                loading && <Loader active inline="centered" content="Loading products..." size="huge" />
            }
            {
                products.length > 0 && !loading &&
                <>
                    <Paginations index={index} totalPages={totalPages} handleIndex={handleIndex} />
                    <List products={products} />
                    <Paginations index={index} totalPages={totalPages} handleIndex={handleIndex} />
                </>
            }
            {
                !products.length && !loading &&
                <Segment>
                    There is no result yet. Search a product in the search input ;)
                </Segment>
            }
        </Container>
    )
}

export default Home
