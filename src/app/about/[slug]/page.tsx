
import React from 'react'

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  return {
    title: params.slug,
    description: `${params.slug} content`
  };
}

function page({ params }: { params: Params }) {
  return (
      <div>
        <p>About Page</p>
        <p>{params.slug}</p>
      </div>
    
  )
}

export default page