import React from 'react'
import { useParams } from 'react-router-dom'
import Post from '../components/Post'
import { useAxios } from '../hooks/useAxios'

const Postagem = ({user}) => {
    const {id} = useParams()
    const {data, isLoading, error} = useAxios({url: `post/user/${id}`, method:'get'})
    const post = data.hasOwnProperty('data') ? data.data.results : {}
    console.log(post)
  return (
    <main>
        
        <article>
        {
                isLoading &&
                <div>
                    Loading . . . 
                </div>
            }
            {
                post &&
                    <Post key={post.id} user={user} post={post}/>
                    
            }
        </article>
    </main>
  )
}

export default Postagem