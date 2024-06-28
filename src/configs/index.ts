import { applicationConfiguration } from "~/configs/app";
import { clientConfiguration } from "~/configs/client";

import type { IConfiguration } from "~@configuration/schema";

export default {
    app: applicationConfiguration,
    client: clientConfiguration,
} as IConfiguration;
