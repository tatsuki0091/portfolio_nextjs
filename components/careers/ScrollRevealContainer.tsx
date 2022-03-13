import { useRef, useEffect } from "react";
import { NextPage } from "next";

type Props = {
  move: string;

  className?: string;
};

const ScrollReveal: NextPage<Props> = ({
  children,
  move,

  className,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    async function animate() {
      if (sectionRef.current) {
        //Dynamic import
        const sr = (await import("scrollreveal")).default;
        sr().reveal(sectionRef.current, {
          opacity: 0,
          origin: move,
          distance: "20px",
          viewFactor: 0.2,
        });
      }
    }
    animate();
  }, [sectionRef]);
  return (
    <div className={`${className}`} ref={sectionRef}>
      {children}
    </div>
  );
};
export default ScrollReveal;
