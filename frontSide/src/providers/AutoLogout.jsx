import { useEffect } from "react";
import useLogout from "../visitor/hooks/useLogout";
import { useCurrentVisitor } from "./VisitorProvider";
import ROUTES from "../routers/routerModel";
import { useNavigate } from "react-router-dom";

export default function AutoLogout() {
    const { authStatus } = useCurrentVisitor();
    const { handleLogout } = useLogout();
    const navigate = useNavigate();
    useEffect(() => {
        if (!authStatus) return;

        let timeoutId;

        const resetInactivityTimer = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                handleLogout();
                navigate(ROUTES.ROOT);
            }, 4 * 60 * 60 * 1000); // 4 hours
        };

        const activityEvents = ["mousemove", "keydown", "click", "touchstart"];
        activityEvents.forEach((event) => window.addEventListener(event, resetInactivityTimer));

        resetInactivityTimer();

        return () => {
            clearTimeout(timeoutId);
            activityEvents.forEach((event) => window.removeEventListener(event, resetInactivityTimer));
        };
    }, [authStatus, handleLogout]);

    return null;
}
