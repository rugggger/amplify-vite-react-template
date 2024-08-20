import { useSpring, animated, easings } from "@react-spring/web";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: ReactNode;
  animation?: IAnimation;
}

interface IAnimation {
  tranformBefore: string;
  tranformAfter: string;
  triggerOnce?: boolean;
  duration?: number;
}

export const Animated: React.FC<Props> = (props: Props) => {
  const { children, animation } = props;
  const { ref, inView } = useInView({
    triggerOnce: animation?.triggerOnce, // Trigger animation only once
    threshold: 0.1, // Percentage of the component visible to trigger the animation
  });

  // Define the animation based on whether the component is in view
  const springProps = useSpring({
    opacity: inView ? 1 : 0.2,
    transform: inView ? animation?.tranformBefore : animation?.tranformAfter,
    config: {
      tension: 280,
      friction: 300,
      duration: animation?.duration || 500,
    }, // Animation configuration
  });

  return (
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};

const LeftToRightReveal = ({
  children,
  triggerOnce = true,
  delay = 0,
}: {
  children: ReactNode;
  triggerOnce?: boolean;
  delay?: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce,
    threshold: 0.1,
  });

  const props = useSpring({
    from: { width: "0%" },
    to: { width: inView ? "100%" : "0%" },
    config: { duration: 500, easing: easings.easeInQuart },
    delay
  });

  return (
    <>
      <animated.div ref={ref} style={{ overflow: "hidden", ...props }}>
        {children}
      </animated.div>
    </>
  );
};

export default LeftToRightReveal;
