
import React from "react";
import styled from "styled-components";

const MediaThumbnail = styled.div`   
    position:relative;
    margin-bottom:20px;
`;

const MediaFigureThumbnail = styled.figure`   
    position:relative;
    overflow:hidden;
    margin:0;
    border-radius:10px 10px 0 0;
    @media (min-width: 576px) {
        border-radius:10px;
    }
    @media (min-width: 1200px) {
        border-radius:20px;
    }
    @media (min-width: 1600px) {
        border-radius:30px;
    }
    .gatsby-image-wrapper{
        display:block;
    }
`;

const MediaBodyThumbnail = styled.div`    
    position:relative;
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(75px);
    -webkit-backdrop-filter: blur(75px);
    padding:20px 15px;
    border-radius:0 0 10px 10px;
    @media (min-width: 576px) {
        border-radius:10px;
        margin:10px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }
    @media (min-width: 768px) {
        min-height: 242px;
    }
    @media (min-width: 1200px) {
        border-radius:20px;
    }
    @media (min-width: 1600px) {
        padding:30px;
        margin:15px;
        border-radius:30px;
    }
    figure{
        position:relative;
        overflow:hidden;
        margin:0;
        @media (min-width: 576px) {
            border-radius:30px;
        }
        @media (min-width: 1200px) {
            border-radius:20px;
        }
        @media (min-width: 1600px) {
            border-radius:30px;
        }
    }
    h3{
        display: flex;
        flex-wrap:wrap;
        flex-direction:column;
        align-items: flex-start;
        font-weight: 600;
        color: #0D0A0B;
        gap:10px;
        font-size: 20px;
        line-height: 24px;
        @media (min-width: 992px) {
            font-size: 24px;
            line-height: 28px;
            flex-wrap:nowrap;
            flex-direction:row;
        }
        @media (min-width: 1600px) {
            font-size: 28px;
            line-height: 32px;
        }
        > svg{
            fill:#2B2B2B;
            min-width: 24px;
            @media (min-width: 1200px) {
                min-width: 28px;
            }
        }
    }
    p{
        color: #2B2B2B;
        margin-bottom:0;
        font-size:16px;
        line-height:26px; 
        @media(min-width:1600px){
            font-size:18px;
            line-height:28px; 
        } 
    }
`;


const MediaThumbnails = ({ icon, image, title, content }) => {
    return (
        <MediaThumbnail className="card card-thumbnail">
            <MediaFigureThumbnail>{image}</MediaFigureThumbnail>
            <MediaBodyThumbnail className="card-body-thumbnail">
                <h3>{icon} {title}</h3>
                <p>{content}</p>
            </MediaBodyThumbnail>
        </MediaThumbnail>
    );
};

export default MediaThumbnails;
