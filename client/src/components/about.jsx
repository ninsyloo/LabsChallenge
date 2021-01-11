import React from 'react'

export default function About(){
    return(
        <>
        <header style={{display:'flex', justifyContent:'center', marginTop:'4em'}}>
        <h1>Henry Challenge</h1>
        </header>
        <div style={{display:'flex', justifyContent:'center', marginBottom:'4em', marginTop:'2em'}}>
        <p>This simple application was made by a Henry student with the following technologuies:
            <br/> <strong>React</strong>, <strong>Redux</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>Bootstrap5</strong> and a free API afforded by <strong>Mercado Libre</strong>.</p>
        </div>
        </>
    )
}