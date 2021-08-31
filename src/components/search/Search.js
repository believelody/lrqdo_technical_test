import React, { useState } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const Search = ({ search, setSearch, resetIndex, fluid = false }) => {
    const [value, setValue] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
        setSearch(value)
        resetIndex(1)
        setValue("")
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input fluid={fluid} value={value} onChange={e => setValue(e.target.value)} icon='search' placeholder='Search a product by typing here' />
            <Button disabled={!value}>Search</Button>
            {
                search && <Message header="You are searching:" content={search} />
            }
        </Form>
    )
}

export default Search
