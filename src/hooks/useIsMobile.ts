import { useViewportSize } from "@mantine/hooks";

export function useIsMobile() {
    const { height, width } = useViewportSize();
    
    return height > width;
}

