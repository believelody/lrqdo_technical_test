import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/detail'
import config from '../config'

const DetailsPage = () => {
    const { code } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`${config.viewApiUrl}/${code}.json`)
                setProduct(data.product)
            } catch (err) {
                console.log(err)
            }
        }
        if (code) {
            fetchProduct()
        }
    }, [code])

    return <Detail product={product} />
}

export default DetailsPage
