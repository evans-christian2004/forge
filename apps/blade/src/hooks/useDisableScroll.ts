import { useEffect } from "react";

export default function useDisableScroll(timeout:number) {
    useEffect(() => {
        // I guess we have to check if were in a browser environment for next.js
        if (typeof window === "undefined") {
            return;
        }

        const originalOverflow = document.body.style.overflow;
        const originalHeight = document.body.style.height;
        const originalPosition = document.body.style.position;

        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";

        const timer = setTimeout(() => {
            document.body.style.overflow = originalOverflow;
            document.body.style.height = originalHeight;
            document.body.style.position = originalPosition;
            document.body.style.width = "";
        }, timeout);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = originalOverflow;
            document.body.style.height = originalHeight;
            document.body.style.position = originalPosition;
            document.body.style.width = "";
        };
    }, [timeout]);
}