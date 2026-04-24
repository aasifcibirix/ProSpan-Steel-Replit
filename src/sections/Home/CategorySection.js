import React from "react"
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle, SectionImageBkg, ExploreMore } from "src/components/Section";
import DefaultOutlineButton from "src/components/Button/DefaultOutlineButton";
import CategoryCard from "src/components/CategoryCard";

const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    margin:0 -10px;
`;
const ColLeft = styled.div`
    position:relative;
    width:100%;
    padding:0 10px;
    @media(min-width:992px){
        flex:0 0 48%;
        max-width:48%;
    }   
`;
const ColRight = styled.div`
    position:relative;
    width:100%;
    padding:0 10px;
    @media(min-width:992px){
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
`;
const ListCategories = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:0 -5px;
`;
const ListItem = styled.div`
    position:relative;
    width:100%;
    padding:0 5px;
    @media(min-width:768px){
        flex:0 0 50%;
        max-width:50%;
    }   
    @media(min-width:992px){
        flex:0 0 33.33333%;
        max-width:33.33333%;
    }   
    @media(min-width:1600px){
        flex:0 0 20%;
        max-width:20%;
    }   
`;
const WhiteBox = styled.div`
    background-color:#fff;
    position:relative;
    overflow:hidden;
    border-radius:10px;    
    padding:30px 15px;
    @media(min-width:992px){
        border-radius:20px;
        padding:30px;
	}
    @media(min-width:1200px){
        border-radius:25px;
        padding:40px;
	}
	@media(min-width:1600px){
        border-radius:35px;
		padding:50px;	
    }

`;


const CategorySection = () => {
    return (
        <Section className="section-financing" $bgcolor="#111415">
            <SectionImageBkg $opacity="0.30"><StaticImage src="../../images/type-bg.jpg" alt="Types of Red Iron Buildings from ProSpan" /></SectionImageBkg>
            <Container>
                <WhiteBox>
                    <Row>
                        <ColLeft>
                            <SectionTitle $textColor="#0D0A0B">Types of Red Iron Buildings from ProSpan</SectionTitle>
                        </ColLeft>
                        <ColRight>
                            <SectionDescription><p>At ProSpan, our red iron steel buildings are engineered to meet all local code requirements, ensuring compliance and peace of mind for your projects. Built for strength and reliability, these structures are highly versatile and are often the go-to solution for heavy industrial applications like:</p></SectionDescription>
                        </ColRight>
                    </Row>
                    <ListCategories>
                        {["Agricultural Buildings", "Automotive Buildings", "Government Buildings", "Manufacturing Facilities", "Recreational Buildings"].map((item, index) =>
                            <ListItem key={index}><CategoryCard item={item} /></ListItem>
                        )}
                    </ListCategories>
                    <ExploreMore>
                        <Link to="/red-iron-building">
                            <DefaultOutlineButton text="View all Buildings" />
                        </Link>
                    </ExploreMore>
                </WhiteBox>
            </Container>
        </Section>
    )
}

export default CategorySection
