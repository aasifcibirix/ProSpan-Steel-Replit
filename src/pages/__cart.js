import React, { useEffect, useMemo, useState } from "react";
import Layout from "src/components/layout"
import Seo from "src/components/seo"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Helmet } from "react-helmet"
import { Container, Section, SectionPageTitle } from "src/components/Section";
import { Sidebar, SidebarCard, SidebarCardBody, SidebarCardTitle } from "src/components/Sidebar";
import { Nodata, NodataDesc, NodataMedia } from "src/components/Nodata";
import { CloseIcon } from "src/components/Icons";
import DefaultButton from "src/components/Button/DefaultButton";
import PrimaryButton from "src/components/Button/PrimaryButton";
import styled from "styled-components";
import DefaultOutlineButton from "src/components/Button/DefaultOutlineButton";

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
  margin-bottom: 30px;
`;
const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:last-child {
    border-top: 2px solid #e5e5e5;
  }
`;
const PriceCol = styled.div`
  padding: 15px 10px;
`;
const PriceLabel = styled.div`
  font-weight: 400;
  color: #2B2B2B;
  font-size: 18px;
  min-width: 100px;
  @media (min-width: 1200px) {
    font-size: 20px;
  }
  @media (min-width: 1600px) {
    font-size: 22px;
  }
  > stron {
    font-weight: 700;
  }
`;
const SubTotal = styled.div``;
const CartTotal = styled.div`
  font-weight: 700;
  color: #e9242a;

  font-size: 16px;
  line-height: 30px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 30px;
  }
  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
const Total = styled.div`
  font-weight: 700;
  color: #e9242a;

  font-size: 28px;
  line-height: 32px;
  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 36px;
  }
`;
const PriceAction = styled.div`
  pointer-events: ${(props) => (props.term ? "unset" : "none")};
  opacity: ${(props) => (props.term ? "1" : "0.5")};

  a {
    display: block;
    width: 100%;
  }
  .btn {
    width: 100%;
  }
`;
const CartInfo = styled.div`
`;

const CartTable = styled.div`
  margin-bottom: 30px;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
const CartRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  @media (max-width: 575.98px) {
    flex-wrap: wrap;
  }
`;
const CartThead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #dbdbdb;
  @media (max-width: 575.98px) {
    display: none;
  }
  .cart-head{
    font-size: 18px;
    line-height: 28px;
    font-weight:500;

  }
`;
const CartCol = styled.div`
  max-width: 120px;
  width: 100%;
  text-align: center;
  padding: 15px 5px;
  font-size: 16px;
  line-height: 24px;
  font-weight:400;
  @media (min-width: 1200px) {
    padding: 20px 10px;
  }
  &:first-child,
  &:nth-child(2) {
    max-width: 220px;
    width: 100%;
    text-align: left;
    @media (max-width: 575.98px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  @media (max-width: 575.98px) {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  &:last-child {
    text-align: right;
  }
  .form-control {
    width: 40px;
    text-align: center;
    padding: 8px 5px;
    background-color:#F8FBFD;
    border:1px solid #E2EAEF;
    color:#2B2B2B;
  }
  &.amount {
    display: flex;
    align-items: center;
    @media (min-width: 576px) {
      justify-content: space-between;
    }
    button {
      padding: 0 10px;
    }
  }
  .cart-link {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    color: #e9242a;
    &:after {
      -webkit-transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
      background: rgba(54, 54, 54, 0.4);
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
      color: #2B2B2B;
      &:after {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }
`;
const CartProduct = styled.div`
  max-width: 290px;
  width: 100%;
`;
const CartAction = styled.div`
  margin: 0 0 30px 0;
  .cart-link {
    position: relative;
    font-size: 16px;
    line-height: 28px;
    color: #2B2B2B;
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
  font-weight: 700;
  line-height: 34px;
  padding: 5px 0;
`;
const TermsContent = styled.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 260px;
  transition: all 0.5s;
  margin-bottom: 20px;
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
  border-radius:50%;
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

const Cart = ({ location }) => {
  const [showTerms, setShowTerms] = useState(false);
  const [termCheck, setTermCheck] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  console.log("cartItems", cartItems)
  // Helper functions
  const readCart = () => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {
      return [];
    }
  };

  const writeCart = (items) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const extractIncomingProduct = () => {
    const incomingData = location?.state?.data;
    const product = location?.state?.product || incomingData?.product;
    const qty = location?.state?.qty || 1;
    if (!product) return null;
    return {
      id: product.id || product.sku || product.title,
      sku: product.sku,
      title: product.title,
      subTitle: product.subTitle,
      price: parseInt(product.price || 0, 10),
      qty,
      image: product.imageMain || product.image,
    };
  };

  // Load cart and merge incoming product
  useEffect(() => {
    const current = readCart();
    const incoming = extractIncomingProduct();
    let updated = current;

    if (incoming) {
      const idx = current.findIndex((c) => c.id === incoming.id);
      if (idx >= 0) {
        updated = current.map((c, i) =>
          i === idx ? { ...c, qty: (c.qty || 0) + incoming.qty } : c
        );
      } else {
        updated = [...current, incoming];
      }
      writeCart(updated);
      // Clear navigation state
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    setCartItems(updated);
  }, []);

  // Cart operations
  const updateCart = (updater) => {
    setCartItems((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      writeCart(next);
      return next;
    });
  };

  const increaseQty = (id) => {
    updateCart((prev) => prev.map((item) =>
      item.id === id ? { ...item, qty: (item.qty || 0) + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    updateCart((prev) => prev.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, (item.qty || 0) - 1) } : item
    ));
  };

  const removeItem = (id) => {
    updateCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Computed values
  const hasItems = cartItems.length > 0;
  const subTotal = useMemo(() =>
    cartItems.reduce((sum, item) => sum + (item.price * (item.qty || 0)), 0),
    [cartItems]
  );

  const ToggleTerms = () => setShowTerms(!showTerms);

  return (
    <Layout>
      <Seo title="ProSpan Steel" description="ProSpan Steel" />
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <Section $ept="200px" $xpt="160px" $pt="100px" className="section-cart" $bgcolor="#fff">
        <Container>
          <Row>
            <ColLeft>
              <CartInfo>
                <SectionPageTitle textAlign="left" $textColor="#2B2B2B" className="h2">Shopping Cart</SectionPageTitle>
                {hasItems ? (
                  <>
                    <CartTable>
                      <CartThead>
                        <CartCol className="cart-head">Product Details</CartCol>
                        <CartCol className="cart-head">&nbsp;</CartCol>
                        <CartCol className="cart-head">Price</CartCol>
                        <CartCol className="cart-head">Quantity</CartCol>
                        <CartCol className="cart-head">Total</CartCol>
                      </CartThead>

                      {cartItems.map((item) => (
                        <CartRow key={item.id}>
                          <CartCol>
                            <CartProduct>
                              {item.image ? (
                                <GatsbyImage image={item.image.gatsbyImageData} alt={item.title} />
                              ) : (
                                <StaticImage src="../images/product.jpg" alt="product" />
                              )}
                            </CartProduct>
                          </CartCol>
                          <CartCol>{item.title}</CartCol>
                          <CartCol>
                            ${item.price.toLocaleString()}
                          </CartCol>
                          <CartCol className="amount">
                            <button onClick={() => decreaseQty(item.id)}>-</button>
                            <input
                              type="text"
                              value={item.qty}
                              id={`quantity-${item.id}`}
                              className="form-control"
                              name="qty"
                              aria-label="Product quantity"
                              size="4"
                              min="0"
                              max=""
                              disabled
                            />
                            <button onClick={() => increaseQty(item.id)}>+</button>
                          </CartCol>
                          <CartCol>
                            <CartTotal>${(item.price * (item.qty || 0)).toLocaleString()}</CartTotal>
                            <button
                              type="button"
                              className="cart-link"
                              onClick={() => removeItem(item.id)}
                            >
                              Remove
                            </button>
                          </CartCol>
                        </CartRow>
                      ))}
                    </CartTable>
                    <CartAction>
                      <Link to="/shop"><DefaultOutlineButton
                        text="Continue Shopping" size="sm" /></Link>
                    </CartAction>
                  </>
                ) : (
                  <>
                    <Nodata>
                      <NodataMedia>
                        <StaticImage src="../images/empty-cart.png" alt="empty-cart" />
                      </NodataMedia>
                      <NodataDesc mb="30px">
                        <p>There is no product in the cart</p>
                        <Link to="/shop"><PrimaryButton text="Continue Shopping" /></Link>
                      </NodataDesc>
                    </Nodata>
                  </>
                )}

              </CartInfo>
            </ColLeft>
            <ColRight>
              <Sidebar className="isSticky">
                <SidebarCard bkgColor="#F8FBFD" bdrColor="#E2EAEF">
                  <SidebarCardBody>
                    <SidebarCardTitle color="#0D0A0B">Order Summary</SidebarCardTitle>
                    <PriceTable>
                      <PriceRow className="price-row">
                        <PriceCol>
                          <PriceLabel>SUBTOTAL</PriceLabel>
                        </PriceCol>
                        <PriceCol>
                          <SubTotal>{hasItems ? `$${subTotal.toLocaleString()}` : "$0"}</SubTotal>
                        </PriceCol>
                      </PriceRow>
                      <PriceRow className="price-row">
                        <PriceCol>
                          <PriceLabel>
                            <strong>TOTAL</strong>
                          </PriceLabel>
                        </PriceCol>
                        <PriceCol>
                          <Total>{hasItems ? `$${subTotal.toLocaleString()}` : "$0"}</Total>
                        </PriceCol>
                      </PriceRow>
                    </PriceTable>

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
                      {hasItems &&
                        <div className="form-check">
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
                        </div>
                      }

                    </Terms>

                    <PriceAction term={termCheck}>
                      <Link to="/checkout/">
                        <DefaultButton text="Checkout" />
                      </Link>
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

export default Cart
