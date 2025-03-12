import styled from "styled-components";
import { workData } from "../data/workData";
import downArrow from "../assets/icons/down_arrow.svg";
import { techIcons } from "../data/techIcon";
import WorkList from "../components/WorkList";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { motion } from "motion/react";
import { responsiveValue } from "../styles/mixins";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../styles/GlobalStyle";

const HomeLayout = styled.div`
  --tech_item_gap: 2.5rem;
  position: relative;

  h2 {
    font-size: var(--small_text);
    font-weight: 400;
    margin-bottom: var(--title_margin_bottom);
    margin-left: var(--space_horizontal);
    &::before {
      content: "✳︎ ";
    }
  }
  h3 {
    font-size: var(--small_text);
    margin-bottom: var(--title_margin_bottom);
    font-weight: 400;
  }

  section {
    height: 100%;

    + section {
      padding-top: var(--section_gap);
    }

    &.intro_section {
      min-height: calc(100 * var(--vh));
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .point {
        font-weight: 100;
        ${responsiveValue("font-size", 109.66, 62, 1920, 360)};
        font-style: italic;
      }
      h1 {
        padding: 1rem 0 10%;
        ${responsiveValue("font-size", 287.07, 84, 1920, 360)};
        text-align: right;
        font-weight: 700;
        display: inline-flex;
        justify-content: flex-end;
      }
      .scroll_down {
        ${responsiveValue("width", 200, 120, 1920, 360)};
        height: auto;
        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
    }

    &.about_section {
      .content {
        padding-left: var(--space_horizontal);
        > div + div {
          margin-top: 10rem;
        }
        .desc_wrapper {
          p {
            font-size: var(--medium_text);
            line-height: 1.5;
            strong {
              font-weight: 500;
              color: var(--main);
            }
          }
        }
        .exp_wrapper {
          width: 100%;
          overflow-x: hidden;
        }
        .tech_wrapper {
          ul {
            width: 45%;
            max-width: 70rem;
            display: flex;
            flex-wrap: wrap;
            .tech_item {
              width: calc((100% - var(--tech_item_gap) * 5) / 6);
              height: auto;
              margin-right: var(--tech_item_gap);
              &:nth-child(6n) {
                margin-right: 0;
              }
              &:nth-child(n + 7) {
                margin-top: var(--tech_item_gap);
              }

              img {
                width: 100%;
                height: auto;
                filter: grayscale(100%);
                -webkit-filter: grayscale(100%);
                transition: filter 0.3s linear allow-discrete;
                -webkit-transition: filter 0.5s linear allow-discrete;
              }
              &:hover {
                img {
                  filter: grayscale(0%);
                  -webkit-filter: grayscale(0%);
                }
              }
            }
          }
        }
      }
    }

    &.work_section {
      height: auto;
    }
  }

  @media screen and (max-width: ${TABLET_BREAKPOINT}) {
    section {
      &.intro_section {
        justify-content: center;
        h1 {
          padding: 2.5rem 0 0;
        }
        .scroll_down {
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
      &.about_section {
        .content {
          .tech_wrapper {
            ul {
              .tech_item {
                width: calc((100% - var(--tech_item_gap) * 4) / 5);
                &:nth-child(6n) {
                  margin-right: var(--tech_item_gap);
                }
                &:nth-child(n + 7) {
                  margin-top: 0;
                }
                &:nth-child(5n) {
                  margin-right: 0;
                }
                &:nth-child(n + 6) {
                  margin-top: var(--tech_item_gap);
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
    section {
      &.about_section {
        .content {
          .tech_wrapper {
            ul {
              width: 60%;
              .tech_item {
                width: calc((100% - var(--tech_item_gap) * 3) / 4);
                &:nth-child(5n) {
                  margin-right: var(--tech_item_gap);
                }
                &:nth-child(n + 6) {
                  margin-top: 0;
                }
                &:nth-child(4n) {
                  margin-right: 0;
                }
                &:nth-child(n + 5) {
                  margin-top: var(--tech_item_gap);
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    --tech_item_gap: 2rem;

    section {
      &.about_section {
        .content {
          .tech_wrapper {
            ul {
              width: 60%;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 440px) {
    --tech_item_gap: 1.5rem;

    section {
      &.about_section {
        .content_container {
          .tech_wrapper {
            ul {
              width: 80%;
            }
          }
        }
      }
    }
  }
`;
const titleVarients = {
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.8,
      y: {
        duration: 0.8,
        delay: index * 0.06,
      },
    },
  }),
  hidden: (index) => ({
    opacity: 0,
    y: index === 1 || index === 5 || index === 8 ? -80 : 80,
  }),
};

const Home = () => {
  const sortLatest = [...workData].sort((a, b) => b.id - a.id);

  return (
    <HomeLayout>
      <section className="intro_section">
        <div className="point">FRONTEND DEVELOPER</div>
        <h1>
          {["P", "o", "r", "t", "f", "o", "l", "i", "o"].map((word, index) => (
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={titleVarients}
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <span className="scroll_down">
          <img src={downArrow} />
        </span>
      </section>
      <section className="about_section">
        <h2>ABOUT</h2>
        <div className="content">
          <div className="desc_wrapper">
            <p>
              안녕하세요. 프론트엔드 개발자 최보람입니다. <br />
              원활한 <strong>소통과 협업</strong>을 바탕으로 <br />
              <strong>사용자 경험</strong>을 최우선으로 고려하여 <br />
              완성도 높은 결과물을 만들기 위해 노력합니다.
            </p>
          </div>
          <div className="exp_wrapper">
            <h3>EXPERIENCE</h3>
            <div>
              <ExperienceTimeline />
            </div>
          </div>
          <div className="tech_wrapper">
            <h3>SKILLS & TOOLS</h3>
            <ul>
              {techIcons.map((icon) => (
                <li className="tech_item" key={icon.name}>
                  <img src={icon.img} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="work_section">
        <h2>SELECTED WORKS</h2>
        <WorkList workArray={sortLatest} />
      </section>
    </HomeLayout>
  );
};

export default Home;
