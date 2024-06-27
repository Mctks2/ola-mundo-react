import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    // Quando mudar de rota scrolla para o topo
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [pathname]);

    return null;
}
