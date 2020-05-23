import React from 'react'
import { useRouter } from 'next/router'

import { SearchInput } from './SearchInput'


export const Header = ({ defaultValue }) => {
    return (
        <div>
            <SearchInput defaultValue={defaultValue} />
        </div>
    )
}