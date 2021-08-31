import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Grid, Header, Icon, Image, Label, List, Loader, Menu, Segment } from 'semantic-ui-react'
import "./Detail.css"

const Detail = ({ product }) => {
    const history = useHistory()
    return (
        <Container>
            <Menu>
                <Menu.Item name="back" onClick={() => history.goBack()}>
                    <Icon name="chevron left" />
                    Back to list
                </Menu.Item>
            </Menu>
            <Segment>
                {
                    product ?
                        <>
                            <Header as="h1" textAlign="center">{product.product_name}</Header>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column computer={6} tablet={4} mobile={16}>
                                        <Image centered src={product.image_url} />
                                    </Grid.Column>
                                    <Grid.Column computer={8} tablet={12} mobile={16}>
                                        <Header as="h3">Allergens</Header>
                                        <List>
                                            {
                                                product.allergens_hierarchy?.length ?
                                                    product.allergens_hierarchy.map((allergen, i) => (
                                                        <Label className="label-item" size="large" color="red" key={i}>{allergen.split(":")[1]}</Label>
                                                    )) :
                                                    <i>There is no allergens recorded</i>
                                            }
                                        </List>
                                        <Header as="h3">Ingredients</Header>
                                        <List>
                                            {
                                                product.ingredients?.length ? product.ingredients?.map((ingredient, i) => (
                                                    <Label className="label-item" size="large" color="teal" key={i}>{ingredient.text}</Label>
                                                )) :
                                                <i>There is no ingredients recorded</i>
                                            }
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row></Grid.Row>
                            </Grid>
                        </> :
                        <Loader inline="centered" content="Loading information" />
                }
            </Segment>
        </Container>
    )
}

export default Detail
