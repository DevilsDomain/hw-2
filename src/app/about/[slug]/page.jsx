
import React from 'react'

export async function generateMetadata({ params }) {
  // return(
  //   <>
  //   <title>{params.slug} Page</title>
  //   <meta name={params.slug} content={`${params.slug} content`} />
  //   </>
  // );
  return { 
    title: params.slug,
    name: params.slug,
    description: `${params.slug} content`
    
  }
}

function page({params}) {
  return (
      <div>
        <p>About Page</p>
        <p>{params.slug}</p>
      </div>
    
  )
}

export default page