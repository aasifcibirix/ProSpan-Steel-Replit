import styled from 'styled-components'

export const Nodata = styled.div`
  position: relative;  
  text-align:center;
`

export const NodataContainer = styled.div`
  position: relative;    
  width:100%;
  margin:0 auto;
  max-width:${props => props.maxWidth};
`
NodataContainer.defaultProps = {
  maxWidth: "715px",
}

export const NodataMedia = styled.div`
  position: relative;
  margin-bottom:30px;
  .gatsby-image-wrapper{
    display:inline-block;
  }
`

export const NodataTitle = styled.h1`
  margin-bottom:30px;
  color:#fff;
`
export const NodataSubTitle = styled.h2`
  margin-bottom:0;
`
export const NodataDesc = styled.div`
  width:100%;
  max-width:940px;
  margin:0 auto;
  margin-bottom:${props => props.mb};  
  text-align:${props => props.textAlign};  
  p{
    color: ${props => props.color};
  }
`
NodataDesc.defaultProps = {
  color: "#ccc",
}

export const NodataGrid = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  margin:0 -15px;
  @media(min-width:992px){
    margin:0 -30px;
  }
`
export const NodataItem = styled.div`
  position:relative;
  width:100%;
  padding:0 15px;
  @media(min-width:992px){
    padding:0 30px;
    flex:0 0 50%;
    max-width:50%;
  }
`
export const NodataAction = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
`