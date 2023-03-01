import { useInView } from "react-intersection-observer";

const MultipleObserver = ({ children, triggerOnce = false }) => {
   const { ref, inView } = useInView({ triggerOnce: triggerOnce });
   return <div ref={ref}>{inView ? <>{children}</> : null}</div>;
};

export default MultipleObserver;
