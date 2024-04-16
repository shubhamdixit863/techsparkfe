
// src/app/blog/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import { blogDetails } from '../data/blogDetails';
const BlogDetails = () => {
  const router = useRouter();
//   const router = useRouter();
console.log('Router:', router);

  const { id } = router.query;
  console.log('ID:', id);

  if (!id || !blogDetails[id]) {
    return <p>Page not found</p>;
  }

  const { content } = blogDetails[id];

  return (
    <div>
      <h1>Blog Detail Page</h1>
      <p>{content}</p>
    </div>
  );
};

export default BlogDetails;

