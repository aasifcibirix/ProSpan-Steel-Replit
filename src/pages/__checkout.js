import React, { useEffect, useMemo, useState } from "react";
import Layout from "src/components/layout"
import Seo from "src/components/seo"
import { Link } from "gatsby";
import { Helmet } from "react-helmet"
import { Container, Section, SectionBox } from "src/components/Section";
import { Sidebar, SidebarCard, SidebarCardBody, SidebarCardTitle } from "src/components/Sidebar";
import { CloseIcon } from "src/components/Icons";
import DefaultButton from "src/components/Button/DefaultButton";
import styled from "styled-components";
import CheckoutForm from "src/components/CheckoutForm";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap; 
  margin:0 -10px;
  @media(min-width:992px){
    margin:0 -15px;
  }  
  @media(min-width:1600px){
    margin:0 -30px;
  }
`;

const ColLeft = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:992px){
    padding:0 15px;
  }  
  @media(min-width:1200px){
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  @media(min-width:1600px){
    padding:0 30px;
    flex: 0 0 70%;
    max-width: 70%;
  }
`;
const ColRight = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:992px){
    padding:0 15px;
  }  
  @media(min-width:1200px){
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  @media(min-width:1600px){
    flex: 0 0 30%;
    max-width: 30%;
    padding:0 30px;
  }
`;

const PriceTable = styled.div`
  margin-bottom: 40px;
`;
const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const PriceThead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const PriceTh = styled.div`
  padding: 15px 10px;
`;
const PriceThLabel = styled.div`
  color: #2B2B2B;
  font-weight: 600;
  font-size: 18px;
  line-height: 34px;
`;
const PriceCol = styled.div`
  padding: 15px 10px;
  color: #2B2B2B;
  font-size: 16px;
  line-height: 28px;
  > strong {
    font-weight: 600;
    color: #000000;
  }
`;
const PriceLabel = styled.div`
  color: #2B2B2B;
  min-width: 100px;
  font-weight: 500;
`;
const SubTotal = styled.div`
  font-weight: 600;
  color: #000;
`;

const Total = styled.div`
  font-weight: 600;
  color: #e9242a;
  font-size: 18px;
  line-height: 28px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 34px;
  }
  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 36px;
  }
`;
const PriceAction = styled.div`
  pointer-events: ${(props) => (!props.term ? "unset" : "none")};
  opacity: ${(props) => (!props.term ? "1" : "0.5")};

  a {
    display: block;
    width: 100%;
  }
  .btn {
    width: 100%;
  }
`;
const PriceDescription = styled.div`
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  p {
    font-size: 14px;
    line-height: 24px;
    > strong {
      font-weight: 400;
    }
  }
`;

const HelpText = styled.div`
  font-size: 14px;
  line-height: 24px;
  .cart-link {
    position: relative;
    color: #000;
    &:after {
      -webkit-transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
      background: rgba(233, 36, 42, 0.4);
      content: "";
      position: absolute;
      top: 110%;
      left: 0;
      width: 100%;
      height: 2px;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
    &:hover {
      color: #e9242a;
      &:after {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }
`;
const TermsHeader = styled.div`
  font-size: 18px;
  line-height: 34px;
  font-weight: 700;
  padding: 5px 0;
`;
const TermsContent = styled.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 260px;
  transition: all 0.5s;
  margin-bottom: 20px;
  h2,
  h3,
  h4 {
    text-transform: inherit;
  }
  h2 {
    font-size: 16px;
    line-height: 30px;
  }
  h3 {
    font-size: 14px;
    line-height: 24px;
  }
  h4 {
    font-size: 14px;
    line-height: 24px;
  }
  > p,
  > ul {
    font-size: 14px;
    line-height: 24px;
    color: #000;
  }
  /* Scrollbar Styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ebebeb;
  }

  &::-webkit-scrollbar-thumb {
    background: #6d6d6d;
  }
`;

const TermCloseBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  width: 28px;
  height: 28px;
  cursor: pointer;
  z-index: 1;
  background-color: #484b58;
  transition: all 0.5s ease-in-out;
  svg {
    width: 12px;
    height: 12px;
    fill: #fff;
  }
  &:hover {
    background-color: #161420;
    svg {
      fill: #fff;
    }
  }
`;

const Terms = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 28px;
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  .form-check {
    margin: 0;
    button {
      color: #E9242A;
      &:hover {
        color: #2B2B2B;
      }
    }
  }
`;


const Checkout = ({ location }) => {
  const [showTerms, setShowTerms] = useState(false);
  // const [termCheck, setTermCheck] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(Array.isArray(stored) ? stored : []);
    } catch {
      setCartItems([]);
    }
  }, []);

  // Clear cart when coming from successful checkout
  useEffect(() => {
    if (typeof window === "undefined") return;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('cleared') === 'true') {
      localStorage.removeItem('cart');
      setCartItems([]);
      // Remove the parameter from URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const subTotalValue = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.price * (item.qty || 0)), 0);
  }, [cartItems]);

  const ToggleTerms = () => {
    setShowTerms(!showTerms);
  };
  return (
    <Layout>
      <Seo title="ProSpan Steel" description="ProSpan Steel" />
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <Section $ept="200px" $xpt="160px" $pt="100px" className="section-checkout" $bgcolor="#fff">
        <Container>
          <Row>
            <ColLeft>
              <SectionBox $bgcolor="#111415" $borderColor="#111415" $mb="20px">
                <CheckoutForm location={location} cartItems={cartItems} />
              </SectionBox>
            </ColLeft>
            <ColRight>
              <Sidebar className="isSticky">
                <SidebarCard bkgColor="#F8FBFD" bdrColor="#E2EAEF">
                  <SidebarCardBody>
                    <SidebarCardTitle color="#0D0A0B">Order Summary</SidebarCardTitle>
                    <PriceTable>
                      <PriceThead>
                        <PriceTh>
                          <PriceThLabel>PRODUCT</PriceThLabel>
                        </PriceTh>
                        <PriceTh>
                          <PriceThLabel>SUBTOTAL</PriceThLabel>
                        </PriceTh>
                      </PriceThead>
                      {cartItems.map((item) => (
                        <PriceRow key={item.id}>
                          <PriceCol>
                            {item.title} <strong>X {item.qty || 1}</strong>
                          </PriceCol>
                          <PriceCol>
                            <SubTotal>
                              ${(item.price * (item.qty || 1)).toLocaleString()}
                            </SubTotal>
                          </PriceCol>
                        </PriceRow>
                      ))}
                      <PriceRow>
                        <PriceCol>
                          <PriceLabel>SUBTOTAL</PriceLabel>
                        </PriceCol>
                        <PriceCol>
                          <SubTotal>
                            ${subTotalValue.toLocaleString()}
                          </SubTotal>
                        </PriceCol>
                      </PriceRow>
                      <PriceRow>
                        <PriceCol>
                          <PriceLabel>TOTAL</PriceLabel>
                        </PriceCol>
                        <PriceCol>
                          <Total>
                            ${subTotalValue.toLocaleString()}
                          </Total>
                        </PriceCol>
                      </PriceRow>
                    </PriceTable>
                    <PriceDescription>
                      <p>
                        <strong>
                          Thank you for ordering from Prospan Metal Buildings. One of
                          our building specialists will get in touch with you
                          shortly to discuss the order details. Please be assured
                          you will NOT be charged until after our building expert
                          reaches out.
                        </strong>
                      </p>
                    </PriceDescription>

                    <Terms className={showTerms ? "" : "show"}>
                      {showTerms && (
                        <>
                          <TermsHeader className="terms-header">
                            Pricing Disclaimer{" "}
                            <TermCloseBtn onClick={() => setShowTerms(false)}>
                              <CloseIcon />
                            </TermCloseBtn>
                          </TermsHeader>
                          <TermsContent className="terms-content">
                            <p>
                              Please read these Terms and Conditions (“Terms”, “Terms and Conditions”) carefully before using the prospansteel.com website (the “Service”) operated by Prospan Steel (“us”, “we”, or “our”). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                            </p>

                            <p><strong>ACCOUNTS</strong><br />When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                            </p>

                            <p><strong>LINKS TO OTHER WEBSITES</strong><br />Our Service may contain links to third-party websites or services that are not owned or controlled by Prospan Steel. Prospan Steel has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Prospan Steel shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</p>

                            <p><strong>TERMINATION</strong><br />We may terminate or suspend your account or access to our Service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service. Certain provisions of these Terms which by their nature should survive termination will remain in effect, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>

                            <p><strong>GOVERNING LAW</strong><br />These Terms shall be governed and construed in accordance with the laws of Florida, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>

                            <p><strong>CHANGES</strong><br />We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 15 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

                            <p><strong>CONTACT US</strong><br />If you have any questions about these Terms, please call us at <a href="tel:3862470255" aria-label="phone number">(386) 247-0255</a>.</p>

                          </TermsContent>
                        </>
                      )}

                      {/* <div className="form-check">
                        <span className="form-check-text">
                          I understand that the price may vary.
                          <button type="button" onClick={ToggleTerms}>
                            Read Pricing Disclaimer
                          </button>
                        </span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="terms"
                          onChange={(e) => setTermCheck(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="terms"></label>
                      </div> */}
                      <HelpText>
                        Your personal data will only be used to process the order.
                        Please read our{" "}
                        <button
                          type="button"
                          className="cart-link"
                          onClick={ToggleTerms}
                        >
                          Privacy Policy
                        </button>{" "}
                        which will guide you on how we collect, store, and use the
                        information you provide online.
                      </HelpText>
                    </Terms>

                    <PriceAction>
                      <button
                        type="submit"
                        form="checkout-form"
                        // disabled={!termCheck}
                        style={{ background: 'none', border: 'none', padding: 0, width: '100%' }}
                      >
                        <DefaultButton text="Place Order" />
                      </button>
                    </PriceAction>
                  </SidebarCardBody>
                </SidebarCard>

              </Sidebar>
            </ColRight>
          </Row>
        </Container>
      </Section>
    </Layout >
  )
}

export default Checkout
