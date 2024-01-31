/**
 * This file will holds properties that extend native/third-party interfaces
 */

import * as React from "react";

declare module "react" {
	interface HTMLAttributes<T> {
		[key: string]: any;
	}

	interface CSSProperties {
		[propertyName: string]: any;
	}
}
