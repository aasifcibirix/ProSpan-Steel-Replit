import React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { StyleBlogCard, StyleBlogBody, StyleBlogFigure, StyleBlogName, StyleBlogDesc, StyleInfo, StyleItemInfo } from "../BlogStyle";
import { CalenderIcon } from "../Icons";

const BlogCard = () => {
  return (
    <StyleBlogCard className="card card-blog">
      <StyleBlogFigure className="card-figure">
        <Link to="/blog"><StaticImage src="../../images/blog.jpg" alt="blog" /></Link>
      </StyleBlogFigure>
      <StyleBlogBody className="card-body">
        <StyleInfo className="style-info">
          <StyleItemInfo className="style-item"><span className="text">By: Chris Jordan</span></StyleItemInfo>
          <StyleItemInfo className="style-item"><span className="icon"><CalenderIcon /></span><span className="text">Aug 10, 2025</span></StyleItemInfo>
          <StyleItemInfo className="style-item"><span className="badge">Commercial Building</span></StyleItemInfo>
        </StyleInfo>
        <StyleBlogName className="blog-name"><Link to="/blog">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Link></StyleBlogName>
        <StyleBlogDesc className="blog-desc"><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p></StyleBlogDesc>
      </StyleBlogBody>
    </StyleBlogCard>
  );
};
export default BlogCard;
