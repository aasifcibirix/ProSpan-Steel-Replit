import React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { StyleBlogCard, StyleBlogBody, StyleBlogFigure, StyleBlogName, StyleInfo, StyleItemInfo } from "../BlogStyle";

const RecentBlogCard = () => {
  return (
    <StyleBlogCard className="card card-blog">
      <StyleBlogFigure className="card-figure">
        <Link to="/"><StaticImage src="../../images/blog.jpg" alt="blog" /></Link>
      </StyleBlogFigure>
      <StyleBlogBody className="card-body">
        <StyleBlogName className="blog-name"><Link to="/">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Link></StyleBlogName>
        <StyleInfo className="style-info">
          <StyleItemInfo className="style-item"><span className="text">By: Chris Jordan</span></StyleItemInfo>
          <StyleItemInfo className="style-item"><span className="text">Aug 10, 2025</span></StyleItemInfo>
        </StyleInfo>
      </StyleBlogBody>
    </StyleBlogCard>
  );
};
export default RecentBlogCard;
