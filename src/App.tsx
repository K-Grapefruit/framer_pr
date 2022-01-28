import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Com = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  margin-bottom: 40px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin: 10px;
`;

const Box1 = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin: 10px;
`;

const Box2 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin: 10px;
`;

const Box3s = styled(motion.div)`
  width: 90px;
  height: 90px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  padding: 0;
`;

const Box3 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box4 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fffa65;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin: 10px;
`;

const Circle = styled(motion.div)`
  background-color: white;
  place-self: center;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 1 } },
// };

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const hoverVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
};

const myVars = {
  start: {
    scale: 0,
  },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      duration: 3,
    },
  },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  //Motion Value
  const x = useMotionValue(0);
  //useTransform (값 , [검토하길 원하는 입력값] , [얻길 원하는 출력값])
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);

  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      `linear-gradient(135deg,#e09,#d0e)`,
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Com>
        <span style={{ textAlign: "center" }}>Tset1</span>
        <Box variants={myVars} initial="start" animate="end" />
      </Com>
      <Com>
        <span style={{ textAlign: "center" }}>Tset2</span>
        <Box1 variants={boxVariants} initial="start" animate="end">
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
        </Box1>
      </Com>
      <Com>
        <span style={{ textAlign: "center" }}>HoverEvent</span>
        {/* <Box2
          whileHover={{ scale: 1.5, rotateZ: 90 }}
          whileTap={{ scale: 1, borderRadius: "100px" }}
        ></Box2> */}
        <Box2
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          variants={hoverVariants}
          whileHover="hover"
          whileTap="click"
        ></Box2>
      </Com>
      <Com>
        <span style={{ textAlign: "center" }}>Drag</span>
        <Box3 ref={biggerBoxRef}>
          <Box3s
            drag
            dragSnapToOrigin
            dragElastic={1}
            dragConstraints={biggerBoxRef}
            variants={hoverVariants}
            whileHover="hover"
            whileTap="click"
          ></Box3s>
        </Box3>
      </Com>
      <Com>
        <button onClick={() => x.set(200)}>Click me</button>
        <Box4 style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin></Box4>
      </Com>
    </Wrapper>
  );
}

export default App;
