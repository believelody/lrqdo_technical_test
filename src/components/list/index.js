import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Item, Label, Segment } from 'semantic-ui-react'
import { useContextApp } from '../../context'
import "./List.css"

function List({ products }) {
    const { elementId, setElementId } = useContextApp()

    useEffect(() => {
        if (elementId) {
            const element = document.getElementById(elementId)
            if (element)
                element.scrollIntoView({ behavior: "smooth" })
        }
    }, [elementId])

    return (
        <Segment>
            <Grid>
                {
                    products.map(product => (
                        <Grid.Column id={`${product.product_name}-${product.code}`} textAlign="center" computer={4} tablet={8} mobile={16} key={product._id}>
                            <Item className="item-column">
                                <Item.Image fluid src={product.image_front_small_url} />
                                <Item.Content>
                                    <Item.Header>{product.product_name}</Item.Header>
                                    <Item.Description>
                                        {
                                            product.allergens_hierarchy.length ?
                                                product.allergens_hierarchy.map((allergen, i) => (
                                                    <Label key={i}>{allergen.split(":")[1]}</Label>
                                                )) :
                                                <i>There is no allergens recorded</i>
                                        }
                                    </Item.Description>
                                    <Item.Extra onClick={() => setElementId(`${product.product_name}-${product.code}`)} as={Link} to={`/products/${product.code}`}>
                                        Show Details
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Grid.Column>
                    ))
                }
            </Grid>
        </Segment>
    )
}

export default List
