import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { experienceList } from "../data/experienceList";
import { responsiveValue } from "../styles/mixins";

const ExperienceLayout = styled.div`
  svg {
    ${responsiveValue("width", 300, 160, 1920, 360)}
    overflow: visible;
  }
`;

// 원: 20
// 선: 80

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const circleRadius = 10;
  const itemSpacing = 100;
  const totalHeight =
    (experienceList.length - 1) * itemSpacing + circleRadius * 2 + 22;

  return (
    <ExperienceLayout>
      <svg
        width="100%"
        height="auto"
        viewBox={`90 0 120 ${totalHeight}`}
        ref={ref}
      >
        {experienceList.map((exp, index) => {
          const yPosition = 15 + index * 100; // 60
          const nextYPosition = yPosition + 100; // 160

          return (
            <motion.g
              key={exp.id}
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? { opacity: 1, transition: { delay: index * 0.2 } }
                  : {}
              }
            >
              <circle
                cx="100"
                cy={yPosition} //60
                r={circleRadius} //10
                stroke="#0d0d0d"
                strokeWidth="1"
                fill="none"
              />

              {index < experienceList.length - 1 && (
                <motion.line
                  x1="100"
                  y1={yPosition + circleRadius}
                  x2="100"
                  y2={nextYPosition - circleRadius}
                  stroke="#0d0d0d"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={
                    isInView
                      ? { pathLength: 1, transition: { duration: 1 } }
                      : {}
                  }
                />
              )}

              <text x="120" y={yPosition - 5} fontSize="12" fill="#0d0d0d">
                {exp.company}
              </text>
              <text x="120" y={yPosition + 10} fontSize="10" fill="#666">
                {exp.role}
              </text>
              <text x="120" y={yPosition + 25} fontSize="10" fill="#999">
                {exp.duration}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </ExperienceLayout>
  );
};

export default ExperienceTimeline;
