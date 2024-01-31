/**
 * WARNING: This module is deprecated and will be removed in the future.  Do not reference in any future work.
 * */
declare module Sys {
	/**
	 * API as been deprecated, but left in for backwards compatibility for now.
	 */
	class StringBuilder {
		constructor(text: string);
		constructor();
		append(text: string): void;
	}

	/**
	 * API as been deprecated, but left in for backwards compatibility for now.
	 */
	class CultureInfo {
		constructor(name: string, numberFormat: System.Dictionary, dateTimeFormat: System.Dictionary);

		numberFormat: System.Dictionary;
		name: string;
		static InvariantCulture: CultureInfo;
		static CurrentCulture: CultureInfo;
		dateTimeFormat: System.Dictionary;
	}
}

/**
 * This module is deprecated and will be removed in the future.  Do not reference in any future work.
 * */
declare module System {
	/**
	 * API as been deprecated, but left in for backwards compatibility for now.
	 */
	interface Dictionary {
		[key: string]: any;
	}

	/**
	 * API as been deprecated, but left in for backwards compatibility for now.
	 */
	interface ArrayList {}
}
