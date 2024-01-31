/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */

/*
 * Declaring DynamicsSrc module here for accessing DynamicsSrc.IDeferred in CustomControlInterfaces, so UnifiedClient
 * can just exactly same name in its CustomControlInterfaces file.
 * */
declare module DynamicsSrc {
	/**
	 * Represents a deferred value.
	 * WARNING: This interface copied from mscrm.d.ts from CRM repo. In case of changes please sync them in both places
	 * TData is the argument type for success callbacks.
	 * TError is the return type for failure callbacks.
	 */
	interface IDeferred<TData, TError> {
		/**
		 * Add a handler to be called when the deferred object is resolved or rejected. If the
		 * deferred object is already resolved, the handler is still invoked.
		 * alwaysCallback: The callback to invoke.
		 * Returns: the current deferred object.
		 */
		always(alwaysCallback: (value: any) => void): IDeferred<TData, TError>;

		/**
		 * Add a handler to be called when the deferred object is resolved. If the
		 * deferred object is already resolved, the handler is still invoked.
		 * doneCallback: The callback to invoke.
		 * Returns: the current deferred object.
		 */
		done(doneCallback: (value: TData) => void): IDeferred<TData, TError>;

		/**
		 * Add a handler to be called when the deferred object is rejected. If the
		 * deferred object is already resolved, the handler is still invoked.
		 * failCallback: The callback to invoke.
		 * Returns: the current deferred object.
		 */
		fail(failCallback: (value: TError) => void): IDeferred<TData, TError>;

		/**
		 * Determines whether the deferred object has been rejected.
		 * Returns: true if it has been rejected; false otherwise.
		 */
		isRejected(): boolean;

		/**
		 * Determines whether the deferred object has been resolved.
		 * Returns: true if it has been resolved; false otherwise.
		 */
		isResolved(): boolean;

		/**
		 * Add handlers to be called when the deferred object is resolved or rejected.
		 * If the object has already been resolved or rejected, the handlers are still invoked.
		 * doneCallback: The callback to invoke when the object is resolved.
		 * failCallback: The callback to invoke when the object is rejected.
		 * Returns: The current deferred object.
		 */
		then(doneCallback: (value: TData) => void, failCallback: (value: TError) => void): IDeferred<TData, TError>;
	}
}
