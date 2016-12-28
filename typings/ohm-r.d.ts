declare module "ohm-r" {
    export function calc(...colors: string[]): ohmResult;
    export function calc(...colors: colors[]): ohmResult;

    export enum colors {
        BLACK,
        BROWN,
        RED,
        ORANGE,
        YELLOW,
        GREEN,
        BLUE,
        VIOLET,
        GRAY,
        WHITE,
        GOLD,
        SILVER
    }

    interface ohmResult {
        ohms: number;
        tolerance: toleranceResult;
    }

    interface toleranceResult {
        min: number;
        max: number;
    }
}