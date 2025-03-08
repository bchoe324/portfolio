import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../styles/GlobalStyle";

const ScrollFooter = styled.div`
  z-index: -80;
  width: 100%;
  height: var(--footer_height);
  position: relative;
  overflow: hidden;
`;

const FooterContent = styled.footer`
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  max-width: var(--max_width);
  min-width: var(--min_width);
  height: calc(var(--footer_height) * 1.5);

  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0%;
  right: 0%;
  overflow: hidden;

  .content_wrapper {
    height: var(--footer_height);
    padding: 2rem var(--space_horizontal);
    flex: 1 1 auto;
    display: flex;

    &.pc {
      align-items: center;
      justify-content: space-between;
    }
    &.mo {
      justify-content: space-evenly;
      align-items: stretch;
      flex-direction: column;
      address {
        text-align: center;
      }
      .row {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  p,
  button {
    font-size: var(--small_text);
  }
`;

const Footer = () => {
  const onClickTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const isMobile = useMediaQuery({
    query: `(max-width: ${MOBILE_BREAKPOINT})`,
  });

  return (
    <>
      <ScrollFooter></ScrollFooter>
      <FooterContent>
        {isMobile ? (
          <div className="content_wrapper mo">
            <div className="row">
              <p>&copy; 2025</p>
              <button onClick={onClickTopButton} className="top_button">
                Back to Top
              </button>
            </div>
            <address>
              <p>bchoe324@gmail.com</p>
            </address>
          </div>
        ) : (
          <div className="content_wrapper pc">
            <p>&copy; 2025</p>
            <address>
              <p>bchoe324@gmail.com</p>
            </address>
            <button onClick={onClickTopButton} className="top_button">
              Back to Top
            </button>
          </div>
        )}
      </FooterContent>
    </>
  );
};

export default Footer;
