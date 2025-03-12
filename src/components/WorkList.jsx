import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const WorkListLayout = styled.ul`
  li {
    border-bottom: 1px solid var(--black);
    overflow-x: hidden;
    &:first-child {
      border-top: 1px solid var(--black);
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: var(--space_horizontal);
      font-weight: 300;
      font-size: var(--large_text);
      letter-spacing: -0.2rem;
      transition: all 0.3s linear allow-discrete;
      -webkit-transition: all 0.3s linear allow-discrete;
      &:hover {
        transform: translateX(2rem);
      }
    }
  }
`;

const WorkList = ({ workArray }) => {
  return (
    <WorkListLayout>
      {workArray.length > 0 &&
        workArray.map((work) => (
          <motion.li
            key={work.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
          >
            <Link to={`/work/detail/${work.id}`}>{work.title}</Link>
          </motion.li>
        ))}
    </WorkListLayout>
  );
};

WorkList.propTypes = {
  workArray: PropTypes.array,
};

export default WorkList;
