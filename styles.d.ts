import { CSSProperties } from "react";
export declare function colors(palette: ColorScheme): Palette;
export declare function styles({ palette }: {
    palette: ColorScheme;
}): Record<string, CSSProperties>;
export declare function CStyleSheet({ scheme }: {
    scheme: Palette;
}): JSX.Element;
