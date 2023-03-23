import React from 'react'
import Post from '../components/Post'
import Postar from '../components/Postar'
import { useAxios } from '../hooks/useAxios'
import './index.css'

const Home = ({user}) => {
    const {data, isLoading, error} = useAxios({url:'posts', method:'get'})
    const posts = data.hasOwnProperty('data') ? data.data.results : []
    console.log(posts)
  return (
    <main>
        <Postar user={user}/>
        <article>
            {
                isLoading &&
                <div>
                    Loading . . . 
                </div>
            }
            {
                posts &&
                posts.map((item) => (
                    <Post key={item.id} user={user} post={item}/>
                    // <div key={item.id}>
                    //     <p>{item.username}</p>
                    //     {
                    //         item.image &&
                    //         <img src={item.image} alt="" />
                    //     }
                    //     <p>{item.text}</p>
                    //     <hr />
                    // </div>
                ))
            }
        </article>
    </main>
  )
}

export default Home
