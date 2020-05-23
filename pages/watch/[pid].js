import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { getShortVideo } from '../../api/short'

const Watch = () => {
    const router = useRouter()
    const [pageData, setPageData] = useState({})
    const { pid } = router.query


    return (
        <div className="container-lg">
            <p>Post {pid}</p>
        </div>
    )
}

export default Watch