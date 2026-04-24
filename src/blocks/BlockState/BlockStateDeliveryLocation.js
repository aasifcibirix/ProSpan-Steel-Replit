import React from "react";
import { Container, Section, SectionDescription, SectionBox, SectionTitle, ExploreMore } from "src/components/Section";
import { MapIcon } from "src/components/Icons";
import { ListLocation, ListItemLocation } from "src/components/Section";
import DefaultButton from "src/components/Button/DefaultButton";

const BlockStateDeliveryLocation = ({ data }) => {
  const INITIAL_VISIBLE = 40;
  const LOAD_MORE_STEP = 40;
  const [visibleCount, setVisibleCount] = React.useState(INITIAL_VISIBLE);
  const cityList = data.state.json.citydata || [];
  const visibleCities = cityList.slice(0, visibleCount);
  const hasMore = visibleCount < cityList.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + LOAD_MORE_STEP, cityList.length));
  };

  return (
    <Section $bgcolor="#fff">
      <Container>
        <SectionBox $pxy="5px" $bgcolor="#111415" $borderColor="#111415">
          <SectionTitle $textAlign="center" $textColor="#fff">{data.state.deliveryLocationTitle}</SectionTitle>
          <SectionDescription $textAlign="center" $textColor="#fff" dangerouslySetInnerHTML={{ __html: data.state.deliveryLocationDescription.childMarkdownRemark.html }} />
          <ListLocation>
            {visibleCities.map((item, index) =>
              <ListItemLocation key={index}>
                <span className="icon"><MapIcon /></span>
                <span className="text">{item}</span>
              </ListItemLocation>
            )}
          </ListLocation>
          {cityList.length > INITIAL_VISIBLE && (
            <ExploreMore $justfyContent="center">
              {hasMore && (
                <DefaultButton
                  onClick={handleLoadMore}
                  text={data.load_button.text}
                />
              )}

            </ExploreMore>
          )}
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockStateDeliveryLocation;