import React from 'react'
import "./HomeStyles.css"
function Home() {
  return (
    <section className='home'>
        <div className='secContainer container'>
            <div className='homeText'>
                <h1 className='title'>
                    HELLO WORLD!
                </h1>
                <p className='subTitle'>
                In the IT profession, it's common to invest a substantial amount of time using one's primary working tools.
                </p>
                <button className='btn'>
                    <a href='https://codelearn.io/learning/cpp-for-beginners?activityType=12&activityId=446'> EXPLORE NOW</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Home
