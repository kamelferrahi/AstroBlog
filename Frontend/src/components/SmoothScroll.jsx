import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll"
function SmoothScroll() {
    const overscrollOptions = {
        enable: true,
        effect: 'bounce',
        damping: 0.15,
        maxOversroll: 10,
    };
    const options = {
        damping: 0.08,
        plugins: {
            overscroll: { ...overscrollOptions }
        }
    };
    useEffect(() => {
        Scrollbar.use(OverscrollPlugin);
        Scrollbar.init(document.body, options);
        return () => {
            if (Scrollbar) Scrollbar.destroy(document.body);
        }
    }, []);
    return null;
}

export default SmoothScroll;