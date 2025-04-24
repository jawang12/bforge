import { useRef } from "react";
import { Circle } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = () => {
  const icosahedronRef = useRef(null);
  const cubeRef = useRef(null);
  const torusRef = useRef(null);
  const cuboidRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: icosahedronRef,
    //  start when the end(bottom) of the viewport hits the start of the target element
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    // track entirety of the scroll as the cube is on the viewport
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });

  const icoRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="overflow-x-clip py-24 md:py-52">
      <div className="container">
        <p className="text-center font-extrabold uppercase tracking-wider text-zinc-500">
          Introducing Blockforge
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-center font-heading text-5xl font-black md:text-6xl lg:text-7xl">
          The Future of Blockchain is here
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-xl text-zinc-400 md:text-2xl">
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className="mt-10 flex justify-center">
          <CutCornerButton>Get Started</CutCornerButton>
        </div>
        <div className="mt-24 flex justify-center">
          <div className="relative z-0 inline-flex">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* <Hexagon className="size-[1100px]" size={1100} /> */}
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* <Hexagon
                className="size-[1800px]"
                size={1800}
                reverse={true}
                duration={55}
              /> */}
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle
                className="absolute -top-[900px] left-[200px]"
                // animate={true}
              >
                <motion.img
                  src="/assets/images/cube.png"
                  alt="Cube 3d image"
                  className="size-[140px]"
                  ref={cubeRef}
                  style={{ rotate: cubeRotate }}
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle
                className="absolute left-[200px] top-[270px]"
                // animate={true}
              >
                <motion.img
                  src="/assets/images/cuboid.png"
                  alt="Cuboid 3d image"
                  className="size-[140px]"
                  ref={cuboidRef}
                  style={{ rotate: cuboidRotate }}
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]">
                <motion.img
                  src="/assets/images/torus.png"
                  alt="Torus 3d image"
                  className="size-[140px]"
                  ref={torusRef}
                  style={{ rotate: torusRotate }}
                />
              </Circle>
            </div>
            <motion.div
              className="inline-flex"
              style={{ rotate: icoRotate }}
              ref={icosahedronRef}
            >
              <img
                src="/assets/images/icosahedron.png"
                alt=""
                className="absolute left-1/2 top-1/2 -z-10 w-[calc(100%+100px)] max-w-none -translate-x-1/2 -translate-y-1/2 brightness-[4%] hue-rotate-[240deg] saturate-[10%]"
              />
              <img
                src="/assets/images/icosahedron.png"
                alt="ico 3d image"
                className="w-[500px]"
              />
            </motion.div>
          </div>
        </div>
        <div className="mt-40 flex flex-col items-center justify-center gap-4 md:mt-80">
          <div className="inline-flex h-10 w-5 justify-center rounded-full pt-2 outline outline-[6px] outline-fuchsia-500/10">
            <motion.div
              animate={{
                translateY: 12,
                opacity: 0.2,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              className="h-3 w-1 rounded-full bg-fuchsia-500"
            ></motion.div>
          </div>
          <p className="font-extrabold uppercase tracking-wider text-zinc-500">
            Scroll to Learn More
          </p>
        </div>
      </div>
    </section>
  );
};
