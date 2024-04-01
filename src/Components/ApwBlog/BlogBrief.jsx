import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
 

const BlogBrief = () => {
  const [post, setPost] = useState({});

const {id}=useParams()
   const fetchPost = async () => {
    try {
      const response = await axios.get(
        `http://localhost//wordpress/wp-json/wp/v2/posts/${id}`
      );
      setPost(response.data);
     } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Container maxWidth="">
      <div>
        {/* Check if post.title exists before accessing rendered property */}
        {post.title && (
          <Container>
            <Typography variant="h4" color='#032845'>
              {post.title.rendered}
            </Typography>
           </Container>
        )}

        {/* Check if post.content exists before accessing rendered property */}
        {post.content && (
          <Container>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </Container>
        )}
      </div>
    </Container>
  );
};

export default BlogBrief;
