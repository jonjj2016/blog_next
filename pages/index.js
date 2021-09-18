import React from 'react';
import Hero from '../components/homepage/Hero';
import FeaturedPosts from '../components/homepage/FeaturedPosts';

const HomePage = () => {
  const DUMMY_POSTS = [
    {
      title:'Getting started with next js',
      slug:'getting-started-nextjs',
      date:'2022-02-04',
      image:'getting-started-nextjs.png',
      excerpt:'Next js is the React framework for production and its awesome for SSR'
    },
    {
      title:'Getting started with next js',
      slug:'getting-started-nextjs2',
      date:'2022-02-04',
      image:'getting-started-nextjs.png',
      excerpt:'Next js is the React framework for production and its awesome for SSR'
    },
    {
      title:'Getting started with next js',
      slug:'getting-started-nextjs3',
      date:'2022-02-04',
      image:'getting-started-nextjs.png',
      excerpt:'Next js is the React framework for production and its awesome for SSR'
    },
    {
      title:'Getting started with next js',
      slug:'getting-started-nextjs4',
      date:'2022-02-04',
      image:'getting-started-nextjs.png',
      excerpt:'Next js is the React framework for production and its awesome for SSR'
    },
  ]
  return (
    <>
      <Hero/>
      <FeaturedPosts posts ={DUMMY_POSTS}/>
    </>
  )
}

export default HomePage
