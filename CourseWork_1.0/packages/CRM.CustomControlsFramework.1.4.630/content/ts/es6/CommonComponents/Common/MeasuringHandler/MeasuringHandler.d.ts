import { IMeasuringHandler } from "./IMeasuringHandler";
import { IMeasuringSubscriber } from "./IMeasuringSubscriber";
declare class MeasuringHandler implements IMeasuringHandler {
    private static _instance;
    private _previousDimensions;
    private _subscribers;
    private _pendingSubscribers;
    private _pendingUpdates;
    private _schedule;
    static getInstance(): MeasuringHandler;
    setSchedulingFunction(schedule: () => void): void;
    readonly subscribers: IMeasuringSubscriber[];
    addMeasuringSubscribers(subscriber: IMeasuringSubscriber): void;
    removeMeasuringSubscribers(subscriber: IMeasuringSubscriber): void;
    scheduleMeasuringUpdate(): void;
    flushPendingMeasuringNotifications(): number;
    takeMeasurements(): void;
}
export { MeasuringHandler };
