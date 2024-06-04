declare module "*.svg" {
    import type { FC } from "react";

    const ReactComponent: FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
