import { Circle } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";

export const CallToActionSection = () => {
  return (
    <section className="overflow-hidden py-60">
      <div className="container">
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[700px]" />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[1100px]" />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -top-[400px] left-0">
              <img src="/assets/images/cuboid.png" className="size-[140px]" />
            </Circle>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[70px]">
              <img src="/assets/images/cylinder.png" className="size-[140px]" />
            </Circle>
          </div>
          <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-sm text-center text-xl text-zinc-400 lg:text-2xl">
            Start building using blockchain technology, with Blockforge.
          </p>
          <div className="mt-12 flex justify-center">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
};
