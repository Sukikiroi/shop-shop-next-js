import React from 'react'
import { useRouter } from 'next/router'
const post = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
         <p>Post: {id}</p>
        </div>
    )
}

export default post
