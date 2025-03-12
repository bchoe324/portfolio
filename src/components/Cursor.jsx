import styled from "styled-components";
import { useEffect, useRef } from "react";
import pointerArrow from "../assets/common/pointer_arrow.svg";

const CustomCursor = styled.div`
  position: fixed;
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  width: 100%;
  height: calc(100 * var(--vh));
  transition: opacity 0.4s linear;
  -webkit-transition: opacity 0.4s linear;

  @media screen and (min-width: var(749px)) {
    display: none;
  }

  .cursor_dot {
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    background-color: var(--black);
    border-radius: 50%;
  }
  .cursor_outline {
    position: absolute;
    border: 0.12rem solid var(--black);
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    transition: width 0.2s ease, height 0.2s ease;
    -webkit-transition: width 0.2s ease, height 0.2s ease;
  }
  .cursor_image {
    position: absolute;
    width: 5rem;
    height: 5rem;
    opacity: 0;
    transition: opacity 0.2s ease;
    -webkit-transition: opacity 0.2s ease;
  }
`;

const Cursor = () => {
  const cursorDot = useRef();
  const cursorOutline = useRef();
  const cursorImage = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const positionCursor = () => {
      cursorDot.current.style.transform = `translate3d(calc(${mousePosition.current.x}px - 50%), calc(${mousePosition.current.y}px - 50%), 0)`;
      cursorOutline.current.style.transform = `translate3d(calc(${mousePosition.current.x}px - 50%), calc(${mousePosition.current.y}px - 50%), 0)`;
      cursorImage.current.style.transform = `translate3d(calc(${mousePosition.current.x}px - 50%), calc(${mousePosition.current.y}px - 50%), 0)`;

      animationFrameId = requestAnimationFrame(positionCursor);
    };

    const onMouseMove = (event) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const onMouseDown = () => {
      toggleSize(true);
    };

    const onMouseUp = () => {
      togglePointer(false);
      toggleSize(false);
    };

    const onMouseEnter = (event) => {
      if (event.target.matches("a")) {
        toggleSize(true);
        togglePointer(true);
      } else if (event.target.matches("button")) {
        toggleSize(true);
      }
    };

    const onMouseLeave = (event) => {
      if (event.target.matches("a")) {
        toggleSize(false);
        togglePointer(false);
      } else if (event.target.matches("button")) {
        toggleSize(false);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    animationFrameId = requestAnimationFrame(positionCursor);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseenter", onMouseEnter, true);
    document.body.addEventListener("mouseleave", onMouseLeave, true);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.body.removeEventListener("mouseenter", onMouseEnter, true);
      document.body.removeEventListener("mouseleave", onMouseLeave, true);
    };
  }, []);

  const toggleSize = (isEnlarged) => {
    const scale = isEnlarged ? 10 : 5;
    cursorOutline.current.style.width = `${scale}rem`;
    cursorOutline.current.style.height = `${scale}rem`;
  };

  const togglePointer = (isPointer) => {
    if (isPointer) {
      cursorDot.current.style.opacity = "0";
      cursorImage.current.style.opacity = "1";
    } else {
      cursorDot.current.style.opacity = "1";
      cursorImage.current.style.opacity = "0";
    }
  };

  return (
    <CustomCursor className="cursor_container">
      <div className="cursor_dot" ref={cursorDot}></div>
      <div className="cursor_outline" ref={cursorOutline}></div>
      <img className="cursor_image" ref={cursorImage} src={pointerArrow} />
    </CustomCursor>
  );
};

export default Cursor;
