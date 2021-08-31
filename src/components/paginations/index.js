import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Icon, Pagination } from 'semantic-ui-react'
import './Paginations.css'

const Paginations = ({ index, handleIndex, totalPages }) => {
    const [siblingRange, setSiblingRange] = useState(6)
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    useEffect(() => {
        if (isDesktopOrLaptop || isBigScreen) {
            setSiblingRange(6)
        }
        else if (isTabletOrMobile || isPortrait) {
            setSiblingRange(0)
        }
    }, [siblingRange, isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait])
    return (
        <section>
            <Pagination
                activePage={index}
                siblingRange={siblingRange}
                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                onPageChange={handleIndex}
                totalPages={totalPages}
            />
        </section>
    )
}

export default Paginations
