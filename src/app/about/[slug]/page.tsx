import React from 'react'
import ButtonLayout from '@/layouts/ButtonLayout';

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
    <ButtonLayout>
        <div>
          <p>About Page</p>
          <p>{params.slug}</p>
        </div>
    </ButtonLayout>
    
  )
}

export default page