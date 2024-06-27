import type { IConfiguration } from "~/bootstrap/configuration/schema";

import { applicationConfiguration } from "~/configs/app";
import { clientConfiguration } from "~/configs/client";

export default {
    app: applicationConfiguration,
    client: clientConfiguration,
} as IConfiguration;
