import { useNavigate, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import GithubIcon from "../assets/icons/GithubIcon";
import LinkIcon from "../assets/icons/LinkIcon";
import { workData } from "../data/workData";
import { useEffect, useState, useLayoutEffect } from "react";
import WorkList from "../components/WorkList";
import { responsiveValue } from "../styles/mixins";
import leftArrow from "../assets/icons/left_arrow.svg";
import { TABLET_BREAKPOINT } from "../styles/GlobalStyle";

const DetailLayout = styled.div`
  --detail_flex_gap: 2rem;
  --detail_desc_gap: 3rem;
  --detail_image_gap: 6rem;
  --detail_mo_image_height: calc(80 * var(--vh));

  section + section {
    padding-top: calc(var(--section_gap) / 2);
  }
  .detail_content_section {
    padding: 4rem var(--space_horizontal) 0;
    article {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .desc_container {
        flex: 1 1 40%;
        .info_wrapper {
          h1 {
            ${responsiveValue("font-size", 109.66, 62, 1920, 360)};
            font-weight: 700;
            color: #0d0d0d;
          }
          .tag_list {
            margin-top: var(--detail_desc_gap);
            display: flex;
            gap: 1rem;
            .tag_item {
              font-size: var(--xsmall_text);
              font-weight: 500;
              color: #f25e5e;
              padding: 0.8rem 1.2rem;
              border-radius: 0.8rem;
              border: 1px solid #f2a0a0;
              white-space: nowrap;
            }
          }
        }
        .text_wrapper {
          margin-top: var(--detail_desc_gap);
          p {
            font-size: var(--body_text);
            line-height: 1.5;
          }
          p + p {
            margin-top: 1.2rem;
          }
        }
        .link_list {
          margin-top: var(--detail_desc_gap);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .link_item {
            font-size: var(--xsmall_text);
            color: #0d0d0d;
            a {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              svg {
                width: var(--xsmall_text);
                height: auto;
                margin-right: 0.6rem;
                path {
                  display: block;
                  width: 100%;
                }
              }
            }
            &:nth-child(n + 2) {
              margin-left: 2.5rem;
            }
          }
        }
      }
      .image_container {
        flex: 1 1 60%;
        margin-left: var(--detail_flex_gap);
        display: flex;
        flex-direction: column;
        align-items: center;
        .wrapper {
          width: 80%;
          height: auto;
          + .wrapper {
            margin-top: var(--detail_image_gap);
          }
          &.video_wrapper {
            border: 1px solid #bfbfbf;
            border-radius: 2rem;
            overflow: hidden;
            video {
              width: 100%;
              height: auto;

              object-fit: cover;
            }
            &.mobile {
              width: fit-content;
              height: var(--detail_mo_image_height);
              video {
                height: 100%;
                width: auto;
              }
            }
          }
          &.image_wrapper {
            border: 1px solid #bfbfbf;
            border-radius: 2rem;
            overflow: hidden;
            &.mobile {
              width: fit-content;
              height: var(--detail_mo_image_height);
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
    .home_button_area {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: calc(var(--section_gap) / 2);
      .home_button {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.5rem 1rem;
        font-size: var(--small_text);
        img {
          margin-right: 0.5rem;
        }
      }
    }
  }

  .others_section {
    h3 {
      font-size: var(--small_text);
      font-weight: 400;
      margin-left: var(--space_horizontal);
      margin-bottom: var(--title_margin_bottom);
      &::before {
        content: "✳︎ ";
      }
    }
  }

  @media screen and (max-width: ${TABLET_BREAKPOINT}) {
    --detail_flex_gap: 6rem;

    .detail_content_section {
      article {
        flex-direction: column;
        .desc_container {
          flex: 1 1 auto;
        }
        .image_container {
          flex: 1 1 auto;
          margin-left: 0;
          margin-top: var(--detail_flex_gap);
          .wrapper {
            width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 440px) {
    --detail_flex_gap: 4rem;
    --detail_image_gap: 4rem;
  }
`;

const getLinkContent = (linkType) => {
  if (linkType === "github") {
    return (
      <>
        <GithubIcon fill="0d0d0d" />
        <span>GitHub</span>
      </>
    );
  } else if (linkType === "link") {
    return (
      <>
        <LinkIcon fill="0d0d0d" />
        <span>View Website</span>
      </>
    );
  }
};

const findNextWorks = (id) => {
  const arrayIdx = id - 1;

  const totalWorks = workData.length;
  const filteredList = workData.filter((item) => item.id !== id);

  let start = Math.max(0, arrayIdx - 2);
  let end = Math.min(totalWorks - 1, arrayIdx + 2);

  while (end - start < 4) {
    if (start === 0) {
      end++;
    } else if (end >= totalWorks - 1) {
      start--;
    }
  }

  return filteredList.slice(start, end);
};

const Detail = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const params = useParams();
  const id = Number(params.id);
  const [data, setData] = useState(
    workData.find((item) => Number(item.id) === Number(id))
  );
  const [otherWorks, setOtherWorks] = useState(() => findNextWorks(id));

  useEffect(() => {
    setData(workData.find((item) => item.id === id));
    setOtherWorks(() => findNextWorks(id));
  }, [id]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!data) return;

  return (
    <DetailLayout>
      <section className="detail_content_section">
        <article>
          <div className="desc_container">
            <div className="info_wrapper">
              <h1>{data.title}</h1>
              {!!data.tags.length && (
                <ul className="tag_list">
                  {data.tags.map((tag, index) => (
                    <li key={index} className="tag_item">
                      # {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="text_wrapper">
              {!!data.text.length &&
                data.text.map((p, index) => <p key={index}>{p}</p>)}
            </div>
            {!!data.links.length && (
              <ul className="link_list">
                {data.links.map((linkObj, index) => (
                  <li key={index} className="link_item">
                    <a href={linkObj.href}>{getLinkContent(linkObj.type)}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="image_container">
            {!!data.videos.length &&
              data.videos.map((video, index) => (
                <div key={index} className={`wrapper ${video.class}`}>
                  <video key={video.src} muted autoPlay>
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
              ))}
            {!!data.images.length &&
              data.images.map((image, index) => (
                <div key={index} className={`wrapper ${image.class}`}>
                  <img src={image.src} alt="" />
                </div>
              ))}
          </div>
        </article>
        <div className="home_button_area">
          <button className="home_button" onClick={() => nav("/")}>
            <img src={leftArrow} />
            Go Home
          </button>
        </div>
      </section>
      <section className="others_section">
        <h3>OTHER WORKS</h3>
        <WorkList workArray={otherWorks} />
      </section>
    </DetailLayout>
  );
};

export default Detail;
