/// <reference types="react" />
declare module "CommonComponents/Primitive/IFlexboxStyle" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { PositionProperty } from "csstype";
    /**
     * Styles for a Flexbox component instance
     */
    interface IFlexboxStyle {
        borderWidth?: number | string;
        borderBottomWidth?: number | string;
        borderLeftWidth?: number | string;
        borderRightWidth?: number | string;
        borderTopWidth?: number | string;
        height?: number | string;
        width?: number | string;
        minWidth?: number | string;
        minHeight?: number | string;
        maxWidth?: number | string;
        maxHeight?: number | string;
        margin?: number | string;
        marginBottom?: number | string;
        marginLeft?: number | string;
        marginRight?: number | string;
        marginTop?: number | string;
        padding?: number | string;
        paddingBottom?: number | string;
        paddingLeft?: number | string;
        paddingRight?: number | string;
        paddingTop?: number | string;
        /**
         * The position CSS property chooses alternative rules for positioning elements,
         * designed to be useful for scripted animation effects.
         */
        position?: PositionProperty;
        bottom?: number | string;
        left?: number | string;
        right?: number | string;
        top?: number | string;
    }
    export { IFlexboxStyle };
}
declare module "CommonComponents/Primitive/IFlexboxItemStyle" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { AlignSelfProperty } from "csstype";
    import { IFlexboxStyle } from "CommonComponents/Primitive/IFlexboxStyle";
    /**
     * Styles for a Flexbox item component instance
     */
    interface IFlexboxItemStyle extends IFlexboxStyle {
        /**
         * The align-self CSS property aligns this flex item on the secondary axis, overriding the flex container's align-items value.
         * Safari does not support this feature.
         */
        alignSelf?: AlignSelfProperty;
        /**
         * The flex CSS property is a shorthand property (flex-grow, flex-shrink and flex-basis combined) specifying the ability of a flex item to alter its dimensions to fill available space.
         * Flex items can be stretched to use available space proportional to their flex grow factor or their flex shrink factor to prevent overflow.
         */
        flex?: number | string;
    }
    export { IFlexboxItemStyle };
}
declare module "CommonComponents/Primitive/IFlexboxContainerStyle" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { AlignContentProperty, AlignItemsProperty, DisplayProperty, FlexDirectionProperty, FlexWrapProperty, JustifyContentProperty } from "csstype";
    import { IFlexboxStyle } from "CommonComponents/Primitive/IFlexboxStyle";
    /**
     * Styles for a Flexbox container component instance
     */
    interface IFlexboxContainerStyle extends IFlexboxStyle {
        /**
         * The CSS display property defines a flex container
         * inline or block depending on the given value
         */
        display?: DisplayProperty;
        /**
         * The CSS align-items property aligns flex items of the current flex
         * line the same way as justify-content but in the perpendicular direction.
         */
        alignItems?: AlignItemsProperty;
        /**
         * The flex-direction CSS property describes how flex items are placed in the flex container,
         * by setting the direction of the flex container's main axis.
         */
        flexDirection?: FlexDirectionProperty;
        /**
         * The CSS flex-wrap property specifies whether flex items are forced into a single line or can be wrapped onto multiple lines.
         * If wrapping is allowed, this property also enables you to control the direction in which lines are stacked.
         */
        flexWrap?: FlexWrapProperty;
        /**
         * The CSS justify-content property defines how the browser distributes space between and around flex items along the main-axis of their container.
         */
        justifyContent?: JustifyContentProperty;
        /**
         * The CSS justify-content property aligns a flex container's lines within when there is extra space in the cross-axis
         */
        alignContent?: AlignContentProperty;
    }
    /**
     * Transforms IFlexboxContainerStyle to React.CSSProperties
     */
    function applyIFlexboxContainerProp(style: IFlexboxContainerStyle): React.CSSProperties;
    /**
     * returns css class name that should be added to dom element.
     */
    function getCssClassName(display: string): string;
    export { IFlexboxContainerStyle, applyIFlexboxContainerProp, getCssClassName };
}
declare module "CommonComponents/Primitive/ICSSPseudoClasses" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    /**
     *  CSS Pseudo-classes
     */
    interface ICSSPseudoClasses {
        /**
         *  Selects the active link
         */
        ":active"?: IViewStyle;
        /**
         *  Selects every checked element
         */
        ":checked"?: IViewStyle;
        /**
         *  Selects every disabled element
         */
        ":disabled"?: IViewStyle;
        /**
         * Selects every element that has no children
         */
        ":empty"?: IViewStyle;
        /**
         * Selects every enabled element
         */
        ":enabled"?: IViewStyle;
        /**
         * Selects every elements that is the first child of its parent
         */
        ":first-child"?: IViewStyle;
        /**
         * Selects every element that is the first element of its parent
         */
        ":first-of-type"?: IViewStyle;
        /**
         * Selects the <input> element that has focus
         */
        ":focus"?: IViewStyle;
        /**
         * Selects links on mouse over
         */
        ":hover"?: IViewStyle;
        /**
         * Selects elements with a value within a specified range
         */
        ":in-range"?: IViewStyle;
        /**
         * Selects all elements with an invalid value
         */
        ":invalid"?: IViewStyle;
        /**
         * Selects every element that is the last child of its parent
         */
        ":last-child"?: IViewStyle;
        /**
         * Selects every element that is the last element of its parent
         */
        ":last-of-type"?: IViewStyle;
        /**
         * Selects unvisited links
         */
        ":link"?: IViewStyle;
        /**
         * Selects every element that is the only element of this type of its parent
         */
        ":only-of-type"?: IViewStyle;
        /**
         * Selects every element that is the only child of its parent
         */
        ":only-child"?: IViewStyle;
        /**
         * Selects elements with no "required" attribute
         */
        ":optional"?: IViewStyle;
        /**
         * Selects elements with a value outside a specified range
         */
        ":out-of-range"?: IViewStyle;
        /**
         * Selects elements with a "readonly" attribute specified
         */
        ":read-only"?: IViewStyle;
        /**
         * Selects elements with no "readonly" attribute
         */
        ":read-write"?: IViewStyle;
        /**
         * Selects elements with a "required" attribute specified
         */
        ":required"?: IViewStyle;
        /**
         * Selects the document's root element
         */
        ":root"?: IViewStyle;
        /**
         * Selects the current active element (clicked on a URL containing that anchor name)
         */
        ":target"?: IViewStyle;
        /**
         * Selects all elements with a valid value
         */
        ":valid"?: IViewStyle;
        /**
         * Selects all visited links
         */
        ":visited"?: IViewStyle;
        /**
         * This was added to be able to use such selectors
         * as "[aria-expanded=true]", "[aria-expanded=false]"
         * and so on
         */
        [key: string]: IViewStyle | Object | undefined;
    }
    export { ICSSPseudoClasses };
}
declare module "CommonComponents/Primitive/IViewStyle" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IFlexboxStyle } from "CommonComponents/Primitive/IFlexboxStyle";
    import { IFlexboxItemStyle } from "CommonComponents/Primitive/IFlexboxItemStyle";
    import { IFlexboxContainerStyle } from "CommonComponents/Primitive/IFlexboxContainerStyle";
    import { ICSSPseudoClasses } from "CommonComponents/Primitive/ICSSPseudoClasses";
    import { BorderBottomProperty, BorderLeftProperty, BorderProperty, BorderRightProperty, BorderTopProperty, BoxSizingProperty, DisplayProperty, FloatProperty, GlobalsNumber, OutlineProperty, OverflowProperty, OverflowXProperty, OverflowYProperty, PointerEventsProperty, ResizeProperty, TransformOriginProperty, VerticalAlignProperty, VisibilityProperty, WhiteSpaceProperty, ZIndexProperty } from "csstype";
    /**
     * Styles for a View component instance
     */
    interface IViewStyle extends IFlexboxStyle, IFlexboxItemStyle, IFlexboxContainerStyle, ICSSPseudoClasses {
        backgroundColor?: string;
        borderColor?: string;
        borderBottomColor?: string;
        borderLeftColor?: string;
        borderRightColor?: string;
        borderTopColor?: string;
        borderRadius?: number | string;
        borderBottomLeftRadius?: number | string;
        borderBottomRightRadius?: number | string;
        borderTopLeftRadius?: number | string;
        borderTopRightRadius?: number | string;
        borderStyle?: "solid" | "dotted" | "dashed" | "none" | string;
        boxShadow?: string;
        boxSizing?: BoxSizingProperty;
        opacity?: GlobalsNumber;
        overflow?: OverflowProperty;
        overflowX?: OverflowXProperty;
        overflowY?: OverflowYProperty;
        zIndex?: ZIndexProperty;
        float?: FloatProperty;
        flexGrow?: GlobalsNumber;
        flexShrink?: GlobalsNumber;
        lineHeight?: string | number;
        color?: string;
        transform?: string;
        transformOrigin?: TransformOriginProperty<string | number>;
        verticalAlign?: VerticalAlignProperty<string | number>;
        whiteSpace?: WhiteSpaceProperty;
        horizontalAlign?: string;
        textOverflow?: "clip" | "ellipsis" | string | "initial" | "inherit";
        display?: DisplayProperty;
        pointerEvents?: PointerEventsProperty;
        transition?: string;
        transitionDelay?: string;
        transitionDuration?: string;
        transitionProperty?: "none" | "all" | string;
        transitionTimingFunction?: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | string;
        bottom?: number | string;
        left?: number | string;
        right?: number | string;
        top?: number | string;
        border?: BorderProperty<string | number>;
        borderTop?: BorderTopProperty<string | number>;
        borderBottom?: BorderBottomProperty<string | number>;
        borderRight?: BorderRightProperty<string | number>;
        borderLeft?: BorderLeftProperty<string | number>;
    }
    /**
     * Styles for a View component instance that is specific to HTML.
     */
    interface IViewHtmlStyle {
        /**
         * The cursor CSS property specifies the mouse cursor displayed when the mouse pointer is over an element.
         */
        cursor?: "pointer" | string;
        /**
         * An outline is a line that is drawn around elements (outside the borders) to make the element "stand out".
         * Mainly this property is to do not show outline.
         */
        outline?: OutlineProperty<string | number>;
        /**
         * Text color inside the view.
         */
        color?: string;
        /**
         * Resize CSS property. Not supported by EDGE, but behaves as resize set to NONE.
         */
        resize?: ResizeProperty;
        /**
         * Specifies whether or not an element is visible.
         */
        visibility?: VisibilityProperty;
    }
    export { IViewHtmlStyle, IViewStyle };
}
declare module "CommonComponents/Supplementary/Accessibility/Attributes/AttributeName" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    export const ROLE = "role";
    export const TITLE = "title";
    export const FOR = "for";
    export const ALT = "alt";
    export const ACCESS_KEY = "accessKey";
    export const DIR = "dir";
    export const TAB_INDEX = "tabindex";
    export const HIDDEN = "hidden";
    export const DISABLED = "disabled";
    export const REQUIRED = "required";
    export const ARIA_ACTIVE_DESCENDANT = "aria-activedescendant";
    export const ARIA_ATOMIC = "aria-atomic";
    export const ARIA_AUTO_COMPLETE = "aria-autocomplete";
    export const ARIA_BUSY = "aria-busy";
    export const ARIA_CONTROLS = "aria-controls";
    export const ARIA_CHECKED = "aria-checked";
    export const ARIA_DESCRIBED_BY = "aria-describedby";
    export const ARIA_DISABLED = "aria-disabled";
    export const ARIA_DROP_EFFECT = "aria-dropeffect";
    export const ARIA_EXPANDED = "aria-expanded";
    export const ARIA_FLOW_TO = "aria-flowto";
    export const ARIA_GRABBED = "aria-grabbed";
    export const ARIA_HAS_POPUP = "aria-haspopup";
    export const ARIA_HIDDEN = "aria-hidden";
    export const ARIA_INVALID = "aria-invalid";
    export const ARIA_LABEL = "aria-label";
    export const ARIA_LABELLED_BY = "aria-labelledby";
    export const ARIA_LEVEL = "aria-level";
    export const ARIA_LIVE = "aria-live";
    export const ARIA_MODAL = "aria-modal";
    export const ARIA_MULTILINE = "aria-multiline";
    export const ARIA_MULTISELECTABLE = "aria-multiselectable";
    export const ARIA_OWNS = "aria-owns";
    export const ARIA_POS_IN_SET = "aria-posinset";
    export const ARIA_PRESSED = "aria-pressed";
    export const ARIA_RELEVANT = "aria-relevant";
    export const ARIA_READONLY = "aria-readonly";
    export const ARIA_REQUIRED = "aria-required";
    export const ARIA_SELECTED = "aria-selected";
    export const ARIA_SET_SIZE = "aria-setsize";
    export const ARIA_SORT = "aria-sort";
    export const ARIA_CURRENT = "aria-current";
    export const ARIA_VALUE_MAX = "aria-valuemax";
    export const ARIA_VALUE_MIN = "aria-valuemin";
    export const ARIA_VALUE_NOW = "aria-valuenow";
    export const ARIA_VALUE_TEXT = "aria-valuetext";
    export const ARIA_ORIENTATION = "aria-orientation";
}
declare module "CustomControls/Utilities/CustomControlConstants" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * Custom Control Constants
     */
    class CustomControlConstants {
        /**
         * LearningPath DOM Attribute Name
         */
        static LearningPathAttributeSuffix: string;
        static LearningPathAttributeName: string;
        /**
         * CCF telemetry component name .
         */
        static CCF: string;
    }
    export { CustomControlConstants };
}
declare module "CommonComponents/Primitive/IAccessibilityNotificationProps" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * An alias for all the possible alert types.
     */
    type NotificationType = "off" | "assertive" | "polite";
    /**
     * A props minimum to support the ARIA live regions.
     */
    interface IAccessibilityNotificationProps {
        /**
         * Accessibility role.
         */
        role?: "alert" | string;
        /**
         * The type of the alert to happen (effective when role equals "alert").
         */
        notificationType?: NotificationType;
        /**
         * Indicates whether the control must make accessibility announcements on content change.
         */
        announceAccessibilityNotification?: boolean;
    }
    export { NotificationType, IAccessibilityNotificationProps };
    export default IAccessibilityNotificationProps;
}
declare module "CommonComponents/Primitive/ComponentBase" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { NotificationType } from "CommonComponents/Primitive/IAccessibilityNotificationProps";
    /**
     * Describes the basic set of props for a primitive component.
     */
    interface IPropsBase extends React.Attributes {
        /**
         * Component ID
         */
        id?: string;
        /**
         * Component style
         */
        style?: any;
        /**
         * Component style
         */
        atomicStyle?: any;
        /**
         *	Indicates whether the element and its contents is hidden
         */
        hidden?: boolean;
        /**
         * Assistive marker, indicates that pressing the button leads to opening a popup.
         */
        accessibilityHasPopup?: boolean;
        /**
         * Assistive marker, indicates whether or not the popup owned by the current item is expanded.
         */
        accessibilityExpanded?: boolean;
        /**
         * ARIA: The label supplied for the accessibility purposes, text.
         */
        accessibilityLabel?: string;
        /**
         * ARIA: The checked supplied for the accessibility purposes, boolean.
         */
        accessibilityChecked?: boolean;
        /**
         * ARIA: The live supplied for the accessibility purposes, text.
         */
        accessibilityLive?: NotificationType;
        /**
         * ARIA: The relevant changes supplied for the accessibility puproses, text, additions , removals , all.
         */
        accessibilityRelevant?: "additions" | "additions text" | "all" | "removals" | "text";
        /**
         * ARIA: To get information of the live region.
         */
        accessibilityAtomic?: boolean;
        /**
         * ARIA: Defines the hierarchical level of an element within a structure
         */
        accessibilityLevel?: number;
        /**
         * ARIA: indicates whether or not the current component could accept user typing in.
         */
        accessibilityReadOnly?: boolean;
        /**
         * ARIA: indicates whether or not the current component is disabled.
         */
        accessibilityDisabled?: boolean;
        /**
         * ARIA: indicates whether or not the current component and all of its descendents are visible/perceivable
         * to the user as implemented by the author.
         */
        accessibilityHidden?: boolean;
        /**
         * ARIA: Indicates the element that represents the current item within a container or set of related elements
         */
        accessibilityCurrent?: "page" | "step" | "location" | "date" | "time" | "true" | "false";
        /**
         * ARIA: Indicates the minimum value that the component can have
         */
        accessibilityValueMin?: number;
        /**
         * ARIA: Indicates the maximum value that the component can have
         */
        accessibilityValueMax?: number;
        /**
         * ARIA: Indicates the current value(Integer) of the component
         */
        accessibilityValueNow?: number;
        /**
         * ARIA: Indicates the current value(Text) of the component
         */
        accessibilityValueText?: string;
        /**
         * ARIA: Indicate whether an element is oriented horizonally or vertically.
         */
        accessibilityAriaOrientation?: "horizontal" | "vertical";
        /**
         * Indicates whether or not the button is selected.
         */
        isSelected?: boolean;
        /**
         * ARIA: The ID of the element that labels the current component.
         */
        labelledByElementId?: string;
        /**
         * ARIA: The ID of the element that describes the current component in detail.
         */
        describedByElementId?: string;
        /**
         * ARIA attribute that defines the ID of the element this list item is in control of.
         */
        controlsElementId?: string;
        /**
         * ARIA attribute that defines the ID of the element this component owns.
         */
        ownsElementId?: string;
        /**
         * ARIA attribute that defines the ID of the descendant that is currently being active.
         */
        activeDescendantId?: string;
        /**
         * Accessibility role.
         */
        role?: string;
        /**
         * Tab index indicating if the component focusable or not.
         */
        tabIndex?: number;
        /**
         * On click event handler
         * @param React.MouseEvent
         */
        onClick?: React.MouseEventHandler;
        /**
         * On click capture phase event handler
         * @param React.MouseEvent
         */
        onClickCapture?: React.MouseEventHandler;
        /**
         * OnDoubleClick event callback
         * @param {React.MouseEvent} event - Synthetic React event
         */
        onDoubleClick?: React.MouseEventHandler;
        /**
         * OnDrag event callback
         * @param {React.DragEvent} event - Synthetic React event
         */
        onDrag?: React.DragEventHandler;
        /**
         * OnDragEnd event callback
         * @param {React.DragEvent} event - Synthetic React event
         */
        onDragEnd?: React.DragEventHandler;
        /**
         * OnDragEnter event callback
         * @param {React.DragEvent} event - Synthetic React event
         */
        onDragEnter?: React.DragEventHandler;
        /**
         * OnDragExit event callback
         * @param {React.DragEvent} event - Synthetic React event
         */
        onDragExit?: React.DragEventHandler;
        /**
         * OnDragLeave event callback
         * @param {React.DragEvent} event - Synthetic React event
         */
        onDragLeave?: React.DragEventHandler;
        /**
         * OnDragOver event callback
         * @param {React.DragEvent} event - Synthetic React event
         */
        onDragOver?: React.DragEventHandler;
        /**
         * OnDragStart event callback
         * @param {React.DragEvent} event - Synthetic React event
         */
        onDragStart?: React.DragEventHandler;
        /**
         * OnDrop event callback
         * @param {React.DragEvent} event - Synthetic React event
         */
        onDrop?: React.DragEventHandler;
        /**
         * onFocus event callback
         * @param {React.FormEvent} event - Synthetic React event object
         */
        onFocus?: React.FormEventHandler;
        /**
         * OnBlur event callback
         * @param {React.FormEvent} event - Synthetic React event object
         */
        onBlur?: React.FormEventHandler;
        /**
         * OnPointerOver event callback
         * @param {React.SyntheticMouseEvent} event - Synthetic React event object
         * The event handler is raised every time the pointer moves on top of the element.
         */
        onPointerOver?: React.MouseEventHandler;
        /**
         * OnPointerOut event callback
         * @param {React.SyntheticMouseEvent} event - Synthetic React event object
         * The event handler is raised once the pointer moves out of the element boundaries.
         */
        onPointerOut?: React.MouseEventHandler;
        /**
         * OnPointerUp event callback
         * @param {React.SyntheticMouseEvent} event - Synthetic React event Object
         * The event handler is raised every time the pointer button is released.
         */
        onPointerUp?: React.MouseEventHandler;
        /**
         * OnPointerDown event callback
         * @param {React.SyntheticMouseEvent} event - Synthetic React event object
         * The event handler is raised every time the pointer button is pressed down.
         */
        onPointerDown?: React.MouseEventHandler;
        /**
         * OnPointerEnter event callback
         * @param {React.SyntheticMouseEvent} event - Synthetic React event Object
         * The event handler is raised once the pointer moves over the element boundaries.
         */
        onPointerEnter?: React.MouseEventHandler;
        /**
         * OnPointerLeave event callback
         * @param {React.SyntheticMouseEvent} event - Synthetic React event object
         * The event handler is raised once the pointer moves out of the element boundaries.
         */
        onPointerLeave?: React.MouseEventHandler;
        /**
         * OnPointerMove event callback
         * @param {React.SyntheticMouseEvent} event - Synthetic React event object
         * The event handler is raised once the pointer changes coordinates.
         */
        onPointerMove?: React.MouseEventHandler;
        /**
         * OnPointerCancel event callback
         * @param {React.SyntheticMouseEvent} event - Synthetic React event object
         * The event handler is raised once the pointer will no longer be able to generate events.
         */
        onPointerCancel?: React.MouseEventHandler;
        /**
         * OnKeyDown event callback
         * @param {React.KeyboardEventHandler} event - Synthetic React event object
         */
        onKeyDown?: React.KeyboardEventHandler;
        /**
         * OnKeyUp event callback
         * @param {React.KeyboardEvent} event - Synthetic React event object
         */
        onKeyUp?: React.KeyboardEventHandler;
        /**
         * OnMouseEnter event callback
         * @param {React.MouseEvent} event - Synthetic React event
         * The event handler is raised once the mouse moves over the element boundaries.
         */
        onMouseEnter?: React.MouseEventHandler;
        /**
         * OnMouseLeave event callback
         * @param {React.MouseEvent} event - Synthetic React event
         * The event handler is raised once the mouse moves out of the element boundaries.
         */
        onMouseLeave?: React.MouseEventHandler;
        /**
         *To handle scrolling of control
         * @param {React.UIEventHandler} event - Synthetic React event object
         */
        onScroll?: React.UIEventHandler;
        /**
         * Test hooks for UCI test automation infrastructure. Adds attributes to the element
         * using hookNames with "data-" prepended to them as the attribute names, and the values
         * as the attribute values.
         */
        testhooks?: {
            [hookName: string]: string;
        };
        /**
         * Accessibility title.
         */
        title?: string;
        /**
         * Fela inserted styles prop.
         * this should *not* be set by component
         */
        styles?: string;
        /**
         * ARIA: indicates whether or not the current component is required or not.
         */
        accessibilityRequired?: boolean | "false" | "true";
        /**
         * Styles meant to be set by the parent, not the component
         */
        explicitStyles?: string;
        /**
         * Whether this element is the root of a modal dialog (used for see more behaviour)
         */
        accessibilityModal?: boolean;
    }
    /**
     * Base component for all the primitive controls used
     */
    class ComponentBase<TProps extends IPropsBase, TState> extends React.Component<TProps, TState> {
        /**
         * Returns the specific name of the underlying element.
         * If nothing provided, the default tag name is to be used.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         * Note, some of the props still get assigned automatically, like "id", "style", "className", "children" etc.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
        /**
         * Whether this comonent has an aria property
         */
        protected hasAriaProperty(): boolean;
        /**
         * Returns the full set of props for the underlying component, internal use only.
         */
        protected getElementPropsInternal(): React.HTMLAttributes<Element>;
        /**
         * Returns the specific style for the underlying element.
         */
        protected getElementStyle(): React.CSSProperties;
        /**
         * Returns the class name for the underlying element.
         * @param style the style to be applied to the underlying component, used for readout here.
         */
        protected getElementClassName(): string;
        protected getFlexClassName(_style: React.CSSProperties): string;
        /**
         * Returns the children of the element.
         */
        protected getElementChildren(): React.ReactNode;
        /**
         * Returns true if element has horizontal or vertical scroll
         * @param style
         */
        static isElementScrollable(style: IViewStyle): boolean;
        /**
         * Renders the component to the virtual DOM.
         */
        render(): JSX.Element;
        /**
         * Check if the browser is Internet Explorer
         */
        protected readonly isIE: boolean;
        /**
         * Check if the browser is Edge
         */
        protected readonly isEdge: boolean;
    }
    export { IPropsBase, ComponentBase };
    export default ComponentBase;
}
declare module "CommonComponents/Common/MeasuringHandler/IMeasuringSubscriber" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    interface IMeasuringSubscriber {
        /**
         * Check if measure needs to be forced to make.
         */
        forceMeasure?: boolean;
        /**
         * get the component, which subscribe to re-measuring service
         * Returns the component
         */
        getComponent(): HTMLElement;
        /**
         * Pass in the current measuring size
         * @param width: current measuring width
         * @param height: current measuring height
         */
        onMeasure(width?: number, height?: number): void;
    }
    export { IMeasuringSubscriber };
}
declare module "CommonComponents/Common/MeasuringHandler/IMeasuringHandler" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IMeasuringSubscriber } from "CommonComponents/Common/MeasuringHandler/IMeasuringSubscriber";
    interface IMeasuringHandler {
        /**
         * Returns all the subscribers that subscribing to the re-measuring event when necessary
         */
        subscribers: IMeasuringSubscriber[];
        /**
         * Adds the subscribers.
         * @param subscriber  to add
         */
        addMeasuringSubscribers(subscriber: IMeasuringSubscriber): void;
        /**
         * Removes the subscribers
         * @param subscriber to remove
         */
        removeMeasuringSubscribers(subscriber: IMeasuringSubscriber): void;
        /**
         * Schedules a measuring update.
         */
        scheduleMeasuringUpdate(): void;
        /**
         * Notifies subscribers of any pending size updates.
         * This function does not perform measurements, takeMeasurements needs to be
         * called first to construct a list of subscribers to notify.
         * @returns Number of components updated.
         */
        flushPendingMeasuringNotifications(): number;
        /**
         * Checks whether any subscribers need to be notified of a size update.
         * This function does not notify subscribers, flushPendingMeasuringNotifications needs to be called to notify them.
         */
        takeMeasurements(): void;
    }
    export { IMeasuringHandler };
}
declare module "CommonComponents/Common/MeasuringHandler/MeasuringHandler" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IMeasuringHandler } from "CommonComponents/Common/MeasuringHandler/IMeasuringHandler";
    import { IMeasuringSubscriber } from "CommonComponents/Common/MeasuringHandler/IMeasuringSubscriber";
    class MeasuringHandler implements IMeasuringHandler {
        private static _instance;
        private _previousDimensions;
        private _subscribers;
        /**
         * Subscribers that need to be notified of size updates.
         */
        private _pendingSubscribers;
        /**
         * Functions to call to notify subscribers of pending size updates.
         */
        private _pendingUpdates;
        private _schedule;
        static getInstance(): MeasuringHandler;
        /**
         * Sets the function used to schedule measuring service updates.
         */
        setSchedulingFunction(schedule: () => void): void;
        /**
         * Returns all the subscribers for re-measuring service.
         */
        readonly subscribers: IMeasuringSubscriber[];
        /**
         * Adds the subscribers.
         * @param subscriber to add
         */
        addMeasuringSubscribers(subscriber: IMeasuringSubscriber): void;
        /**
         * Removes the subscribers
         * @param subscriber to remove
         */
        removeMeasuringSubscribers(subscriber: IMeasuringSubscriber): void;
        /**
         * Schedules a measuring update.
         */
        scheduleMeasuringUpdate(): void;
        /**
         * Notifies subscribers of any pending size updates.
         * This function does not perform measurements, takeMeasurements needs to be
         * called first to construct a list of subscribers to notify.
         * @returns Number of components updated.
         */
        flushPendingMeasuringNotifications(): number;
        /**
         * Checks whether any subscribers need to be notified of a size update.
         * This function does not notify subscribers, flushPendingMeasuringNotifications needs to be called to notify them.
         */
        takeMeasurements(): void;
    }
    export { MeasuringHandler };
}
declare module "CommonComponents/Primitive/FelaConnectHelper" {
    function ruleGen(props: any): any;
    const mapStylesToProps: (props: any) => (renderer: any) => any;
    export { ruleGen, mapStylesToProps };
}
declare module "CustomControls/Components/Helpers/CustomControlSeeMoreStyleHelper" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    class CustomControlSeeMoreStyleHelper {
        private static _instance;
        private _disablingScrollStyle;
        /**
         * A count of popups present on the current page
         */
        private _popupCount;
        /**
         * Gets the current see more style helper instance
         */
        static getInstance(): CustomControlSeeMoreStyleHelper;
        /**
         * Tracks a see more popup as open
         */
        seeMoreOpen(): void;
        /**
         * Tracks a see more popup as closed
         */
        seeMoreClose(): void;
        /**
         * Gets the current count of active popups;
         */
        getPopupCount(): number;
        /**
         * Get whether we should currently disable webkit scroll overflow
         */
        getDisableScrollStyle(): boolean;
        /**
         * Sets whether we should currently disable webkit scroll overflow
         * and triggers updates of all the elements that would be using it
         */
        setDisableScrollStyle(value: boolean): void;
    }
    export { CustomControlSeeMoreStyleHelper };
}
declare module "CommonComponents/Primitive/View" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IViewHtmlStyle, IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { IFlexboxContainerStyle } from "CommonComponents/Primitive/IFlexboxContainerStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Props for a View component instance
     */
    interface IViewProps extends IPropsBase {
        /**
         * Styles for View component
         */
        style?: IViewStyle & IViewHtmlStyle & IFlexboxContainerStyle;
        /**
         * Semantic tag.
         */
        semanticTag?: "div" | "span" | "section" | "nav" | "main" | "header" | "form" | "fieldset";
        /**
         * Accessibility role.
         * @default undefined
         */
        role?: "alertdialog" | "status" | "navigation" | "tabpanel" | "menubar" | "search" | "dialog" | "heading" | string;
        /**
         * The access key for this component
         */
        accessKey?: string;
        /**
         * Indicates whether the Right-to-left mode is enabled for the container.
         */
        isRTL?: boolean;
        /**
         * Indicates whether this container needs to have the capabilities of re-measuring
         */
        isRequestedMeasuring?: boolean;
        /**
         * onMeasuring callback function on component, which subscribes to re-measuring service
         */
        onMeasuring?: any;
        /**
         * Check if measure needs to be forced to make.
         */
        forceMeasure?: any;
        /**
         * Whether this control is contained within a top most see more popup
         */
        isWithinATopMostSeeMore?: boolean;
        /**
         * Defines class names that will be added before rendering
         */
        className?: string;
    }
    /**
     * Abstract View container that gets its semantic meaning by supplying a meaningful
     * role and semanticTag property value.
     */
    class InnerView extends ComponentBase<IViewProps, {}> {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        /**
         * Subscriber object to store callback functions for re-measuring service need
         */
        private _subscriber;
        /**
         * Ref of the mounted element
         */
        private _mountedElement;
        constructor(props: IViewProps);
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the class name for the underlying element.
         * @param style the style to be applied to the underlying component, used for readout here.
         */
        protected getFlexClassName(style: React.CSSProperties): string;
        /**
         * When container wants to re-measure
         * After component mounted, we subscribe to the measuring service by passing in getComponent and onMeasure callbacks.
         */
        componentDidMount(): void;
        /**
         * When component did update, we need to get the latest instance of the react component
         * This is specially handling cell/cch when it renders out an empty container while waiting for the data
         */
        componentDidUpdate(): void;
        /**
         * Register the ref callback when container has the need to re-measure when dom changes
         */
        private _getReference;
        /**
         * Return the reference of the react component instance
         */
        getComponent(): HTMLElement;
        /**
         * Unsubscribe the measuring service when component is unmounted
         */
        componentWillUnmount(): void;
        /**
         * Returns the specific style for the underlying element.
         */
        protected getElementStyle(): React.CSSProperties;
        /**
         * Returns the class name for the underlying element.
         */
        protected getElementClassName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
        /**
         * Renders the component to the virtual DOM.
         */
        render(): any;
    }
    const View: any;
    export { IViewProps, IViewStyle, IViewHtmlStyle, IFlexboxContainerStyle, InnerView, View };
}
declare module "CommonComponents/Supplementary/Accessibility/Attributes/Role" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    export const ALERT = "alert";
    export const ALERT_DIALOG = "alertdialog";
    export const ARTICLE = "article";
    export const BUTTON = "button";
    export const CHECKBOX = "checkbox";
    export const SWITCH = "switch";
    export const DIALOG = "dialog";
    export const GRID_CELL = "gridcell";
    export const LINK = "link";
    export const LOG = "log";
    export const MARQUEE = "marquee";
    export const MENU_ITEM = "menuitem";
    export const MENU_ITEM_CHECKBOX = "menuitemcheckbox";
    export const MENU_ITEM_RADIO = "menuitemradio";
    export const OPTION = "option";
    export const PROGRESSBAR = "progressbar";
    export const RADIO = "radio";
    export const SCROLLBAR = "scrollbar";
    export const SLIDER = "slider";
    export const SPIN_BUTTON = "spinbutton";
    export const STATUS = "status";
    export const TAB = "tab";
    export const TAB_LIST = "tablist";
    export const TAB_PANEL = "tabpanel";
    export const TEXTBOX = "textbox";
    export const TIMER = "timer";
    export const TOOLTIP = "tooltip";
    export const TREE_ITEM = "treeitem";
    export const COMBOBOX = "combobox";
    export const GRID = "grid";
    export const LISTBOX = "listbox";
    export const MENU = "menu";
    export const MENUBAR = "menubar";
    export const RADIO_GROUP = "radiogroup";
    export const TREE = "tree";
    export const TREE_GRID = "treegrid";
    export const COLUMN_HEADER = "columnheader";
    export const DEFINITION = "definition";
    export const DIRECTORY = "directory";
    export const DOCUMENT = "document";
    export const GROUP = "group";
    export const HEADING = "heading";
    export const LIST = "list";
    export const LIST_ITEM = "listitem";
    export const MATH = "math";
    export const NOTE = "note";
    export const PRESENTATION = "presentation";
    export const REGION = "region";
    export const ROW = "row";
    export const ROW_HEADER = "rowheader";
    export const SEPARATOR = "separator";
    export const TOOLBAR = "toolbar";
    export const APPLICATION = "application";
    export const BANNER = "banner";
    export const COMPLEMENTARY = "complementary";
    export const CONTENT_INFO = "contentinfo";
    export const FORM = "form";
    export const MAIN = "main";
    export const NAVIGATION = "navigation";
    export const SEARCH = "search";
    export const IMG = "img";
}
declare module "CommonComponents/Supplementary/Accessibility/Attributes/AriaLive" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    export const OFF = "off";
    export const POLITE = "polite";
    export const ASSERTIVE = "assertive";
}
declare module "CommonComponents/Primitive/Text" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { DisplayProperty, FontStyleProperty, FontWeightProperty, TextAlignProperty, UserSelectProperty, WordBreakProperty } from "csstype";
    import { IViewStyle, IViewHtmlStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    import { IAccessibilityNotificationProps } from "CommonComponents/Primitive/IAccessibilityNotificationProps";
    /**
     * Styles for a Text component
     */
    interface ITextStyle extends IViewStyle {
        color?: string;
        fontFamily?: string;
        fontSize?: string | number;
        fontStyle?: FontStyleProperty;
        fontWeight?: FontWeightProperty;
        lineHeight?: string | number;
        textAlign?: TextAlignProperty;
        textDecoration?: string;
        display?: DisplayProperty;
        userSelect?: UserSelectProperty;
        wordBreak?: WordBreakProperty;
    }
    /**
     * Properties of Text component
     */
    interface ITextProps extends IPropsBase, IAccessibilityNotificationProps {
        /**
         * Component style properties
         */
        style?: ITextStyle & IViewHtmlStyle;
        /**
         * Accessibility role.
         */
        role?: "alert" | "tooltip" | string;
        /**
         * Semantic tag.
         * Default is "span".
         */
        semanticTag?: "span" | "legend" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
        /**
         * class name
         */
        className?: string;
    }
    /**
     * Text component
     */
    class InnerText extends ComponentBase<ITextProps, any> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "legend" | "span";
        /**
         * Returns the class name for the underlying element.
         * @param style the style to be applied to the underlying component, used for readout here.
         */
        protected getElementClassName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
    }
    const Text: any;
    export { ITextStyle, ITextProps, InnerText, Text };
}
declare module "CommonComponents/Common/Tooltip" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    /**
     * Interface for tooltip properties
     */
    interface ITooltipProps {
        /**
         * Text to show inside the tooltip
         */
        text?: string;
        /**
         * Optional width for tooltip
         */
        width?: number;
        /**
         * Styles for tooltip
         */
        tooltipStyle?: IViewStyle;
        /**
         * Styles for tooltip content
         */
        tooltipContentStyle?: ITextStyle;
        /**
         * Id
         */
        id?: string;
        /**
         *Aria- accessiblity hidden
         */
        accessibilityHidden?: boolean;
        /**
         * Tooltip direction
         */
        direction?: "left" | "right" | "top" | "bottom";
    }
    /**
     * Interface for tooltip state
     */
    interface ITooltipState {
        isOpened: boolean;
    }
    /**
     * Component represents base tooltip component
     */
    class Tooltip extends React.Component<ITooltipProps, ITooltipState> {
        /**
         * Property which keeps target element (for instance, error icon)
         */
        private _targetElement;
        constructor(props: ITooltipProps);
        /**
         * Generating styles for tooltip here.
         * It's possible to customize tooltip styles - use properties: 'tooltipStyle'
         */
        generateTooltipStyle(): IViewStyle;
        /**
         * Tooltip content styles. For customizing colors, fonts, ...
         */
        generateTooltipContentStyle(): ITextStyle;
        /**
         * Generate popup markup
         */
        generatePopup(): JSX.Element;
        /**
         * Getter for popup arrow markup
         */
        generatePopupArrow(): JSX.Element;
        /**
         * Event handler for mouse enter to tooltip. Toggles tooltip
         */
        mouseEnterHandler(event: React.MouseEvent): void;
        /**
         * Event handler for mouse leave from tooltip. Toggles tooltip
         */
        mouseLeaveHandler(event: React.MouseEvent): void;
        /**
         * Method for storing reference to target element
         */
        setTargetRef(view: any): void;
        /**
         * Component render
         */
        render(): JSX.Element;
    }
    export { ITooltipProps, ITooltipState, Tooltip };
}
declare module "CommonComponents/FontIcon/MicrosoftIconSymbol" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     *
     * IMPORTANT!
     * DO NOT MAKE CHANGES TO THIS FILE - THIS FILE IS GENERATED BY A BUILD TASK
     * IF YOU NEED TO MAKE CHANGES THEY MUST BE MADE IN THE JSON CONFIGURATION FILE
     */
    enum MicrosoftIconSymbol {
        Expanded = 0,
        UpArrowHead = 1,
        LeftArrowHead = 2,
        Collapsed = 3,
        Edit = 4,
        Save = 5,
        Delete = 6,
        Remove = 7,
        Add = 8,
        Cancel = 9,
        HandClick = 10,
        Accept = 11,
        More = 12,
        Forward = 13,
        Favorite = 14,
        Placeholder = 15,
        RatingFull = 16,
        RatingEmpty = 17,
        Options = 18,
        Manage = 19,
        Settings = 20,
        Find = 21,
        Help = 22,
        ViewNotifications = 23,
        StageAdvance = 24,
        CheckMark = 25,
        Locked = 26,
        Lock = 27,
        MoreOptions = 28,
        ContactInfo = 29,
        Pin = 30,
        Unpin = 31,
        Refresh = 32,
        Details = 33,
        VisualFilter = 34,
        GlobalFilter = 35,
        Diamond = 36,
        ApplyFilter = 37,
        CancelFilter = 38,
        StreamView = 39,
        TileView = 40,
        Import = 41,
        Tools = 42,
        Attach = 43,
        Filter = 44,
        Copy = 45,
        HighPriority = 46,
        ReduceTile = 47,
        ExpandTile = 48,
        GlobalFilterExpand = 49,
        GlobalFilterCollapse = 50,
        Clear = 51,
        Post = 52,
        OneNote = 53,
        Home = 54,
        SetAsHome = 55,
        BackButton = 56,
        BackButtonWithoutBorder = 57,
        UpArrow = 58,
        DownArrow = 59,
        SetActiveButton = 60,
        SearchButton = 61,
        ForwardButton = 62,
        Mail = 63,
        CheckedMail = 64,
        FailedMail = 65,
        Phone = 66,
        Chat = 67,
        OpenPane = 68,
        ClosePane = 69,
        AddFriend = 70,
        Arrow = 71,
        DropdownArrow = 72,
        FlsLocked = 73,
        LinkArticle = 74,
        UnlinkArticle = 75,
        CopyLink = 76,
        EmailLink = 77,
        Share = 78,
        Assign = 79,
        Connect = 80,
        Opportunity = 81,
        Appointment = 82,
        Task = 83,
        Case = 84,
        PhoneCallIncoming = 85,
        PhoneCallOutgoing = 86,
        EmailIncoming = 87,
        EmailOutgoing = 88,
        SendEmail = 89,
        ApplyTemplate = 90,
        InsertKbArticle = 91,
        SendSelected = 92,
        SaveAndClose = 93,
        ReplyEmail = 94,
        ReplyAllEmail = 95,
        ForwardEmail = 96,
        Close = 97,
        Activate = 98,
        DeActivate = 99,
        DeleteBulk = 100,
        SocialActivityIncoming = 101,
        SocialActivityOutgoing = 102,
        CustomActivity = 103,
        SystemPost = 104,
        Convert = 105,
        MarkAsWon = 106,
        MarkAsLost = 107,
        SetRegarding = 108,
        SaveAsComplete = 109,
        SwitchProcess = 110,
        Recalculate = 111,
        SendDirectEmail = 112,
        OpenMailbox = 113,
        ReOpenOpportunity = 114,
        ReactivateLead = 115,
        Disqualify = 116,
        Qualify = 117,
        SelectView = 118,
        SelectChart = 119,
        OpenInBrowser = 120,
        NewAppointment = 121,
        NewRecurringAppointment = 122,
        NewPhoneCall = 123,
        NewTask = 124,
        NewEmail = 125,
        AddExisting = 126,
        SaveAndEdit = 127,
        Default = 128,
        ScrollRight = 129,
        ScrollLeft = 130,
        SaveAndRunRoutingRule = 131,
        RunRoutingRule = 132,
        ResolveCase = 133,
        CancelCase = 134,
        ReactivateCase = 135,
        AddToQueue = 136,
        CreateChildCase = 137,
        QueueItemRoute = 138,
        QueueItemRelease = 139,
        QueueItemRemove = 140,
        QueueItemPick = 141,
        Drilldown = 142,
        PopOverButton = 143,
        ExitButton = 144,
        ExportToExcel = 145,
        WordTemplates = 146,
        DocumentTemplates = 147,
        OpenInPowerBI = 148,
        OpenPowerBIReport = 149,
        OpenDelve = 150,
        ArticleLink = 151,
        ArchiveArticle = 152,
        ApproveArticle = 153,
        DiscardArticle = 154,
        Minor = 155,
        Major = 156,
        PublishKnowledgeArticle = 157,
        RelateArticle = 158,
        RelateProduct = 159,
        RestoreArticle = 160,
        RevertToDraftArticle = 161,
        Translate = 162,
        UpdateArticle = 163,
        RemoveFilter = 164,
        Article = 165,
        Graph = 166,
        CSR = 167,
        MembersIcon = 168,
        QueueIcon = 169,
        SiteMap = 170,
        NormalPriority = 171,
        LowPriority = 172,
        ViewIcon = 173,
        RecentCases = 174,
        KBRecords = 175,
        NumberOfViews = 176,
        ResizeHandle = 177,
        TaskBasedFlow = 178,
        InformationIcon = 179,
        PencilIcon = 180,
        ErrorIcon = 181,
        SuccessIcon = 182,
        OptionsetIcon = 183,
        NotificationIcon = 184,
        PanelHeaderImportDataIcon = 185,
        SidePanelUpload = 186,
        New = 187,
        DetailsPageClose = 188,
        SettingsListIcon = 189,
        ListIcon = 190,
        ForwardDisable = 191,
        PdfIconFile = 192,
        PresentationFile = 193,
        OneNoteFile = 194,
        AccessFile = 195,
        VisioFile = 196,
        ProjectFile = 197,
        Plus = 198,
        ChevronUp = 199,
        ChevronDown = 200,
        HappySmiley = 201,
        SadSmiley = 202,
        CaseResolution = 203,
        CampaignResolution = 204,
        ServiceActivity = 205,
        Notes = 206,
        Audio = 207,
        Camera = 208,
        Video = 209,
        Image = 210,
        Html = 211,
        SharePointEditDocument = 212,
        SharePointDeleteDocument = 213,
        SharePointCheckoutDocument = 214,
        SharePointCheckinDocument = 215,
        SharePointEditDocumentProperties = 216,
        SharePointDiscardCheckoutDocument = 217,
        SharePointNewDocument = 218,
        SharePointNewWordDocument = 219,
        SharePointNewExcelDocument = 220,
        SharePointNewPowerPointDocument = 221,
        SharePointNewOneNoteDocument = 222,
        SharePointUploadDocument = 223,
        SharePointChangeLocation = 224,
        SharePointAddDocumentLocation = 225,
        SharePointEditLocation = 226,
        SharePointOpenLocation = 227,
        SharePointOpenDocument = 228,
        SendByEmail = 229,
        CreateQuote = 230,
        Reply = 231,
        Warning = 232,
        Play = 233,
        ExpandButton = 234,
        AssociatedArticle = 235,
        DisassociatedArticle = 236,
        FormDesign = 237,
        GlobalFilterClearAll = 238,
        GlobalFilterExpandedRow = 239,
        GlobalFilterCollapsedRow = 240,
        RelationshipAssistant = 241,
        AutomaticSuggestions = 242,
        SemanticZoom = 243,
        SemanticZoomMirrored = 244,
        BackwardButton = 245,
        MultiSelect = 246,
        MultiSelectMirrored = 247,
        Spinning = 248,
        RetireProduct = 249,
        AddProduct = 250,
        OfflineStatus = 251,
        Abandon = 252,
        Reactivate = 253,
        FinishStage = 254,
        SortButton = 255,
        Flows = 256,
        OpenEntityRecord = 257,
        View = 258,
        CreateView = 259,
        EditView = 260,
        GuestUser = 261,
        History = 262,
        ReassignRecords = 263,
        ManageRoles = 264,
        JoinTeams = 265,
        ChangeManager = 266,
        AddMembers = 267,
        RemoveMembers = 268,
        Download = 269,
        SetAsDefaultView = 270,
        Pinned = 271,
        DistributionList = 272,
        MergeRecords = 273,
        AssociateChildCase = 274,
        SetAsDefault = 275,
        ConvertKnowledgeArticle = 276,
        Messenger = 277,
        AssociateCategory = 278,
        OfficeWaffle = 279,
        TripleColumn = 280,
        Tiles = 281,
        HideVisualFilter = 282,
        InteractiveDashboard = 283,
        Dynamics365 = 284,
        SalesLiterature = 285,
        SelectButton = 286,
        SelectButtonRTL = 287,
        LockPricing = 288,
        CreateInvoice = 289,
        FulfillOrder = 290,
        CancelInvoice = 291,
        ActivateQuote = 292,
        InvoicePaid = 293,
        GetProducts = 294,
        UnlockPricing = 295,
        Checkbox = 296,
        CheckboxComposite = 297,
        RightChevron = 298,
        LeftChevron = 299,
        UntrackedEmail = 300,
        OpenEmail = 301,
        GlobalFilterCollapsedRowRTL = 302,
        CancelOrder = 303,
        URL = 304,
        Ticker = 305,
        UseCurrentPricing = 306,
        Process = 307,
        FirstPageButton = 308,
        LinkedInLogo = 309,
        Health = 310,
        Family = 311,
        Sports = 312,
        Entertainment = 313,
        OOF = 314,
        CarouselView = 315,
        HeartEmpty = 316,
        HeartFilled = 317,
        Follow = 318,
        RunQuery = 319,
        GroupAnd = 320,
        GroupOr = 321,
        Ungroup = 322,
        HideInSimpleMode = 323,
        ShowInSimpleMode = 324,
        PinnedSolid = 325,
        FilterSolid = 326,
        Bot = 327,
        SystemDocumentTemplates = 328,
        MyDocumentTemplates = 329,
        ViewAllMyDocumentTemplates = 330,
        EnableSecurityRoles = 331,
        DocumentTemplateUpload = 332,
        DocumentTemplateEdit = 333,
        DocumentTemplateActivate = 334,
        DocumentTemplateDeactivate = 335,
        YammerIcon = 336,
        StopIcon = 337,
        ReplaceContentIcon = 338,
        CloseDateComingSoon = 339,
        NearbyCustomers = 340,
        RelevantNews = 341,
        UpcomingMeeting = 342,
        RecentMeeting = 343,
        ReminderWithCall = 344,
        CardsTask = 345,
        CardsQuote = 346,
        CardsOpportunity = 347,
        CardsInvoice = 348,
        CardsDashboard = 349,
        CardsLeads = 350,
        OpportunityNoActivity = 351,
        CaseNoActivity = 352,
        CompetitorMentioned = 353,
        MeetingRequest = 354,
        MissedCloseDate = 355,
        IssueDetection = 356,
        NoActivityWithAccount = 357,
        YesNo = 358,
        AgendaActivityServiceAppointment = 359,
        AgendaActivityFax = 360,
        UpcomingFlight = 361,
        OpportunityAtRiskSentiment = 362,
        IconDue = 363,
        AddProductFamily = 364,
        AddProductBundle = 365,
        ProductPublish = 366,
        CloneProduct = 367,
        CloseGoal = 368,
        AlignWithFiscalPeriod = 369,
        Connection = 370,
        ConnectionToMe = 371,
        ConnectionToOther = 372,
        ProductUpsell = 373,
        SubscriptionAdd = 374,
        RefreshDevice = 375,
        BulletListRemove = 376,
        BulletListAdd = 377,
        ScatterChart = 378,
        BarChartHorizontal = 379,
        BarChartVertical = 380,
        FunnelChart = 381,
        PieDouble = 382,
        AALinkedInLogo = 383,
        SendAndClose = 384,
        AdvFind = 385,
        DoubleChevronLeft = 386,
        DoubleChevronRight = 387,
        AreaChart = 388,
        DonutChart = 389,
        TagChart = 390,
        Teaser = 391,
        Clone = 392,
        AreaChartMirrored = 393,
        BarChartHorizontalMirrored = 394,
        BarChartVerticalMirrored = 395,
        People = 396,
        PeopleBlock = 397,
        BulletListDownArrow = 398,
        Recent = 399,
        SharePointIcon = 400,
        OneDriveIcon = 401,
        FolderSharedIcon = 402,
        MSTeamsIcon = 403,
        ScrollUpDown = 404,
        SendToCTI = 405,
        CreateQuickCampaign = 406,
        PageSolid = 407,
        Page = 408,
        OpportunitiesList = 409,
        BrowseCards = 410,
        Letter = 411,
        Fax = 412,
        NewLetter = 413,
        NewFax = 414,
        LetterIncoming = 415,
        LetterOutgoing = 416,
        FaxIncoming = 417,
        FaxOutgoing = 418,
        CreatePersonalView = 419,
        SaveFilterToNewPersonalView = 420,
        SaveFilterToCurrentPersonalView = 421,
        ViewHierarchy = 422,
        ProductPreview = 423,
        AddTerritoryMember = 424,
        RemoveTerritoryMember = 425,
        Report = 426,
        NewServiceActivity = 427,
        Recurrence = 428,
        EditSeries = 429,
        EndSeries = 430,
        EditDefaultFilter = 431,
        QueueItemDetail = 432,
        ThumbsUp = 433,
        ThumbsDown = 434,
        Lead = 435,
        TableLink = 436,
        TableGroup = 437,
        ClearDefault = 438,
        SetDefault = 439,
        Expand = 440,
        ChromeMinimize = 441,
        ChromeMaximize = 442
    }
    function getSymbolMapping(type: MicrosoftIconSymbol): string;
    export { MicrosoftIconSymbol, getSymbolMapping };
}
declare module "CommonComponents/Primitive/ICCFContainerStyle" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IFlexboxContainerStyle } from "CommonComponents/Primitive/IFlexboxContainerStyle";
    /**
     * Styles for a CCF container component instance
     */
    interface ICCFContainerStyle extends IFlexboxContainerStyle {
        /**
         * The CSS Max Width property
         */
        maxWidth?: string;
        /**
         * The CSS Max height property
         */
        maxHeight?: string;
        /**
         * The CSS Background color property
         */
        backgroundColor?: string;
    }
    export { ICCFContainerStyle };
}
declare module "CustomControls/Models/CustomControlEntityReference" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * An object that encapsulates an Entity Reference as a plain object suitable for storing in the state tree
     */
    class CustomControlEntityReference {
        /**
         * An empty EntityReference
         */
        static EMPTY: CustomControlEntityReference;
        /**
         * The entity type name.  Read-only. This is public to allow for access to the value as well as to simplify serialization.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        private _etn;
        /**
         * The record id.  Read-only. This is public to allow for access to the value as well as to simplify serialization.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        private _id;
        /**
         * The record display name.  Read-only. This is public to allow for access to the value as well as to simplify serialization.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        private _name;
        /**
         * The record id for backward compatibility.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        private _Id;
        /**
         * Creates a new EntityReference instance.
         * @param entityName The entity logical name
         * @param id The record id
         * @param name The optional record display name
         */
        constructor(entityName: string, id?: string, name?: string);
        /**
         * The entity type name.  Read-only. This is public to allow for access to the value as well as to simplify serialization.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        readonly entityName: string;
        /**
         * The entity type name.  Read-only.This is public to allow for access to the value as well as to simplify serialization.
         * TODO: Mark as read - only when we adopt TypeScript 2.0
         */
        readonly entityType: string;
        /**
         * The entity type name for backward compatibility.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        readonly logicalName: string;
        /**
         * The entity type name for backward compatibility.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        readonly LogicalName: string;
        /**
         * The record id.  Read-only. This is public to allow for access to the value as well as to simplify serialization.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        readonly id: string;
        /**
         * The record id for backward compatibility.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        readonly Id: string | CrmFramework.Guid;
        /**
         * The record display name.  Read-only. This is public to allow for access to the value as well as to simplify serialization.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        readonly name: string;
        /**
         * The record display nam for backward compatibility.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        readonly Name: string;
        /**
         * Output a simplified version of the EntityReference
         * @param reference
         */
        static toString(reference: CustomControlEntityReference): string;
        /**
         * Determine if two EntityReference objects are the same
         * @param x An EntityReference
         * @param y An EntityReference
         */
        static equals(x: CustomControlEntityReference, y: CustomControlEntityReference): boolean;
    }
    export { CustomControlEntityReference };
}
declare module "CustomControls/Utilities/Dictionary" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * Implement a stripped down version of MicrosoftAjax to provide the basic functionality without
     * the non-complient code
     */
    export interface Dictionary {
        [key: string]: any;
    }
}
declare module "CustomControls/Utilities/CultureInfo" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { Dictionary } from "CustomControls/Utilities/Dictionary";
    /**
     * Implement a stripped down version of MicrosoftAjax to provide the basic functionality without
     * the non-complient code
     */
    export class CultureInfo {
        static CurrentCulture: CultureInfo;
        static InvariantCulture: CultureInfo;
        name: string;
        numberFormat: Dictionary;
        dateTimeFormat: Dictionary;
        constructor(name: string, numberFormat: Dictionary, dateTimeFormat: Dictionary);
        private static _getCurrentCulture;
        private static _getInvariantCulture;
    }
}
declare module "CustomControls/Models/CustomControlDependantInterfaces" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IconPosition } from "CommonComponents/FontIcon/MicrosoftIcon";
    import { CustomControlEntityReference } from "CustomControls/Models/CustomControlEntityReference";
    import { CultureInfo } from "CustomControls/Utilities/CultureInfo";
    /**
     * Interface representing the TimeZoneAdjuster class in the state tree.
     */
    interface ITimeZoneAdjusterState {
        /**
         * Gets the start date
         */
        dateStart: Date;
        /**
         * Gets the end date
         */
        dateEnd: Date;
        /**
         * The delta turing DST times in ms
         */
        delta: number;
        /**
         *The definition for the day at which delta starts being applied.
         */
        daylightStart: ITransitionConstraintState;
        /**
         *The definition for the day at which delta stops being applied
         */
        daylightEnd: ITransitionConstraintState;
    }
    /**
     * Interface for a timezone definition's start or end date constraint rule
     */
    interface ITransitionConstraintState {
        /**
         * The day for fixed constraints
         */
        day: number;
        /**
         * The day of week for non fixed constraints
         */
        dayOfWeek: number;
        /**
         * The month of the constraint
         */
        month: number;
        /**
         * The week of non-fixed constraints
         */
        week: number;
        /**
         * The time of day of the constraint
         */
        timeOfDay: Date;
        /**
         * Whether the constraint is fixed
         */
        isFixedDateRule: boolean;
    }
    /**
     * Interface for a formatter
     */
    interface IFormatter {
        /**
         * Converts date from String to dateObject
         * @param {string} value - the source string
         * @param format Format description of date or datetime
         * @param cultureInfo Current culture info
         * @param formatterProperties Formatter properties
         */
        ParseDateFromString: (value: string, format: string, cultureInfo: CultureInfo, formatterProperties: any) => Date;
        /**
         * Returns a formatted string represents a given integer value
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @returns {string} A formatted string represents a given integer value
         */
        formatIntegerValue(input: number, cultureInfo: CultureInfo): string;
        /**
         * Returns a string represents the currency value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @param currencySymbol The currency symbol/code to be added while currency value
         * @param precision The precision value to be used for formatting
         * @returns {string} A string represents the currency value after being formatted
         */
        formatCurrencyValue(input: number, cultureInfo: CultureInfo, currencySymbol?: string, precision?: number): string;
        /**
         * Returns a string represents the date value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @param behavior The behavior of the datetime object to be formatted
         * @returns {string} A string represents the date value after being formatted
         */
        formatShortDateValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
        /**
         * Returns a string represents the date value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @param behavior The behavior of the datetime object to be formatted
         * @returns {string} A string represents the date value after being formatted
         */
        formatLongDateValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
        /**
         * Returns a string represents the date value after being formatted in Sortable("s") format.
         * @param input A value object to be formatted.
         * @param cultureInfo Culture info to apply to format
         * @param behavior The behavior of the datetime object to be formatted.
         * @return {string} A string represents the date value after being formatted.
         */
        formatSortableDateValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior): string;
        /**
         * Returns a string represents the datetime value after being formatted in Sortable("s") format.
         * @param input A value object to be formatted.
         * @param cultureInfo Culture info to apply to format
         * @param behavior The behavior of the datetime object to be formatted.
         * @return {string} A string represents the datetime value after being formatted.
         */
        formatSortableDateTimeValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
        /**
         * Returns a string represents the datetime value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @param behavior The behavior of the datetime object to be formatted
         * @returns {string} A string represents the datetime value after being formatted
         */
        formatShortDateTimeValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
        /**
         * Returns a string represents the datetime value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @param behavior The behavior of the datetime object to be formatted
         * @returns {string} A string represents the datetime value after being formatted
         */
        formatDateLongAbbreviated(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
        /**
         * Returns a string representing the datetime value after being formatted with the Year Month format
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @param behavior The behavior of the datetime object to be formatted
         * @returns {string} A string represents the datetime value after being formatted
         */
        formatDateYearMonthValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
        /**
         * Returns a string represents the decimal value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @param precision The precision value to be used for formatting
         * @returns {string} A string represents the decimal value after being formatted
         */
        formatDecimalValue(input: number, cultureInfo: CultureInfo, precision?: number): string;
        /**
         * Returns a formatted string that represents a given language
         * @param input A value object to be formatted
         * @param languagesByCode The list of languages and their localized labels
         * @returns {string} A formatted string represents a given language value
         */
        formatLanguageValue(input: number, languagesByCode: {
            [code: number]: string;
        }): string;
    }
    /**
     * Interface to encode values to work at a system level
     */
    interface IEncoder {
        CrmUrlEncode(s: string): string;
        CrmHtmlEncode(s: string): string;
    }
    /**
     * Converter utility class for DateTime conversions.
     */
    interface IDateTimeUtils {
        getDSTAdjustmentMinutes(time: Date, adjusters: ITimeZoneAdjusterState[]): number;
        getWeekOfYear(time: Date, firstDayOfWeek: number, calendarWeekRule: number): number;
    }
    /**
     * Interface of an object that allows to create stopwatches to track performance
     */
    interface IPerformanceStopwatch {
        start(): void;
        stop(): void;
    }
    /**
     * Interface of an object that allows controls to create performance markers and stopwatches
     */
    interface IPerformanceEvent {
        createMarker(parameters?: {
            [parameterName: string]: string;
        }, retroactiveTimestamp?: number): void;
        startStopwatch(parameters?: {
            [parameterName: string]: string;
        }): (parameters?: {
            [parameterName: string]: string;
        }) => void;
        createRetroactiveStopwatch(startTime: number, duration: number, parameters?: {
            [parameterName: string]: string;
        }): void;
    }
    interface IKeyboardShortcut {
        getKeyCombination: () => number[];
        getShortcutHandler: () => any;
        getIsGlobal: () => boolean;
        getIsHidden: () => boolean;
        getAreaName: () => string;
        getKeyboardShortcutType: () => any;
        getSrcElementId: () => string;
        getShortcutDescription: () => string;
    }
    /**
     * The props passed to command manager
     */
    interface ICCFConnectedCommandManagerProps {
        /**
         * Command bar display mode
         */
        commandbarDisplayMode?: number;
        /**
         * The page Id
         */
        id: string;
        /**
         * The state of the XRM
         */
        xrmReady: boolean;
        /**
         * The ribbon id
         */
        ribbonId: string;
        /**
         * Size of the Main Menu length.
         */
        mainMenuLength: number;
        /**
         * Icons Placement either Top, left or None
         */
        iconPosition: IconPosition;
        /**
         * commandbar width
         */
        width?: number;
        /**
         * The selected records of a grid page
         */
        selectedRecords?: CustomControlEntityReference[];
        /**
         * Optional key, added for purposes of rendering CommandManager from custom controls, to be able to add key through props
         */
        key?: string;
        /**
         * Optional property to disable rules evaluation. CommandBar will evaluate rules by default
         */
        shouldEvaluateRules?: boolean;
        /**
         * generated id
         */
        commandManagerId?: string;
        /**
         * promise that tracks the loading of command manager metadata
         */
        metaDataLoadedPromise?: any;
        /**
         * Boolean indicate whether or not render and show the command bar. If set to true, command manager will be created but command bar will not be shown.
         */
        isHidden?: boolean;
        /**
         * Additional Command Buttons to be injected to the command bar
         */
        addedCommandList?: any[];
        /**
         * Command Button width
         */
        commandButtonWidth?: number;
        /**
         * Command Bar Style (ICommandBarStyle)
         */
        commandBarStyle?: any;
        /**
         * Command Manager Style: (IViewStyle)
         */
        customCommandManagerStyle?: any;
        contextToken?: any;
        rootZIndex?: boolean;
        /**
         * control constructor name
         */
        customControlType?: string;
        /**
         * Indicates whether focus should be on first child element
         */
        focusOnFirstChild?: boolean;
    }
    export { ICCFConnectedCommandManagerProps, IKeyboardShortcut, IPerformanceEvent, IPerformanceStopwatch, ITransitionConstraintState, ITimeZoneAdjusterState, IDateTimeUtils, IEncoder, IFormatter, };
}
declare module "CustomControls/Components/VirtualComponent" {
    /**
     * Virtual component class
     */
    class VirtualComponent implements CustomControlInterfaces.IVirtualComponent {
        /**
         * The component type (IE: div, span, label, etc...)
         */
        private _type;
        /**
         * The componentId of the component.
         */
        private _componentId;
        /**
         * A dictionary of properties associated with this component.
         */
        private _properties;
        /**
         * An array of child virtual components associated with this component.
         */
        private _children;
        /**
         * Initializes a new instance of the <see cref="VirtualComponent"/> class.
         * @param type The component type
         * @param componentId The component Id
         * @param properties A dictionary of parameters associated with this entity.
         * @param children An array of child virtual components associated with this entity.
         */
        constructor(type: string, componentId: string, properties: CustomControlInterfaces.IVirtualComponentProps, children: CustomControlInterfaces.VirtualComponentChild | CustomControlInterfaces.VirtualComponentChild[]);
        /**
         * Used to update a VirtualComponent generated from a system-generated complex control
         * @param additionalProps Properties that would be passed in via a parent
         */
        getVirtualRepresentation(additionalProps: CustomControlInterfaces.IVirtualComponentProps): CustomControlInterfaces.IVirtualComponent;
        /**
         * Returns the type of this component.
         */
        getType(): string;
        /**
         * Returns the component Id
         */
        getComponentId(): string;
        /**
         * Returns a dictionary of this component's properties.
         */
        getProperties(): CustomControlInterfaces.IVirtualComponentProps;
        /**
         * Returns an array of child virtual components associated with this component.
         */
        getChildren(): CustomControlInterfaces.VirtualComponentChild | CustomControlInterfaces.VirtualComponentChild[];
        /**
         * Sets passed props to virtual component using merge strategy
         */
        setProperties(props: CustomControlInterfaces.IVirtualComponentProps): void;
    }
    export { VirtualComponent };
}
declare module "CustomControls/Models/CustomControlExposedInterfaces" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IPerformanceStopwatch, IKeyboardShortcut } from "CustomControls/Models/CustomControlDependantInterfaces";
    import { CustomControlEntityReference } from "CustomControls/Models/CustomControlEntityReference";
    import { VirtualComponent } from "CustomControls/Components/VirtualComponent";
    import { Dictionary } from "CustomControls/Utilities/Dictionary";
    /**
     * Parent interface for the custom controls
     */
    interface CustomControl<TParams, TOutput> {
        getOutputs(): TOutput;
        destroy(): void;
        init(context: IPropBag<TParams>, notifyOutputChanged?: () => void, state?: Dictionary, container?: HTMLDivElement): void;
    }
    /**
     * Interface for virtual custom controls
     */
    interface VirtualControl<TParams, TOutput> extends CustomControl<TParams, TOutput> {
        updateView(context: IPropBag<TParams>): CustomControlInterfaces.IVirtualComponent;
    }
    /**
     * Interface for static custom controls
     */
    interface StandardControl<TParams, TOutput> extends CustomControl<TParams, TOutput> {
        updateView(context: IPropBag<TParams>): void;
    }
    /**
     * The formatting bag interface
     */
    interface IFormatting {
        /**
         * Returns a string represents the datetime value after being formatted.
         * @param value Date to format.
         * @param includeTime Whether to show time in formatted value.
         */
        formatDateShort(value: Date, includeTime?: boolean): string;
        /**
         * Returns a formatted string that represents a date in the long form.
         * LongDatePattern- "dddd, MMMM d, yyyy"
         * LongTimePattern- "h:mm:ss tt"
         * @param value Date to format.
         */
        formatDateLong(value: Date): string;
        /**
         * Returns a formatted string that represents a date in the long form using abbreviations.
         * @param value Date to format.
         */
        formatDateLongAbbreviated(value: Date): string;
        /**
         * Returns a formatted string that represents a date in the year month format.
         * @param value Date to format.
         */
        formatDateYearMonth(value: Date): string;
        /**
         * Returns a formatted string represents a given integer value.
         * @param value A value object to be formatted.
         * @returns A formatted string represents a given integer value.
         */
        formatInteger(value: number): string;
        /**
         * Returns a formatted string that represents a string represents the decimal value after being formatted.
         * @param value A value object to be formatted.
         * @param precision The precision value to be used for formatting.
         * @returns A string represents the decimal value after being formatted.
         */
        formatDecimal(value: number, precision?: number): string;
        /**
         * Returns a formatted string that represents a string represents the currency value after being formatted.
         * @param value A value object to be formatted.
         * @param precision The precision value to be used for formatting.
         * @param symbol The currency symbol/code to be added while currency value.
         * @returns A string represents the currency value after being formatted.
         */
        formatCurrency(value: number, precision?: number, symbol?: string): string;
        /**
         * Gets the week of the year for a given date.
         * @param value The DateTime to convert.
         * @returns Week number for the supplied date.
         */
        getWeekOfYear(value: Date): number;
        /**
         * Returns a formatted string that represents a string represents the datetime value after being formatted.
         * @param value The date to be formatted.
         * @param behavior The behavior of the datetime object to be formatted.
         * None = 0,
         * UserLocal = 1,
         * DateOnly = 2,
         * TimeZoneIndependent = 3
         * @returns A string represents the datetime value after being formatted.
         */
        formatTime(value: Date, behavior: CrmFramework.DateTimeFieldBehavior): string;
        /**
         * Returns a formatted string that represents a date in a YYYY-MM-DD format in UTC.
         * @param value The date to be formatted.
         * @param includeTime If time component  should be included in the return value.
         */
        formatDateAsFilterStringInUTC(value: Date, includeTime?: boolean): string;
        /**
         * Returns a formatted string that represents a given language
         * @param input A language code to be formatted
         * @returns A formatted string represents a given language value
         */
        formatLanguage(value: number): string;
    }
    interface Component {
        getType(): string;
        getProperties(): any;
    }
    const enum RequiredLevel {
        Unknown = -1,
        None = 0,
        SystemRequired = 1,
        ApplicationRequired = 2,
        Recommended = 3
    }
    const enum ImeMode {
        Auto = 0,
        Inactive = 1,
        Active = 2,
        Disabled = 3
    }
    interface BaseAttributes {
        DisplayName: string;
        LogicalName: string;
        RequiredLevel: RequiredLevel;
        IsSecured: boolean;
        Type: string;
        SourceType: number;
        Description: string;
    }
    /**
     * Structure of Action Collection
     */
    interface ActionCollection {
        actions?: (() => void)[];
        message: string;
    }
    /**
     * Interface for control notification
     */
    interface BusinessRuleNotification {
        actions?: ActionCollection[];
        messages: string[];
        notificationLevel?: string;
        uniqueId?: string;
    }
    interface ControlNotifications {
        error: BusinessRuleNotification;
        recommendation: BusinessRuleNotification;
        information: BusinessRuleNotification;
    }
    interface SecurityValues {
        editable: boolean;
        readable: boolean;
        secured: boolean;
    }
    interface BaseProperty {
        type: string;
        raw: any;
        attributes?: BaseAttributes;
        formatted?: string;
        error: boolean;
        errorMessage: string;
        notifications?: ControlNotifications;
        security?: SecurityValues;
    }
    interface OptionSetValue {
        Label: string;
        Value: number;
        Color: string;
        accessibilityLabel?: string;
    }
    interface BaseNumberAttributes extends BaseAttributes {
        MinValue: number;
        MaxValue: number;
        ImeMode: ImeMode;
        lastUpdatedField: string;
        lastUpdatedValue: Date;
        rollupStateField: string;
        rollupStateValue: number;
        recalculate: () => void;
        rollupValid: boolean;
        calculatedFieldValid: boolean;
    }
    interface BaseStringAttributes extends BaseAttributes {
        MaxLength: number;
        ImeMode: ImeMode;
    }
    interface DecimalNumberAttributes extends BaseNumberAttributes {
        Precision: number;
    }
    interface WholeNumberAttributes extends BaseNumberAttributes {
        Format: string;
        LanguageByCode?: Dictionary;
        TimeZoneByCode?: Dictionary;
    }
    interface DateTimeAttributes extends BaseAttributes {
        behavior: string;
        format: string;
        imeMode: ImeMode;
        lastUpdatedField: string;
        lastUpdatedValue: Date;
        rollupStateField: string;
        rollupStateValue: number;
        recalculate: () => void;
        rollupValid: boolean;
        calculatedFieldValid: boolean;
    }
    interface LookupAttributes extends BaseAttributes {
        targets: string[];
    }
    interface SingleLineAttributes extends BaseStringAttributes {
        Format: string;
    }
    interface OptionSetAttributes extends BaseAttributes {
        Options: OptionSetValue[];
        DefaultValue: number;
    }
    interface TwoOptionAttributes extends BaseAttributes {
        Options: OptionSetValue[];
        DefaultValue: boolean;
    }
    interface RollupControlAttributes extends BaseAttributes {
        rollupStateValue: number;
        lastUpdatedValue: Date;
        recalculate(): void;
    }
    interface NumberProperty extends BaseProperty {
        raw: number;
        attributes?: BaseNumberAttributes;
    }
    interface DecimalNumberProperty extends NumberProperty {
        attributes?: DecimalNumberAttributes;
    }
    interface WholeNumberProperty extends NumberProperty {
        attributes?: WholeNumberAttributes;
    }
    interface DateTimeProperty extends BaseProperty {
        raw: Date;
        attributes?: DateTimeAttributes;
    }
    interface StringProperty extends BaseProperty {
        raw: string;
        attributes?: BaseStringAttributes;
    }
    interface SingleLineProperty extends StringProperty {
        attributes?: SingleLineAttributes;
    }
    interface EnumProperty<Type> {
        raw: Type;
        type: string;
    }
    interface OptionSetProperty extends BaseProperty {
        raw: number;
        attributes?: OptionSetAttributes;
    }
    interface MultiSelectOptionSetProperty extends BaseProperty {
        raw: number[];
        attributes?: OptionSetAttributes;
    }
    interface TwoOptionsProperty extends BaseProperty {
        raw: boolean;
        attributes?: TwoOptionAttributes;
    }
    /**
     * The structure of a property parameter as it would be passed to a Timer control
     */
    interface TimerProperty extends BaseProperty {
        timerParameters: ITimerParameter;
    }
    /**
     * Timer custom control parameter
     */
    interface ITimerParameter {
        CancelConditionName: string;
        CancelConditionValue: string;
        FailureTimeField: string;
        FailureConditionName: string;
        FailureConditionValue: string;
        PauseConditionName: string;
        PauseConditionValue: string;
        SuccessConditionName: string;
        SuccessConditionValue: string;
        WarningConditionName: string;
        WarningConditionValue: string;
    }
    enum PopupType {
        Root = 1,
        Nested = 2
    }
    /**
     * Indicates the form factor.
     */
    enum FormFactor {
        None = 0,
        Slate = 1,
        Phone = 2,
        Desktop = 3,
        MailApp = 4
    }
    interface IPopupProps {
        /**
         * The id to be set to the anchor control if any.
         */
        id?: string;
        /**
         * The name of the Popup. Used like a reference to open Popups.
         */
        name: string;
        /**
         * Indicates whether we should NOT close the popup on an outside mouse click.
         */
        closeOnOutsideClick?: boolean;
        /**
         * User-defined styles for the popup.
         */
        popupStyle?: CustomControlInterfaces.ICCFStyle;
        /**
         * User-defined styles for the popups shadow.
         */
        shadowStyle?: CustomControlInterfaces.ICCFStyle;
        /**
         * The name of Popup which should be opened.
         * Should be defined ONLY in a Root Popup.
         * To open nested Popups, should be provided string like "rootName.nestedName.[allOtherNestedNames]".
         * To close Popups, should be provided empty string.
         * This prop will be automatically propagated to children.
         */
        popupToOpen?: string;
        /**
         * The type of Popup, which is described in PopupType enum. Should be only one "root" Popup for each set of Popups.
         */
        type: PopupType;
        /**
         * Property, which allows to insert static markup to Popups.
         */
        content: HTMLElement;
    }
    interface IPopupService {
        /**
         * Create a new popup element
         * @param props The popup properties object, same as one would pass into the popup primitive (See documentation of that for more details).
         */
        createPopup(props: IPopupProps): void;
        /**
         * Open an existing popup in the service with the given name. Does nothing if popup does not exist yet.
         * @param name the name of the popup you're trying to open
         */
        openPopup(name: string): void;
        /**
         * Close an existing popup in the service with the given name. Does nothing if popup does not exist yet.
         * @param name the name of the popup you're trying to close
         */
        closePopup(name: string): void;
        /**
         * Update an existing popup in the service with the given name. Does nothing if popup does not exist yet.
         * @param name the name of the popup you're trying to update
         * @param newProps the updated properties to give to the popup.
         */
        updatePopup(name: string, newProps: IPopupProps): void;
        /**
         * Remove the referenced popup from the popupService
         * @param name The name of the popup to remove
         */
        deletePopup(name: string): void;
        getPopups(): JSX.Element[];
        /**
         * Sets the ID (on the DOM and in the system) for the root popup element.
         * @param id The string to set as the id
         */
        setPopupsId(id: string): void;
        /**
         * Gets the currently set popup Id (not incl. the appended control ID).
         * @returns the popup id
         */
        getPopupsId(): string;
    }
    /**
     * The utility interface.
     */
    interface IUtility extends ControlAndClientApiInterfaces.Utils, ControlAndClientApiInterfaces.ApplicationUI {
        /**
         * @deprecated API has been deprecated. Please use performance.createPerformanceStopwatch() instead.
         * Create and write new marker. Marker data will be written to supported transports.
         * @param id The identifier that will be assigned to the marker.
         * @param logLevel Level of the log message
         */
        createPerformanceMarker(id: string, logLevel?: CustomControlInterfaces.TracerLogLevel): void;
        /**
         * @deprecated API has been deprecated. Please use performance.createPerformanceStopwatch() instead.
         * Creates a new performance stopwatch with the given id.
         * @param id The identifier that will be assigned to the stopwatch.
         * @param logLevel Level of the log message
         * @returns The performance stopwatch.
         */
        createPerformanceStopwatch(id: string, logLevel?: CustomControlInterfaces.TracerLogLevel): IPerformanceStopwatch;
        /**
         * @deprecated API has been deprecated.
         * Logs a message.
         * @param customControlName Name of the custom control.
         * @param message The message to log.
         * @param logType The log type.
         */
        log(customControlName: string, message: string, logType: number): void;
        /**
         * @deprecated API has been moved to factory interface.
         */
        bindDOMElement(virtualComponent: VirtualComponent, DOMNode: Element): void;
        /**
         * @deprecated API has been moved to mode interface.
         */
        clearNotification(id: string): boolean;
        /**
         * @deprecated API has been deprecated. Please use createServerUri() instead.
         */
        createCrmUri(url: string): string;
        /**
         * Create a Server URI based on a relative path, prepending the org name if necessary.
         * @param url The relative path.
         * @return The relative path with the org name prepended if necessary.
         */
        createServerUri(url: string): string;
        /**
         * @deprecated API has been deprecated. Please use urlEncode API.
         */
        crmUrlEncode(s: string): string;
        /**
         * @deprecated API has been deprecated. Please use htmlEncode API.
         */
        crmHtmlEncode(s: string): string;
        /**
         * @deprecated API has been deprecated.
         */
        disablePanoramaScroll(value: boolean): boolean;
        /**
         * Returns true if there is an event listener added to the passed event name in the parent component.
         * @param eventName The passed event name.
         */
        eventListenerExists(eventName: string): boolean;
        /**
         * @deprecated API has been moved to the factory interface.
         * For a given event name to the child control checks the parent event handlers and fires the relevant one if present with passed in params
         */
        fireEvent(eventName: string, params: any): void;
        /**
         * @deprecated API has been moved to the factory interface.
         */
        getControlDefaultMapping(dataType: string): string;
        /**
         * @deprecated API has been deprecated.
         */
        getElementByRef(refId: string): Element;
        /**
         * @deprecated API has been moved to the factory interface.
         */
        getPopupService(): IPopupService;
        /**
         * @deprecated API has been deprecated.
         */
        getServiceUri(service: string): string;
        /**
         * Function to return if the user has Privilege for one specific entity
         * @entityTypeName entity type name
         * @privilegeType privilege type i.e. Create, Read, Write etc.
         * @privilegeDepth privilege depth i.e. basic, Global etc.
         */
        hasEntityPrivilege(entityTypeName: string, privilegeType: Constants.PrivilegeType, privilegeDepth: Constants.PrivilegeDepth): boolean;
        /**
         * @deprecated API has been deprecated.
         */
        isNullOrUndefined(object: any): boolean;
        /**
         * @deprecated API has been deprecated.
         */
        notifyOutputChanged(): void;
        /**
         * @deprecated API has been deprecated.
         */
        openInBrowser(url: string): void;
        /**
         * @deprecated API has been moved to factory interface.
         */
        requestRender(callback?: () => void): void;
        /**
         * @deprecated API has been deprecated.
         */
        scrollToView(controlContainer: jQueryObject): void;
        /**
         * @deprecated API has been moved to mode interface.
         */
        setNotification(msg: string, id: string): boolean;
        /**
         * @deprecated API has been deprecated.
         */
        setState(state: any): boolean;
        /**
         * Trigger the offline metadata sync
         */
        triggerOfflineMetadataSync(): Promise<void>;
        /**
         * COMMENT_TODO
         * @deprecated API has been moved to factory interface.
         */
        unbindDOMComponent(componentId: string): boolean;
        /**
         * @deprecated API has been moved to factory interface.
         */
        updateComponent(id: string, props: Dictionary): void;
        /**
         * Retrives the form descriptor for an entity and the corresposding attribute metadata, with a specific formId, if one is supplied
         * If no formID is supplied it retrieves the default form descriptor (and the corresposding attribute metadata) for that entity for the formType specified
         * If no formID or FormType is specified, it will retrive the default (and the corresposding attribute metadata) form descriptor for the entity
         * @param entityName The logical name of the entity
         * @param formId The id of the form to be retrieved.
         * @param formType The type of the form to be retrieved.
         */
        retrieveFormWithAttributes(entityName: string, formId?: string, formType?: string): Promise<any>;
        /**
         * Retrieves the chart drilldown attributes
         * @param etn entity name
         */
        retrieveChartDrilldownAttributes(etn: string): Promise<any>;
        /**
         * @param entityTypeCode
         * @returns a string, which is the entitytype name corresponds to the code
         */
        getEntityName(entityTypeCode: number): string;
        /**
         * The action which retrieve Record commands for selected record ids
         * @param allRecords data set wrapper.
         * @param commandManagerId Unique id of the command manager associates with the dataset.
         * @param records The selected record ids.
         * @param commandButtonIds An optional array of command names (strings). If specified, we will only retrieve these command definitions, ignoring rule evaluation
         * @param filterByPriority An optional boolean indicating if the results should be filtered by the "Priority" field on the control. Only controls with the priority field will be returned, and they will be sorted by priority (0 being highest priority)
         * @param useNestedFormat An optional boolean indicating if the results should be returned in a nested format. Requesting "SpecificControls" never returns a nested format, regardless the value of this boolean
         * @returns A promise, that is resolved with command object array, or rejected with ErrorResponse
         */
        retrieveRecordCommand(allRecords: {
            [id: string]: CustomControlInterfaces.DataSetRecord;
        }, commandManagerId: string, records: string[], commandButtonIds?: string[], filterByPriority?: boolean, useNestedFormat?: boolean): DynamicsSrc.IDeferred<CustomControlInterfaces.ICommandObjectWrapper[], CustomControlInterfaces.ErrorResponse>;
        /**
         * Determines if the given control exists within this organization.
         * @param customControlName The name of the custom control we want to whose existence we want to determine
         * @returns A promise, that is resolved with a boolean signifying what the correct value is
         */
        doesControlExist(customControlName: string): Promise<boolean>;
    }
    /**
     * The resource interface.
     */
    interface IResources {
        /**
         * Gets a resource from within the control manifest.
         * @param id The resource string identifier.
         * @param success The success callback. Resource data is returned in base 64 encoded format.
         * @param failure The failure callback.
         */
        getResource(id: string, success: (data: string) => void, failure: () => void): void;
        /**
         * Get the localized string for the given identifier.
         * @param id name of resource in the control manifest.
         */
        getString(id: string): string;
    }
    /**
     * The performance interface
     */
    interface IPerformance {
    }
    /**
     * enum for Primitive Controls
     */
    type PrimitiveControls = "Boolean" | "ComboBox" | "Container" | "Hyperlink" | "Img" | "Label" | "List" | "ListItem" | "LivePersonaCardHoverTarget" | "MicrosoftIcon" | "Popup" | "ScrollContainer" | "TextInput" | "IFRAME" | "CommandBar" | "Option" | "Select" | "EntityImage" | "PROGRESSINDICATOR" | "HorizontalScroll" | "PresenceIndicator" | "PLACEHOLDER";
    const supportedPrimitives: string[];
    /**
     * The factory interface
     */
    interface IFactory {
        /**
         * Create a simple virtual element (primitive).
         * @param type The name of the virtual component (primitive).
         * @param properties The properties of the virtual component children: Child virtual components, if any.
         * @returns A virtual component of the corresponding type.
         */
        createElement(type: string, properties: CustomControlInterfaces.IVirtualComponentProps, children?: any): CustomControlInterfaces.IVirtualComponent;
        /**
         * Create a nested custom control element.
         * @param type The full-name of the control (namespace + constructor).
         * @param id A unique identifier for the child control.
         * @param properties The properties of the control.
         * @returns A virtual component representing the control.
         */
        createComponent(type: PrimitiveControls, id: string, properties: any): CustomControlInterfaces.IVirtualComponent;
        /**
         * @deprecated API has been deprecated.
         * Binds a nested virtual component to the specific DOM element passed as a parameter.
         * @param virtualComponent The virtual component to bind .
         * @param DOMNode The HTML DOM element.
         */
        bindDOMElement(virtualComponent: VirtualComponent, DOMNode: Element): void;
        /**
         * Binds a nested virtual component to the specific DOM element passed as a parameter.
         * @param virtualComponent The virtual component to bind .
         * @param DOMNode The HTML DOM element.
         */
        bindDOMComponent(virtualComponent: VirtualComponent, DOMNode: Element): void;
        /**
         * Fires an event. Any handlers listening to this event will be triggered.
         * @param eventName The name of the event.
         * @param params Parameters for the event.
         */
        fireEvent(eventName: string, params: any): void;
        /**
         * Get default control for given datatype
         * @param dataType The datatype.
         * @returns The control name for the datatype.
         */
        getControlDefaultMapping(dataType: string): string;
        /**
         * Requests re-rendering of the control with updated data.
         * @param callback A function that will be executed when rendering is complete.
         */
        requestRender(callback?: () => void): void;
        /**
         * Unbinds the nested virtual component
         * @param componentId The id of the component.
         * @returns True if successful.
         */
        unbindDOMComponent(componentId: string): boolean;
        /**
         * Updates the nested component with the properties passed as a parameter.
         * @param id The component identifier.
         * @param props The properties of the control.
         */
        updateComponent(id: string, props: Dictionary): void;
    }
    /**
     * The interface for Org Settings exposed to a custom control
     */
    interface ICustomControlExposedOrgSettings {
        /**
         * @deprecated API has been deprecated.
         */
        isRTL: boolean;
        /**
         * Start date for the fiscal period.
         */
        fiscalYearStartDate: Date;
        /**
         * Information that specifies how the name of the fiscal period is displayed.
         */
        fiscalPeriodFormat: number;
        /**
         * Type of fiscal period used.
         */
        fiscalPeriodType: number;
        /**
         * Format for the year.
         */
        fiscalYearFormatYear: number;
        /**
         * Prefix for the display of the fiscal year.
         */
        fiscalYearFormatPrefix: number;
        /**
         * Suffix for the display of the fiscal year.
         */
        fiscalYearFormatSuffix: number;
        /**
         * Information that specifies whether the fiscal year should be displayed based on the start date or the end date of the fiscal year.
         */
        fiscalYearDisplayCode: number;
        /**
         * Information that specifies how the names of the fiscal year and the fiscal period should be connected when displayed together.
         */
        fiscalPeriodConnector: string;
        /**
         * Information that specifies whether to display the week number.
         */
        showWeekNumber: boolean;
        /**
         * Information that specifies whether to show the Card Form in Expanded State or not
         */
        boundDashboardDefaultCardExpanded: boolean;
        /**
         * Identifier of the organization.
         */
        organizationId: string;
        /**
         * Indicates whether ActionCard is enabled.
         */
        isActionCardEnabled: boolean;
        /**
         * Indicates whether email monitoring is allowed.
         */
        isEmailMonitoringAllowed: boolean;
        /**
         * Indicates whether users are allowed to send email to unresolved parties (parties must still have an email address).
         */
        allowUnresolvedPartiesOnEmailSend: boolean;
        /**
         * WebResource hash used to build url to retrieve web resources.
         */
        webResourceHash?: string;
        /**
         * Indicates whether map control is allowed on CRM forms
         */
        enableBingMapsIntegration?: boolean;
        /**
         * Key for BingMaps API
         */
        bingMapsApiKey?: string;
        /**
         * Locales that are supported by Bing Map
         */
        availableBingMapLocales?: string;
        /**
         * List of countries are not supported by BingMap
         */
        excludedCountriesForMaps?: string;
        /**
         * Indicates whether org belongd to BlackForest region
         */
        bFDatacenter?: boolean;
        /**
         * The security settings for email.
         */
        securitySettingForEmail?: number;
        /**
         * The setting that enables RTE for appointment
         */
        appointmentRichEditorExperience?: boolean;
        /**
         * The record count that can be returned to a grid accurately, before the total count needs to be estimated.
         */
        gridTotalRecordCountLimit?: number;
    }
    /**
     * The interface for Org Date Format Info exposed to a custom control
     * Comments indicate example values
     */
    interface DateFormattingInfo {
        /**
         * @deprecated API has been deprecated.
         */
        AMDesignator: string;
        /**
         * @deprecated API has been deprecated.
         */
        AbbreviatedDayNames: string[];
        /**
         * @deprecated API has been deprecated.
         */
        AbbreviatedMonthGenitiveNames: string[];
        /**
         * @deprecated API has been deprecated.
         */
        AbbreviatedMonthNames: string[];
        /**
         * @deprecated API has been deprecated.
         */
        CalendarWeekRule: number;
        /**
         * @deprecated API has been deprecated.
         */
        Calendar: Calendar;
        /**
         * @deprecated API has been deprecated.
         */
        DateSeparator: string;
        /**
         * @deprecated API has been deprecated.
         */
        DayNames: string[];
        /**
         * @deprecated API has been deprecated.
         */
        FirstDayOfWeek: CrmFramework.DayOfWeek;
        /**
         * @deprecated API has been deprecated.
         */
        FullDateTimePattern: string;
        /**
         * @deprecated API has been deprecated.
         */
        LongDatePattern: string;
        /**
         * @deprecated API has been deprecated.
         */
        LongTimePattern: string;
        /**
         * @deprecated API has been deprecated.
         */
        MonthDayPattern: string;
        /**
         * @deprecated API has been deprecated.
         */
        MonthGenitiveNames: string[];
        /**
         * @deprecated API has been deprecated.
         */
        MonthNames: string[];
        /**
         * @deprecated API has been deprecated.
         */
        PMDesignator: string;
        /**
         * @deprecated API has been deprecated.
         */
        ShortDatePattern: string;
        /**
         * @deprecated API has been deprecated.
         */
        ShortTimePattern: string;
        /**
         * @deprecated API has been deprecated.
         */
        ShortestDayNames: string[];
        /**
         * @deprecated API has been deprecated.
         */
        SortableDateTimePattern: string;
        /**
         * @deprecated API has been deprecated.
         */
        TimeSeparator: string;
        /**
         * @deprecated API has been deprecated.
         */
        UniversalSortableDateTimePattern: string;
        /**
         * @deprecated API has been deprecated.
         */
        YearMonthPattern: string;
        amDesignator: string;
        abbreviatedDayNames: string[];
        abbreviatedMonthGenitiveNames: string[];
        abbreviatedMonthNames: string[];
        calendarWeekRule: number;
        calendar: Calendar;
        dateSeparator: string;
        dayNames: string[];
        firstDayOfWeek: CrmFramework.DayOfWeek;
        fullDateTimePattern: string;
        longDatePattern: string;
        longTimePattern: string;
        monthDayPattern: string;
        monthGenitiveNames: string[];
        monthNames: string[];
        pmDesignator: string;
        shortDatePattern: string;
        shortTimePattern: string;
        shortestDayNames: string[];
        sortableDateTimePattern: string;
        timeSeparator: string;
        universalSortableDateTimePattern: string;
        yearMonthPattern: string;
    }
    /**
     * The interface for Org Number Format Info exposed to a custom control
     * Comments indicate example values
     */
    interface NumberFormattingInfo {
        /**
         * @deprecated API has been deprecated.
         */
        CurrencyDecimalDigits: number;
        /**
         * @deprecated API has been deprecated.
         */
        CurrencyDecimalSeparator: string;
        /**
         * @deprecated API has been deprecated.
         */
        CurrencyGroupSeparator: string;
        /**
         * @deprecated API has been deprecated.
         */
        CurrencyGroupSizes: number[];
        /**
         * @deprecated API has been deprecated.
         */
        CurrencyNegativePattern: number;
        /**
         * @deprecated API has been deprecated.
         */
        CurrencyPositivePattern: number;
        /**
         * @deprecated API has been deprecated.
         */
        CurrencySymbol: string;
        /**
         * @deprecated API has been deprecated.
         */
        NANSymbol: string;
        /**
         * @deprecated API has been deprecated.
         */
        NativeDigits: string[];
        /**
         * @deprecated API has been deprecated.
         */
        NegativeInfinitySymbol: string;
        /**
         * @deprecated API has been deprecated.
         */
        NegativeSign: string;
        /**
         * @deprecated API has been deprecated.
         */
        NumberDecimalDigits: number;
        /**
         * @deprecated API has been deprecated.
         */
        NumberDecimalSeparator: string;
        /**
         * @deprecated API has been deprecated.
         */
        NumberGroupSeparator: string;
        /**
         * @deprecated API has been deprecated.
         */
        NumberGroupSizes: number[];
        /**
         * @deprecated API has been deprecated.
         */
        NumberNegativePattern: number;
        /**
         * @deprecated API has been deprecated.
         */
        PerMilleSymbol: string;
        /**
         * @deprecated API has been deprecated.
         */
        PercentDecimalDigits: number;
        /**
         * @deprecated API has been deprecated.
         */
        PercentDecimalSeparator: string;
        /**
         * @deprecated API has been deprecated.
         */
        PercentGroupSeparator: string;
        /**
         * @deprecated API has been deprecated.
         */
        PercentGroupSizes: number[];
        /**
         * @deprecated API has been deprecated.
         */
        PercentNegativePattern: number;
        /**
         * @deprecated API has been deprecated.
         */
        PercentPositivePattern: number;
        /**
         * @deprecated API has been deprecated.
         */
        PercentSymbol: string;
        /**
         * @deprecated API has been deprecated.
         */
        PositiveInfinitySymbol: string;
        /**
         * @deprecated API has been deprecated.
         */
        PositiveSign: string;
        /**
         * 2
         */
        currencyDecimalDigits: number;
        /**
         * "."
         */
        currencyDecimalSeparator: string;
        /**
         * ","
         */
        currencyGroupSeparator: string;
        /**
         * { 3 }
         */
        currencyGroupSizes: number[];
        /**
         * 0
         */
        currencyNegativePattern: number;
        /**
         * 0
         */
        currencyPositivePattern: number;
        /**
         * "$"
         */
        currencySymbol: string;
        /**
         * "NaN"
         */
        nanSymbol: string;
        /**
         * { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"}
         */
        nativeDigits: string[];
        /**
         * "-Infinity"
         */
        negativeInfinitySymbol: string;
        /**
         * "-"
         */
        negativeSign: string;
        /**
         * 2
         */
        numberDecimalDigits: number;
        /**
         * "."
         */
        numberDecimalSeparator: string;
        /**
         * ","
         */
        numberGroupSeparator: string;
        /**
         * { 3 }
         */
        numberGroupSizes: number[];
        /**
         * 1
         */
        numberNegativePattern: number;
        /**
         * "�"
         */
        perMilleSymbol: string;
        /**
         * 2
         */
        percentDecimalDigits: number;
        /**
         * "."
         */
        percentDecimalSeparator: string;
        /**
         * ","
         */
        percentGroupSeparator: string;
        /**
         * { 3 }
         */
        percentGroupSizes: number[];
        /**
         * 0
         */
        percentNegativePattern: number;
        /**
         * 0
         */
        percentPositivePattern: number;
        /**
         * "%"
         */
        percentSymbol: string;
        /**
         * "Infinity"
         */
        positiveInfinitySymbol: string;
        /**
         * "+"
         */
        positiveSign: string;
    }
    /**
     * The interface for the Calendar exposed in DateFormattingInfo
     */
    interface Calendar {
        /**
         * @deprecated API has been deprecated.
         */
        MinSupportedDateTime: Date;
        /**
         * @deprecated API has been deprecated.
         */
        MaxSupportedDateTime: Date;
        /**
         * @deprecated API has been deprecated.
         */
        AlgorithmType: number;
        /**
         * @deprecated API has been deprecated.
         */
        CalendarType: number;
        /**
         * @deprecated API has been deprecated.
         */
        Eras: number[];
        /**
         * @deprecated API has been deprecated.
         */
        TwoDigitYearMax: number;
        /**
         * @deprecated API has been deprecated.
         */
        IsReadOnly: boolean;
        minSupportedDateTime: Date;
        maxSupportedDateTime: Date;
        algorithmType: number;
        calendarType: number;
        eras: number[];
        twoDigitYearMax: number;
        isReadOnly: boolean;
    }
    /**
     * @deprecated The interface for the simplified UserAgent exposed to CustomControls
     */
    interface CustomControlExposedUserAgent {
        /**
         * @deprecated API has been deprecated.
         */
        isWin: boolean;
        /**
         * @deprecated API has been deprecated.
         */
        isAndroid: boolean;
        /**
         * @deprecated API has been deprecated.
         * Gets a value indicating whether the running android version is latest(4.4 or higher version).
         */
        isAndroidModern: boolean;
        /**
         * @deprecated API has been deprecated.
         */
        isIos: boolean;
        /**
         * @deprecated API has been deprecated.
         */
        isBrowserIE: boolean;
        /**
         * @deprecated API has been deprecated.
         */
        isBrowserChrome: boolean;
        /**
         * @deprecated API has been deprecated.
         */
        isBrowserFirefox: boolean;
    }
    /**
     * The interface is internal.
     * The accessibility internal data interface
     */
    interface AccessibilityInternalData {
        /**
         * @deprecated API has been deprecated.
         */
        keyboardShortcuts: any;
    }
    /**
     * The client interface for control framework.
     */
    interface IClient extends ControlAndClientApiInterfaces.Client {
        /**
         * Is the control rendered in the customization preview mode.
         */
        isPreview: boolean;
        /**
         * Device form factor.
         * None = 0
         * Slate = 1
         * Phone = 2
         * Desktop = 3
         * MailApp = 4
         */
        formFactor: FormFactor;
        /**
         * @deprecated API has been deprecated.
         */
        userAgent: CustomControlExposedUserAgent;
        /**
         * @deprecated The language code for the user.
         */
        languageCode: string;
        /**
         * @deprecated Whether right to left language is used.
         */
        isRTL: boolean;
        /**
         * @deprecated User locale string.
         */
        locale: string;
        /**
         * Settings object for the organization.
         */
        orgSettings: ICustomControlExposedOrgSettings;
        /**
         * The interface for Date Formatting.
         */
        dateFormattingInfo: DateFormattingInfo;
        /**
         * The interface for Number Formatting.
         */
        numberFormattingInfo: NumberFormattingInfo;
        /**
         * @deprecated User timezone and UTC difference in minutes.
         */
        userTimeZoneUtcOffsetMinutes: number;
        /**
         * @deprecated Width allocated to the control.
         */
        allocatedWidth: number;
        /**
         * @deprecated API has been deprecated.
         */
        allocatedHeight: number;
        /**
         * Whether this control should disable its scrolling capabilities
         */
        disableScroll: boolean;
        /**
         * @deprecated API to determine container sizing if control needs to react.
         */
        trackContainerResize(value: boolean): void;
        /**
         * @deprecated API has been deprecated.
         * Difference between user timezone and UTC in minutes.
         */
        getUserTimeZoneUtcOffset(d: Date): number;
        /**
         * @deprecated Make the control full screen.
         */
        setFullscreen(value: boolean): void;
        /**
         * Make the control full screen.
         * @param value Use auto sizing.
         */
        setFullScreen(value: boolean): void;
        /**
         * Set to true if control should not receive update on the values modified by itself to avoid circular updates.
         */
        ignoreSelfUpdates(value: boolean): void;
        /**
         * Whether the user is online or offline.
         */
        isOffline(): boolean;
    }
    /**
     * The accessibility interface
     */
    interface IAccessibility {
        /**
         * The tab index of the control.
         */
        assignedTabIndex: number;
        /**
         * @deprecated API has been deprecated.
         * Returns true if High Contrast is enabled.
         */
        isHighContrastEnabled: boolean;
        /**
         * Registers a keyboard shortcut for the control.
         * @param keyCombination The keycodes for the shortcut keys.
         * @param shortcutHandler The function to be called back when the shortcut is pressed.
         * @param isGlobal Whether this shortcut applies to the full page or only a specific element.
         * @param areaName The area where this shortcut belongs to.
         * @param shortcutDescription The description of what the shortcut does.
         * @param srcElementId If this shortcut is applied to a specific element, (isGlobal should be false), the id of the element.
         */
        registerShortcut(keyCombination: number[], shortcutHandler: (event: KeyboardEvent) => void, isGlobal: boolean, areaName: string, shortcutDescription: string, srcElementId?: string): void;
        /**
         * Gets the unique identifier of the control.
         */
        getUniqueId(id: string): string;
        /**
         * Focuses an element of the control.
         * @param id The id of the control to put focus on.
         * @param isAbsoluteId Whether the id is absolute.
         */
        focusElementById(id: string, isAbsoluteId?: boolean): void;
        /**
         * Unfocuses an element of the control.
         * @param id The DOM id of the control to put focus on.
         * @param isAbsoluteId Whether the id is absolute.
         */
        blurElementById(id: string, isAbsoluteId?: boolean): void;
    }
    /**
     * The mode interface
     */
    interface IMode {
        /**
         * Is the control disabled.
         */
        isControlDisabled: boolean;
        /**
         * COMMENT_TODO
         */
        isRead: boolean;
        /**
         * @deprecated API has been deprecated.
         */
        isPreview: boolean;
        /**
         * @deprecated API has been deprecated.
         */
        isOffline: boolean;
        /**
         * Is the control visible on the page.
         */
        isVisible: boolean;
        /**
         * The defined control label.
         */
        label: string;
        /**
         * the fullPage Params
         */
        fullPageParams?: any;
        /**
         * Is the control on an active page in the navigation stack on the dom.
         */
        isActive: boolean;
        /**
         * Whether the control or it's child control has focus
         */
        hasFocus: boolean;
        /**
         * Contains type, id and record name of current entity.
         */
        contextInfo: IContextInfo;
        /**
         * The span of a rows for the multi-line controls.
         */
        rowSpan: number;
        /**
         * Label for use by assistive technology to build accessible control.
         */
        accessibilityLabel?: string;
        /**
         * Width in pixels allocated to the control.
         */
        allocatedWidth: number;
        /**
         * Height in pixels allocated to the control.
         */
        allocatedHeight: number;
        /**
         * Unfocus this control and any children.
         */
        blur: () => void;
        /**
         * Focus this control and any parents.
         */
        focus: () => void;
        /**
         * API to determine container sizing if control needs to react.
         * @param value True if controls needs  to track container size.
         */
        trackContainerResize(value: boolean): void;
        /**
         * Sets the notification on control.
         * @param message The notification message.
         * @param id The notification id.
         */
        setNotification(message: string, id: string): boolean;
        /**
         * Clears the notification on control
         */
        clearNotification(id?: string): boolean;
        /**
         * COMMENT_TODO
         */
        setControlState(state: any, globalSetting?: boolean): boolean;
        /**
         * Make the control full screen. Auto sizing option controls the width according to the current control width allocation.
         * @param value Use auto sizing.
         */
        setFullScreen(value: boolean): void;
    }
    /**
     * The page interface
     */
    interface IPage extends ControlAndClientApiInterfaces.Page {
        /**
         * The app identifier.
         */
        appId: string;
        /**
         * The entity type name of the page (if applicable).
         */
        entityTypeName: string;
        /**
         * The identifier of the entity (if applicable).
         */
        entityId: string;
        /**
         * Indicates if the page is read only.
         */
        isPageReadOnly: boolean;
    }
    /**
     * Interface for the learning path.
     */
    interface ILearningPath {
        /**
         * DOM attribute name.
         */
        DOMAttributeName: string;
        /**
         * Identifier for the base control.
         */
        baseControlId: string;
    }
    /**
     * Communication properties to validate current entity.
     */
    interface ICommunicationChannel {
        /**
         * Gets SIP mapped attribute field for entity.
         * @param entityName The entity name.
         */
        getPresenceMappedField(entityName: string): string;
        /**
         * Whether a presence is enable or not for the current entity.
         * @param entityName The entity name.
         */
        isPresenceEnabled(entityName: string): boolean;
    }
    /**
     * Context information contains type and id of current entity.
     */
    interface IContextInfo {
        /**
         * Platform name of the entity.
         */
        entityTypeName: string;
        /**
         * The entity identifier.
         */
        entityId: string;
        /**
         * EntityRecordName contains record name of a Entity
         */
        entityRecordName?: string;
    }
    /**
     * The interface for Org Settings exposed to a custom control
     */
    interface IOrgSettings extends ControlAndClientApiInterfaces.OrgSettings {
        /**
         * Whether a language is read right to left.
         */
        isRTL: boolean;
        /**
         * Start date for the fiscal period.
         */
        fiscalYearStartDate: Date;
        /**
         * Information that specifies how the name of the fiscal period is displayed.
         */
        fiscalPeriodFormat: number;
        /**
         * Type of fiscal period used.
         */
        fiscalPeriodType: number;
        /**
         * Format for the year.
         */
        fiscalYearFormatYear: number;
        /**
         * Prefix for the display of the fiscal year.
         */
        fiscalYearFormatPrefix: number;
        /**
         * Suffix for the display of the fiscal year.
         */
        fiscalYearFormatSuffix: number;
        /**
         * Information that specifies whether the fiscal year should be displayed based on the start date or the end date of the fiscal year.
         */
        fiscalYearDisplayCode: number;
        /**
         * Information that specifies how the names of the fiscal year and the fiscal period should be connected when displayed together.
         */
        fiscalPeriodConnector: string;
        /**
         * Information that specifies whether to display the week number.
         */
        showWeekNumber: boolean;
        /**
         * Information that specifies whether to show the Card Form in Expanded State or not
         */
        boundDashboardDefaultCardExpanded: boolean;
        /**
         * Indicates whether users are allowed to send email to unresolved parties (parties must still have an email address).
         */
        allowUnresolvedPartiesOnEmailSend: boolean;
        /**
         * WebResource hash used to build url to retrieve web resources.
         */
        webResourceHash: string;
        /**
         * Indicates whether map control is allowed on CRM forms
         */
        enableBingMapsIntegration: boolean;
        /**
         * Key for BingMaps API
         */
        bingMapsApiKey: string;
        /**
         * Locales that are supported by Bing Map
         */
        availableBingMapLocales: string;
        /**
         * List of countries are not supported by BingMap
         */
        excludedCountriesForMaps: string;
        /**
         * Indicates whether org belongd to BlackForest region
         */
        bFDatacenter: boolean;
        /**
         * The security settings for email.
         */
        securitySettingForEmail: number;
        appointmentRichEditorExperience: boolean;
    }
    /**
     * The interface for User Settings exposed to a custom control
     */
    interface IUserSettings extends ControlAndClientApiInterfaces.UserSettings {
        /**
         * Date formatting information as retrieved from the server.
         */
        dateFormattingInfo: DateFormattingInfo;
        /**
         * Number formatting information as retrieved from the server.
         */
        numberFormattingInfo: NumberFormattingInfo;
    }
    /**
     * The navigation interface.
     */
    interface INavigation extends ControlAndClientApiInterfaces.Navigation {
        /**
         * @deprecated API has been deprecated.
         * Opens the grid page.
         */
        openGridPage(entityTypeName: string, viewId?: string, showChart?: boolean, visualizationId?: string, filterExpression?: string): void;
        /**
         * Opens the grid page.
         * @param entityTypeName entity logical name of entity
         * @param viewId the Id for the view
         * @param showChart whether to show the chart
         * @param visualizationType visualization type for the chart (SavedQueryVisualization or UserQueryVisualization)
         * @param visualizationId visualization id
         * @param filterExpression expression to filter records
         * @param chartDrillDownParameters additional chart drilldown parameters
         */
        openGrid(entityTypeName: string, viewId?: string, showChart?: boolean, visualizationType?: number, visualizationId?: string, filterExpression?: string, chartDrillDownParameters?: CustomControlInterfaces.ChartDrillDownParameter[]): void;
        /**
         * @deprecated API has been deprecated.
         */
        openDashboard(id: string): void;
        /**
         * @deprecated API has been deprecated. Please use openForm() API instead.
         */
        openCreateForm(logicalName: string, initialValues?: Dictionary, createFromEntity?: CustomControlEntityReference): void;
        /**
         * @deprecated API has been deprecated.
         * Open search page.
         */
        openSearch(query?: string): void;
        /**
         * @deprecated API has been moved to IPowerBIParameterDefinition.
         * Opens power BI in fullscreen.
         */
        openPowerBIFullScreenPage(powerBIEmbedUrl?: string, powerBIGroupId?: string, powerBIDashboardId?: string, powerBITileId?: string, powerBIReportId?: string, powerBIReportUrl?: string, powerBIComponentTypeCode?: string): void;
        /**
         * @deprecated API has been deprecated.
         * Opens a url with the specified protocol.
         */
        openUrlWithProtocol(url: string, protocol: string): void;
        /**
         * Open a phone number.
         */
        openPhoneNumber(phoneNumber: string, useForm?: boolean, passedEtn?: string, passedId?: string, passedName?: string): void;
        /**
         * @deprecated API has been deprecated. Please use OpenMap instead.
         * Open the native maps application.
         */
        openMaps(address: string): void;
        /**
         * Open the native maps application.
         */
        openMap(address: string): void;
    }
    /**
     * The device bag interface
     */
    interface IDevice {
        captureImage(options?: ControlAndClientApiInterfaces.CaptureImageOptions): Promise<File>;
        captureAudio(): Promise<File>;
        captureVideo(): Promise<File>;
        pickFile(options?: ControlAndClientApiInterfaces.PickFileOptions): Promise<File[]>;
        getBarcodeValue(): Promise<string>;
        isGetBarcodeValueOperationAvailable(): boolean;
        /**
         * Determines if take picture operation is supported in the device
         */
        isTakePictureOperationAvailable(): boolean;
        /**
         * Determines if capture video operation is supported in the device
         */
        isCaptureVideoOperationAvailable(): boolean;
        /**
         * Determines if capture audio operation is supported in the device
         */
        isCaptureAudioOperationAvailable(): boolean;
        getCurrentPosition(): Promise<Position>;
    }
    /**
     * The external context bag interface
     */
    interface IExternalContext {
        /**
         * Retrieves descriptors for all available external contexts.
         * @return {Collection.ItemCollection<ExternalContextDescriptor>} A collection of the available external contexts.
         */
        getAvailableExternalContexts(): Collection.ItemCollection<ControlAndClientApiInterfaces.ExternalContextDescriptor>;
        /**
         * Retrieves a property from an external context.
         * @param {string} externalContextId - The context from which to retrieve the property
         * @param {string} string - The property to retrieve
         * @param {ExternalContextPropertyOptions} [options] - Optional. Any additional options for retrieving the property.
         * @return {Promise<ExternalContextResult>} A promise for the external context property
         */
        getExternalContextProperty(externalContextId: string, externalContextPropertyId: string, options?: ControlAndClientApiInterfaces.ExternalContextPropertyOptions): Promise<ControlAndClientApiInterfaces.ExternalContextSuccessResponse>;
        /**
         * Invokes an action on an external context.
         * @param {string} externalContextId - The context upon which to invoke the action
         * @param {string} externalContextActionId - The action to invoke
         * @param {ExternalContextActionOptions} [options] - Optional. Any additional options for invoking the action
         * @return {Promise<ExternalContextResult>} A promise for the invocation result
         */
        invokeExternalContextAction(externalContextId: string, externalContextActionId: string, options?: ControlAndClientApiInterfaces.ExternalContextActionOptions): Promise<ControlAndClientApiInterfaces.ExternalContextSuccessResponse>;
        /**
         * Remove an external context property listener.
         * @param {string} externalContextId - The context from which to retrieve the property
         * @param {string} externalContextPropertyId - The property to retrieve
         * @param {string} listener - The update listener
         */
        removeExternalContextPropertyListener(externalContextId: string, externalContextPropertyId: string, listener: ControlAndClientApiInterfaces.ExternalContextPropertyListener): void;
    }
    /**
     * The theming bag interface
     */
    interface IThemingBagLookup {
        tagpadding: string;
        tagmargin: string;
        tagbackgroundcolor: string;
    }
    interface IThemingBagBorders {
        border01: string;
        border02: string;
        border03: string;
    }
    interface IThemingBagShadows {
        shadow01: string;
    }
    interface IThemingBagMeasures {
        measure025: string;
        measure050: string;
        measure075: string;
        measure100: string;
        measure125: string;
        measure150: string;
        measure175: string;
        measure200: string;
        measure225: string;
        measure250: string;
        measure300: string;
        measure350: string;
        measure400: string;
        measure450: string;
        measure500: string;
        measure550: string;
        measure600: string;
    }
    interface IThemingBagBreakpoints {
        dimensionxs: string;
        dimensions: string;
        dimensionm: string;
        dimensionl: string;
        dimensionxl: string;
    }
    interface IThemingBagFontSizes {
        xsfontsize: string;
        sfontsize: string;
        bfontsize: string;
        mfontsize: string;
        lfontsize: string;
        xlfontsize: string;
        font225: string;
        font200: string;
        font175: string;
        font150: string;
        font125: string;
        font115: string;
        font100: string;
        font085: string;
        font075: string;
    }
    interface IThemingBagFontFamilies {
        semilight: string;
        semibold: string;
        regular: string;
        bold: string;
    }
    interface IThemingBagSpacings {
        xshorizontal: string;
        shorizontal: string;
        bhorizontal: string;
        mhorizontal: string;
        lhorizontal: string;
        xlhorizontal: string;
        xxlhorizontal: string;
        xsvertical: string;
        svertical: string;
        bvertical: string;
        mvertical: string;
        lvertical: string;
        xlvertical: string;
        xxlvertical: string;
    }
    interface IThemingBagColors {
        whitebackground: string;
        defaulttheming: string;
        navbarshelf: string;
        header: string;
        globallink: string;
        selectedlinkeffect: string;
        hoverlinkeffect: string;
        processcontrol: string;
        defaultentity: string;
        defaultcustomentity: string;
        controlshade: string;
        controlborder: string;
        status: IThemingBagStatusColors;
        base: IThemingBagBaseColors;
        links: IThemingBagLinkColors;
        grays: IThemingBagGrayColors;
    }
    interface IThemingBagGrayColors {
        gray01: string;
        gray02: string;
        gray03: string;
        gray04: string;
        gray05: string;
        gray06: string;
        gray07: string;
        gray08: string;
        gray09: string;
    }
    interface IThemingBagLinkColors {
        default: string;
        visited: string;
        disabled: string;
    }
    interface IThemingBagBaseColors {
        white: string;
        black: string;
        red: string;
        orange: string;
        yellow: string;
        green: string;
        blue: string;
        teal: string;
        purple: string;
    }
    interface IThemingBagStatusColors {
        neutral: string;
        error: string;
        warning: string;
        success: string;
        info: string;
    }
    interface IThemingBagTextBox {
        fonticonsize: string;
        fontweight: number;
        contentfontweight: number;
        fontsize: string;
        errorfontsize: string;
        spacing: string;
        containerspacing: string;
        rightmargin: string;
        lineheight: string;
        linethickness: string;
        errorlinethickness: string;
        horizontalpadding: string;
        verticalpadding: string;
        maxlength: number;
        labelcolor: string;
        contentcolor: string;
        linecolor: string;
        hoverboxcolor: string;
        backgroundcolor: string;
        errorbackgroundcolor: string;
        redcolor: string;
        bluecolor: string;
        restmodecolor: string;
    }
    interface IThemingBag {
        normalfontfamily: string;
        normalfontcolor: string;
        normalfontsize: string;
        solidborderstyle: string;
        noneborderstyle: string;
        colors: IThemingBagColors;
        textbox: IThemingBagTextBox;
        spacings: IThemingBagSpacings;
        fontfamilies: IThemingBagFontFamilies;
        fontsizes: IThemingBagFontSizes;
        breakpoints: IThemingBagBreakpoints;
        measures: IThemingBagMeasures;
        lookup: IThemingBagLookup;
        borders: IThemingBagBorders;
        shadows: IThemingBagShadows;
        disableUiTransitions(): void;
        rightAlignEdit(): void;
        inlineLayout(val: boolean): void;
        getEntityColor(entityLogicalName: string): string;
    }
    /**
     * The property bag interface
     */
    interface IPropBag<T> {
        parameters: T;
        accessibility: IAccessibility;
        client: IClient;
        formatting: IFormatting;
        factory: IFactory;
        mode: IMode;
        navigation: INavigation;
        reporting: ControlAndClientApiInterfaces.Reporting;
        diagnostics: ControlAndClientApiInterfaces.Diagnostics;
        resources: IResources;
        performance: IPerformance;
        theming: IThemingBag;
        utils: IUtility;
        webAPI: ControlAndClientApiInterfaces.WebApi;
        orgSettings: IOrgSettings;
        userSettings: IUserSettings;
        offline: ControlAndClientApiInterfaces.Offline;
        children?: any;
        decorators?: CustomControlInterfaces.IDecorators;
        refs?: {
            [ref: string]: any;
        };
        updatedProperties: string[];
        page: IPage;
        device: IDevice;
        externalContext: IExternalContext;
        learningPath: ILearningPath;
        communicationChannel: ICommunicationChannel;
        design: {
            [key: string]: string;
        };
    }
    /**
     * @deprecated
     * The props for a AccessibilityComponentWrapper.
     */
    interface IAccessibilityComponentWrapperProps {
        /**
         * @deprecated
         */
        id: string;
        /**
         * @deprecated
         */
        keyboardShortcuts?: IKeyboardShortcut[];
        /**
         * @deprecated
         */
        parentComponent?: React.Component<any, any>;
        /**
         * @deprecated
         * The context representing an instance of the application. It should by ApplicationContext
         */
        context: any;
    }
    /**
     * The structure of a dataset parameter as it would be passed to a control
     */
    interface IDataSetExposedParameter extends CustomControlInterfaces.IDataSet, CustomControlInterfaces.IDataSetData, CustomControlInterfaces.IDataSetNeededByLegacy {
        /**
         * True if encountered error while data retrieval
         */
        error: boolean;
        /**
         * The error message associated with the last encountered error, if applicable
         */
        errorMessage: string;
        /**
         * DataSet parameter initialization state
         */
        loading: boolean;
        /**
         * The set of columns available in this dataset.
         */
        columns: IDataSetExposedColumn[];
        /**
         * IDs of the records in the dataset, in order
         */
        sortedRecordIds: string[];
        /**
         * Map of IDs to the full record object
         */
        records: {
            [id: string]: IDataSetExposedRecord;
        };
        /**
         * The column sorting for the current query.
         */
        sorting: IDataSetExposedColumnSortStatus[];
        /**
         * The column sorting for the current query.
         */
        filtering: IDataSetExposedFiltering;
        /**
         * Pagination status and actions.
         */
        paging: IDataSetExposedPaging;
        /**
         * Entity linking.
         */
        linking: IDataSetExposedLinking;
        /**
         * Adds column to the columnset
         * @name column name to be added to the columnset
         * @entityAlias entity alias for which the column name needs to be added
         */
        addColumn?: (name: string, entityAlias?: string) => void;
        /**
         * Refreshes the data set based on filters, sorting and Target Entity
         */
        refresh(): void;
        /**
         * Gets Id of view used by DataSet parameter
         */
        getViewId(): string;
        /**
         * Get DataSet target entity type name
         */
        getTargetEntityType(): string;
        /**
         * Retrieves the title associated with the dataset
         */
        getTitle(): string;
        /**
         * Retrieve Record's Associated Commands
         * @param recordIds selected records
         * @param specificCommands specific commands' names
         */
        retrieveRecordCommand(recordIds: string[], specificCommands?: string[], filterByPriority?: boolean, useNestedFormat?: boolean): DynamicsSrc.IDeferred<CustomControlInterfaces.ICommandObjectWrapper[], CustomControlInterfaces.ErrorResponse>;
        /**
         * Open DataSet Item for a given EntityReference
         * @entityReference entity reference
         */
        openDatasetItem(entityReference: CustomControlInterfaces.CustomControlEntityReference): void;
        /**
         * Set the ids of the selected records
         * @ids List of recordId's
         */
        setSelectedRecordIds(ids: string[]): void;
        /**
         * Retrieves all selected record ids
         */
        getSelectedRecordIds(): string[];
        /**
         * Clear selected record ids list
         */
        clearSelectedRecordIds(): void;
    }
    /**
     * Metadata about a column in a data set
     */
    interface IDataSetExposedColumn extends CustomControlInterfaces.IDataSetColumn {
        /**
         * Name of the column, unique in this data set
         */
        name: string;
        /**
         * Localized display name for the column
         */
        displayName: string;
        /**
         * The data type of this column's values.
         */
        dataType: string;
        /**
         * The alias of this column.
         */
        alias: string;
        /**
         * The column order for the layout.
         */
        order: number;
        /**
         * The configured size factor for this column relative to other columns in the data set.
         * By default columns have a size factor of 1.0, but the system customizer or user can
         * make some columns larger (e.g., 1.5) or smaller (e.g., 0.75).
         */
        visualSizeFactor: number;
        /**
         * The column visibility state.
         */
        isHidden?: boolean;
        /**
         * The column web resource name.
         */
        imageProviderWebresource?: string;
        /**
         * The column image provider function name
         */
        imageProviderFunctionName?: string;
        /**
         * The column is primary attrribute
         */
        isPrimary?: boolean;
        /**
         * If the column needs to diasable sorting
         */
        disableSorting?: boolean;
    }
    /**
     * Base type for data set result values that supports value retrival by column name.
     * Derived classes can provide named shortcuts to particular column values.
     */
    interface IDataSetExposedRecord extends CustomControlInterfaces.IDataSetRecord {
        /**
         * Get the record ID of this record.
         */
        getRecordId(): string;
        /**
         * Get the current value of this record column.
         * @columnName Column name of the record
         * @returns The rawValue of that column.
         */
        getValue(columnName: string): string | Date | number | boolean | ControlAndClientApiInterfaces.LookupValue[];
        /**
         * Get the named version of the backing entity reference
         */
        getNamedReference(): CustomControlInterfaces.CustomControlEntityReference;
    }
    /**
     * Current sort status of a data set column
     */
    interface IDataSetExposedColumnSortStatus extends CustomControlInterfaces.IDataSetColumnSortStatus {
        /**
         * The name of the column
         */
        name: string;
        /**
         * The current sort direction for the column.
         */
        sortDirection: CustomControlInterfaces.ColumnSortDirection;
    }
    /**
     * Filter state for a data set.
     */
    interface IDataSetExposedFiltering extends CustomControlInterfaces.IDataSetFiltering {
        /**
         * Returns the top-most filter associated with the data-set
         */
        getFilter(): IExposedFilterExpression;
        /**
         * Sets the top-most filter associated with the data-set
         * @expression filter expression to be set
         */
        setFilter(expression: IExposedFilterExpression): void;
        /**
         * Clears the filter associated with the data-set.
         */
        clearFilter(): void;
    }
    /**
     * An expression used to represent a filter.
     */
    interface IExposedFilterExpression extends CustomControlInterfaces.IFilterExpression {
        /**
         * The set of conditions associated with this filter.
         */
        conditions: CustomControlInterfaces.ConditionExpression[];
        /**
         * The operator used to combine conditions in this filter.
         */
        filterOperator: CustomControlInterfaces.FilterOperator;
        /**
         * Any child filters that should be evaluated after evaluating this filter.
         */
        filters?: IExposedFilterExpression[];
    }
    /**
     * Paging state for a data set
     */
    interface IDataSetExposedPaging extends CustomControlInterfaces.IDataSetPaging, CustomControlInterfaces.DataSetPagingData {
        /**
         * Total number of results on the server for the current query.
         */
        totalResultCount: number;
        /**
         * Whether the result set can be paged forwards.
         */
        hasNextPage: boolean;
        /**
         * Whether the result set can be paged backwards.
         */
        hasPreviousPage: boolean;
        /**
         * Request the next page of results to be loaded.
         */
        loadNextPage(): void;
        /**
         * Request the previous page of results to be loaded.
         */
        loadPreviousPage(): void;
        /**
         * Reload the results from the server, and reset to page 1.
         */
        reset(): void;
        /**
         * Sets the number of results to return per page on the next data refresh.
         * @pageSize pageSize to be set.
         */
        setPageSize(pageSize: number): void;
        /**
         * Request the exact page of results to be loaded.
         */
        loadExactPage(pageNumber: number): void;
    }
    /**
     * Data set entity linking.
     */
    interface IDataSetExposedLinking extends CustomControlInterfaces.IDataSetLinking {
        /**
         *@returns Returns all the linked entities information
         */
        getLinkedEntities(): ILinkEntityExposedExpression[];
        /**
         * Sets a new linked entity with the existing linked entities
         */
        addLinkedEntity(expression: ILinkEntityExposedExpression): void;
    }
    /**
     * Entity linking expression
     */
    interface ILinkEntityExposedExpression extends CustomControlInterfaces.ILinkEntityExpression {
        /**
            The 'name' of the entity to link to
        */
        name: string;
        /**
            The 'from' attribute in the link-entity relationship
        */
        from: string;
        /**
            The 'to' attribute in the link-entity relationship
        */
        to: string;
        /**
            The 'type' of the link, referred to by the link-entity attribute
        */
        linkType: string;
        /**
            The 'alias' for the link-entity relationship
        */
        alias: string;
    }
    export { Component, FormFactor, Calendar, IOrgSettings, ICustomControlExposedOrgSettings, CustomControlExposedUserAgent, DateFormattingInfo, NumberFormattingInfo, AccessibilityInternalData, IAccessibility, IAccessibilityComponentWrapperProps, IClient, IUserSettings, PrimitiveControls, IFormatting, IContextInfo, IMode, IPage, ICommunicationChannel, ILearningPath, INavigation, IDevice, IExternalContext, IResources, IPerformance, IThemingBagLookup, IThemingBagBorders, IThemingBagShadows, IThemingBagMeasures, IThemingBagBreakpoints, IThemingBagFontSizes, IThemingBagFontFamilies, IThemingBagSpacings, IThemingBagGrayColors, IThemingBagLinkColors, IThemingBagBaseColors, IThemingBagStatusColors, IThemingBagColors, IThemingBagTextBox, IThemingBag, PopupType, IPopupProps, IPopupService, IFactory, IUtility, IPropBag, CustomControl, VirtualControl, StandardControl, supportedPrimitives as SupportedPrimitives, IDataSetExposedColumn, IDataSetExposedRecord, IDataSetExposedColumnSortStatus, IExposedFilterExpression, IDataSetExposedFiltering, IDataSetExposedPaging, ILinkEntityExposedExpression, IDataSetExposedLinking, IDataSetExposedParameter, RequiredLevel, BaseAttributes, ActionCollection, BusinessRuleNotification, SecurityValues, ImeMode, ControlNotifications, ITimerParameter, BaseProperty, TimerProperty, OptionSetValue, TwoOptionAttributes, TwoOptionsProperty, OptionSetAttributes, MultiSelectOptionSetProperty, OptionSetProperty, EnumProperty, BaseStringAttributes, SingleLineAttributes, StringProperty, SingleLineProperty, DateTimeAttributes, DateTimeProperty, BaseNumberAttributes, WholeNumberAttributes, NumberProperty, WholeNumberProperty, DecimalNumberAttributes, DecimalNumberProperty, RollupControlAttributes, LookupAttributes, };
}
declare module "CommonComponents/Primitive/Popup/RootPopup" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IViewProps } from "CommonComponents/Primitive/View";
    interface IRootPopupProps extends IViewProps {
        parentCustomControlId?: string;
        rootNodes?: {
            [id: string]: boolean;
        };
    }
    interface IRootPopupDisptachProps {
        openPopup?: (popupId: string) => Promise<any>;
        closePopup?: (popupId: string) => Promise<any>;
    }
    const ROOT_POPUP_ATTRIBUTE = "openedPopups";
    type RootPopupProps = IRootPopupProps & IRootPopupDisptachProps;
    class RootPopup extends React.Component<RootPopupProps, {}> {
        private _rootNode;
        private _style;
        /**
         * Checks see more to determine zIndex for the popup
         */
        private _seeMorePopupCount;
        private _getPopupId;
        private _initializeRootNode;
        private _getChildrenWithProps;
        private _renderToBody;
        componentWillReceiveProps(nextProps: IRootPopupProps): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        render(): React.ReactElement<RootPopup>;
    }
    export { ROOT_POPUP_ATTRIBUTE, IRootPopupProps, IRootPopupDisptachProps, RootPopupProps, RootPopup };
}
declare module "CommonComponents/Common/FlyoutPopupManager/IFlyoutPopupManagerSubscriber" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    enum FlyoutPopupManagerSubscriberType {
        Flyout = 1,
        Popup = 2
    }
    interface IFlyoutPopupManagerSubscriber {
        type: FlyoutPopupManagerSubscriberType;
        isRendered?: boolean;
        /**
         * get the component, which subscribe to service
         * Returns the component
         */
        getComponent(): HTMLElement;
        /**
         * Pass in the current pointerDown event
         * @param e: current event
         */
        onPointerDown?(e: Event): void;
        /**
         * Pass in the current onScroll event
         * @param e: current event
         */
        onScroll?(e: Event): void;
        /**
         * Check if click is inside subscriber
         * @param {MouseEvent} event
         * @returns {boolean}
         */
        isClickInsideSubscriber?(event: MouseEvent): boolean;
    }
    export { FlyoutPopupManagerSubscriberType, IFlyoutPopupManagerSubscriber };
}
declare module "CommonComponents/Common/FlyoutPopupManager/IFlyoutPopupManager" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IFlyoutPopupManagerSubscriber } from "CommonComponents/Common/FlyoutPopupManager/IFlyoutPopupManagerSubscriber";
    interface IFlyoutPopupManager {
        /**
         * Returns all the subscribers that subscribing to the event when necessary
         */
        subscribers: IFlyoutPopupManagerSubscriber[];
        /**
         * Adds the subscribers.
         * @param subscriber  to add
         */
        addSubscribers(subscriber: IFlyoutPopupManagerSubscriber): void;
        /**
         * Removes the subscribers
         * @param subscriber to remove
         */
        removeSubscribers(subscriber: IFlyoutPopupManagerSubscriber): void;
        /**
         * Fire the event.
         */
        fireEvent(event: MouseEvent): void;
    }
    export { IFlyoutPopupManager };
}
declare module "CustomControls/Models/CustomControlUtilityPointers" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * Utility function. Check if it's Null Or Undefined
     * @param object object to be validated
     * @returns true, if it's null or undefined object. Otherwise, it's false
     */
    export function IsNullOrUndefined(object: any): boolean;
    /**
     * Utility function. Check if it's Null Or Undefined, Or EmptyString
     * @param object object to be validated
     * @returns true, if it's null or undefined object, or empty string. Otherwise, it's false
     */
    export function IsNullOrEmptyString(object: any): boolean;
    /**
     * Utility function. Check if it's Array
     * @param object object to be validated
     * @returns true, if it's an array, otherwise false
     */
    export function IsArray(object: any): boolean;
}
declare module "CommonComponents/Common/FlyoutPopupManager/FlyoutPopupManager" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IFlyoutPopupManager } from "CommonComponents/Common/FlyoutPopupManager/IFlyoutPopupManager";
    import { IFlyoutPopupManagerSubscriber } from "CommonComponents/Common/FlyoutPopupManager/IFlyoutPopupManagerSubscriber";
    class FlyoutPopupManager implements IFlyoutPopupManager {
        /**
         * iOS device detection
         */
        private static readonly _isIOS;
        /**
         * Get OS specific pointer down event
         */
        static readonly pointerDownEvent: string;
        /**
         * Get scroll event name
         */
        static readonly scrollEvent: string;
        private static _instance;
        private _subscribers;
        constructor();
        static getInstance(): FlyoutPopupManager;
        /**
         * Returns all the subscribers.
         */
        readonly subscribers: IFlyoutPopupManagerSubscriber[];
        /**
         * Adds the subscribers.
         * @param subscriber to add
         */
        addSubscribers(subscriber: IFlyoutPopupManagerSubscriber): void;
        /**
         * Removes the subscribers
         * @param subscriber to remove
         */
        removeSubscribers(subscriber: IFlyoutPopupManagerSubscriber): void;
        /**
         * Fire the event
         */
        fireEvent(event: MouseEvent): void;
    }
    export { FlyoutPopupManager };
}
declare module "CommonComponents/Primitive/Popup/Popup" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IViewProps } from "CommonComponents/Primitive/View";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    /**
     * Enumeration of possible Popup types.
     */
    enum PopupType {
        Root = 1,
        Nested = 2
    }
    /**
     * Represents the properties interface for the popup control.
     */
    interface IPopupProps extends IViewProps {
        /**
         * The name of the Popup. Used like a reference to open Popups.
         */
        name?: string;
        /**
         * Indicates whether we should NOT close the popup on an outside mouse click.
         */
        closeOnOutsideClick?: boolean;
        /**
         * Parent DOM element for positioning inside of a Popup.
         */
        parent?: HTMLElement;
        /**
         * User-defined styles for the popup.
         */
        popupStyle?: IViewStyle;
        /**
         * User-defined styles for the popups shadow.
         */
        shadowStyle?: IViewStyle;
        /**
         * User-defined styles for the popups root element.
         */
        rootStyle?: IViewStyle;
        /**
         * The name of Popup which should be opened.
         * Should be defined ONLY in a Root Popup.
         * To open nested Popups, should be provided string like "rootName.nestedName.[allOtherNestedNames]".
         * To close Popups, should be provided empty string.
         * This prop will be automatically propagated to children.
         */
        popupToOpen?: string;
        /**
         * The type of Popup, which is described in PopupType enum. Should be only one "root" Popup for each set of Popups.
         */
        type?: PopupType;
        content?: HTMLElement;
        rootPopupId?: string;
        isDialogPopup?: boolean;
        onPopupForcedClosed?: () => void;
    }
    interface IPopupState {
        /**
         * Internal flag to handle outside click.
         */
        forceClose?: boolean;
    }
    class Popup extends React.Component<IPopupProps, IPopupState> {
        /**
         * Property for root wrapper container. Used to toggle visibility.
         */
        private _rootElement;
        private _popupElement;
        /**
         * Subscriber object to store callback functions for FlyoutPopupManager need
         */
        private _managerSubscriber;
        constructor(props: IPopupProps);
        private _getId;
        /**
         * Getter method, which takes from popupToOpen only own reference.
         */
        private _getCurrentPopupToOpen;
        /**
         * Getter method, which takes from popupToOpen reference to children.
         */
        private _getNextPopupToOpen;
        /**
         * Getter method, which returns props for children.
         */
        private _getChildrenProps;
        /**
         * Getter method, which maps nested Popups and pass them props.
         */
        private _getChildrenWithProps;
        /**
         * Predicate method, which checks if Popup should be opened.
         */
        private _isVisible;
        private _stopPropagation;
        /**
         * Handler on outside click.
         */
        private _forceClosePopup;
        private _applyRootNodeStyle;
        private _toggleRootElementVisibility;
        private _getStaticContent;
        private _registerPopup;
        private _subscribeFlyoutPopupManager;
        componentWillMount(): void;
        componentDidMount(): void;
        componentWillReceiveProps(): void;
        componentWillUpdate(nextProps: IPopupProps, nextState: IPopupState): void;
        componentWillUnmount(): void;
        render(): React.ReactElement<IPopupProps>;
    }
    export { PopupType, IPopupState, IPopupProps, Popup };
}
declare module "CustomControls/Utilities/PopupService" {
    import { CustomControlHostRoot } from "CustomControls/Components/CustomControlHostRoot";
    import { IPopupService, IPopupProps } from "CustomControls/Models/CustomControlExposedInterfaces";
    class PopupService implements IPopupService {
        private _host;
        private _popups;
        private _popupsId;
        constructor(host: CustomControlHostRoot);
        private _getKeyName;
        private _createPopup;
        createPopup(props: IPopupProps): void;
        openPopup(name?: string): void;
        closePopup(name?: string): void;
        updatePopup(name: string, newProps: IPopupProps): void;
        deletePopup(name?: string): void;
        getPopups(): JSX.Element[];
        /**
         * Sets the id of this service object
         * @param id the id to set
         */
        setPopupsId(id: string): void;
        /**
         * Gets the id of this service object
         * @returns the id of this service object
         */
        getPopupsId(): string;
        renderPopups(): JSX.Element;
    }
    export { PopupService };
}
declare module "CustomControls/Utilities/CCFPerformanceTracker" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IPerformanceEvent } from "CustomControls/Models/CustomControlDependantInterfaces";
    type PerformanceEventCreator = (eventName: string, zone?: string) => IPerformanceEvent;
    type PerformanceEventParameters = {
        [parameterName: string]: string;
    };
    type AddKpiFunction = (name: string, parameters?: PerformanceEventParameters, retroactiveTimestamp?: number) => void;
    type AddKpiOnIdleFunction = (name: string, parameters?: PerformanceEventParameters) => void;
    type TrackWorkFunction = (diagnosticId: string) => () => void;
    type ScheduleControlUpdateFunction = (init: () => void) => void;
    /**
     * Interface for creating performance events
     */
    class CCFPerformanceTracker {
        private _creator;
        private _addKpi;
        private _addKpiOnIdle;
        private _trackWork;
        private _scheduleControlUpdate;
        /**
         * Sets the performance event creator
         * @param eventCreator Creator for performance events
         * @param addKpi Function that creates KPIs
         * @param addKpiOnIdle Function that creates a KPI once the app is idle
         * @param trackWork Tracks a block of work in the PerformanceTracker
         */
        setPerformanceHooks(eventCreator: PerformanceEventCreator, addKpi: AddKpiFunction, addKpiOnIdle: AddKpiOnIdleFunction, trackWork: TrackWorkFunction, scheduleControlUpdate: ScheduleControlUpdateFunction): void;
        /**
         * Creates a performance event
         * @param eventName The event name
         * @param logLevel Level of the log message
         * @param zone The event zone. If omitted defaults to "CustomControlsFramework"
         */
        createPerformanceEvent(eventName: string, logLevel?: CustomControlInterfaces.TracerLogLevel, zone?: string): IPerformanceEvent;
        /**
         * Starts a stopwatch for a control lifecycle method
         * @param methodName The lifecycle method name
         * @param controlId The ID of the control
         * @param manifestControlName The name of the control
         */
        startLifecycleStopwatch(methodName: string, controlId: string, manifestControlName: string): (parameters?: {
            [parameterName: string]: string;
        }) => void;
        /**
         * Logs a key performance indicator at the current or given time.
         * The indicator will appear as a marker in the timeline.
         * @param name The name of the key performance indicator.
         * @param parameters Additional parameters to attach to the performance indicator, if any.
         * @param retroactiveTimestamp Timestamp for the marker for this KPI. If null, current time will be used.
         */
        addKeyPerformanceIndicator(name: string, parameters?: PerformanceEventParameters, retroactiveTimestamp?: number): void;
        /**
         * Logs a key performance indicator at the point when the current block of work ends.
         * The indicator will appear as a marker in the timeline.
         * @param name The name of the key performance indicator.
         * @param parameters Additional parameters to attach to the performance indicator, if any.
         */
        addKeyPerformanceIndicatorOnIdle(name: string, parameters?: PerformanceEventParameters): void;
        /**
         * Tracks a block of work in the PerformanceTracker.
         * @param diagnosticId A human-readable ID that describes the work.
         */
        trackWork(diagnosticId: string): () => void;
        /**
         * Schedule a control update.
         */
        scheduleControlUpdate(update: () => void): void;
    }
    /**
     * Singleton instance of the tracker.
     */
    const instance: CCFPerformanceTracker;
    export { PerformanceEventCreator, PerformanceEventParameters, AddKpiFunction, AddKpiOnIdleFunction, TrackWorkFunction, ScheduleControlUpdateFunction, CCFPerformanceTracker, instance as default, };
}
declare module "CustomControls/Utilities/ManifestType" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * Custom Control ManifestType candidates
     */
    class ManifestType {
        static TwoOptions: string;
        static DateAndTimeDateOnly: string;
        static DateAndTimeDateAndTime: string;
        static Decimal: string;
        static FP: string;
        static WholeNone: string;
        static WholeDuration: string;
        static WholeTimeZone: string;
        static WholeLanguage: string;
        static LookupSimple: string;
        static LookupCustomer: string;
        static LookupOwner: string;
        static LookupPartyList: string;
        static LookupRegarding: string;
        static LookupMultiEntity: string;
        static MultiSelectPicklist: string;
        static Multiple: string;
        static Currency: string;
        static OptionSet: string;
        static StatusOptionSet: string;
        static EntityNameOptionSet: string;
        static SingleLineEmail: string;
        static SingleLineText: string;
        static SingleLineTextArea: string;
        static SingleLineURL: string;
        static SingleLineTickerSymbol: string;
        static SingleLinePhone: string;
        static Grid: string;
        static BusinessProcessFlow: string;
        static WebResourceHtmlControl: string;
        static TimelineWall: string;
        static QuickForm: string;
        static Card: string;
        static Dashboard: string;
        static Search: string;
        static SearchWidget: string;
        static KbArticle: string;
        static KbContent: string;
        static PowerBI: string;
        static MicrosoftFlow: string;
        static EmailEngagementRecipientActivity: string;
        static ReferencePanelSearchWidget: string;
        static Timer: string;
        static SingleLineAddress: string;
        static GlobalFilter: string;
        static AppliedFilters: string;
        static ReferencePanel: string;
        static EmailEngagementActions: string;
        static SocialInsightsControl: string;
        static ClassIdControlMap: {
            [classId: string]: string;
        };
    }
    export { ManifestType };
}
declare module "CustomControls/Utilities/TelemetryManager" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    const COMPONENT_NAME = "CustomControlFramework";
    /**
     * TelemetryManager is designed to be a singleton class used in CCF to get access to report event, event success and failure.
     */
    class TelemetryManager {
        reportUsage(props: ICustomControlHostProps, status: string): void;
        reportEventFailure(props: ICustomControlHostProps, exception: Error, ApiName: string, parentId?: string, suggestedMitigation?: string, failureType?: string): void;
        reportEventSuccess(props: ICustomControlHostProps, ApiName?: string): void;
        /**
         * Generate Telemetry reporting event parameters
         * @param apiName name of the control lifecycle event
         * @param apiParams parameters of the control lifecycle events
         */
        generateEventParams(props: ICustomControlHostProps, apiName?: string, parentId?: string, status?: string): ControlAndClientApiInterfaces.EventParameter[];
    }
    const instance: TelemetryManager;
    export { TelemetryManager, instance as default, COMPONENT_NAME };
}
declare module "CustomControls/Utilities/GuidHelper" {
    /**
     * Compare 2 guid strings. Case insensitive. Ignores open curvy brace at the start and close curvy brace at the end of both strings.
     * @param a guid string
     * @param b guid string
     * @return {boolean} `true` if guids are the same, `false` - otherwise.
     */
    function areGuidsSame(a: string, b: string): boolean;
    /**
     * Generates a new V4 GUID string.
     * @return {string} GUIDv4 string generated using `random()`.
     */
    function guidV4String(): string;
    export { areGuidsSame, guidV4String };
}
declare module "CustomControls/Utilities/DefaultControlMapper" {
    import { CustomControlEntityReference } from "CustomControls/Models/CustomControlEntityReference";
    /**
     * Name of the field section item
     */
    const FIELD_SECTION_ITEM_ID = "MscrmControls.Containers.FieldSectionItem";
    const IFRAME_CLASS_ID = "{fd2a7985-3187-444e-908d-6624b21f69c0}";
    /**
     * Interface for auxilary information necessary to create a custom control
     */
    interface IConfigAuxInfo {
        quickFormId?: string;
        chartDataRequestType?: CustomControlInterfaces.FirstDataRequestType;
    }
    enum ContainerControlType {
        GridContainer = 0,
        DashboardContainer = 1,
        QuickCreateForm = 2,
        FieldSectionContainer = 3,
        TimelineContainer = 4,
        ChartControl = 5,
        WebresourceControl = 6,
        DummyControl = 7,
        CalendarControl = 8
    }
    const KNOWN_FALLBACK_CONTROLS: {
        [controlName: string]: string;
    };
    function updateManifestFallback(controlName: string, fallback: string): void;
    function getManifestFallback(controlName: string): string;
    /**
     * Get DataFieldName for Timer control
     * Timer control is not bound to a DataFieldName but still needs to be used with FieldSection control
     * Hence we explictly set the DataFieldName to FailureTimeField of the Timer
     * @param descriptor
     * @returns A string with DataFieldName
     */
    function getDataFieldNameForTimer(descriptor: CustomControlInterfaces.ICustomControlDescriptor, TIMER_CONTROL_DATAFIELDNAME_KEY: string): string;
    /**
     * Wrap a form XML defined field config in a fieldSectionItem
     * @param explicitConfig The form XML config
     * @returns A config for the field section item containing the value specification parameter
     */
    function getFieldSectionItemSpecificationParameters(explicitConfig: CustomControlInterfaces.ICustomControlConfiguration, classId?: string): any;
    /**
     * Checks if the control with given ID is supposed to be a FieldSectionItem.
     * @param controlId string containing control identifier.
     * @returns True if the control id is the FieldSectionItem known ID, false otherwise.
     */
    function isFieldSectionItemControl(controlId: string): boolean;
    /**
     * Wrap a form XML defined field config in a fieldSectionItem
     * @param explicitConfig The form XML config
     * @returns A config for the field section item containing the control config
     */
    function wrapFieldLevelConfig(explicitConfig: CustomControlInterfaces.ICustomControlConfiguration, manifest: CustomControlInterfaces.ICustomControlManifest): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Create Timer Parameter object
     * @param timerParameters with values available as array of objects
     * @return timerParameters constrcuted in the format of ITimerParameter
     */
    function constructTimerParameters(timerParameters: CustomControlInterfaces.ITimerParameter): CustomControlInterfaces.ITimerParameter;
    /**
     * Extend default "value" parameter definition by parameter-specific metadata from control manifest. Modifies parameter definition object.
     * @param defaultValueParameter Parameter definition to extend.
     * @param descriptor Control descriptor
     * @returns Returns defaultValueParameter argument.
     */
    function extendDefaultValueParameterByControlDescriptor(defaultValueParameter: CustomControlInterfaces.ICustomControlParameterDefinition, descriptor: CustomControlInterfaces.ICustomControlDescriptor): CustomControlInterfaces.ICustomControlParameterDefinition;
    /**
     * Checks if the parameter is null or undefinded
     * @param util The name of the util that needs to be checked
     */
    function isNullOrUndefined(util: any): boolean;
    /**
     * Retrieve a custom control configuration based on the control's type
     * @param name The name of the control
     * @param dataFieldName The field name of the control
     * @param type The type of the control, presented in a "<Main type>.<Format>" fashion
     * @param descriptorParameters The parameters from control descriptor control
     * @param entityTypeName The entity type of the form on which this control is present, if applicable
     * @param classId string containing guid class Id for the given control. This parameter
     * is used for the scenario when field control is not implemented and DummyControl is shown instead.
     * Dummy control uses class ID to show which exactly control is not implemented. Dummy control is a
     * temporary solution and will be removed at some point, but there is no precise timeline for that.
     * @param descriptor the Descriptor for this control
     * @param auxInfo auxillary info not included elsewhere on the parameters provided
     */
    function retrieveDefaultConfigurationForFieldControl(name: string, dataFieldName: string, type: string, entityTypeName?: string, classId?: string, descriptor?: CustomControlInterfaces.ICustomControlDescriptor, auxInfo?: IConfigAuxInfo): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Gets the default config for BPF controls
     * @param name
     */
    function retrieveDefaultBusinessProcessFlowConfig(controlId: string): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Gets configuration for DataSet lookup column
     * @param controlId The controlid of control that contains DataSet
     * @param formFactor The formfactor of control that contains DataSet
     * @param viewId The DataSet viewid
     * @param targetEntityName The DataSet target name
     * @param parameterName DataSet parameter name
     * @param allowFilterOff The flag which indicates whether the end user can toggle relationship filter or not.
     * @param relationshipName The relationship name the lookup filter operates on
     * @param dependentAttributeType The attribute type on which the lookup relationship filter depends
     * @param dependentAttributeName The attribute name on which the lookup relationship filter depends
     * @return {{FormFactor: number, CustomControlId: string, Name: string, Version: string, Parameters: {}}}
     */
    function retrieveDataSetColumnLookupConfiguration(controlId: string, formFactor: number, viewId: string, targetEntityName: string, parameterName: string, allowFilterOff: boolean, relationshipName: string, dependentAttributeType: string, dependentAttributeName: string): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Gets the default config for a false bound lookup control
     * @param controlId The controlid for the control
     * @param viewId The viewid for the lookup control
     * @param displayName The display name for the control
     * @param callback The callback function to be called on value change
     */
    function retrieveFalseBoundLookupConfig(controlId: string, viewId: string, targetEntityName: string, displayName: string, callback: (value: any) => void): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * TODO: merge with retrieveFalseBoundlookupConfig function.
     * Gets the default config for a false bound lookup control
     * @param controlId The controlid for the control
     * @param defaultViewId The default viewid for the lookup control
     * @param defaultEntityType The default entity type for the lookup control
     * @param entityTypes The available entity types for multi entity lookup control
     * @param lookupType The lookup control type
     * @param callback The callback function to be called on value change
     * @param extraFilters Extra Filters for lookup dialog
     * @param additionalTargetExtraFilters Additional ExtraFilters for each entity
     */
    function retrieveFalseBoundLookupConfig2(controlId: string, defaultViewId: string, defaultEntityType: string, entityTypes: string[], lookupType: string, callback: (value: any) => void, extraFilters: string[], additionalTargetExtraFilters: {
        [key: string]: string[];
    }, value?: CustomControlEntityReference | CustomControlEntityReference[], disableMru?: boolean): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Gets the default config for BPF controls
     * @param name
     */
    function retrieveDefaultDashboardConfig(name: string): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Gets the default config for Reference Panel control
     * @param name
     */
    function retrieveDefaultReferencePanelConfig(name: string): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Gets the default configuration for a subgrid control
     * @param controlId The id of the control
     * @param parameters The parameters for the control as a datasetParameter list
     * @returns The configuration for the subgrid control
     */
    function retrieveDefaultConfigurationForSubgridControl(controlId: string, parameters: CustomControlInterfaces.IGridCustomControlDescriptorParameters, isAssociatedGrid?: boolean): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Gets the default configuration for a home page grid control
     * @param controlId The id of the control
     * @returns The configuration for the home page grid control
     */
    function retrieveDefaultConfigurationForHomePageGridControl(controlId: string, entityName: string, viewId: string): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Gets the default configuration for a home page grid control for chart
     * @param controlId The id of the control
     * @returns The configuration for the home page chart + grid control
     */
    function retrieveDefaultConfigurationForHomePageGridControlForChart(controlId: string, entityName: string, viewId: string): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     *  Gets the default configuration for the chart control on the grid home page
     * @param name The name of the chart control
     * @param entityName The entity type name
     * @param viewId The view id for the chart
     * @param visualizationId The visualization id for the chart
     * @param filterExpression The filter expresion string used to identify the selected chart series
     * @param isUserChart user chart or system chart
     * @param chartDrillDownParameters chart drill down parameters
     * @param isUserView user view or system view
     * @param extraFilters grid page filters coming from other controls (grid filters, jump bar filters, etc.)
     * @param linkEntities This is only used by Queue Item filters.
     * 	Linked entities and attributes are available in the view xml in most cases, but Queue Item filters add filters on linked entity Queue.
     * 	We need to add linked entities to make the filter work properly.
     * @returns The configuration for the chart control on the grid home page
     */
    function retrieveDefaultConfigurationForHomePageChartControl(name: string, entityName: string, viewId: string, visualizationId: string, refreshCounter?: number, filterExpression?: string, isUserChart?: boolean, chartDrillDownParameters?: CustomControlInterfaces.ChartDrillDownParameter[], isUserView?: boolean, extraFilters?: string[], linkEntities?: string): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Gets the default configuration for the powerbi control on the form
     * @param parameters The parameters for the control in the form descriptor
     * @returns The configuration for the powerbi control on the form
     */
    function retrieveContainerControlForFormPowerBIControl(parameters: CustomControlInterfaces.IPowerBIParameterDefinition, FormFactor: number, Name: string): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Gets the default configuration for the chart control on the Quick Form control
     * @param parameters The parameters for the control in the form descriptor
     * @param dataRequestType The data request type for chart control
     * @returns The configuration for the chart control on the form
     */
    function retrieveDefaultConfigurationForQuickFormChartControl(parameters: CustomControlInterfaces.IChartCustomControlDescriptorParameters, dataRequestType?: CustomControlInterfaces.FirstDataRequestType): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Gets the default configuration for the chart control on the form
     * @param parameters The parameters for the control in the form descriptor
     * @returns The configuration for the chart control on the form
     */
    function retrieveDefaultConfigurationForFormChartControl(parameters: CustomControlInterfaces.IChartCustomControlDescriptorParameters, firstDataRequestType?: CustomControlInterfaces.FirstDataRequestType): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Retrieve a custom control configuration based on the control's type
     * @param name The name of the control
     * @param dataFieldName The field name of the control
     * @param type The type of the control, presented in a "<Main type>.<Format>" fashion
     * @param descriptor Control descriptor
     * @param entityTypeName The entity type of the form containing this control, if applicable
     * @param classId string containing guid class Id for the given control. This parameter
     * is used for the scenario when field control is not implemented and DummyControl is shown instead.
     * Dummy control uses class ID to show which exactly control is not implemented. Dummy control is a
     * temporary solution and will be removed at some point, but there is no precise timeline for that.
     */
    function retrieveDefaultConfigurationForControl(name: string, dataFieldName: string, type: string, descriptor: CustomControlInterfaces.ICustomControlDescriptor, entityTypeName?: string, classId?: string): CustomControlInterfaces.ICustomControlConfiguration;
    /**
     * Retrieve manifest data type by its source type for controls.
     * @param {string} srcType The source type of the control.
     * @param {string} srcFormat The source format of the control.
     * @returns The ManifestType of its source type.
     */
    function retrieveDataTypeBySourceTypeForControl(type: string, classId?: string): string;
    function retrieveContainerControlTypeByControlId(controlId: string): ContainerControlType;
    function retrieveDefaultManifestNameByDataType(dataType: string, attributes?: CustomControlInterfaces.ICustomControlAttributes): string;
    function retrieveDefaultManifestByConfiguration(configuration: CustomControlInterfaces.ICustomControlConfiguration): string;
    /**
     * Check if control should receive legacy DataSet parameter API
     * @param controlManifest Manifest of control to check for legacy support
     */
    function isLegacyDataSetControl(controlManifest: CustomControlInterfaces.ICustomControlManifest): boolean;
    export { IConfigAuxInfo, ContainerControlType, constructTimerParameters, getDataFieldNameForTimer, getFieldSectionItemSpecificationParameters, retrieveDefaultBusinessProcessFlowConfig, retrieveDataSetColumnLookupConfiguration, retrieveFalseBoundLookupConfig, retrieveFalseBoundLookupConfig2, retrieveDefaultDashboardConfig, retrieveDefaultReferencePanelConfig, isNullOrUndefined, retrieveDefaultConfigurationForFieldControl, retrieveDefaultConfigurationForSubgridControl, retrieveDefaultConfigurationForHomePageGridControl, retrieveDefaultConfigurationForHomePageGridControlForChart, retrieveDefaultConfigurationForHomePageChartControl, retrieveDefaultConfigurationForQuickFormChartControl, retrieveDefaultConfigurationForFormChartControl, retrieveContainerControlForFormPowerBIControl, retrieveDefaultConfigurationForControl, extendDefaultValueParameterByControlDescriptor, wrapFieldLevelConfig, isFieldSectionItemControl, retrieveDataTypeBySourceTypeForControl, retrieveDefaultManifestNameByDataType, retrieveDefaultManifestByConfiguration, isLegacyDataSetControl, retrieveContainerControlTypeByControlId, FIELD_SECTION_ITEM_ID, IFRAME_CLASS_ID, KNOWN_FALLBACK_CONTROLS, updateManifestFallback, getManifestFallback, };
}
declare module "CustomControls/Utilities/CustomControlHelper" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps, ICustomControlHostOwnProps, IClientData } from "CustomControls/Models/CustomControlDataInterfaces";
    import { CustomControlEntityReference } from "CustomControls/Models/CustomControlEntityReference";
    /**
     * Get unique id for custom control
     * @param props The custom control hosts props
     * @param id The id of component
     * @param absoluteId The absolute id of component
     * @returns The unique id for custom control
     */
    function buildUniqueCustomControlId(props: ICustomControlHostProps, id: string, absoluteId?: string): string;
    /**
     * Get child DomId for custom control
     * @param props The custom control hosts props
     * @returns The child unique id prefix for custom control
     */
    function buildChildDomId(props: ICustomControlHostOwnProps): string;
    /**
     * Get a unique deterministic id for the custom control, to be used as the value for a data attribute for automated tests.
     * @param props The custom control hosts props
     * @param testhookId An id unique to the base custom control to be used as the suffix of the testhook id
     */
    function buildTesthookId(props: ICustomControlHostProps, testhookId: string): string;
    /**
     * Get tabindex value for the control
     * @param props The custom control hosts props
     * @returns The tabindex value for custom control
     */
    function buildTabIndexValue(props: ICustomControlHostProps): number;
    /**
     * Gets whether the high contrast setting is enabled or not
     * @returns The high contrast enabled value
     */
    function getHighContrastEnabled(): boolean;
    /**
     * Focus element with required identifier
     * @param props The custom control hosts props
     * @param id The id of component
     * @param isAbsoluteId Flag is "id" parameter it is absolute id or parted accessibility id
     */
    function focusElementById(props: ICustomControlHostProps, id: string, isAbsoluteId?: boolean): void;
    /**
     * Blur element with required identifier
     * @param props The custom control hosts props
     * @param id The id of component
     * @param isAbsoluteId Flag is "id" parameter it is absolute id or parted accessibility id
     */
    function blurElementById(props: ICustomControlHostProps, id: string, isAbsoluteId?: boolean): void;
    /**
     * Create a CRM URI based on a relative path, prepending the org name if necessary
     * @param url The relative path
     * @param data Client data from property bag
     * @return The relative path with the org name prepended if necessary
     */
    function createCrmUri(url: string, data: IClientData): string;
    /**
     * Create an action for openDatasetItem usage
     */
    function openDatasetItemAction(ownProps: ICustomControlHostProps, param: CustomControlInterfaces.IDataSetParameter, paramKey: string, entityReference: CustomControlEntityReference, openDataSetItemOptions?: CustomControlInterfaces.IOpenDataSetItemOptions): void;
    function getRecordSetQueryFromProps(ownProps: ICustomControlHostProps, paramKey: string): string;
    /**
     * determines parentId from props
     * @param props custom control props
     */
    function getParentIdFromProps(props: ICustomControlHostOwnProps): string;
    /**
     * Convert FetchXml Snippet to Custom Control Filtering Expression
     * @param inputFetchXmlSnippet
     * @returns Converted String
     */
    function convertFetchXmlToFilterExpression(inputFetchXmlSnippet: string): CustomControlInterfaces.FilterExpression;
    /**
     * Convert Custom Control Filtering Expression Snippet to filterXml
     * @param filterExpression The Filter expression to be converted
     * @param xmlEncode XmlEncoding method to be used to xmlEncode the attribute values
     * @returns Converted String
     */
    function convertFilterExpressionToFetchXml(filterExpression: CustomControlInterfaces.FilterExpression, xmlEncode: (s: string) => string): string;
    /**
     * Get Node attribute value from name
     * @param inputNode input node
     * @param attribuetName attribute name
     * @returns return the attribute value
     */
    function getNodeAttributeValueFromName(inputNode: Element, attribuetName: string): string;
    function willUpdatePagingIndex(existedFirstPageNumber: number, existedLastPageNumber: number, nextFirstPageNumber: number, nextLastPageNumber: number): boolean;
    function willLoadNextPage(existedFirstPageNumber: number, nextFirstPageNumber: number, existedLastPageNumber: number, nextLastPageNumber: number): boolean;
    function willLoadExactPage(nextFirstPageNumber: number, nextLastPageNumber: number, oldPagingRefreshInput: string, newPagingRefreshInput: string, existedFirstPageNumber: number, existedLastPageNumber: number): boolean;
    function willLoadPrevPage(existedFirstPageNumber: number, nextFirstPageNumber: number, existedLastPageNumber: number, nextLastPageNumber: number): boolean;
    function pagingInputValid(pageNumber1: number, pageNumber2: number, pageNumber3: number, pageNumber4: number): boolean;
    /**
     * Returns true if the control is a dataset
     * @param manifest the manifest for the control
     */
    function isDataSetControl(manifest: CustomControlInterfaces.ICustomControlManifest): boolean;
    /**
     * Returns true if the control has a DataSetWrapper
     * @param parameters The parameters of the control configuration
     */
    function hasDataProvider(parameters: CustomControlInterfaces.IParameterDefinitionMap): boolean;
    /**
     * Returns true if the control is a quick view form.
     * @param configuration The control configuration
     */
    function isQuickFormControl(configuration: CustomControlInterfaces.ICustomControlConfiguration): boolean;
    /**
     * Parses the entity name from the descriptor. This should only be used for cases where the
     * contextString is not available.
     * @param descriptor The control's descriptor
     */
    function getEntityTypeFromDescriptor(descriptor: CustomControlInterfaces.ICustomControlDescriptor): string;
    function getRecordInfoFromControlProps(props: ICustomControlHostProps): {
        recordId: string;
        entityTypeName: string;
    };
    /**
     * Parses the entity name from the configuration.
     * @param descriptor The control's configuration.
     */
    function getEntityTypeFromQuickFormDefaultConfiguration(configuration: CustomControlInterfaces.ICustomControlConfiguration): string;
    /**
     * Parses the record Id from the configuration.
     * @param descriptor The control's configuration.
     */
    function getRecordIdFromQuickFormDefaultConfiguration(configuration: CustomControlInterfaces.ICustomControlConfiguration): string;
    export { buildUniqueCustomControlId, buildChildDomId, focusElementById, blurElementById, createCrmUri, openDatasetItemAction, buildTesthookId, buildTabIndexValue, getParentIdFromProps, getRecordSetQueryFromProps, convertFetchXmlToFilterExpression, getHighContrastEnabled, convertFilterExpressionToFetchXml, getNodeAttributeValueFromName, pagingInputValid, willUpdatePagingIndex, willLoadPrevPage, willLoadNextPage, willLoadExactPage, isDataSetControl, isQuickFormControl, hasDataProvider, getEntityTypeFromDescriptor, getRecordInfoFromControlProps, getEntityTypeFromQuickFormDefaultConfiguration, getRecordIdFromQuickFormDefaultConfiguration, };
}
declare module "CustomControls/Models/CommandingWrapper" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    import { ICCFConnectedCommandManagerProps } from "CustomControls/Models/CustomControlDependantInterfaces";
    /**
     * Commanding Wrapper is a component that manages all commanding manager instances in a page.
     * CommandingWrapper MUST be initialized when a command manager is required.
     * Each control can have 0 or 1 instance of CommandingWrapper, each CommandingWrapper is associated with exactly 1 control.
     * CommandingWrapper will keep track of the command managers associate with the control.
     * For every different entity type in the control, a seperate command manager MUST be created with unique command manager Id when needed.
     * Users SHOULD avoid initialize unnecessary command managers at all time, as it is a very expensive operation.
     */
    export class CommandingWrapper {
        /**
         * DeferredPromise, created using action from uclient, resolved when request command manager is fully initialized
         */
        private _commandManagerPromises;
        /**
         * CommandManagerIds of the command managers initialized from this CommandingWrapper
         */
        private _commandManagerIds;
        /**
         *mapped props from state tree
         */
        private _ownProps;
        /**
         * Reference to all commanding wrapper created.
         */
        private static _commandingWrapperMap;
        /**
         * Memoized Command Properties
         */
        private _memoizedProps;
        /**
         * Base CommandManagerId for the CommandingWrapperObject. Format {pageId}:{controlId}
         * When initializing Command manager, use id in format: {pageId}:{controlId}:{etn}
         */
        private _commandManagerId;
        /**
         * Reference to the dataset object wrappers in the current control
         * A custom control may contain multiple datasets, each should have different entity Type name.
         * If this is empty, then command bar of the control is not associate with any dataset
         */
        private _datasetWrappers;
        /**
         * External Command Manager's Id
         * It will be passed in when a command manager is already created outside the custom control by DataSetHost
         */
        private _externalCommandManagerId;
        /**
         * Promise which will get resolved when the external command bar finishes initialization
         */
        private _externalCommandManagerPromise;
        /**
         * external Command bar has been initialized or not
         */
        private _externalCommandInitialized;
        /**
         * Memoized function for rendering command manager component.
         */
        private _createCommandManagerUXComponent;
        constructor(ownProps: ICustomControlHostProps);
        /**
         * add datasetwrapper
         * @param datasetWrapper
         */
        addDataSetWrapper(datasetWrapper: CustomControlInterfaces.ICustomControlDataSetWrapper): void;
        /**
         * Use by control to retrieve command for list of records
         * @param commandManagerId unique id identifies the command manager in state tree
         * @param etn entity type name of the records
         * @param records list of Guid of selected records
         * @param commandButtonIds list of unique command button Ids
         * @param filterByPriority optional value indicating if the command buttons need to be ordered by priority.
         * @returns DeferredPromise
         */
        retrieveRecordCommandForDatasetWrapper(allRecords: {
            [id: string]: CustomControlInterfaces.DataSetRecord;
        }, etn: string, records: string[], commandButtonIds?: string[], filterByPriority?: boolean, useNestedFormat?: boolean, refreshAllRules?: boolean): Promise<any> | DynamicsSrc.IDeferred<boolean, boolean>;
        /**
         * Use by control to retrieve command for list of records
         * @param commandManagerId unique id identifies the command manager in state tree
         * @param etn entity type name of the records
         * @param records list of Guid of selected records
         * @param commandButtonIds list of unique command button Ids
         * @param filterByPriority optional value, set to true to only return buttons have priority property.
         * @returns DeferredPromise
         */
        retrieveRecordCommand(viewId: string, etn: string, records: string[], commandButtonIds?: string[], filterByPriority?: boolean, useNestedFormat?: boolean, refreshAllRules?: boolean): any;
        /**
         * Generate the RibbonId using provided data.
         * @param etn Entity Type Name (account, contact, etc.)
         * @param areaType Page Type (Form / Grid)
         * @param related SubGrid is related or not
         * @returns well formed RibbonId
         */
        getRibbonId(etn: string, pageType: string, related: boolean): string;
        /**
         * @param ownProps
         * @returns the default parameter for the control.
         */
        getDefaultConfigParameters(ownProps: ICustomControlHostProps): CustomControlInterfaces.IDataSetCustomControlParameterDefinition;
        /**
         * Compute RibbonId, CommandManagerId, and update the value to props.
         * @param props commandManagerProps, including user-defined props such as style, key name...
         * @param ownProps props mapped from state tree, contains control information, which is required to generate the custom cotnrol manager Id and ribbon Id
         */
        populateCommandManagerProps(props: ICCFConnectedCommandManagerProps, ownProps: ICustomControlHostProps, entityTypeName?: string): void;
        /**
         * Create a command bar, record the initializaion promise and instance
         * Layer between Uclient and Virtual Component Translator, allowing CommandingWrapper to keep track of already initialized command manager.
         * @param props
         * @returns JSX instance of command bar
         */
        createCommandBar(props: ICCFConnectedCommandManagerProps): any;
        /**
         * Create Hidden Command Bar. This should only be invoked by CustomControlHostRoot to ensure proper clean up
         * Custom Controls should use initializeCommandManager, which will create hidden command managers
         * @param commandManagerId
         */
        createHiddenCommandManager(commandManagerId: string, ribbonId?: string): any;
        static getWrapperByCommandManagerId(commandManagerId: string): CommandingWrapper;
        /**
         * @returns the base commandManager id "pageId:controlId"
         */
        getCommandManagerId(): string;
        linkParameterMethod(parameter: CustomControlInterfaces.IDataSetParameter): void;
        unmount(): void;
    }
}
declare module "CustomControls/Utilities/LearningPathHelper" {
    import { ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    /**
     * LearningPath related helper functions to be used by CCF infra to register controls to Learning path
     */
    class LearningPathHelper {
        static LEARNING_PATH_ATTRIBUTE: string;
        static registerToLearningPath(element: HTMLElement, domAttribute: string, controlId: string): void;
        /**
         * Generate the learning path control Id for the control
         */
        static getLearningPathControlId(bagProps: ICustomControlHostProps): string;
        private static _generateLpControlIdForWebresource;
        private static _generateLpControlIdForccDataSetControl;
    }
    export { LearningPathHelper };
}
declare module "CustomControls/Models/PropertyClasses/Reporting" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps, IExternalUtils } from "CustomControls/Models/CustomControlDataInterfaces";
    export class Reporting implements ControlAndClientApiInterfaces.Reporting {
        private _externalUtils;
        private _controlId;
        constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
        addControlId(params?: ControlAndClientApiInterfaces.EventParameter[]): ControlAndClientApiInterfaces.EventParameter[];
        reportSuccess(componentName: string, params?: ControlAndClientApiInterfaces.EventParameter[]): void;
        reportFailure(componentName: string, error: Error, suggestedMitigation?: string, params?: ControlAndClientApiInterfaces.EventParameter[]): void;
        reportEvent(event: ControlAndClientApiInterfaces.ApplicationEvent): void;
    }
}
declare module "CustomControls/Models/PropertyFallbacks/Formatting/AjaxNumber" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { CultureInfo } from "CustomControls/Utilities/CultureInfo";
    export class AjaxNumber {
        private static _getValueFromDictionary;
        private static _toFormattedString;
        /**
         * Format number
         * @param num Number to format
         * @param format Format to apply
         * @param cultureInfo Current culture info
         */
        static localeFormat(num: number, format: string, cultureInfo: CultureInfo): string;
    }
}
declare module "CustomControls/Models/PropertyFallbacks/Formatting/FormatterUtils" {
    import { CultureInfo } from "CustomControls/Utilities/CultureInfo";
    function formatPositiveDecimalValue(input: number, cultureInfo: CultureInfo, precision?: number): string;
    function formatNegativeDecimalValue(input: number, cultureInfo: CultureInfo, precision?: number): string;
    function getCurrencySymbol(cultureInfo: CultureInfo): string;
    function basicFormatCurrencyValue(input: number, cultureInfo: CultureInfo, attributePrecision?: number): string;
    function getShortDatePattern(cultureInfo: CultureInfo): string;
    function getLongDatePattern(cultureInfo: CultureInfo): string;
    function getShortTimePattern(cultureInfo: CultureInfo): string;
    /**
     * Get the date format from the format description
     * @param cultureInfo Given culture info
     * @param format Format of date or datetime
     */
    function getFormatPattern(cultureInfo: CultureInfo, format: string): string;
    export { getFormatPattern, getCurrencySymbol, basicFormatCurrencyValue, formatNegativeDecimalValue, formatPositiveDecimalValue, getShortDatePattern, getLongDatePattern, getShortTimePattern, };
}
declare module "CustomControls/Utilities/StringBuilder" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * Implement a stripped down version of MicrosoftAjax to provide the basic functionality without
     * the non-complient code
     */
    export class StringBuilder {
        private _text;
        constructor(initialText?: string);
        append(text: string): void;
        toString(): string;
    }
}
declare module "CustomControls/Models/PropertyFallbacks/Formatting/AjaxDate" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { CultureInfo } from "CustomControls/Utilities/CultureInfo";
    export class AjaxDate {
        private static _getValueFromDictionary;
        private static _appendPreOrPostMatch;
        private static _expandFormat;
        private static _getEra;
        private static _getEraYear;
        private static _getTokenRegExp;
        private static _toFormattedString;
        private static _getParseRegExp;
        private static _toUpper;
        private static _toUpperArray;
        private static _getIndex;
        private static _getMonthIndex;
        private static _getAbbrMonthIndex;
        private static _getDayIndex;
        private static _getAbbrDayIndex;
        private static _expandYear;
        /**
         * Format Date value
         * @param value Date value to format
         * @param format Format to apply
         * @param culture Current culture info
         */
        static localeFormat(value: Date, format: string, culture: CultureInfo): string;
        static parse(value: string, format: string, cultureInfo: CultureInfo): Date;
    }
}
declare module "CustomControls/Models/PropertyFallbacks/Formatting/SimpleFormatters" {
    import { CultureInfo } from "CustomControls/Utilities/CultureInfo";
    class SimpleFormatter {
        /**
         * Converts date from String to dateObject
         * @param {string} value - the source string
         * @param format Format description of date or datetime
         * @param cultureInfo Current culture info
         * @param formatterProperties Formatter properties
         */
        static ParseDateFromString(value: string, format: string, cultureInfo: CultureInfo): Date;
        /**
         * Returns a formatted string represents a given integer value
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @returns {string} A formatted string represents a given integer value
         */
        static formatIntegerValue(input: number, cultureInfo: CultureInfo): string;
        /**
         * Returns a string represents the currency value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @param currencySymbol The currency symbol/code to be added while currency value
         * @param precision The precision value to be used for formatting
         * @returns {string} A string represents the currency value after being formatted
         */
        static formatCurrencyValue(input: number, cultureInfo: CultureInfo, currencySymbol?: string, precision?: number): string;
        /**
         * Returns a string represents the date value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @returns {string} A string represents the date value after being formatted
         */
        static formatShortDateValue(input: Date, cultureInfo: CultureInfo): string;
        /**
         * Returns a string represents the date value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @returns {string} A string represents the date value after being formatted
         */
        static formatLongDateValue(input: Date, cultureInfo: CultureInfo): string;
        /**
         * Returns a string represents the decimal value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @param precision The precision value to be used for formatting
         * @returns {string} A string represents the decimal value after being formatted
         */
        static formatDecimalValue(input: number, cultureInfo: CultureInfo, precision?: number): string;
        /**
         * Returns a string represents the date value after being formatted in Sortable("s") format.
         * @param input A value object to be formatted.
         * @return {string} A string represents the date value after being formatted.
         */
        static formatSortableDateValue(input: Date): string;
        /**
         * Returns a string represents the datetime value after being formatted in Sortable("s") format.
         * @param input A value object to be formatted.
         * @return {string} A string represents the datetime value after being formatted.
         */
        static formatSortableDateTimeValue(input: Date): string;
        /**
         * Returns a string represents the datetime value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @returns {string} A string represents the datetime value after being formatted
         */
        static formatShortDateTimeValue(input: Date, cultureInfo: CultureInfo): string;
        /**
         * Returns a string represents the datetime value after being formatted
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @returns {string} A string represents the datetime value after being formatted
         */
        static formatDateLongAbbreviated(input: Date, cultureInfo: CultureInfo): string;
        /**
         * Returns a string representing the datetime value after being formatted with the Year Month format
         * @param input A value object to be formatted
         * @param cultureInfo Culture info to apply to format
         * @returns {string} A string represents the datetime value after being formatted
         */
        static formatDateYearMonthValue(input: Date, cultureInfo: CultureInfo): string;
        /**
         * Returns a formatted string represents a given language
         * @param input A value object to be formatted
         * @param languagesByCode The list of languages and their localized labels
         * @returns {string} A formatted string represents a given language value
         */
        static formatLanguageValue(input: number, languagesByCode: {
            [code: number]: string;
        }): string;
    }
    export { SimpleFormatter };
}
declare module "CustomControls/Models/PropertyClasses/Formatting" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    import { IFormatting } from "CustomControls/Models/CustomControlExposedInterfaces";
    export class Formatting implements IFormatting {
        private _formattingData;
        private _utilsData;
        private _adjusters;
        private _dateTimeFormatInfo;
        private _currentCultureInfo;
        private _timeZoneOffsetMinutes;
        private _defaultFormatting;
        constructor(customControlProperties: ICustomControlHostProps);
        parseDateFromString(value: string, format: string): Date;
        formatDateShort(value: Date, showTime: boolean): string;
        formatDateLongAbbreviated(value: Date): string;
        formatDateLong(value: Date): string;
        formatDateYearMonth(value: Date): string;
        formatInteger(value: number): string;
        formatDecimal(value: number, precision: number): string;
        formatCurrency(value: number, precision: number, symbol: string): string;
        formatTime(value: Date, behavior: CrmFramework.DateTimeFieldBehavior): string;
        getWeekOfYear(value: Date): number;
        formatDateAsFilterStringInUTC(value: Date, showTime: boolean): string;
        formatLanguage(value: number): string;
    }
}
declare module "CustomControls/Models/PropertyClasses/Factory" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps, IExternalUtils } from "CustomControls/Models/CustomControlDataInterfaces";
    import * as CustomControlBagInterfaces from "CustomControls/Models/CustomControlExposedInterfaces";
    import { VirtualComponent } from "CustomControls/Components/VirtualComponent";
    import { Dictionary } from "CustomControls/Utilities/Dictionary";
    export class Factory implements CustomControlBagInterfaces.IFactory {
        private _customControlProperties;
        private _externalUtils;
        constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
        createElement(type: CustomControlBagInterfaces.PrimitiveControls, properties: CustomControlInterfaces.IVirtualComponentProps, children?: any): CustomControlInterfaces.IVirtualComponent;
        createComponent(type: string, id: string, properties: CustomControlInterfaces.IVirtualComponentProps): CustomControlInterfaces.IVirtualComponent;
        bindDOMElement(virtualComponent: VirtualComponent, DOMNode: Element): void;
        bindDOMComponent(virtualComponent: VirtualComponent, DOMNode: Element): void;
        fireEvent(eventName: string, params: any): void;
        getControlDefaultMapping(dataType: string, attributes?: CustomControlInterfaces.ICustomControlAttributes): string;
        getPopupService(): CustomControlBagInterfaces.IPopupService;
        requestRender(callback?: () => void): void;
        unbindDOMComponent(componentId: string): boolean;
        updateComponent(id: string, props: Dictionary): void;
    }
}
declare module "CustomControls/Models/PropertyClasses/Diagnostics" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps, IExternalUtils } from "CustomControls/Models/CustomControlDataInterfaces";
    export class Diagnostics implements ControlAndClientApiInterfaces.Diagnostics {
        private _externalUtils;
        private _controlId;
        private _traceLocation;
        constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
        addControlId(message: string): string;
        traceError(componentName: string, message: string): void;
        traceWarning(componentName: string, message: string): void;
        traceInfo(componentName: string, message: string): void;
        traceDebug(componentName: string, message: string): void;
    }
}
declare module "CustomControls/Utilities/PerformanceStopwatch" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IPerformanceEvent, IPerformanceStopwatch } from "CustomControls/Models/CustomControlDependantInterfaces";
    /**
     * Helper class for starting and stopping a performance stopwatch
     */
    class PerformanceStopwatch implements IPerformanceStopwatch {
        /**
         * The callback for stopping the stopwatch
         */
        private _stop;
        /**
         * The performance event linked to the stopwatch
         */
        private _event;
        /**
         * Parameters to pass with the stopwatch
         */
        private _parameters;
        /**
         * Creates a new PerformanceStopwatch instance.
         * @param event The performance event linked to the stopwatch
         * @param parameters Parameters to pass with the stopwatch
         */
        constructor(event: IPerformanceEvent, parameters?: {
            [parameterName: string]: string;
        });
        /**
         * Starts the stopwatch
         */
        start(): void;
        /**
         * Stops the stopwatch
         */
        stop(params?: {
            [parameterName: string]: string;
        }): void;
    }
    export { PerformanceStopwatch };
}
declare module "CustomControls/Models/PropertyClasses/Utility" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps, IExternalUtils } from "CustomControls/Models/CustomControlDataInterfaces";
    import * as CustomControlBagInterfaces from "CustomControls/Models/CustomControlExposedInterfaces";
    import { VirtualComponent } from "CustomControls/Components/VirtualComponent";
    import { IPerformanceStopwatch } from "CustomControls/Models/CustomControlDependantInterfaces";
    import { Dictionary } from "CustomControls/Utilities/Dictionary";
    export class Utility implements CustomControlBagInterfaces.IUtility {
        private _customControlProperties;
        private _externalUtils;
        private _internalEventListeners;
        private _globalCommandManagerInitialized;
        constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
        /**
         * Generate an array of internal event listeners
         * NOTE: This is kept as an array to match the structure given from controls/system.
         * However, should this array become larger, an easy perf improvement here would be to switch this to a key/value pairing
         * @returns the array of listeners
         */
        private _generateInternalEventListeners;
        /**
         * Internal handler for a system key down event
         * @param data Data passed by the fireEvent
         */
        private _handleSystemKeydown;
        doesControlExist(customControlName: string): Promise<boolean>;
        beginSecureSessionForResource(resource: string, cookieName: string, cookieDomain: string, allowPrompt?: boolean): Promise<Date>;
        createPerformanceMarker(id: string): void;
        createPerformanceStopwatch(id: string): IPerformanceStopwatch;
        log(customControlName: string, message: string, logType: number): void;
        getEntityMetadata(entityType: string, attributes?: string[]): Promise<ControlAndClientApiInterfaces.EntityMetadata>;
        getEntitiesMetadata(entityToAttributes: {
            [entityType: string]: string[];
        }): Promise<ControlAndClientApiInterfaces.EntityMetadata[]>;
        getParentControlName(): string;
        getResourceString(webResourceName: string, key: string): string;
        isFeatureEnabled(featureName: string): boolean;
        canOpenUrl(url: string): Promise<boolean>;
        getFormId(entityType: string, formType: string): Promise<string>;
        lookupObjects(lookupOptions: ControlAndClientApiInterfaces.LookupOptions): Promise<ControlAndClientApiInterfaces.LookupValue[]>;
        bindDOMElement(virtualComponent: VirtualComponent, DOMNode: Element): void;
        fireEvent(eventName: string, params: any): void;
        getControlDefaultMapping(dataType: string, attributes?: CustomControlInterfaces.ICustomControlAttributes): string;
        getPopupService(): CustomControlBagInterfaces.IPopupService;
        requestRender(callback?: () => void): void;
        unbindDOMComponent(componentId: string): boolean;
        updateComponent(id: string, props: Dictionary): void;
        createCrmUri(url: string): string;
        createServerUri(url: string): string;
        openInBrowser(url: string): void;
        getServiceUri(): string;
        setState(state: any): boolean;
        crmUrlEncode(s: string): string;
        /**
         * Function to return if the user has Privilege for one specific entity
         * @entityTypeName entity type name
         * @privilegeType privilege type i.e. Create, Read, Write etc.
         * @privilegeDepth privilege depth i.e. basic, Global etc.
         */
        hasEntityPrivilege(entityTypeName: string, privilegeType: Constants.PrivilegeType, privilegeDepth: Constants.PrivilegeDepth): boolean;
        crmHtmlEncode(s: string): string;
        isNullOrUndefined(object: any): boolean;
        isNullOrEmptyString(object: any): boolean;
        notifyOutputChanged(): void;
        eventListenerExists(eventName: string): boolean;
        getElementByRef(): Element;
        disablePanoramaScroll(): boolean;
        scrollToView(): void;
        setNotification(): boolean;
        clearNotification(): boolean;
        triggerOfflineMetadataSync(): Promise<void>;
        addGlobalNotification(type: number, level: number, message: string, title: string, action: ControlAndClientApiInterfaces.ActionDescriptor, onCloseHandler: ControlAndClientApiInterfaces.EventHandler): Promise<string>;
        clearGlobalNotification(id: string): Promise<void>;
        clearGlobalNotifications(): Promise<void>;
        retrieveChartDrilldownAttributes(etn: string): Promise<any>;
        retrieveFormWithAttributes(entityName: string, formId?: string, formType?: string): Promise<any>;
        getEntityName(entityTypeCode: number): string;
        retrieveRecordCommand(allRecords: {
            [id: string]: CustomControlInterfaces.DataSetRecord;
        }, commandManagerId: string, records: string[], commandButtonIds?: string[], filterByPriority?: boolean, useNestedFormat?: boolean): DynamicsSrc.IDeferred<CustomControlInterfaces.ICommandObjectWrapper[], CustomControlInterfaces.ErrorResponse>;
    }
}
declare module "CustomControls/Models/PropertyClasses/Performance" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    import * as CustomControlBagInterfaces from "CustomControls/Models/CustomControlExposedInterfaces";
    export class Performance implements CustomControlBagInterfaces.IPerformance {
        private _customControlProperties;
        private _performanceEvents;
        constructor(customControlProperties: ICustomControlHostProps);
        createPerformanceStopwatch(name: string, parameters?: {
            [parameterName: string]: string;
        }, alwaysDisplay?: boolean): (endParameters?: {
            [parameterName: string]: string;
        }) => void;
        trackWork(diagnosticId: string): () => void;
        addKeyPerformanceIndicator(name: string, parameters?: {
            [parameterName: string]: string;
        }, retroactiveTimestamp?: number): void;
        addKeyPerformanceIndicatorOnIdle(name: string, parameters?: {
            [parameterName: string]: string;
        }): void;
    }
}
declare module "CustomControls/Models/PropertyClasses/OrgSettings" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps, IExternalUtils } from "CustomControls/Models/CustomControlDataInterfaces";
    import * as CustomControlBagInterfaces from "CustomControls/Models/CustomControlExposedInterfaces";
    export class OrgSettings implements CustomControlBagInterfaces.IOrgSettings {
        private _customControlExposedOrgSettings;
        private _xrmProxy;
        languageId: number;
        attributes: {
            [key: string]: any;
        };
        uniqueName: string;
        isAutoSaveEnabled: boolean;
        isRTL: boolean;
        fiscalYearStartDate: Date;
        fiscalPeriodFormat: number;
        fiscalPeriodType: number;
        fiscalYearFormatYear: number;
        fiscalYearFormatPrefix: number;
        fiscalYearFormatSuffix: number;
        fiscalYearDisplayCode: number;
        fiscalPeriodConnector: string;
        showWeekNumber: boolean;
        boundDashboardDefaultCardExpanded: boolean;
        allowUnresolvedPartiesOnEmailSend: boolean;
        webResourceHash: string;
        enableBingMapsIntegration: boolean;
        bingMapsApiKey: string;
        availableBingMapLocales: string;
        excludedCountriesForMaps: string;
        bFDatacenter: boolean;
        securitySettingForEmail: number;
        appointmentRichEditorExperience: boolean;
        gridTotalRecordCountLimit: number;
        constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
    }
}
declare module "CustomControls/Models/PropertyClasses/UserSettings" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps, IExternalUtils } from "CustomControls/Models/CustomControlDataInterfaces";
    import * as CustomControlBagInterfaces from "CustomControls/Models/CustomControlExposedInterfaces";
    export class UserSettings implements CustomControlBagInterfaces.IUserSettings {
        private _formattingData;
        private _xrmProxy;
        private _utilsData;
        userId: string;
        userName: string;
        dateFormattingInfo: CustomControlBagInterfaces.DateFormattingInfo;
        numberFormattingInfo: CustomControlBagInterfaces.NumberFormattingInfo;
        isRTL: boolean;
        languageId: number;
        securityRoles: string[];
        isHighContrastEnabled: boolean;
        timeZoneUtcOffsetMinutes: number;
        pagingLimit: number;
        constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
        getTimeZoneOffsetMinutes(date?: Date): number;
    }
}
declare module "CustomControls/Models/PropertyClasses/Client" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps, IExternalUtils, IHostData } from "CustomControls/Models/CustomControlDataInterfaces";
    import * as CustomControlBagInterfaces from "CustomControls/Models/CustomControlExposedInterfaces";
    export class Client implements CustomControlBagInterfaces.IClient {
        private _externalUtils;
        private _customControlProperties;
        private _xrmProxy;
        isPreview: boolean;
        formFactor: any;
        userAgent: CustomControlBagInterfaces.CustomControlExposedUserAgent;
        languageCode: string;
        isRTL: boolean;
        locale: string;
        orgSettings: CustomControlBagInterfaces.ICustomControlExposedOrgSettings;
        dateFormattingInfo: CustomControlBagInterfaces.DateFormattingInfo;
        numberFormattingInfo: CustomControlBagInterfaces.NumberFormattingInfo;
        userTimeZoneUtcOffsetMinutes: number;
        getUserTimeZoneUtcOffset: (d: Date) => number;
        allocatedWidth: number;
        allocatedHeight: number;
        trackContainerResize: (shouldTrack: boolean) => void;
        setFullScreen: (isFullscreen: boolean) => void;
        setFullscreen: (isFullscreen: boolean) => void;
        ignoreSelfUpdates: (shouldIgnore: boolean) => void;
        disableScroll: boolean;
        constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
        getClient(): string;
        isOffline(): boolean;
        getFormFactor(): any;
        getClientState(): string;
        updateClientBag(hostData: IHostData): void;
    }
}
declare module "CustomControls/Models/PropertyClasses/Navigation" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    import * as CustomControlBagInterfaces from "CustomControls/Models/CustomControlExposedInterfaces";
    import { CustomControlEntityReference } from "CustomControls/Models/CustomControlEntityReference";
    import { Dictionary } from "CustomControls/Utilities/Dictionary";
    export class Navigation implements CustomControlBagInterfaces.INavigation {
        private _customControlProperties;
        private _paramKey;
        constructor(customControlProperties: ICustomControlHostProps);
        openEditForm(entityReference: CustomControlEntityReference, processId?: string, processInstanceId?: string, selectedStageId?: string, isCrossEntityNavigate?: boolean): void;
        openGridPage(entityTypeName: string, viewId?: string, showChart?: boolean, visualizationId?: string, filterExpression?: string): void;
        openGrid(entityTypeName: string, viewId?: string, showChart?: boolean, visualizationType?: number, visualizationId?: string, filterExpression?: string, chartDrillDownParameters?: CustomControlInterfaces.ChartDrillDownParameter[]): void;
        openDashboard(id: string): void;
        openCreateForm(logicalName: string, initialValues?: Dictionary, createFromEntity?: CustomControlEntityReference): void;
        openForm(options: ControlAndClientApiInterfaces.EntityFormOptions, parameters?: ControlAndClientApiInterfaces.Parameters): Promise<ControlAndClientApiInterfaces.OpenFormSuccessResponse>;
        openSearch(query?: string): void;
        openPowerBIFullScreenPage(powerBIEmbedUrl?: string, powerBIGroupId?: string, powerBIDashboardId?: string, powerBITileId?: string, powerBIReportId?: string, powerBIReportUrl?: string, powerBIComponentTypeCode?: string): void;
        openUrl(url: string, options?: ControlAndClientApiInterfaces.WindowOptions): void;
        openUrlWithProtocol(url: string, protocol: string): void;
        openPhoneNumber(phoneNumber: string, useForm?: boolean, passedEtn?: string, passedId?: string, passedName?: string): void;
        openMaps(address: string): void;
        openMap(address: string): void;
        openAlertDialog(alertStrings: ControlAndClientApiInterfaces.AlertDialogStrings, options?: ControlAndClientApiInterfaces.DialogOptions): Promise<ControlAndClientApiInterfaces.AlertDialogResponse>;
        openConfirmDialog(confirmStrings: ControlAndClientApiInterfaces.ConfirmDialogStrings, options?: ControlAndClientApiInterfaces.DialogOptions): Promise<ControlAndClientApiInterfaces.ConfirmDialogResponse>;
        openErrorDialog(options: ControlAndClientApiInterfaces.ErrorDialogOptions): Promise<ControlAndClientApiInterfaces.ErrorDialogResponse>;
        openDialog(name: string, options?: ControlAndClientApiInterfaces.DialogOptions, parameters?: ControlAndClientApiInterfaces.Parameters): Promise<ControlAndClientApiInterfaces.DialogResponse>;
        openFile(file: File, options?: ControlAndClientApiInterfaces.OpenFileOptions): Promise<void>;
        openTaskFlow(name: string, options?: ControlAndClientApiInterfaces.TaskFlowOptions, parameters?: ControlAndClientApiInterfaces.Parameters): Promise<ControlAndClientApiInterfaces.TaskFlowResponse>;
        openWebResource(name: string, options?: ControlAndClientApiInterfaces.WindowOptions, data?: string): void;
        private _getRecordSetQueryFromProps;
    }
}
declare module "CustomControls/Models/PropertyClasses/Mode" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps, IExternalUtils, IHostData } from "CustomControls/Models/CustomControlDataInterfaces";
    import * as CustomControlBagInterfaces from "CustomControls/Models/CustomControlExposedInterfaces";
    export class Mode implements CustomControlBagInterfaces.IMode {
        private _customControlProperties;
        private _descriptor;
        private _modeData;
        private _hostData;
        allocatedWidth: number;
        allocatedHeight: number;
        trackContainerResize: (shouldTrack: boolean) => void;
        setFullScreen: (isFullScreen: boolean) => void;
        isControlDisabled: boolean;
        isVisible: boolean;
        label: string;
        accessibilityLabel: string;
        isOffline: boolean;
        fullPageParam: any;
        rowSpan: number;
        hasFocus: boolean;
        isPreview: boolean;
        isActive: boolean;
        isRead: boolean;
        contextInfo: CustomControlBagInterfaces.IContextInfo;
        constructor(customControlProperties: ICustomControlHostProps, _externalUtils: IExternalUtils, hostData: IHostData);
        setNotification(message: string, id: string): boolean;
        clearNotification(id?: string): boolean;
        setControlState(state: any, globalSetting?: boolean): boolean;
        blur(): void;
        focus(): void;
    }
}
declare module "CustomControls/Models/PropertyClasses/Device" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    import * as CustomControlBagInterfaces from "CustomControls/Models/CustomControlExposedInterfaces";
    export class Device implements CustomControlBagInterfaces.IDevice {
        private _bagProps;
        constructor(customControlProperties: ICustomControlHostProps);
        captureImage(options?: ControlAndClientApiInterfaces.CaptureImageOptions): Promise<File>;
        captureAudio(): Promise<File>;
        captureVideo(): Promise<File>;
        pickFile(options?: ControlAndClientApiInterfaces.PickFileOptions): Promise<File[]>;
        getBarcodeValue(): Promise<string>;
        getCurrentPosition(): Promise<Position>;
        isGetBarcodeValueOperationAvailable(): boolean;
        isTakePictureOperationAvailable(): boolean;
        isCaptureVideoOperationAvailable(): boolean;
        isCaptureAudioOperationAvailable(): boolean;
    }
}
declare module "CustomControls/Models/PropertyClasses/ExternalContext" {
    export class ExternalContext implements ControlAndClientApiInterfaces.ExternalContext {
        constructor();
        getAvailableExternalContexts(): Collection.ItemCollection<ControlAndClientApiInterfaces.ExternalContextDescriptor>;
        getExternalContextProperty(externalContextId: string, externalContextPropertyId: string, options?: ControlAndClientApiInterfaces.ExternalContextPropertyOptions): Promise<ControlAndClientApiInterfaces.ExternalContextSuccessResponse>;
        invokeExternalContextAction(externalContextId: string, externalContextActionId: string, options?: ControlAndClientApiInterfaces.ExternalContextActionOptions): Promise<ControlAndClientApiInterfaces.ExternalContextSuccessResponse>;
        removeExternalContextPropertyListener(externalContextId: string, externalContextPropertyId: string, listener: ControlAndClientApiInterfaces.ExternalContextPropertyListener): void;
    }
}
declare module "CustomControls/Models/PropertyClasses/Communication" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    import { ICommunicationChannel } from "CustomControls/Models/CustomControlExposedInterfaces";
    export class Communication implements ICommunicationChannel {
        constructor(customControlProperties: ICustomControlHostProps);
        getPresenceMappedField(_entityName: string): string;
        isPresenceEnabled(_entityName: string): boolean;
    }
}
declare module "CustomControls/Models/PropertyClasses/Theming" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IDefaultThemingDataColors, IDefaultThemingDataTextBox, IDefaultThemingDataSpacings, IDefaultThemingDataFontFamilies, IDefaultThemingDataFontSizes, IDefaultThemingDataBreakpoints, IDefaultThemingDataMeasures, IDefaultThemingDataLookup, IDefaultThemingDataBorders, IDefaultThemingDataShadows, IDefaultThemingDataButtons, ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    import * as CustomControlBagInterfaces from "CustomControls/Models/CustomControlExposedInterfaces";
    export class Theming implements CustomControlBagInterfaces.IThemingBag {
        private _themingData;
        normalfontcolor: string;
        normalfontfamily: string;
        normalfontsize: string;
        solidborderstyle: string;
        noneborderstyle: string;
        colors: IDefaultThemingDataColors;
        textbox: IDefaultThemingDataTextBox;
        spacings: IDefaultThemingDataSpacings;
        fontfamilies: IDefaultThemingDataFontFamilies;
        fontsizes: IDefaultThemingDataFontSizes;
        breakpoints: IDefaultThemingDataBreakpoints;
        measures: IDefaultThemingDataMeasures;
        lookup: IDefaultThemingDataLookup;
        borders: IDefaultThemingDataBorders;
        shadows: IDefaultThemingDataShadows;
        buttons: IDefaultThemingDataButtons;
        constructor(customControlProperties: ICustomControlHostProps);
        getEntityColor(entityLogicalName: string): string;
        disableUiTransitions(): void;
        rightAlignEdit(): void;
        inlineLayout(): void;
    }
}
declare module "CustomControls/Models/PropertyClasses/Resources" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    import { IResources } from "CustomControls/Models/CustomControlExposedInterfaces";
    export class Resources implements IResources {
        private _manifest;
        private _getResource;
        private _bagPropsResource;
        constructor(customControlProperties: ICustomControlHostProps);
        getString(id: string): string;
        getResource(id: string, success: (data: string) => void, failure: () => void): void;
    }
}
declare module "CustomControls/Models/PropertyClasses/Accessibility" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    import { IAccessibility, AccessibilityInternalData } from "CustomControls/Models/CustomControlExposedInterfaces";
    export class Accessibility implements IAccessibility {
        private _customControlProperties;
        private _accessibilityInternalData;
        isHighContrastEnabled: boolean;
        assignedTabIndex: number;
        constructor(customControlProperties: ICustomControlHostProps);
        registerShortcut(keyCombination: number[], shortcutHandler: (event: KeyboardEvent) => void, isGlobal: boolean, areaName: string, shortcutDescription: string, srcElementId?: string): void;
        getUniqueId(id: string): string;
        focusElementById(id: string, isAbsoluteId?: boolean): void;
        blurElementById(id: string, isAbsoluteId?: boolean): void;
        accessibilityInternalData: AccessibilityInternalData;
    }
}
declare module "CustomControls/Models/PropertyClasses/WebAPI" {
    export class WebAPI implements ControlAndClientApiInterfaces.WebApi {
        retrieveRecord(entityType: string, id: string, options?: string): Promise<WebApi.Entity>;
        createRecord(entityType: string, data: WebApi.Entity): Promise<ControlAndClientApiInterfaces.LookupValue>;
        updateRecord(entityType: string, id: string, data: WebApi.Entity): Promise<ControlAndClientApiInterfaces.LookupValue>;
        deleteRecord(entityType: string, id: string): Promise<ControlAndClientApiInterfaces.LookupValue>;
        retrieveMultipleRecords(entityType: string, options?: string, maxPageSize?: number): Promise<WebApi.RetrieveMultipleResponse>;
        execute(request: WebApi.ODataContract): Promise<WebApi.Response>;
        executeMultiple(requests: WebApi.ODataContract[]): Promise<WebApi.Response[]>;
    }
}
declare module "CustomControls/Models/PropertyClasses/Page" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps, IExternalUtils } from "CustomControls/Models/CustomControlDataInterfaces";
    import { IPage } from "CustomControls/Models/CustomControlExposedInterfaces";
    export class Page implements IPage {
        appId: string;
        entityTypeName: string;
        entityId: string;
        isPageReadOnly: boolean;
        getClientUrl: () => string;
        constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
        updateBag(customControlProperties: ICustomControlHostProps): void;
    }
}
declare module "CustomControls/Models/PropertyInfrastructure/PropertyBagFactory" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps, IExternalUtils, IHostData } from "CustomControls/Models/CustomControlDataInterfaces";
    export class PropertyBagFactory {
        private _externalUtils;
        private _customControlProperties;
        private _hostData;
        constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils, hostData?: IHostData);
        getInstance<T>(instance: {
            new (customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils, hostData?: IHostData): T;
        }): T;
    }
}
declare module "CustomControls/Models/PropertyFallbacks/Design/DefaultDesignLanguage" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IThemeMap } from "CustomControls/Models/CustomControlDataInterfaces";
    export const DEFAULT_FLUID_DL: IThemeMap;
}
declare module "CustomControls/Utilities/ManifestDesignHelper" {
    import { IThemeMap } from "CustomControls/Models/CustomControlDataInterfaces";
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * ManifestDesignHelper is designed to be a singleton class used to track design objects for a given manifest
     */
    class ManifestDesignHelper {
        private _map;
        GetThemeData(manifest: CustomControlInterfaces.ICustomControlManifest, theme: IThemeMap /** This will be replaced post-prototype with a more amorphous object **/): {
            [key: string]: string;
        };
    }
    const instance: ManifestDesignHelper;
    export { ManifestDesignHelper, instance as default };
}
declare module "CustomControls/Models/PropertyFallbacks/Parameters/ParameterUtils" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    function generateDummySystemParameters(): {
        deviceSizeMode: {
            Usage: CustomControlInterfaces.PropertyUsage;
            Static: boolean;
            Type: string;
            Value: number;
            Primary: boolean;
        };
        viewportSizeMode: {
            Usage: CustomControlInterfaces.PropertyUsage;
            Static: boolean;
            Type: string;
            Value: number;
            Primary: boolean;
        };
        scope: {
            Usage: CustomControlInterfaces.PropertyUsage;
            Static: boolean;
            Type: string;
            Value: number;
            Primary: boolean;
        };
        syncError: {
            Usage: CustomControlInterfaces.PropertyUsage;
            Static: boolean;
            Type: string;
            Value: boolean;
            Primary: boolean;
        };
        isEmpty: {
            Usage: CustomControlInterfaces.PropertyUsage;
            Static: boolean;
            Type: string;
            Value: boolean;
            Primary: boolean;
        };
    };
    export { generateDummySystemParameters };
}
declare module "CustomControls/Models/PropertyBag" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as CustomControlBagInterfaces from "CustomControls/Models/CustomControlExposedInterfaces";
    import { ICustomControlHostProps, IExternalUtils, IHostData } from "CustomControls/Models/CustomControlDataInterfaces";
    /**
     * The PropertyBag generator class for Custom Controls Framework
     */
    export class PropertyBag {
        /**
         * Memoized children raw from props
         */
        private _memoizedChildrenRaw;
        /**
         * Memoized children converted to virtual components
         */
        private _memoizedChildrenConverted;
        /**
         * The accessibility internal data
         */
        private _accessibilityInternalData;
        /**
         * The most recent iteration of the propertybag
         */
        private _bagObject;
        /**
         * Generate an instance of the property bag
         * @param ownProps The associated Custom Control props
         * @param externalUtils External utils, which should be added to Property bag
         */
        constructor(ownProps: ICustomControlHostProps, externalUtils: IExternalUtils);
        /**
         * Generate the entire bag current
         */
        generateBag(ownProps: ICustomControlHostProps, hostData: IHostData): CustomControlBagInterfaces.IPropBag<{
            [key: string]: CustomControlInterfaces.IPropertyParameter;
        }>;
        /**
         * Get the virtual component equivalents of the children
         */
        private _getChildren;
        /**
         * Update and get latest dataset and lookup parameters
         */
        private _updateLatestParameters;
        /**
         * Get accessibility data
         */
        getAccessibilityData(): CustomControlBagInterfaces.AccessibilityInternalData;
        /**
         * Gets the learning path id from the bag object
         */
        getLearningPathBag(): CustomControlBagInterfaces.ILearningPath;
        /**
         * Gets the skype channel info from the bag object
         */
        getCommunicationBag(): CustomControlBagInterfaces.ICommunicationChannel;
        /**
         * Generate the LearningPath bag
         */
        private _getLearningPathBag;
        /**
         * Get the UpdatedPropertiesBag
         */
        private _getUpdatedPropertiesBag;
    }
}
declare module "CommonComponents/Primitive/Button" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { IFlexboxContainerStyle } from "CommonComponents/Primitive/IFlexboxContainerStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Styles for a Button component
     */
    interface IButtonStyle extends IViewStyle, IFlexboxContainerStyle {
        cursor?: "pointer" | string;
        ":hover"?: React.HTMLAttributes<Element>;
    }
    /**
     * Props for a Button component instance
     */
    interface IButtonProps extends IPropsBase {
        /**
         * Styles for Button component
         */
        style?: IButtonStyle;
        /**
         * A label that can be read by the screen readers for this button
         */
        accessibilityLabel: string;
        /**
         * The access key property
         */
        accessKey?: string;
        /**
         *  The disabled property
         */
        disabled?: boolean;
        /**
         * The class name
         */
        className?: string;
    }
    /**
     * A clickable Button control.
     */
    class InnerButton extends ComponentBase<IButtonProps, any> {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
        /**
         * Returns the class name for the underlying element.
         */
        protected getElementClassName(): string;
        /**
         * Returns the class name for the underlying element.
         * @param style the style to be applied to the underlying component, used for readout here.
         */
        protected getFlexClassName(style: React.CSSProperties): string;
        /**
         * Returns the specific style for the underlying element.
         */
        protected getElementStyle(): React.CSSProperties;
    }
    const Button: any;
    export { IButtonStyle, IButtonProps, InnerButton, Button };
}
declare module "CommonComponents/Supplementary/Accessibility/KeyCode" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * Enum to list out all keycodes for html
     */
    enum KeyCode {
        Backspace = 8,
        Tab = 9,
        Enter = 13,
        Shift = 16,
        Ctrl = 17,
        Alt = 18,
        PauseBreak = 19,
        Capslock = 20,
        Escape = 27,
        Space = 32,
        PageUp = 33,
        PageDown = 34,
        End = 35,
        Home = 36,
        LeftArrow = 37,
        UpArrow = 38,
        RightArrow = 39,
        DownArrow = 40,
        Insert = 45,
        Delete = 46,
        Num0 = 48,
        Num1 = 49,
        Num2 = 50,
        Num3 = 51,
        Num4 = 52,
        Num5 = 53,
        Num6 = 54,
        Num7 = 55,
        Num8 = 56,
        Num9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        LeftWindowKey = 91,
        RightWindowKey = 92,
        SelectKey = 93,
        NumPad0 = 96,
        NumPad1 = 97,
        NumPad2 = 98,
        NumPad3 = 99,
        NumPad4 = 100,
        NumPad5 = 101,
        NumPad6 = 102,
        NumPad7 = 103,
        NumPad8 = 104,
        NumPad9 = 105,
        Multiply = 106,
        Add = 107,
        Subtract = 109,
        DecimalPoint = 110,
        Divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        NumLock = 144,
        ScrollLock = 145,
        SemiColon = 186,
        EqualSign = 187,
        Comma = 188,
        Dash = 189,
        Period = 190,
        ForwardSlash = 191,
        GraveAccent = 192,
        OpenBracket = 219,
        BackSlash = 220,
        CloseBraket = 221,
        SingleQuote = 222
    }
    export { KeyCode };
}
declare module "CommonComponents/Primitive/ListItem" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IViewStyle, IViewHtmlStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Styles for a ListItem component
     */
    interface IListItemStyle extends IViewStyle, IViewHtmlStyle {
    }
    /**
     * Properties of ListItem component
     */
    interface IListItemProps extends IPropsBase {
        /**
         * Component style properties
         */
        style?: IListItemStyle;
        /**
         * Style for list item when selected
         */
        selectedStyle?: IListItemStyle;
        /**
         * Accessibility role, "listitem" by default.
         */
        role?: "listitem" | "menuitem" | "tab" | "option" | string;
        /**
         * Indicates whether or not the list item is selected.
         */
        isSelected?: boolean;
        /**
         * Text value of the list item.
         */
        dataText?: string;
        /**
         * Value of the list item.
         */
        dataValue?: string;
        /**
         * Event it called once the element gets selected.
         */
        onSelected?: (element: React.Component<any, any>) => void;
        /**
         * Indicates whether the flyout is expanded in list item.
         */
        dataExpanded?: boolean;
    }
    /**
     * ListItem component
     */
    class InnerListItem extends ComponentBase<IListItemProps, {}> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        constructor(props: IListItemProps);
        /**
         * Raised once the component gets selected.
         */
        private _handleSelected;
        /**
         * Standard React life-cycle method, fired up when the component receives a new set of props.
         */
        componentWillReceiveProps(nextProps: IListItemProps): void;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
    }
    const ListItem: any;
    export { IListItemStyle, IViewHtmlStyle, IListItemProps, InnerListItem, ListItem };
}
declare module "CommonComponents/Primitive/ComboBox/IComboBoxItemStyle" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IListItemStyle } from "CommonComponents/Primitive/ListItem";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    /**
     * Style props for combobox item
     *
     * @interface
     */
    interface IComboBoxItemStyle extends IListItemStyle, ITextStyle {
    }
    export default IComboBoxItemStyle;
}
declare module "CommonComponents/Primitive/ComboBox/IComboBoxOption" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    /**
     * Represents option item for combobox
     *
     * @interface
     */
    interface IComboBoxOption {
        /**
         * Gets or sets id of combobox option item
         */
        id?: string;
        /**
         * Gets or sets value of combobox option item
         */
        value: string;
        /**
         * Gets or sets text of combobox option item
         */
        text: string;
        /**
         * Gets or sets styles of combobox option item
         */
        style?: ITextStyle;
    }
    export default IComboBoxOption;
}
declare module "CommonComponents/Primitive/ComboBox/IComboBoxStyle" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    /**
     * Style props for combobox component
     *
     * @interface
     */
    interface IComboBoxStyle extends IViewStyle, ITextStyle {
        cursor?: string;
    }
    export default IComboBoxStyle;
}
declare module "CommonComponents/Primitive/ComboBox/IComboBoxProps" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import IComboBoxOption from "CommonComponents/Primitive/ComboBox/IComboBoxOption";
    import IComboBoxStyle from "CommonComponents/Primitive/ComboBox/IComboBoxStyle";
    import { IAccessibilityComponentWrapperProps } from "CustomControls/Models/CustomControlExposedInterfaces";
    /**
     * Props for a combobox component instance
     *
     * @interface
     */
    interface IComboBoxProps extends IPropsBase {
        /**
         * Gets or sets styles of combobox component outer container.
         */
        style?: IComboBoxStyle;
        /**
         * Style being applied to a textInput.
         */
        textInputStyle?: ITextStyle;
        /**
         * Style for text in text only mode of combobox
         */
        textStyle?: ITextStyle;
        /**
         * Style being applied to the combobox when it's focused.
         */
        focusedStyle?: IComboBoxStyle;
        /**
         * Style being applied to a drop-down list item.
         */
        itemStyle?: Object;
        /**
         * Style being applied to a drop-down list item when it's selected.
         */
        selectedItemStyle?: Object;
        /**
         * Defines the number of visible options in a drop-down list.
         */
        pageSize?: number;
        /**
         * Indicates that the user cannot interact with the control.
         */
        disabled?: boolean;
        /**
         * Indicates whether the combobox is readonly.
         */
        readOnly?: boolean;
        /**
         * Defines a name for the drop-down list.
         */
        name?: string;
        /**
         * Defines a value selected.
         */
        value?: string;
        /**
         * Defines a default selected value for combobox
         */
        defaultValue?: string;
        /**
         * OnChange event callback
         * @param value - New value
         */
        onChange?: (value: string) => void;
        /**
         * Gets or sets options array of combobox component
         */
        options?: Array<IComboBoxOption>;
        /**
         * Indicates whether the combobox allows to input any value freely, or the user is limited only to the options available.
         */
        freeTextMode?: boolean;
        /**
         * Method to create a keyboard shortcut
         */
        createKeyboardShortcut: (keyCombination: number[], shortcutHandler: (event: KeyboardEvent) => void, isGlobal: boolean, areaName: string, shortcutDescription: string, srcElementId?: string) => any;
        /**
         * Method to create an accessibility component
         */
        createAccessibilityComponent: (props: IAccessibilityComponentWrapperProps) => JSX.Element;
        /**
         * custom control Id if a child of a parent custom control
         */
        parentCustomControlId?: string;
        /**
         * A parent flyout, if this one's root is nested within a different flyout
         */
        parentFlyoutRoot?: string;
        /**
         * Should the root of this flyout have a z-index
         */
        rootZIndex?: boolean;
        /**
         * flag indicating whether to hide arrow icon or not
         */
        hideArrow?: boolean;
        /**
         * flag indicating whether to hide internal appendix id or not
         */
        hideInternalId?: boolean;
        /**
         * Id of the element the position of the flyout is relative to.
         */
        relativeToElementId?: string;
        useHeader?: boolean;
        /**
         * on option selected in the options dropdown list event callback
         * This will be triggered in setCurrentItemByValue and _resetSelectedListItem
         * @param option - selected option when an option is selected or null when selecetd option is reset.
         */
        onOptionSelected?: (option: IComboBoxOption) => void;
        /**
         * Place holder value for Textinput
         */
        placeholder?: string;
        /**
         * Whether the flyout should stay open on scroll
         */
        keepFlyoutOpenOnScroll?: boolean;
        /**
         * When set to true, onChange handler will not fire when user types in freeTextInput box.
         */
        suppressFreeTextChangeCallback?: boolean;
    }
    export default IComboBoxProps;
}
declare module "CommonComponents/Primitive/ComboBox/IComboBoxState" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import IComboBoxOption from "CommonComponents/Primitive/ComboBox/IComboBoxOption";
    /**
     * State for a combobox component instance
     *
     * @interface
     */
    interface IComboBoxState {
        /**
         * Selected option of combobox component
         */
        option?: IComboBoxOption;
        /**
         * The text user has written in the control manually.
         */
        freeTextValue?: string;
        /**
         * The text to be displayed in input text after user navigating through the option list with arrow.
         * This property is needed to separately save what the user has typed in free text input and what to be displayed after an option is focused,
         * so that the option list will not gets filtered again by the value of the highlighted option.
         * Text Input field should display the value in this field if it's not empty.
         */
        freeTextOptionDisplayValue?: string;
        /**
         * Indicates whether the combobox is expanded or not.
         */
        isExpanded?: boolean;
        /**
         * TODO: find out if this is actually required
         */
        isAutoCompleting?: boolean;
        /**
         * Indication whether or not the control holds the focus at the moment.
         */
        hasFocus?: boolean;
    }
    export default IComboBoxState;
}
declare module "CommonComponents/Primitive/Flyout/IPosition" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * Represents the position of an element.
     */
    interface IPosition {
        /**
         * The position of the left edge of the flyout.
         */
        left?: number;
        /**
         * The position of the top edge of the flyout.
         */
        top?: number;
        /**
         * The position of the right edge of the flyout (distance to the right edge of the document).
         */
        right?: number;
        /**
         * The position of the bottom edge of the flyout (distance to the bottom edge of the document).
         */
        bottom?: number;
    }
    export default IPosition;
}
declare module "CommonComponents/Primitive/Flyout/ISize" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * Represents the size of an element.
     */
    interface ISize {
        /**
         * Height of an element.
         */
        height?: number;
        /**
         * Maximum height of an element.
         */
        maxHeight?: number;
        /**
         * Width of an element.
         */
        width?: number;
        /**
         * Maximum width of an element.
         */
        maxWidth?: number;
    }
    export default ISize;
}
declare module "CommonComponents/Primitive/Flyout/FlyoutDirection" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * Enum for Flyout Direction
     */
    enum FlyoutDirection {
        left = 0,
        right = 1,
        up = 2,
        down = 3,
        leftup = 4,
        rightup = 5,
        upleft = 6,
        downleft = 7
    }
    export default FlyoutDirection;
}
declare module "CommonComponents/Primitive/Flyout/FlyoutPositionType" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    /**
     * Type of the positioning applied.
     * "absolute" means that the absolute position coordinates were specified and will be used by the component then.
     * "relative" means that "relativeToElementId" was specified, and that element's position will be used to position the component.
     */
    type FlyoutPositionType = "absolute" | "relative";
    export default FlyoutPositionType;
}
declare module "CommonComponents/Primitive/Flyout/IFlyoutProps" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import FlyoutPositionType from "CommonComponents/Primitive/Flyout/FlyoutPositionType";
    import IPosition from "CommonComponents/Primitive/Flyout/IPosition";
    import ISize from "CommonComponents/Primitive/Flyout/ISize";
    import FlyoutDirection from "CommonComponents/Primitive/Flyout/FlyoutDirection";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    /**
     * Represents the properties interface for the flyout control.
     */
    interface IFlyoutProps {
        /**
         * The id to be set to the anchor control if any.
         */
        id?: string;
        /**
         * The role to be added to flyout if any.
         * set role = dialog to constrain the focus in the flyout
         */
        role?: string;
        /**
         * The accessibilityModal to be added to flyout if any.
         * set aria-modal = true to constrain the focus in the flyout
         */
        accessibilityModal?: boolean;
        /**
         * Id of the group the flyout belongs to.
         */
        groupId?: string;
        /**
         * Id of the element the position of the flyout is relative to.
         * Used just when the positionType is set to "relative".
         */
        relativeToElementId?: string;
        /**
         * Runs after the element was found by "relativeToElementId", allows to customize the actual element selected.
         * For example, you can implement custom logic for selecting some of the ancestors, or one of the children of the element found
         * depending on some custom criteria.
         */
        relativeToElementIdSelector?: (element: HTMLElement) => HTMLElement;
        /**
         * Specifies if the flyout positioning is relative to the anchor control, or not.
         */
        positionType?: FlyoutPositionType;
        /**
         * The absolute position of the flyout if applicable.
         */
        position?: IPosition;
        /**
         * The size of the flyout if applicable.
         */
        size?: ISize;
        /**
         * For a relatively positioned flyout, the direction it must be opening up next to the anchor control.
         */
        flyoutDirection?: FlyoutDirection;
        /**
         * Indicates whether consumer wants to enforce the chosed direction of opening the flyout,
         * otherwise some smart decision-making is used to improve the flyout placement
         * when there is no enough room available in the specified direction.
         * "false" by default.
         */
        enforceDirection?: boolean;
        /**
         * User-defined styles for the flyout.
         */
        flyoutStyle?: IViewStyle;
        /**
         * React element key for the flyout
         */
        key?: string;
        /**
         * Triggers when user clicks outside of the flyout group.
         */
        onOutsideClick?: (e: MouseEvent) => void;
        /**
         * Test hooks for UCI test automation infrastructure. Adds attributes to the element
         * using hookNames with "data-" prepended to them as the attribute names, and the values
         * as the attribute values.
         */
        testhooks?: {
            [hookName: string]: string;
        };
        /**
         * custom control Id if a child of a parent custom control
         */
        parentCustomControlId?: string;
        /**
         * A callback to focus an element within the flyout
         */
        focusCallback?: (elemntId: string) => void;
        /**
         * The requested element to focus on post render
         */
        focusElementId?: string;
        /**
         * Indicates whether this flyout needs to recalculate position dynamically
         */
        hasDynamicContent?: boolean;
        /**
         * A parent flyout, if this one's root is nested within a different flyout
         */
        parentFlyoutRoot?: string;
        /**
         * Should the root of this flyout have a z-index
         */
        rootZIndex?: boolean;
        /**
         * In current case, all flyout on dialog will portal to dialog container
         */
        isPortalToElement?: boolean;
        /**
         * the container Id that flyout on dialog is going to portal to
         */
        portalContainerId?: string;
        /**
         * Whether the control should be tracking the onscroll event
         */
        enableTrackOnScroll?: boolean;
        /**
         * Whether dismiss on scroll should be activated
         */
        dismissOnScroll?: boolean;
        /**
         * Whether this flyout should ignore a blur of the window and stay open
         */
        keepOpenOnWindowBlur?: boolean;
    }
    export default IFlyoutProps;
}
declare module "CommonComponents/Primitive/Flyout/Utils" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import IPosition from "CommonComponents/Primitive/Flyout/IPosition";
    import ISize from "CommonComponents/Primitive/Flyout/ISize";
    import FlyoutDirection from "CommonComponents/Primitive/Flyout/FlyoutDirection";
    interface FlyoutCalculatedInformation {
        Position: IPosition;
        Direction: FlyoutDirection;
    }
    /**
     * Returns the position of the viewport.
     */
    function getDocumentViewportOffset(): IPosition;
    /**
     * Returns the actual document (scrollable) content size.
     */
    function getDocumentContentSize(): ISize;
    /**
     * Returns the full size of the given element (as if it has no content overflow).
     */
    function getElementFullSize(element: HTMLElement): ISize;
    /**
     * Calculates the clipping of the given position+size against the document viewport.
     */
    function calculateClipping(position: IPosition, size: ISize, documentSize?: ISize, documentOffset?: IPosition): ISize;
    /**
     * Returns maximum flyout size within window's bounds
     * @param position
     * @param documentSize
     * @param documentOffset
     * @returns {ISize}
     */
    function calculateMaximumSize(position: IPosition, documentSize?: ISize, documentOffset?: IPosition): ISize;
    /**
     * Returns true when flyout is out of range of container
     * @param flyoutNode
     * @param container
     * @returns {boolean}
     */
    function isOutOfRange(flyoutNode: HTMLElement, container: HTMLElement): boolean;
    /**
     * Calculates the preferred position for the flyout.
     * @param size forced size of the flyout, could be empty.
     * @param preferredDirection the preferred direction that will be used if no room limitations encountered.
     * @param anchorElement the element used to position the flyout against.
     */
    function calculateFlyoutPreferredPosition(size: ISize, preferredDirection: FlyoutDirection, anchorElement?: HTMLElement, secondaryPreferred?: FlyoutDirection): FlyoutCalculatedInformation;
    /**
     * Calculates the position for a relatively positioned flyout.
     */
    function calculateFlyoutPosition(size: ISize, flyoutDirection: FlyoutDirection, anchorElement?: HTMLElement): IPosition;
    /**
     * Returns true if the given element has or could have a scroll bar.
     */
    function isScrollable(element: HTMLElement): boolean;
    /**
     * Returns the list of the scrollable ancestors for the given element.
     */
    function getScrollableAncestors(element: HTMLElement, topParent: HTMLElement): HTMLElement[];
    export { FlyoutCalculatedInformation, calculateFlyoutPosition, calculateFlyoutPreferredPosition, calculateClipping, calculateMaximumSize, isScrollable, isOutOfRange, getScrollableAncestors, getDocumentViewportOffset, getElementFullSize, getDocumentContentSize, };
}
declare module "CustomControls/Components/Helpers/CustomControlFlyoutParentHelper" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    class CustomControlFlyoutParentHelper {
        private static _instance;
        private _parentFlyoutNameToChildRootNameMap;
        static getInstance(): CustomControlFlyoutParentHelper;
        mountChildFlyout(parentKey: string, childKey: string): void;
        unmountChildFlyout(parentKey: string, childKey: string): boolean;
        getChildRoots(parentKey: string): string[];
    }
    export { CustomControlFlyoutParentHelper };
}
declare module "CommonComponents/Primitive/Flyout" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import IPosition from "CommonComponents/Primitive/Flyout/IPosition";
    import ISize from "CommonComponents/Primitive/Flyout/ISize";
    import FlyoutDirection from "CommonComponents/Primitive/Flyout/FlyoutDirection";
    import FlyoutPositionType from "CommonComponents/Primitive/Flyout/FlyoutPositionType";
    import IFlyoutProps from "CommonComponents/Primitive/Flyout/IFlyoutProps";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { InnerView } from "CommonComponents/Primitive/View";
    const FLYOUT_ROOT_NODE_ID = "__flyoutRootNode";
    global {
        interface Window {
            MSStream: any;
        }
    }
    /**
     * Flyout control that includes an anchor element (which triggers the flyout)
     * and rendering of the flyout itself as well.
     */
    class InnerFlyout extends React.Component<IFlyoutProps, {}> {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        /**
         * The reference to rendered root container for the flyout element group.
         */
        protected rootNode: HTMLDivElement;
        /**
         * The reference to rendered immediate parent container for the flyout (used for service purposes only).
         */
        protected parentFlyoutNode: HTMLDivElement;
        /**
         * A cached list of scrollable ancestors.
         * Needed by the flyout to track the scroll positions of all the relative
         * element parents, so that scrolling them move the flyout accordingly.
         */
        private _scrollableAncestors;
        /**
         * Actual pixel size of a rendered flyout.
         */
        private _actualSize;
        /**
         * The reference to rendered flyout container, used for unit-testing purposes only.
         */
        private _flyoutElement;
        /**
         * Subscriber object to store callback functions for re-measuring service need
         */
        private _measuringSubscriber;
        /**
         * Subscriber object to store callback functions for FlyoutPopupManager need
         */
        private _managerSubscriber;
        /**
         * The last direction in which a flyout displayed itself. Give preference to this direction if possible
         */
        private _lastDirection;
        /**
         * Returns the flyout element if rendered. Needed for unit-testing purposes only.
         */
        readonly flyoutElement: HTMLElement;
        /**
         * Indicates whether the flyout has already been shown.
         */
        private _isFlyoutShown;
        /**
         * Indicates whether the flyout is inside of ancestor's visible range
         */
        private _isOutOfRange;
        /**
         * Whether this flyout has already attempted a focus on an inner requested element
         */
        private _wasInnerFocusRequested;
        /**
         * Indicates how many popups are currently shown
         */
        private _seeMorePopupCount;
        /**
         * Handles the event of resizing the ancestor of the relative-dependency element.
         * @param e
         */
        private _resizeHandler;
        /**
         * Handles the event of scrolling the ancestor of the relative-dependency element.
         * @param e
         */
        private _scrollHandler;
        constructor(props: IFlyoutProps);
        /**
         * Returns the composite identifier for the root container of the flyout group.
         */
        protected getFlyoutRootId(): string;
        /**
         * React life-cycle method, get called once right after the component is added to the virtual DOM.
         */
        componentDidMount(): void;
        /**
         * Generates the flyout Id
         */
        static generateFlyoutId(parentCustomControlId: string, groupId: string): string;
        componentDidUpdate(): void;
        /**
         * Component will unmount lifecycle method. Cleaning everything from DOM that we might have left.
         */
        componentWillUnmount(): void;
        /**
         * Returns the element the flyout must be relative to.
         */
        private _getRelativeElement;
        /**
         * Calculates the position-related styles for the flyout element.
         */
        protected calculatePosition(): IViewStyle;
        private _updateActualSize;
        /**
         * Makes sure the root node exists in the document DOM.
         */
        protected ensureRootNode(): void;
        protected debouncingFlyoutEvent(handler: () => void, delay?: number): () => void;
        /**
         * Recalculates flyout's position after measuring
         */
        protected handleMeasuring(width: number, height: number): void;
        /**
         * Returns true if the relative positioning is enabled for the flyout.
         */
        protected getIsRelative(): string | true;
        /**
         * Returns true if the absolute positioning is enabled for the flyout.
         */
        protected getIsAbsolute(): true | IPosition;
        /**
         * Method for storing reference to flyout element
         */
        protected setFlyoutRef(view: InnerView): void;
        /**
         * Adds or updates the flyout element in actual DOM.
         */
        protected updateDom(): void;
        protected focusInnerElement(preRenderRequired: boolean): void;
        /**
         * Removes the flyout element from DOM.
         */
        protected removeFromDom(): void;
        /**
         * Reset focus element to originate button.
         */
        protected resetFocus(): void;
        /**
         *
         * @param event
         */
        private _isClickInsideFlyout;
        protected handleOnScroll(event: MouseEvent): void;
        /**
         * Handles a click outside the flyout chain.
         */
        protected handlePointerDown(event: MouseEvent): void;
        /**
         * Handles a blur from window object.
         * We need to handle this event in case if click was made in iframe.
         * Events from iframe do not bubble up, but clicking on iframe will fires
         * blur event on main window object and this will be signal to close flyout.
         */
        protected handleWindowBlur(event: Event): void;
        /**
         * Renders the anchor control for the flyout.
         */
        render(): any;
        private _subscribeFlyoutPopupManager;
    }
    const Flyout: any;
    export { FlyoutPositionType, FlyoutDirection, IPosition, ISize, IFlyoutProps, InnerFlyout, Flyout, FLYOUT_ROOT_NODE_ID, };
    export default Flyout;
}
declare module "CommonComponents/Primitive/IScrollViewStyle" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    /**
     * Styles for a ScrollView component instance
     */
    interface IScrollViewStyle extends IViewStyle {
        borderWidth?: number;
        overflowX?: "hidden" | "scroll";
        overflowY?: "hidden" | "scroll";
    }
    export { IScrollViewStyle };
}
declare module "CommonComponents/Primitive/List" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { IFlexboxContainerStyle } from "CommonComponents/Primitive/IFlexboxContainerStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    import { IAccessibilityNotificationProps } from "CommonComponents/Primitive/IAccessibilityNotificationProps";
    import { ListStyleTypeProperty } from "csstype";
    /**
     * Styles for a List component
     */
    interface IListStyle extends IViewStyle, IFlexboxContainerStyle {
        listStyleType?: ListStyleTypeProperty;
    }
    /**
     * Properties of List component
     */
    interface IListProps extends IPropsBase, IAccessibilityNotificationProps {
        /**
         * Component style properties
         */
        style?: IListStyle;
        /**
         * Accessibility role.
         */
        role?: "list" | "tablist" | "menu" | string;
        /**
         * Callback functions for reference of list
         */
        refCallback?: any;
    }
    /**
     * List component
     */
    class InnerList extends ComponentBase<IListProps, any> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        constructor(props: IListProps);
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the class name for the underlying element.
         * @param style the style to be applied to the underlying component, used for readout here.
         */
        protected getFlexClassName(style: React.CSSProperties): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
        /**
         * Triggers the callback function of the list reference.
         * @param list the list reference
         */
        private _refCallbackTrigger;
        /**
         * Returns the specific style for the underlying element.
         */
        protected getElementStyle(): React.CSSProperties;
    }
    const List: any;
    export { IListStyle, IListProps, InnerList, List };
}
declare module "CommonComponents/Primitive/ScrollView" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IScrollViewStyle } from "CommonComponents/Primitive/IScrollViewStyle";
    import { IFlexboxContainerStyle } from "CommonComponents/Primitive/IFlexboxContainerStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Props for a ScrollView component instance
     */
    interface IScrollViewProps extends IPropsBase {
        /**
         * This function is called on click.
         * @param  React.MouseEvent
         */
        onClick?: React.MouseEventHandler;
        /**
         * This function is called when scrolling to the bottom.
         */
        onScrollToBottom?: any;
        /**
         * View's children arrangement.
         * @set to true when need to be rendered horizontally
         */
        horizontal?: boolean;
        /**
         * Styles for ScrollView child component
         */
        contentContainerStyle?: IScrollViewStyle & IFlexboxContainerStyle;
        /**
         * Styles for View component
         */
        style?: IScrollViewStyle & IFlexboxContainerStyle;
        /**
         * Reacts on the scrollview creation and pass as parameter InnerScrollView instance.
         */
        refCallback?: (instance: any) => void;
        /**
         * Semantic tag.
         */
        semanticTag?: "div" | "ul";
        /**
         * The id of the element you want to scroll to
         */
        scrollToId?: string;
        /**
         * Is right-to-left language
         */
        isRTL?: boolean;
        /**
         * Whether this control is contained within a top most see more popup
         */
        isWithinATopMostSeeMore?: boolean;
        /**
         * Defines class names that will be added before rendering
         */
        className?: string;
    }
    class InnerScrollView extends ComponentBase<IScrollViewProps, any> {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        private _scrollViewRef;
        private _ua;
        constructor(props: IScrollViewProps);
        componentDidUpdate(preProps: IScrollViewProps): void;
        componentDidMount(): void;
        /**
         * Set scrollLeft
         * @param scrollParent
         * @param scrollToElement
         */
        private _scrollToContentHorizontalLTR;
        /**
         * In case of RTL for IE the value needs to be reversed
         * @param scrollParent
         * @param scrollToElement
         */
        private _scrollToContentHorizontalRTLIEorEdge;
        private _scrollToContent;
        private _isIEorEdge;
        private _isMobileSafari;
        /**
         * Handler for onClick event
         */
        private _onClickHandler;
        /**
         * Handler for onScroll event
         */
        private _onScrollHandler;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
        /**
         * Scrolls the viewport to the position of the given component so that it becomes visible.
         */
        scrollToChild(child: React.Component<any, any> | Element): void;
        private _setInnerViewRef;
        /**
         * Returns the class name for the underlying element.
         * @param style the style to be applied to the underlying component, used for readout here.
         */
        protected getFlexClassName(style: React.CSSProperties): string;
        /**
         * Returns the class name for the underlying element.
         */
        protected getElementClassName(): string;
    }
    const ScrollView: any;
    export { IScrollViewProps, InnerScrollView, ScrollView };
}
declare module "CustomControls/Components/Helpers/CustomControlLocHelper" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    interface IControlInfraStrings {
        ERROR_LOADING_CONTROL?: string;
        VALIDATION_FAILED_EMAIL?: string;
        VALIDATION_FAILED_BOOL?: string;
        VALIDATION_FAILED_DATE?: string;
        VALIDATION_FAILED_NUM?: string;
        VALIDATION_FAILED_INT?: string;
        VALIDATION_FAILED_RANGE?: string;
        SELECT_TO_ENTER_DATA?: string;
    }
    function getLocalizedString(key: keyof IControlInfraStrings): string;
    function updateLocStrings(newStrings: IControlInfraStrings): void;
    function resetStrings(): void;
    export { IControlInfraStrings, getLocalizedString, updateLocStrings, resetStrings };
}
declare module "CommonComponents/Primitive/TextInput" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import { IViewHtmlStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Enum for keyboardType values.
     * @readonly
     */
    enum KeyboardType {
        default = 0,
        emailAddress = 1,
        numeric = 2,
        phonePad = 3,
        asciiCapable = 4,
        numbersAndPunctuation = 5,
        url = 6,
        numberPad = 7,
        namePhonePad = 8,
        decimalPad = 9,
        twitter = 10,
        webSearch = 11
    }
    interface ITextInputStyle extends ITextStyle {
        direction?: "ltr" | "rtl";
        unicodeBidi?: string;
    }
    /**
     * Props for a TextInput component instance
     *
     * @interface
     */
    interface ITextInputProps extends IPropsBase {
        /**
         * Unique identifier of component instance
         */
        id?: string;
        /**
         * Input type for the TextInput control.
         */
        type?: string;
        /**
         * The type of keyboard for user input
         */
        keyboardType?: KeyboardType;
        /**
         * Initial value for the component
         */
        value?: string;
        /**
         * Title attribute for tool tip
         */
        title?: string;
        /**
         * Makes component editable or readonly
         */
        readOnly?: boolean;
        /**
         * Implement rtl for TextInput
         */
        isRTL?: boolean;
        /**
         * Renders textarea or text input
         */
        multiline?: boolean;
        /**
         * Placeholder value
         */
        placeholder?: string;
        /**
         * Maximum length of user entered value
         */
        maxLength?: number;
        /**
         * Indicates whether the component is disabled for user input or not
         */
        disabled?: boolean;
        /**
         * Number of rows for multiline text box to show.
         */
        rows?: number;
        /**
         * If set to `true` selects the whole value of the input element when `focus` event happens.
         */
        selectValueOnFocus?: boolean;
        /**
         * OnChange event callback
         * @param {React.FormEvent} event - Synthetic React event object
         */
        onChange?: React.FormEventHandler;
        /**
         * OnChangeText event callback, hooks to onChange event
         * @param text - New text value
         */
        onChangeText?: (text: string) => void;
        /**
         * OnKeyPress event callback
         * @param {React.KeyboardEvent} event - Synthetic React event object
         */
        onKeyPress?: React.KeyboardEventHandler;
        /**
         * React style to be transformed to CSS style
         */
        style?: ITextInputStyle & IViewHtmlStyle;
        /**
         * Assistive marker, indicates whether user input completion suggestions are provided. (aria-autocomplete)
         */
        autoComplete?: "none" | "inline" | "list" | "both";
        /**
         * Test hooks for UCI test automation infrastructure.
         * Adds "data-" attributes to the element using the provided suffix and attribute value.
         */
        testhooks?: {
            [hookName: string]: string;
        };
        /**
         * Callback functions for reference of text input
         */
        refCallback?: any;
    }
    /**
     * TextInput component state
     *
     * @interface
     */
    interface ITextInputState {
        /**
         * Current value of the component
         */
        value?: string;
    }
    /**
     * TextInput component
     *
     * @class
     */
    class InnerTextInput extends ComponentBase<ITextInputProps, ITextInputState> {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        /**
         * Minimum number of rows that should be displayed by the textarea.
         */
        private static _MIN_TEXTAREA_ROWS;
        /**
         * only store dateInput due to the clear button refer's to its default value
         */
        private _dateInput;
        private _compositionEvents;
        /**
         * TextInput constructor
         * @param [props] Component props
         * @param [context] Component context
         */
        constructor(props?: ITextInputProps, context?: any);
        /**
         * Invoked when the component receiving new props
         * @param nextProps
         */
        componentWillReceiveProps(nextProps: ITextInputProps): void;
        private _selectValue;
        /**
         * TextInput.onChange & TextInput.onChangeText events handler
         * @param e Synthetic React event
         */
        private _onChange;
        /**
         * TextInput.onChange & TextInput.onChangeText events handler
         * @param e Synthetic React event
         */
        private _onInput;
        private _onCompositionStart;
        private _onCompositionUpdate;
        private _onCompositionEnd;
        /**
         * Invoke onChange / onChangeText handler supplied by control
         * @param e Synthetic React event
         */
        private _handleOnChange;
        /**
         * TextInput.onSubmitEditing event handler
         * @param e Synthetic React event
         */
        private _onKeyPress;
        /**
         * TextInput.onFocus event handler
         * @param e Synthetic React event
         */
        protected handleFocus(e: React.FormEvent): number;
        /**
         * TextInput.onBlur event handler
         * @param e Synthetic React event
         */
        protected handleBlur(e: React.FormEvent): void;
        /**
         * Handles the onPointerDown event.
         */
        protected handlePointerDown(e: React.MouseEvent): void;
        /**
         * Handles the onPointerUp event.
         */
        protected handlePointerUp(e: React.MouseEvent): void;
        /**
         * Handles the keydown event.
         */
        protected handleKeyDown(e: React.KeyboardEvent): void;
        /**
         * Handles the keyup event.
         */
        protected handleKeyUp(e: React.KeyboardEvent): void;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
        private _refElementCallback;
        /**
         * Triggers the callback function of the text input reference.
         * @param input the text input reference
         */
        private _refCallbackTrigger;
    }
    const TextInput: any;
    export { KeyboardType, ITextInputStyle, ITextInputState, ITextInputProps, InnerTextInput, TextInput };
}
declare module "CommonComponents/Primitive/ComboBox" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { KeyCode } from "CommonComponents/Supplementary/Accessibility/KeyCode";
    import IComboBoxOption from "CommonComponents/Primitive/ComboBox/IComboBoxOption";
    import IComboBoxProps from "CommonComponents/Primitive/ComboBox/IComboBoxProps";
    import IComboBoxState from "CommonComponents/Primitive/ComboBox/IComboBoxState";
    import { ComponentBase } from "CommonComponents/Primitive/ComponentBase";
    import { InnerListItem } from "CommonComponents/Primitive/ListItem";
    import { InnerScrollView } from "CommonComponents/Primitive/ScrollView";
    import { ITextStyle, InnerText } from "CommonComponents/Primitive/Text";
    import { InnerView } from "CommonComponents/Primitive/View";
    /**
     * Component representing an combobox base control
     */
    class InnerComboBox<ICBProps extends IComboBoxProps, ICBState extends IComboBoxState> extends ComponentBase<ICBProps, ICBState | IComboBoxState> {
        static supportedKeys: KeyCode[];
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        /**
         * The default amount of items visible within drop-down viewport at once.
         */
        static DEFAULT_PAGE_SIZE: number;
        /**
         * Colors
         * For color names see UCI repo src/features/themes/src/themes/BaseColorTheme.ts -> baseColorTheme
         * @type {{Grey1: string; Grey2: string; Grey7: string}}
         */
        static COLORS: {
            Grey1: string;
            Grey2: string;
            Grey3: string;
            Grey5: string;
            Grey7: string;
        };
        static SHADOWS: {
            Shadow01: string;
        };
        protected readonly focusableControlId: string;
        /**
         * Internal ID used to uniquely identify the combobox container.
         */
        private _internalIdAppendix;
        /**
         * The temporary variable for holding the dynamic width of the control container.
         */
        private _containerWidth;
        /**
         * The reference to the container instance.
         */
        private _container;
        /**
         * The reference to the Text Input instance.
         */
        private _textInput;
        /**
         * The reference to the Text instance.
         */
        private _text;
        /**
         * Whether this combobx has already attempted a focus on an inner requested element
         */
        private _wasInnerFocusRequested;
        /**
         * The reference to the internal Scroll View instance.
         */
        protected scrollView: InnerScrollView;
        /**
         * The reference to the currently selected list item instance.
         */
        protected selectedListItem: InnerListItem;
        /**
         *  boolean to track if the mouse click was outsode the flyout
        .*. Need for IE 11 as scroll bar click triggers OnBlur event
         */
        protected clickedOutside: boolean;
        /**
         *  boolean to track if the mouse click was outsode the flyout
        .*. Need for IE 11 as scroll bar click triggers OnBlur event
         */
        protected keyboardScrolling: boolean;
        /**
         * The selected option Index
         */
        protected selectedIndex: number;
        constructor(props?: ICBProps, context?: any);
        /**
         * Returns the unique ID for the internal container.
         * @param sourceId the initial ID of the component set by the consumer.
         * @param internalIdAppendix the appendix to the ID that makes it unique
         */
        protected getInternalId(sourceId?: string, internalIdAppendix?: string): string;
        /**
         * Returns the ID for the internal List component.
         * @param sourceId the initial ID of the component set by the consumer.
         * @param internalIdAppendix the appendix to the ID that makes it unique
         */
        protected getListId(sourceId?: string, internalIdAppendix?: string): string;
        /**
         * Returns the ID for the internal empty List component.
         */
        protected readonly getEmptyListId: string;
        /**
         * Returns the ID of a list-item DOM element.
         * @param option
         */
        protected getListItemId(option: IComboBoxOption): string;
        /**
         * Returns the ID for the internal Flyout component.
         * @param sourceId the initial ID of the component set by the consumer.
         * @param internalIdAppendix the appendix to the ID that makes it unique
         */
        protected getFlyoutId(sourceId?: string, internalIdAppendix?: string): string;
        /**
         * Returns the unique ID for the Button component.
         * @param sourceId the initial ID of the component set by the consumer.
         * @param internalIdAppendix the appendix to the ID that makes it unique
         */
        protected getButtonId(sourceId?: string, internalIdAppendix?: string): string;
        /**
         * Specifies the call back for handling onScroll event of the flyout.
         */
        protected onFlyoutScroll(): void;
        /**
         * Returns the ID of the currently selected active list item.
         */
        protected getActiveDescendantId(): string;
        /**
         * Returns the current drop-down size.
         */
        protected getPageSize(): number;
        /**
         * Returns options that should be selected after initialization
         * @param props - ComboBox props
         */
        private _getInitialStateOption;
        /**
         * Returns IComboBoxOption from options collection by value
         * Returns undefined if there are two or more options with same value
         * @param options - options collection
         * @param value - value to search
         */
        protected getOptionByValue(options: Array<IComboBoxOption>, value: string): IComboBoxOption;
        /**
         * Invoked when the component receiving new props
         * @param nextProps
         */
        componentWillReceiveProps(nextProps: ICBProps): void;
        /**
         * Returns true if the given value differs from the current one.
         */
        private _getIfValueChanged;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
        /**
         * Returns the children of the element.
         */
        protected getElementChildren(): React.ReactNode;
        /**
         * A shorthand for setting the expanded state.
         * @param isExpanded
         */
        setIsExpanded(isExpanded: boolean): void;
        /**
         * A shorthand for toggling the expanded state.
         */
        private _toggleIsExpanded;
        /**
         * Sets the focus to the control.
         */
        setFocus(): void;
        /**
         * Resets the selected index to the one that corresponds to the current value.
         */
        private _resetSelectedIndex;
        /**
         * Sets the current control values and state in accordance to the given value.
         */
        protected setCurrentItemByValue(value: string, changeValue?: boolean): void;
        /**
         * Sets the current control values and state in accordance to the given item index.
         */
        private _setCurrentItemByVisibleIndex;
        protected handleKeyDown(event: KeyboardEvent): void;
        /**
         * Returns the array of items which are currently visible and selectable via the drop-down.
         */
        getVisibleOptions(state?: IComboBoxState, options?: IComboBoxOption[]): IComboBoxOption[];
        /**
         * Returns an array of items with text that is the exact match to the given one.
         */
        private _searchOptions;
        /**
         * Reacts on the container instance creation.
         */
        protected saveContainerRef(ref: InnerView): void;
        /**
         * Handles the event of mounting a list-item within the dropdown.
         * @param component list item mounted
         */
        protected saveItemRef(item: InnerListItem): void;
        /**
         * Saves the instance of the internal Text Input.
         */
        private _saveTextInputRef;
        /**
         * Saves the instance of the internal Text readable element.
         */
        protected saveTextRef(ref: InnerText): void;
        /**
         * Updates the cached width of the container.
         */
        private _updateContainerWidth;
        /**
         * ComboBox.onChange event handler
         * @param e Synthetic React event
         */
        protected handleValueChange(valueNew: string): void;
        /**
         * Handles the event of selecting an item in a drop-down.
         * @param item the item being selected
         */
        protected handleItemSelected(item: InnerListItem): void;
        /**
         * Invoked on a drop-down item click.
         */
        protected handleItemPointerDown(e: React.MouseEvent): void;
        /**
         * Invoked on mouse hover over a drop-down item.
         * @param e
         */
        protected handleItemHover(e: React.MouseEvent): void;
        /**
         * Invoked when user changes the content of the text input.
         */
        private _handleTextInputChange;
        /**
         * Invoked when user clicks the readonly text control in the main area.
         */
        protected handleTextPointerDown(e: React.MouseEvent): void;
        /**
         * Invoked when user clicks the drop-button in the main area.
         * @param e
         */
        private _handleButtonClick;
        /**
         * Handle arrow up key
         * @param amount pages
         */
        protected handleArrowUp(amount: number): void;
        /**
         * Handle arrow down key
         * @param _e The keyboard event
         * @param amount pages
         */
        protected handleArrowDown(_e: KeyboardEvent, amount: number): void;
        private _handleMove;
        setFocusToItem: (elementId: string) => void;
        /**
         * set focus to item
         * @param elementId
         */
        protected selectItem(elementId: string): void;
        /**
         * TextInput.onBlur event handler
         * @param e Synthetic React event
         */
        protected handleBlur(e: React.FormEvent): void;
        /**
         * Invoked when user presses the Enter key.
         */
        protected handleEnterKey(e: KeyboardEvent): void;
        protected handleTabKey(e: KeyboardEvent): void;
        /**
         * Invoked when user requests expanding the drop-down with the keyboard.
         */
        protected handleKeyboardExpandRequest(): void;
        /**
         * Handles the event of a click outside a flyout.
         */
        protected handleFlyoutOutsideClick(e: React.MouseEvent): void;
        /**
         * Invoked when the control receives focus.
         */
        protected handleInnerControlFocus(): void;
        /**
         * Invoked when the control loses focus.
         */
        protected handleInnerControlBlur(): void;
        private _resetSelectedListItem;
        /**
         * A helper selector used to get the proper container for the flyout to be
         * relative to.
         */
        protected handleRelativeToElementSelector(element: HTMLElement): HTMLElement;
        /**
         * Performs options props array to React.Component mapping
         * @param optionsProps options props array
         */
        protected renderOptionsList(options?: Array<IComboBoxOption>): JSX.Element;
        /**
         * Renders the flyout.
         */
        protected renderFlyout(isRTL?: boolean): JSX.Element;
        /**
         * Renders the text input with the given ID.
         */
        private _renderTextInput;
        /**
         * Gets styles for text only component
         */
        protected getTextOnlyStyle(): ITextStyle;
        /**
         * Gets empty list component
         */
        private _getEmptyList;
        /**
         * Gets ineer component for TextOnly component
         */
        protected getTextOnlyInnerComponent(valueId: string): JSX.Element;
        /**
         * Renders the read-only text holder with the given ID.
         */
        protected renderTextOnly(controlId: string, testHooks?: any): JSX.Element;
        /**
         * Returns text of selected option
         */
        protected getSelectedOptionText(): string;
        /**
         * Returns value of selected option
         */
        protected getSelectedOptionValue(): string;
        /**
         * Renders the drop-down button.
         */
        private _renderDropDownButton;
        /**
         * React control render method.
         */
        render(): JSX.Element;
        protected calculateWidth(): number | string;
        protected static getListItemStyle(): {
            flex: string;
            cursor: string;
            padding: string;
            ":hover": {
                backgroundColor: string;
                color: string;
            };
        };
        protected keyboardNavigation: (event: KeyboardEvent) => void;
        protected static getSelectedItemStyle(): {
            backgroundColor: string;
            color: string;
        };
    }
    const ComboBox: any;
    export { IComboBoxOption, IComboBoxProps, IComboBoxState, InnerComboBox, ComboBox };
}
declare module "CommonComponents/Primitive/Hyperlink" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Styles for a Hyperlink component
     */
    interface IHyperlinkStyle extends ITextStyle {
        cursor?: "pointer" | string;
        color?: string;
    }
    /**
     * The type of a Hyperlink's target attribute.
     */
    type ITargetType = "_blank" | "_self" | "_parent" | "_top";
    /**
     * Properties of Hyperlink component
     */
    interface IHyperlinkProps extends IPropsBase {
        /**
         * Href attribute for Hyperlink component
         * @default "#"
         */
        href?: string;
        /**
         * Target attribute for Hyperlink component
         */
        target?: ITargetType;
        /**
         * Styles for Hyperlink component
         */
        style?: IHyperlinkStyle;
    }
    /**
     * Hyperlink component
     */
    class InnerHyperlink extends ComponentBase<IHyperlinkProps, any> {
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
    }
    const Hyperlink: any;
    export { IHyperlinkStyle, ITargetType, IHyperlinkProps, InnerHyperlink, Hyperlink };
}
declare module "CommonComponents/Primitive/Image" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IFlexboxStyle } from "CommonComponents/Primitive/IFlexboxStyle";
    import { IFlexboxItemStyle } from "CommonComponents/Primitive/IFlexboxItemStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    import { GlobalsNumber, OverflowProperty, VerticalAlignProperty } from "csstype";
    /**
     * Props for a Image component instance
     */
    interface IImageProps extends IPropsBase {
        /**
         * Gets or sets image source
         */
        source?: string;
        /**
         * Gets or sets id of Switch component
         */
        style?: IImageStyle & IFlexboxItemStyle;
        /**
         * A text describing the content of the image
         */
        altText?: string;
        /**
         * Callback that is invoked when load either succeeds or fails
         */
        onLoad?(): void;
    }
    /**
     * Style props for image component
     */
    interface IImageStyle extends IFlexboxStyle {
        backgroundColor?: string;
        borderColor?: string;
        borderRadius?: number | string;
        borderWidth?: number | string;
        opacity?: GlobalsNumber;
        overflow?: OverflowProperty;
        verticalAlign?: VerticalAlignProperty<string | number>;
        horizontalAlign?: string;
    }
    /**
     * Component representing an image base control
     */
    class InnerImage extends ComponentBase<IImageProps, any> {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        constructor(props: IImageProps);
        /**
         * Handler for onLoad event
         */
        private _onLoad;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
    }
    const Image: any;
    export { IImageStyle, IImageProps, InnerImage, Image };
}
declare module "CommonComponents/Primitive/IFrame" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IFlexboxStyle } from "CommonComponents/Primitive/IFlexboxStyle";
    import { IFlexboxItemStyle } from "CommonComponents/Primitive/IFlexboxItemStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Props for a View component instance
     */
    interface IIFrameProps extends IPropsBase {
        /**
         * Gets or sets webpage source
         */
        src?: string;
        /**
         * Component style
         */
        style?: IIFrameStyle & IFlexboxItemStyle;
        /**
         * Indicates whether display scroll bar
         */
        scrolling?: string;
        /**
         * The key of component
         */
        key?: string;
        /**
         * Indicates whether allow to navigate away from iframe
         */
        security?: string;
        /**
         * The title of component
         */
        title?: string;
        /**
         * Specifies a feature policy for the <iframe>.
         */
        allow?: string;
        /**
         * Callback that is invoked when load either succeeds or fails
         */
        onLoad?(): void;
        /**
         * Callback that is invoked when iframe sends a postMessage event
         */
        onMessage?(event: MessageEvent): void;
        /**
         * Method to register handler for sending messages
         */
        registerSendMessageHandler?(handler: (message: any) => void): void;
        /**
         * The onreadystatecomplete callback for xrm systems
         */
        onReadyStateComplete?(): void;
    }
    /**
     * Style props for iframe component
     */
    interface IIFrameStyle extends IFlexboxStyle {
        border?: string;
        backgroundColor?: string;
        borderColor?: string;
        borderRadius?: number | string;
        opacity?: number;
        overflow?: "visible" | "hidden";
    }
    class InnerIFrame extends ComponentBase<IIFrameProps, any> {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        /**
         * The underlying iframe element
         */
        private _iframeElement;
        /**
         * The origin, derived from src
         */
        private _origin;
        /**
         * Receive message handler
         */
        private _receiveMessageHandler;
        /**
         * Constructor for IFrame
         */
        constructor(props: IIFrameProps);
        /**
         * Standardizes url into this format: http://domain.com:80
         */
        private _normalizeUrl;
        /**
         * Handler for onLoad event
         */
        private _onLoad;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.IframeHTMLAttributes<Element> & {
            ref?: (r: any) => void;
        };
        /**
         * Invoked when the component is receiving new props
         */
        componentWillReceiveProps(): void;
        /**
         * Remove all event handlers
         */
        private _resetEventHandlers;
        /**
         * Register the iframe dom element and attach event handlers
         */
        private _registerIframeElement;
        /**
         * Component will unmount lifecycle method. Cleaning listeners here
         */
        componentWillUnmount(): void;
        /**
         * Handler for postMessage events
         */
        private _receiveMessage;
        /**
         * Handler for sending messages to the child iframe
         */
        private _sendMessage;
    }
    const IFrame: any;
    export { IIFrameStyle, IIFrameProps, InnerIFrame, IFrame };
}
declare module "CommonComponents/FontIcon/CrmIconSymbol" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     *
     * IMPORTANT!
     * DO NOT MAKE CHANGES TO THIS FILE - THIS FILE IS GENERATED BY A BUILD TASK
     * IF YOU NEED TO MAKE CHANGES THEY MUST BE MADE IN THE JSON CONFIGURATION FILE
     */
    enum CrmIconSymbol {
        Entity = 0,
        List = 1,
        Account = 2,
        Opportunity = 3,
        Sharepointdocument = 4,
        Dashboard = 5,
        WORKSPACE = 6,
        Lead = 7,
        Contact = 8,
        Activitypointer = 9,
        Drafts = 10,
        Systemuser = 11,
        Letter = 12,
        Salesorder = 13,
        Competitor = 14,
        Task = 15,
        Fax = 16,
        Email = 17,
        Phonecall = 18,
        Contract = 19,
        Quote = 20,
        Incident = 21,
        Campaign = 22,
        Appointment = 23,
        Invoice = 24,
        Knowledgearticle = 25,
        Product = 26,
        Opportunityproduct = 27,
        Queueitem = 28,
        Socialprofile = 29,
        ChevronRight = 30,
        Globe = 31,
        Ticker = 32,
        Duration = 33,
        Timezone = 34,
        Language = 35,
        MultipleUsers = 36,
        Regarding = 37,
        Checklist = 38,
        TwoOptions = 39,
        Currency = 40,
        DateTime = 41,
        OfficeIcon = 42,
        OfficeIconWordFileSharedWithMe = 43,
        OfficeIconWordFileCheckedOut = 44,
        OfficeIconExcelFile = 45,
        OfficeIconExcelFileSharedWithMe = 46,
        OfficeIconExcelFileCheckedOut = 47,
        OfficeIconPowerPointFile = 48,
        OfficeIconPowerPointFileSharedWithMe = 49,
        OfficeIconPowerPointFileCheckedOut = 50,
        OfficeIconOneNoteFile = 51,
        OfficeIconOneNoteFileSharedWithMe = 52,
        OfficeIconOneNoteFileCheckedOut = 53,
        OfficeIconAccessFile = 54,
        OfficeIconAccessFileSharedWithMe = 55,
        OfficeIconAccessFileCheckedOut = 56,
        OfficeIconProjectFile = 57,
        OfficeIconProjectFileSharedWithMe = 58,
        OfficeIconProjectFileCheckedOut = 59,
        OfficeIconVisioFile = 60,
        OfficeIconVisioFileSharedWithMe = 61,
        OfficeIconVisioFileCheckedOut = 62,
        OfficeIconHelpFile = 63,
        OfficeIconHelpFileSharedWithMe = 64,
        OfficeIconHelpFileCheckedOut = 65,
        OfficeIconZipFile = 66,
        OfficeIconZipFileSharedWithMe = 67,
        OfficeIconZipFileCheckedOut = 68,
        OfficeIconSetupFile = 69,
        OfficeIconSetupFileSharedWithMe = 70,
        OfficeIconSetupFileCheckedOut = 71,
        OfficeIconVideoFile = 72,
        OfficeIconVideoFileSharedWithMe = 73,
        OfficeIconVideoFileCheckedOut = 74,
        OfficeIconImageFile = 75,
        OfficeIconImageFileSharedWithMe = 76,
        OfficeIconImageFileCheckedOut = 77,
        OfficeIconAudioFile = 78,
        OfficeIconAudioFileSharedWithMe = 79,
        OfficeIconAudioFileCheckedOut = 80,
        OfficeIconExecutableFile = 81,
        OfficeIconExecutableFileSharedWithMe = 82,
        OfficeIconExecutableFileCheckedOut = 83,
        OfficeIconPdfFile = 84,
        OfficeIconPdfFileSharedWithMe = 85,
        OfficeIconPdfFileCheckedOut = 86,
        OfficeIconWebFile = 87,
        OfficeIconWebFileSharedWithMe = 88,
        OfficeIconWebFileCheckedOut = 89,
        OfficeIconTextFile = 90,
        OfficeIconTextFileSharedWithMe = 91,
        OfficeIconTextFileCheckedOut = 92,
        OfficeIconFolder = 93,
        OfficeIconFolderSharedWithMe = 94,
        OfficeIconFolderCheckedOut = 95,
        OfficeIconGenericFile = 96,
        OfficeIconGenericFileSharedWithMe = 97,
        OfficeIconGenericFileCheckedOut = 98,
        Timer = 99,
        ScanBarcodeButton = 100,
        Goal = 101,
        Metric = 102,
        Report = 103,
        SalesLiterature = 104,
        Connection = 105,
        CustomerAddress = 106,
        Position = 107,
        TransactionCurrency = 108,
        Team = 109,
        Service = 110,
        ServiceAppointment = 111,
        Equipment = 112,
        PriceLevel = 113,
        GoalRollUpQuery = 114,
        UoMSchedule = 115,
        DiscountType = 116,
        Territory = 117
    }
    function getSymbolMapping(type: CrmIconSymbol): string;
    export { CrmIconSymbol, getSymbolMapping };
}
declare module "CommonComponents/FontIcon/CrmIcon" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IFontIconProps, FontIcon } from "CommonComponents/Primitive/FontIcon";
    import { CrmIconSymbol } from "CommonComponents/FontIcon/CrmIconSymbol";
    class InnerCrmIcon extends FontIcon<CrmIconSymbol> {
        getSymbolClassName(type: CrmIconSymbol): string;
    }
    const CrmIcon: any;
    export { InnerCrmIcon, CrmIcon, IFontIconProps };
}
declare module "CommonComponents/FontIcon/EntityIconSymbol" {
    function getSymbolMappingByTypeName(name: string): string;
    export { getSymbolMappingByTypeName };
}
declare module "CommonComponents/FontIcon/EntityIcon" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IFontIconProps, FontIcon } from "CommonComponents/Primitive/FontIcon";
    class InnerEntityIcon extends FontIcon<string> {
        getSymbolClassName(name: string): string;
    }
    const EntityIcon: any;
    export { InnerEntityIcon, EntityIcon, IFontIconProps };
}
declare module "CommonComponents/Primitive/LivePersonaCardHoverTarget" {
    import { IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Properties of LivePersonCard primitive
     */
    interface ILivePersonaCardHoverTargetProps extends IPropsBase {
        /**
         * Name to be displayed at the top of the card
         */
        displayName: string;
        /**
         * Email address used by the loki service in order to fetch relevant information for the card.
         */
        emailAddress?: string;
        /**
         * Mscrm.EntityReference information.
         */
        entityReference: any;
        /**
         * Persona type: User | External
         */
        personaType: string;
        /**
         * Id of dom element that will be wrapped by the onKeyDown handler in order to display the card
         */
        onKeyDownContainerId: string;
        /**
         * UCI record id used for the dataCallback.
         */
        recordId: string;
        /**
         * Register callback for checking the status of the lpc library initialization
         */
        registerHasLivePersonaCardLoadedCallback?: (hasLivePersonaCardLoaded: () => boolean) => void;
        /**
         * Registers the provided callback to the parent context. Used to open the card using keyboard navigation by the container that's
         * rendering the hover target.
         */
        registerOpenCardCallback: (openCardCallback: () => void) => void;
    }
    const LivePersonaCardHoverTarget: any;
    export { ILivePersonaCardHoverTargetProps, LivePersonaCardHoverTarget };
}
declare module "CommonComponents/Primitive/Label" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Properties of Label component
     */
    interface ILabelProps extends IPropsBase {
        /**
         * Component style properties
         */
        style?: ITextStyle;
        /**
         * The HTML "for" attribute analogue, here must be the Id of the control the label belongs to
         */
        forElementId?: string;
    }
    /**
     * Label component
     */
    class InnerLabel extends ComponentBase<ILabelProps, any> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
    }
    const Label: any;
    export { ITextStyle, ILabelProps, InnerLabel, Label };
}
declare module "CommonComponents/Primitive/Select/Option" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IPropsBase, ComponentBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Interface representing supported styles for the select's option element.
     */
    interface IOptionStyle {
        /**
         * CSS option's background color
         */
        backgroundColor?: string;
        /**
         * CSS option's text color.
         */
        color?: string;
    }
    /**
     * Interface representing the props for the option element of the select.
     */
    interface IOptionProps extends IPropsBase {
        /**
         * Value object that option element should represent.
         */
        value?: CustomControlInterfaces.ICCFOptionSetValue;
        /**
         * Styles object for the option.
         */
        style?: IOptionStyle;
        /**
         * `true` if option component is disabled.
         */
        disabled?: boolean;
        /**
         * `true` if option is selected.
         */
        selected?: boolean;
    }
    /**
     * Class introducing the select's single option element.
     */
    class InnerOption extends ComponentBase<IOptionProps, any> {
        /**
         * Attribute name for selected option.
         */
        private static _DATA_SELECTED;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
        /**
         * Returns the children of the element.
         * Overrides parent implementation to return props.value.Label as a single child.
         */
        protected getElementChildren(): React.ReactNode;
    }
    const Option: any;
    export { IOptionStyle, IOptionProps, InnerOption, Option };
}
declare module "CommonComponents/Primitive/Select/Select" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IPropsBase, ComponentBase } from "CommonComponents/Primitive/ComponentBase";
    import { IOptionStyle } from "CommonComponents/Primitive/Select/Option";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    /**
     * Style properties supported for Select element.
     */
    interface ISelectStyle extends ITextStyle {
        /**
         * Appearance property allows to dramatically change default select's look.
         */
        appearance?: "none" | string;
    }
    /**
     * Composite style object used by Select component.
     * Contains style for select itself and for the options of that select.
     */
    interface ISelectCompositeStyle {
        /**
         * Style object for select element.
         */
        selectStyle?: ISelectStyle;
        /**
         * Style object that will be applied to each option of the select.
         */
        optionStyle?: IOptionStyle;
    }
    /**
     * Props of the select component.
     */
    interface ISelectProps extends IPropsBase {
        /**
         * List of the options that will be shown in the select component's dropdown.
         */
        options?: CustomControlInterfaces.ICCFSelectSetValue[];
        /**
         * Value of the select.
         * it can be either CustomControlInterfaces.ICCFSelectSetValue or CustomControlInterfaces.ICCFSelectSetValue[]
         */
        value?: any;
        /**
         * Composite style that contains select style and options' style.
         */
        style?: ISelectCompositeStyle;
        /**
         * `true` if component is disabled.
         */
        disabled?: boolean;
        /**
         * `true` if an input can have more than one value.
         */
        multiple?: boolean;
        /**
         * Handler for the `change` event.
         * @param option{any} it can be either CustomControlInterfaces.ICCFSelectSetValue or CustomControlInterfaces.ICCFSelectSetValue[]
         */
        onChange?: (option: any) => void;
        /**
         * Makes component editable or readonly
         */
        readOnly?: boolean;
    }
    /**
     * Internal state of the select component.
     */
    interface ISelectState {
        /**
         * Currently selected value or values of the component.
         * It can be either CustomControlInterfaces.ICCFSelectSetValue or CustomControlInterfaces.ICCFSelectSetValue[]
         */
        value: any;
    }
    /**
     * Class that implements dropdown component based on the select/option elements.
     */
    class InnerSelect extends ComponentBase<ISelectProps, ISelectState> {
        /**
         *  UUID to be used for internal unique id generation.
         */
        private _uuid;
        /**
         * Component's constructor.
         * @param props {ISelectProps} Props for the component.
         * @param context {{}} Additional context for initialization.
         */
        constructor(props: ISelectProps, context: any);
        /**
         * Invoked when the component receiving new props
         * @param nextProps
         */
        componentWillReceiveProps(nextProps: ISelectProps): void;
        /**
         * Returns the unique ID.
         * @param sourceId {string} Initial ID string to be used for ID creation.
         * Defaults to the id given in props by the consumen.
         * @param supplement {string} Additional part to the ID that should make it unique.
         * Defaults to the uuid generated in constructor of the component.
         * @return {string} ID created using given sourceId and a supplement.
         * @private
         */
        private _uniqueId;
        /**
         * Returns true if multiple attribute is set.
         * @return {boolean} True if multiple attribute is set.
         * @private
         */
        private _isMultiple;
        /**
         * Creates option id that should be unique for given select component.
         * @param option {IOptionSetValue} OptionSetValue descriptor object.
         * @return {string} Option ID created for given OptionSetValue descriptor.
         * @private
         */
        private _optionId;
        /**
         * Checks if options given in parameters can be considered the same.
         * @param currentValue {IOptionSetValue} Descriptor for the first option of the comparison.
         * @param nextValue {IOptionSetValue} Descriptor for the second option of the comparison.
         * @param isMultiple {boolean} true if select has multiple attribute
         * @return {boolean} `true` if options given in parameters can be considered equal, `false` - otherwise.
         * @private
         */
        private static _optionsEqual;
        /**
         * Bound handler for the `change` event.
         * @param event {Event} Change event wrapper object.
         * @private
         */
        private _onChangeHandler;
        /**
         * Getter for the actual underlying element.
         * @return {string} Actual HTML element name.
         */
        protected getElementName(): string;
        /**
         * Converts ISelectProps to React.HTMLAttributes.
         * @return {React.HTMLAttributes} Attributes of the select component.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
        /**
         * Composes and returns proper children for the select component.
         * It is supposed that Select component will never have other children than its options.
         * @return {any} Properly composed children for the component.
         */
        protected getElementChildren(): React.ReactNode;
    }
    const Select: any;
    export { ISelectStyle, ISelectCompositeStyle, ISelectProps, ISelectState, InnerSelect, Select };
}
declare module "CommonComponents/Primitive/Radio/InputOption" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IPropsBase, ComponentBase } from "CommonComponents/Primitive/ComponentBase";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    /**
     * Props of the select component.
     */
    interface IInputOptionProps extends IPropsBase {
        /**
         * List of the options that will be shown in the select component's dropdown.
         */
        name?: string;
        /**
         * Value of the select.
         */
        value?: CustomControlInterfaces.ICCFOptionSetValue;
        /**
         * Composite style that contains select style and options' style.
         */
        style?: IInputOptionStyle;
        /**
         * `true` if component is disabled.
         */
        disabled?: boolean;
        /**
         * Handler for the `change` event.
         * @param option
         */
        onChange?: (option: CustomControlInterfaces.ICCFOptionSetValue) => void;
        /**
         * Sets or gets checked attribute for the input
         */
        checked?: boolean;
    }
    /**
     * Styles for input
     */
    interface IInputOptionStyle extends ITextStyle {
    }
    /**
     * Class that implements option for RadioInput.
     */
    class InputOption extends ComponentBase<IInputOptionProps, any> {
        static displayName: string;
        /**
         * Attribute name for checked option.
         */
        private static _DATA_CHECKED;
        constructor(props?: IInputOptionProps, context?: any);
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Handler for onChange event on input
         */
        private _onChangeHandler;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
    }
    export { IInputOptionStyle, IInputOptionProps, InputOption };
}
declare module "CommonComponents/Primitive/Radio/RadioInput" {
    import { IPropsBase, ComponentBase } from "CommonComponents/Primitive/ComponentBase";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { IInputOptionStyle } from "CommonComponents/Primitive/Radio/InputOption";
    import { ITextStyle } from "CommonComponents/Primitive/Label";
    /**
     * Props of the component.
     */
    interface IRadioInputProps extends IPropsBase {
        /**
         * List of the options that will be shown.
         */
        options?: CustomControlInterfaces.ICCFOptionSetValue[];
        /**
         * Current value of component.
         */
        value?: CustomControlInterfaces.ICCFOptionSetValue;
        /**
         * Composite style that contains component styles.
         */
        style?: IRadioInputCompositeStyle;
        /**
         * `true` if component is disabled.
         */
        disabled?: boolean;
        /**
         * Handler for the `change` event.
         * @param option
         */
        onChange?: (option: CustomControlInterfaces.ICCFOptionSetValue) => void;
        /**
         * Gets or sets name attribute for control
         */
        name?: string;
    }
    /**
     * Internal state of the component.
     */
    interface IRadioInputState {
        /**
         * Currently selected value of the component.
         */
        value: CustomControlInterfaces.ICCFOptionSetValue;
    }
    /**
     * Style object for the control. Contains styles for container, inputOption(radio button) and label.
     */
    interface IRadioInputCompositeStyle {
        /**
         * Style object for the container.
         */
        style?: IViewStyle;
        /**
         * Style object that will be applied to each option of the radio input.
         */
        inputOptionStyle?: IInputOptionStyle;
        /**
         * Style object that will be applied to each option label.
         */
        inputOptionLabelStyle?: ITextStyle;
    }
    /**
     * Class that implements container for options.
     */
    class InnerRadioInput extends ComponentBase<IRadioInputProps, IRadioInputState> {
        /**
         *  UUID to be used for internal unique id generation.
         */
        private _uuid;
        /**
         * Component's constructor.
         * @param props {IRadioInputProps} Props for the component.
         * @param context {{}} Additional context for initialization.
         */
        constructor(props: IRadioInputProps, context: any);
        /**
         * Invoked when the component receiving new props
         * @param nextProps
         */
        componentWillReceiveProps(nextProps: IRadioInputProps): void;
        /**
         * Returns the unique ID.
         * @param sourceId {string} Initial ID string to be used for ID creation.
         * Defaults to the id given in props by the consumen.
         * @param supplement {string} Additional part to the ID that should make it unique.
         * Defaults to the uuid generated in constructor of the component.
         * @return {string} ID created using given sourceId and a supplement.
         * @private
         */
        private _uniqueId;
        /**
         * Creates option id that should be unique for component.
         * @param option {IOptionSetValue} OptionSetValue descriptor object.
         * @return {string} Option ID created for given OptionSetValue descriptor.
         * @private
         */
        private _optionId;
        /**
         * Checks if options given in parameters can be considered the same.
         * @param one {IOptionSetValue} Descriptor for the first option of the comparison.
         * @param two {IOptionSetValue} Descriptor for the second option of the comparison.
         * @return {boolean} `true` if options given in parameters can be considered equal, `false` - otherwise.
         * @private
         */
        private static _optionsEqual;
        /**
         * Gets props for inputOption.
         * @param option {IOptionSetValue} current option for input.
         * @param id {string} id attribute for input.
         * @private
         */
        private _getInputOptionProps;
        /**
         * Gets props for label.
         * @param id {string} value for forElementId attribute.
         * @private
         */
        private _getLabelOptionProps;
        private _getViewStyles;
        /**
         * Bound handler for the `change` event.
         * @private
         * @param option {IOptionSetValue} new option
         */
        private _onChangeHandler;
        private _getOptionList;
        render(): JSX.Element;
    }
    const RadioInput: any;
    export { IRadioInputCompositeStyle, IRadioInputProps, IRadioInputState, InnerRadioInput, RadioInput };
}
declare module "CommonComponents/Primitive/Checkbox" {
    import { IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    import { ITextInputStyle } from "CommonComponents/Primitive/TextInput";
    import * as AttributeName from "CommonComponents/Supplementary/Accessibility/Attributes/AttributeName";
    /**
     * Styles for a Checkbox component
     */
    interface ICheckboxStyle extends ITextInputStyle {
    }
    /**
     * Properties of checkbox component
     */
    interface ICheckboxProps extends IPropsBase {
        /**
         * Component style properties
         */
        style?: ICheckboxStyle;
        /**
         * Value of checkbox
         */
        checked?: boolean;
        /**
         * Aria value for checked
         */
        [AttributeName.ARIA_CHECKED]?: boolean;
        /**
         * Is checkbox disabled
         */
        disabled?: boolean;
        /**
         * On change handler
         * @param boolean
         */
        onChange?: (checkboxValue: boolean) => void;
        /**
         * Gets or sets name attribute for the control
         */
        name?: string;
        /**
         * Gets or sets key attribute for the control
         */
        key?: string;
        /**
         * Gets or sets accessibilityRole attribute for the control, "checkbox" by default
         */
        accessibilityRole?: string;
    }
    const Checkbox: any;
    export { ICheckboxStyle, ICheckboxProps, Checkbox };
}
declare module "CommonComponents/Primitive/Switch" {
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import { ISelectCompositeStyle } from "CommonComponents/Primitive/Select/Select";
    import { IRadioInputCompositeStyle } from "CommonComponents/Primitive/Radio/RadioInput";
    import { ICheckboxStyle } from "CommonComponents/Primitive/Checkbox";
    /**
     * Props for a Switch component instance
     */
    interface ISwitchProps extends IPropsBase {
        /**
         * Gets or sets option array for component
         */
        options?: CustomControlInterfaces.ICCFOptionSetValue[];
        /**
         * Gets or sets styles of Switch component
         */
        style?: ISwitchStyle;
        /**
         * Determines if Switch component is disabled
         */
        disabled?: boolean;
        /**
         * Gets or sets current value of switch component
         */
        value?: boolean;
        /**
         * Callback to be called when Switch is switched
         * @param boolean
         */
        onValueChange?: (value: boolean) => void;
        /**
         * Callback to be called when Switch is switched
         * @param boolean
         */
        onOptionSetValueChange?: (option?: CustomControlInterfaces.ICCFOptionSetValue) => void;
        /**
         * Value that should be displayed in toggle mode
         */
        displayValue?: string;
        /**
         * Determine how Switch should be displayed
         */
        displayAs?: string;
        /**
         * Gets or sets name attribute for control
         */
        name?: string;
        /**
         * Gets or sets id generated by parent control. Used as a key attribute.
         */
        absoluteId?: string;
        /**
         * Gets or sets default value for checkbox label
         */
        defaultValue?: string;
    }
    /**
     * Switch component state
     */
    interface ISwitchState {
        /**
         * State value to determine if Switch component is checked
         */
        checked: boolean;
    }
    /**
     * Style props for Switch component
     */
    interface ISwitchStyle extends IViewStyle, ISelectCompositeStyle, ITextStyle, IRadioInputCompositeStyle, ICheckboxStyle {
    }
    /**
     * Component representing a Switch base control
     */
    class InnerSwitch extends ComponentBase<ISwitchProps, ISwitchState> {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        private static _CHECKBOX_DISPLAY_TAG;
        private static _SELECT_DISPLAY_TAG;
        private static _RADIO_DISPLAY_TAG;
        constructor(props?: ISwitchProps, context?: any);
        /**
         * Invoked when the component receiving new props
         * @param nextProps
         */
        componentWillReceiveProps(nextProps: ISwitchProps): void;
        /**
         * Handler for onChange event on checkbox
         */
        private _onCheckboxChange;
        /**
         * Handler for onChange event on optionSet like controls
         * @param option
         */
        private _optionSetChange;
        /**
         * OnClick handler for toggle control
         * @private
         */
        protected onClick(): void;
        /**
         * Returns the specific element props.
         */
        protected getCheckboxComponent(): JSX.Element;
        /**
         * Returns select element for switch primitive
         * @returns {any}
         */
        protected getSelectComponent(): JSX.Element;
        /**
         * Returns label element for switch primitive
         * @returns {any}
         */
        protected getLabelComponent(): JSX.Element;
        render(): JSX.Element;
    }
    const Switch: any;
    export { ISwitchState, ISwitchStyle, ISwitchProps, InnerSwitch, Switch };
}
declare module "CommonComponents/Primitive/FileInput" {
    import { IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    /**
     * Represents the file read by the input element.
     */
    interface IFile {
        /**
         * The content of the file encoded as a base64 string.
         */
        content: string;
        /**
         * The encoding of the contents of the file (base64)
         */
        encoding: string;
        /**
         * The MIME type of the file.
         */
        mimeType: string;
        /**
         * The name of the file.
         */
        name: string;
        /**
         * The size of the file (before it is encoded).
         */
        size: number;
    }
    /**
     * Props for a File Input component instance
     */
    interface IFileInputProps extends IPropsBase {
        /**
         * Styles for Button component
         */
        style?: IViewStyle;
        /**
         * List of MIME types this control supports
         */
        accept?: string[];
        /**
         * Callback to invoke when a file has been selected by the users.
         * @param file Contains the base64 encoded file selected by the user and other metadata.
         */
        fileSelected?(file: IFile): void;
        /**
         * Callback to invoke when a file has been un-selected by the users.
         */
        fileUnselected?(): void;
        /**
         * Callback to invoke when reader throws an error.
         * @param errorMessage Contains the error message.
         */
        onReaderError?(errorMessage: string): void;
        /**
         * Callback to invoke when multiple files have been selected by the users.
         */
        multipleFilesSelected?(): void;
    }
    const FileInput: any;
    export { IFile, IFileInputProps, FileInput };
}
declare module "CommonComponents/Primitive/PresenceIndicator" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { CustomControlEntityReference } from "CustomControls/Models/CustomControlEntityReference";
    /**
     * Enum for presence indicator size value.
     * @readonly
     */
    enum PresenceIndicatorSize {
        Default = 0,
        Small = 1,
        Medium = 2,
        Large = 3
    }
    /**
     * Enum for controls in that presence indicator is shown.
     * @readonly
     */
    enum PresenceTarget {
        None = 0,
        Lookup = 1,
        Grid = 2
    }
    /**
     * Props for a PresenceIndicator component instance
     * @interface
     */
    interface IPresenceIndicatorProps extends IPropsBase {
        /**
         * Entity reference to fetch SIP value if not provided.
         */
        entityReference?: CustomControlEntityReference;
        /**
         * SIP url if provided.
         */
        sipUrl?: string;
        /**
         * Presence Image size.
         */
        displaySize: PresenceIndicatorSize;
        /**
         * Presence target control where presence is shown.
         */
        presenceTarget?: PresenceTarget;
        /**
         * Styles for Presence indicator component.
         */
        style?: IViewStyle;
        /**
         * Parent control unique identifier.
         */
        parentControlId: string;
    }
    /**
     * Control which renders presence status for the given entity .
     */
    class PresenceIndicator extends React.Component<IPresenceIndicatorProps, any> {
        static displayName: string;
        private _skypeChannelContext;
        private _presenceId;
        private _presenceInstance;
        private _renderPresence;
        /**
         * Called after the presence component is rendered initially to update its information using sdk.
         */
        private _addPresenceInformation;
        /**
         *  Update presence component once mouting is done.
         */
        componentDidMount(): void;
        /**
         * Destroying presence instance once component unmounted.
         */
        componentWillUnmount(): void;
        /**
         * Check whether Skype channel instance is available or not.
         */
        private _isSkypeChannelAvailable;
        /**
         * Check whether to render presence indicator.
         */
        private _isPropsAvailable;
        /**
         * Render presence component.
         */
        render(): JSX.Element;
    }
    export { PresenceIndicatorSize, PresenceTarget, IPresenceIndicatorProps, PresenceIndicator };
}
declare module "CommonComponents/Primitive/Svg/Utils" {
    /**
     * Gets the react props corresponding to SVG element.
     * @param url url for svg element.
     */
    function parseSvg(url: string): Promise<any>;
    export { parseSvg };
}
declare module "CommonComponents/Primitive/Svg" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    /**
     * Props for a Image component instance
     */
    interface ISvgProps extends IPropsBase {
        /**
         * Link to the image file in case if we need to parse and inline svg
         */
        source?: string;
        /**
         * Should primitive fallback to Image in case of file parsing error
         */
        fallbackToImage?: boolean;
        /**
         * React style to be transformed to CSS style
         */
        style?: IViewStyle;
        /**
         * Alt attribute
         */
        altText?: string;
        /**
         * title attribute
         */
        title?: string;
        /**
         * Callback to invoke when provided file wasn't parsed correctly
         * @param errorMessage Contains the error message.
         */
        onParsingError?(errorMessage: string): void;
    }
    /**
     * Describe state for component.
     */
    interface ISvgState {
        parsedSvgProps?: React.SVGAttributes<Element>;
    }
    const Svg: any;
    export { ISvgProps, ISvgState, Svg };
}
declare module "CommonComponents/Primitive/EntityImage" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { PresenceIndicatorSize } from "CommonComponents/Primitive/PresenceIndicator";
    import { CustomControlEntityReference } from "CustomControls/Models/CustomControlEntityReference";
    /**
     * Props for a EntityImage component instance
     *
     * @interface
     */
    interface IEntityImageProps extends IPropsBase {
        /**
         * Flag to show entity support for image.
         * Render image/initials if true, icon otherwise
         */
        hasPrimaryImageField?: boolean;
        /**
         * Image source (if provided)
         */
        imageSrc?: string;
        /**
         * Webresource link for custom entity icon (usually .svg file)
         */
        customEntityIcon?: string;
        /**
         * Entity primary field
         * If provided will be shown first letters of first two words
         */
        entityPrimaryField?: string;
        /**
         * Entity health score
         * If provided will be shown border around image
         * Value from 0 to 100
         */
        entityHealthScore?: number;
        /**
         * React style to be transformed to CSS style
         */
        style?: IEntityImageStyle;
        /**
         * Alt attribute
         */
        alt?: string;
        /**
         * SIP value to get presence status information.
         */
        sipUrl?: string;
        /**
         * Display size for presence indicator
         */
        presenceIndicatorSize?: PresenceIndicatorSize;
        /**
         * Entity reference.
         */
        entityReference?: CustomControlEntityReference;
        /**
         * Styles that will be applied to EntityIcon primitive
         */
        iconStyle?: IViewStyle & ITextStyle;
        /**
         * Styles that will be applied to a wrapper
         */
        wrapperStyle?: IViewStyle;
    }
    /**
     * Style props for EntityImage component
     *
     * @interface
     */
    interface IEntityImageStyle extends IViewStyle {
        fontSize?: string;
    }
    /**
     * Enum for component inner mode values
     * @readonly
     */
    enum Mode {
        CustomImage = 0,
        Initials = 1,
        CustomEntityIcon = 2,
        DefaultEntityIcon = 3
    }
    /**
     * Control which renders default entity icon for the given entity.
     * It also has a configurable property to render image or initials of the name
     */
    class InnerEntityImage extends ComponentBase<IEntityImageProps, {}> {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        /**
         * Regex to get size unit.
         */
        private static _unitRegex;
        /**
         * Health ring color is based on the health score state, which is directly related to the health score.
         */
        private static _healthRanges;
        /**
         * CRM colors for initial thumbnails
         * @private
         */
        static backgroundColors: string[];
        /**
         * Determines internal component mode based on input props
         * @returns {Mode}
         * @private
         */
        static getMode(props: IEntityImageProps): Mode;
        /**
         * @returns {boolean} true when component in CustomImage mode
         * @private
         */
        private readonly _isCustomImageMode;
        /**
         * @returns {boolean} true when component in Initials mode
         * @private
         */
        private readonly _isInitialsMode;
        /**
         * @returns {boolean} true when component in CustomEntityIcon mode
         * @private
         */
        private readonly _isCustomEntityIconMode;
        /**
         * @returns {boolean} true when component in DefaultEntityIcon mode
         * @private
         */
        private readonly _isDefaultEntityIconMode;
        /**
         * Returns true if current browser is IE
         * @private
         */
        private static readonly _isBrowserIE;
        /**
         * Returns first letters of first two words (or two letters of one word)
         */
        private static _getInitials;
        private _renderHealthCircle;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
        /**
         * Returns the children of the element.
         * @returns string for initials mode and EntityIcon for DefaultEntityIcon mode
         */
        protected getElementChildren(): React.ReactNode;
        private _renderEntityImageWithPresence;
        /**
         * Render Entity Image component.
         */
        render(): JSX.Element;
    }
    const EntityImage: any;
    export { Mode as EntityImageMode, IEntityImageStyle, IEntityImageProps, InnerEntityImage, EntityImage };
}
declare module "CommonComponents/Primitive/ProgressIndicator" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Styles for progressindicator component
     */
    interface IProgressIndicatorStyle {
        /**
         * height property to set the size of progress indicator
         */
        height?: string;
        /**
         * width property to set the size of progress indicator
         */
        width?: string;
        /**
         * color property to set the color of progress indicator
         */
        color?: string;
    }
    /**
     * properties of progress indicator.
     */
    interface IProgressIndicatorProps extends IPropsBase {
        /**
         * this prop defines whether the progress indicator to be displayed or not.
         */
        active?: boolean;
        /**
         * this prop the type of progress indicator whether the progress indicator is "Bar" or "Ring".
         */
        progressType?: "bar" | "ring";
        /**
         * this prop defines progress value (between 0 and 1).
         */
        progress?: number;
        /**
         * this prop defines number of progress dots displayed.
         */
        progressDots?: number;
        /**
         * this prop defines if any new class to be added before rendering.
         */
        className?: string;
        /**
         * this prop defines the styles to set the size and color of progress indicator.
         */
        style?: IProgressIndicatorStyle;
        /**
         * this prop defines whether the progress indicator to be displayed or not.
         */
        animating?: boolean;
        /**
         * this prop defines the delay between the rendered progress dots.
         */
        animationDelay?: number;
        /**
         * this prop defines whether the useragent is safari browser or not.
         */
        isBrowserSafari?: boolean;
    }
    /**
     * Progress Indicator component
     */
    class InnerProgressIndicator extends ComponentBase<IProgressIndicatorProps, any> {
        static displayName: string;
        /**
         * Determine whether the component needs to be re-rendered.
         * @params nextProps The new component properties.
         * @returns {boolean} Whether to re-render the component.
         */
        shouldComponentUpdate(nextProps: IProgressIndicatorProps): boolean;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the class name for the underlying element.
         * @param style the style to be applied to the underlying component, used for readout here.
         */
        protected getFlexClassName(style: React.CSSProperties): string;
        /**
         * Returns the children of the element.
         */
        protected getElementChildren(): React.ReactNode;
    }
    const ProgressIndicator: any;
    export { IProgressIndicatorStyle, IProgressIndicatorProps, InnerProgressIndicator, ProgressIndicator };
}
declare module "CommonComponents/Common/HorizontalScroll" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    import { IButtonStyle } from "CommonComponents/Primitive/Button";
    import { IScrollViewStyle } from "CommonComponents/Primitive/IScrollViewStyle";
    import { IFlexboxContainerStyle } from "CommonComponents/Primitive/IFlexboxContainerStyle";
    import { MicrosoftIconSymbol } from "CommonComponents/FontIcon/MicrosoftIconSymbol";
    /**
     * State for a HorizontalScroll component instance.
     *
     * @interface
     */
    interface IHorizontalScrollState {
        /**
         * Disabled state for prev arrow.
         */
        prevArrowDisabled?: boolean;
        /**
         * Disabled state for next arrow.
         */
        nextArrowDisabled?: boolean;
    }
    /**
     * Styles for a HorizontalScroll component.
     */
    interface IHorizontalScrollStyle extends IViewStyle {
    }
    /**
     * Properties of HorizontalScroll component.
     */
    interface IHorizontalScrollProps extends IPropsBase {
        /**
         * Component style properties.
         */
        style?: IHorizontalScrollStyle;
        /**
         * Index of the child that should be scroll to on component mount.
         */
        startChildIndex?: number;
        /**
         * Width of the arrow button.
         */
        arrowWidth?: number;
        /**
         * Arrow button style.
         */
        arrowButtonStyle?: IButtonStyle;
        /**
         * Previous arrow button icon key.
         */
        prevArrowIconType?: MicrosoftIconSymbol;
        /**
         * Next arrow button icon key.
         */
        nextArrowIconType?: MicrosoftIconSymbol;
        /**
         * On click event handler for the prev arrow button
         * @param React.MouseEvent
         * @param id id of the first child displayed after scrolling
         */
        onPrevArrowClick?: (event: React.MouseEvent, index: number) => void;
        /**
         * On click event handler for the next arrow button
         * @param React.MouseEvent
         * @param id id of the first child displayed after scrolling
         */
        onNextArrowClick?: (event: React.MouseEvent, index: number) => void;
        /**
         * OnKeyDown event callback for the prev arrow button
         * @param {React.KeyboardEventHandler} event - Synthetic React event object
         * @param id id of the first child displayed after scrolling
         */
        onPrevArrowKeyDown?: (event: React.KeyboardEvent, index: number) => void;
        /**
         * OnKeyDown event callback for the next arrow button
         * @param {React.KeyboardEventHandler} event - Synthetic React event object
         * @param id id of the first child displayed after scrolling
         */
        onNextArrowKeyDown?: (event: React.KeyboardEvent, index: number) => void;
        /**
         * Styles for View component
         */
        scrollViewStyle?: IScrollViewStyle & IFlexboxContainerStyle;
        /**
         * Semantic tag.
         */
        semanticTag?: "div" | "ul";
        /**
         * Is right-to-left language
         */
        isRTL?: boolean;
    }
    /**
     * HorizontalScroll component.
     */
    class InnerHorizontalScroll extends ComponentBase<IHorizontalScrollProps, IHorizontalScrollState> {
        /**
         * Component name for React Dev Tools.
         */
        static displayName: string;
        private _userAgent;
        /**
         * The reference to the internal Scroll View instance.
         */
        private _scrollView;
        /**
         * Threshold of error that is used to determine if scroll buttons should be enabled/disabled
         * Due to scenario in which calculations produce values that are off from desired values by diminutive margins
         */
        private _currentChildIndex;
        /**
         * The current index into the children of the scroll container. Refers to the currently-scrolled to element
         */
        private _SCROLL_THRESHOLD;
        /**
         * Duration of translate transition for full browser window.
         */
        private _FULL_BROWSER_TRANSLATE_DURATION;
        /**
         * Duration of translate transition for tablet browser window.
         */
        private _TABLET_TRANSLATE_DURATION;
        /**
         * Duration of translate transition for mobile browser window.
         */
        private _MOBILE_BROWSER_TRANSLATE_DURATION;
        constructor(props: IHorizontalScrollProps);
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
        /**
         * Component did mount lifecycle method
         */
        componentDidMount(): void;
        /**
         * When component did update, we need to set height to the container to hide scroll.
         * It shouldn't be done if height is defined in style.
         */
        componentDidUpdate(): void;
        /**
         * Reacts on the scrollview creation.
         */
        private _saveScrollViewRefCallback;
        /**
         * Invoked when user press keys when the arrow button is on focus.
         * @param e
         */
        private _onPrevKeyDown;
        /**
         * Invoked when user press keys when the arrow button is on focus.
         * @param e
         */
        private _onNextKeyDown;
        /**
         * Invoked when user clicks the arrow button which scrolls left.
         * @param e
         */
        private _onPrevClick;
        /**
         * Invoked when user clicks the arrow button which scrolls right.
         * @param e
         */
        private _onNextClick;
        /**
         * Sliding to next set of elements.
         * @param isSlideNext slide direction.
         */
        private _slideByArrow;
        /**
         * Calculate scrollLeftValue for LTR and RTL
         */
        private _getScrollLeft;
        private _getPrevIcon;
        private _getNextIcon;
        private _getCurrentChildIndex;
        /**
         * Ensure that index does remains in bounds from 0 to children.length - 1 inclusively
         * @param newIndex	Proposed new index
         * @param children	Children of scrollable container
         */
        private _boundIndex;
        /**
         * Get child to scroll to.
         * @param isSlideNext slide direction.
         */
        private _getChildIndexToScroll;
        /**
         * Recalculates state.
         */
        private _recalculateState;
        /**
         * Returns the HTML element of the desired child element of the scrollable container.
         * @param childIndex child index.
         */
        private _getChildByIndex;
        /**
         * Scroll to child with some index.
         * @param childIndex child index.
         */
        private _scrollToChildByIndex;
        /**
         * Scrolls the viewport to the position of the given component so that it becomes visible.
         * @param child Child Element to which the scrollable container should scroll
         */
        private _scrollToChild;
        /**
         * Scrolls to desired child element using scrolling transition.
         *
         * @param child 		Child Element to which the scrollable container should scroll
         * @param scrollParent	Scrollable container element
         */
        private _scrollToWithTransition;
        /**
         * Responsible for updating scrollLeft of scrollParent over specified duration.
         *
         * @param child 				Child Element to which the scrollable container should scroll
         * @param scrollParent			Scrollable container element
         * @param currentTime			Current duration of scrolling transition
         * @param originalScrolLeft		Original scrollLeft of scrollable container element prior to transition
         * @param increment				Amount of time that passes between updates of scrollLeft
         * @param changeInScrollLeft	Overall change of scrollLeft during transition
         * @param duration				Duration of scrolling transition
         */
        private _scrollTransition;
        /**
         * Calculates the change in scrollLeft to create ease effect.
         *
         * @param currentTime		Current duration of scrolling transition
         * @param originalScrolLeft	Original scrollLeft of scrollable container element prior to transition
         * @param changeInScrollLeft	Overall change of scrollLeft during transition
         * @param duration				Duration of scrolling transition
         */
        private _scrollEase;
        /**
         * Get DOM element with scrollbar.
         */
        private _getScrollableContainer;
        /**
         * Renders prev arrow button.
         */
        private _renderPrevArrowButton;
        /**
         * Renders next arrow button.
         */
        private _renderNextArrowButton;
        /**
         * Renders arrow icon.
         * @param arrowIconKey property key to get CrmIconSymbol.
         * @param defaultText default text to show instead of the icon.
         */
        private _renderArrowIcon;
        /**
         * Checks whether the platform is IE or Edge.
         */
        private _isBrowserIEorEdge;
        /**
         * Checks whether the current platform is Firefox.
         */
        private _isBrowserFirefox;
        /**
         * Checks whether the current platform is Chrome or Android.
         */
        private _isBrowserChromeOrAndroid;
        /**
         * Checks whether the current platform is Safari.
         */
        private _isBrowserSafari;
        private _scrollToContent;
        /**
         * Perform calculation of scrollLeft, and update scrollLeft of scrollable container
         * @param scrollParent
         * @param scrollToElement
         */
        private _scrollToContentHorizontal;
        private _getCalculatedStyle;
        private _getTotalWidthIncludingMargins;
        private _getChildIndex;
        private _determineDuration;
        /**
         * React control render method.
         */
        render(): JSX.Element;
    }
    const HorizontalScroll: any;
    export { IHorizontalScrollState, IHorizontalScrollStyle, IHorizontalScrollProps, InnerHorizontalScroll, HorizontalScroll, };
}
declare module "CommonComponents/Common/ViewSelectorControl" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { CrmIconSymbol } from "CommonComponents/FontIcon/CrmIconSymbol";
    import { MicrosoftIconSymbol } from "CommonComponents/FontIcon/MicrosoftIconSymbol";
    import { IComboBoxOption, IComboBoxProps, IComboBoxState, InnerComboBox } from "CommonComponents/Primitive/ComboBox";
    import IComboBoxStyle from "CommonComponents/Primitive/ComboBox/IComboBoxStyle";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { IImageStyle } from "CommonComponents/Primitive/Image";
    import { InnerListItem } from "CommonComponents/Primitive/ListItem";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    /**
     * Interface for viewselectorcontrol category
     */
    interface IViewSelectorControlCategory {
        /**
         * Gets or sets id of the category
         */
        id: string;
        /**
         * Gets or sets name of the category
         */
        name: string;
    }
    /**
     * Interface for viewselectorcontrol option
     */
    interface IViewSelectorControlOption extends IComboBoxOption {
        /**
         * Gets or sets categoryid of viewselector option item
         */
        categoryId?: string;
        /**
         * Gets or sets imageSource of viewselector option item
         */
        imageSource?: string;
        /**
         * Gets or sets icon category (crm or microsoft) of viewselector option item
         */
        iconCategory?: number;
        /**
         * Gets or sets altText of viewselector option item
         */
        altText?: string;
        /**
         * Gets or sets icon type of viewselector option item
         */
        iconType?: CrmIconSymbol | MicrosoftIconSymbol;
        /**
         * Gets or sets icon style of viewselector option item
         */
        iconStyle?: IImageStyle & IViewStyle & ITextStyle;
        /**
         * Gets or sets icon title of viewselector option item
         */
        iconTitle?: string;
    }
    /**
     * Interface for viewselectorcontrol properties
     */
    interface IViewSelectorControlProps extends IComboBoxProps {
        /**
         * Define list of categories
         */
        categories?: IViewSelectorControlCategory[];
        /**
         * Style being applied to the viewSelector when it's hovered.
         */
        hoveredStyle?: IViewSelectorControlStyle;
        /**
         * Style applied to the viewSelector by default
         */
        viewSelectorStyle?: IViewSelectorControlStyle;
        /**
         * Style for dropdown caret for viewselector
         */
        caretStyle?: ITextStyle;
        /**
         * caret type for viewselector dropdown
         */
        caretType?: MicrosoftIconSymbol;
        /**
         * onItemIconPointerDown event callback
         * @param option - The current selected option
         */
        onItemIconPointerDown?: (option: IViewSelectorControlOption) => void;
        /**
         * Is right to left language
         */
        isRTL?: boolean;
    }
    /**
     * Interface for viewselectorcontrol state
     */
    interface IViewSelectorControlState extends IComboBoxState {
        /**
         * The item is selected
         */
        selectedItemId?: string;
    }
    /**
     * Interface for viewselectorcontrolcontrol style
     */
    interface IViewSelectorControlStyle extends IComboBoxStyle {
    }
    /**
     * Component representing an viewselectorcontrol base control
     */
    class ViewSelectorControl extends InnerComboBox<IViewSelectorControlProps, IViewSelectorControlState> {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        constructor(props?: IViewSelectorControlProps, context?: any);
        /**
         * Handles the event of selecting an item in a drop-down.
         * @param item the item being selected
         */
        protected handleItemSelected(item: InnerListItem): void;
        /**
         * Handles the event of clicking the icon action
         * @param e the MouseEvent to handle
         */
        protected handleItemIconPointerDown(e: React.MouseEvent): void;
        /**
         * Handles the event of pressing spacebar shortcut
         * @param e the KeyboardEvent to handle
         */
        protected handleSpaceKey(e: KeyboardEvent): void;
        /**
         * Handle arrow up key
         * @param amount pages
         */
        protected handleArrowUp(amount: number): void;
        /**
         * Map the enter key behavior only for view selector
         * @param e The keyboard event
         * @param amount pages
         */
        protected handleArrowDown(e: KeyboardEvent, amount: number): void;
        /**
         * A helper selector used to get the proper container for the flyout to be
         * relative to.
         */
        protected handleRelativeToElementSelector(element: HTMLElement): HTMLElement;
        protected calculateWidth(): number | string;
        private _handleIconClick;
        private _renderListItem;
        private _renderOptions;
        private _getOptionTestHooks;
        private _renderCategories;
        /**
         * Performs options props array to React.Component mapping
         */
        protected renderOptionsList(): JSX.Element;
        /**
         * Gets styles for text only component
         */
        protected getTextOnlyStyle(): ITextStyle;
        /**
         * Gets ineer component for TextOnly component
         */
        protected getTextOnlyInnerComponent(valueId: string): JSX.Element;
        /**
         * ViewSelector.onChange event handler
         * @param e Synthetic React event
         */
        protected handleValueChange(valueNew: string): void;
        /**
         * Render the caret fonticon for viewselector dropdown
         */
        private _renderCaretButton;
        /**
         * Renders the flyout.
         */
        protected renderFlyout(isRTL?: boolean): JSX.Element;
        /**
         * Handles the event of a click outside a flyout.
         */
        protected handleFlyoutOutsideClick(e: React.MouseEvent): void;
        /**
         * React control render method.
         */
        render(): JSX.Element;
    }
    export { IViewSelectorControlOption, IViewSelectorControlCategory, IViewSelectorControlStyle, IViewSelectorControlProps, IViewSelectorControlState, ViewSelectorControl, };
}
declare module "CommonComponents/Primitive/PlaceHolder" {
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import { IViewStyle, IViewHtmlStyle } from "CommonComponents/Primitive/IViewStyle";
    import { IFlexboxContainerStyle } from "CommonComponents/Primitive/IFlexboxContainerStyle";
    /**
     * Interface for component styles
     */
    type IPlaceHolderStyle = IViewStyle & IFlexboxContainerStyle & IViewHtmlStyle & ITextStyle;
    /**
     * Interface for component properties
     */
    interface IPlaceHolderProps {
        /**
         * Text which should be shown to user
         */
        text?: string;
        /**
         * Gets or sets the text style
         */
        textStyle?: ITextStyle;
        /**
         * Gets or sets the icon
         */
        icon?: any;
        /**
         * Gets or sets the icon style
         */
        iconStyle?: ITextStyle;
        /**
         * Image style properties. It is expected that only the width and height properties will be changed
         */
        containerStyle?: IPlaceHolderStyle;
        /**
         * Id
         */
        id?: string;
        /**
         * accessibility hidden property for placeholder
         */
        accessibilityHidden?: boolean;
    }
    /**
     * Component represents a place holder primitive
     */
    function PlaceHolder(props: IPlaceHolderProps): JSX.Element;
    export { IPlaceHolderStyle, IPlaceHolderProps, PlaceHolder };
}
declare module "CommonComponents/Primitive/Table/Table" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    interface ITableStyle extends IViewStyle {
        tableLayout?: "fixed" | "auto";
    }
    /**
     * Properties of Table component
     */
    interface ITableProps extends IPropsBase {
        /**
         * Component style properties
         */
        style?: ITableStyle;
    }
    /**
     * Table component
     */
    class InnerTable extends ComponentBase<ITableProps, any> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
    }
    const Table: any;
    export { ITableStyle, ITableProps, InnerTable, Table };
}
declare module "CommonComponents/Primitive/Table/TableBody" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Properties of TableBody component
     */
    interface ITableBodyProps extends IPropsBase {
        /**
         * Component style properties
         */
        style?: IViewStyle;
    }
    /**
     * TableBody component
     */
    class InnerTableBody extends ComponentBase<ITableBodyProps, any> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
    }
    const TableBody: any;
    export { ITableBodyProps, InnerTableBody, TableBody };
}
declare module "CommonComponents/Primitive/Table/TableCaption" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Properties of TableCaption component
     */
    interface ITableCaptionProps extends IPropsBase {
        /**
         * Component style properties
         */
        style?: IViewStyle;
    }
    /**
     * TableCaption component
     */
    class InnerTableCaption extends ComponentBase<ITableCaptionProps, any> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
    }
    const TableCaption: any;
    export { ITableCaptionProps, InnerTableCaption, TableCaption };
}
declare module "CommonComponents/Primitive/Table/TableCell" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Properties of TableCell component
     */
    interface ITableCellProps extends IPropsBase {
        /**
         * Component style properties
         */
        style?: IViewStyle;
        /**
         * Cell colspan indicating how many columns are to be joined
         */
        colSpan?: number;
        /**
         * Cell colspan indicating how many rows are to be joined
         */
        rowSpan?: number;
        /**
         * this prop specifies whether a header cell is a header for a column, row, or group of columns or rows.
         */
        scope?: string;
    }
    /**
     * TableCell component
     */
    class InnerTableCell extends ComponentBase<ITableCellProps, any> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
    }
    const TableCell: any;
    export { ITableCellProps, InnerTableCell, TableCell };
}
declare module "CommonComponents/Primitive/Table/TableFooter" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Properties of TableFooter component
     */
    interface ITableFooterProps extends IPropsBase {
        /**
         * Component style properties
         */
        style?: IViewStyle;
    }
    /**
     * TableFooter component
     */
    class InnerTableFooter extends ComponentBase<ITableFooterProps, any> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
    }
    const TableFooter: any;
    export { ITableFooterProps, InnerTableFooter, TableFooter };
}
declare module "CommonComponents/Primitive/Table/TableHeader" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Properties of TableHeader component
     */
    interface ITableHeaderProps extends IPropsBase {
        /**
         * Component style properties
         */
        style?: IViewStyle;
    }
    /**
     * TableHeader component
     */
    class InnerTableHeader extends ComponentBase<ITableHeaderProps, any> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
    }
    const TableHeader: any;
    export { ITableHeaderProps, InnerTableHeader, TableHeader };
}
declare module "CommonComponents/Primitive/Table/TableHeaderCell" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Properties of TableHeaderCell component
     */
    interface ITableHeaderCellProps extends IPropsBase {
        /**
         * Component style properties
         */
        style?: IViewStyle;
        /**
         * This function is called on click.
         * @param  React.MouseEvent
         */
        onClick?: React.MouseEventHandler;
        /**
         * this prop defines the number of columns a cell should span.
         */
        colSpan?: string;
        /**
         * This prop defines the number of rows a header cell should span.
         */
        rowSpan?: number;
        /**
         * this prop specifies whether a header cell is a header for a column, row, or group of columns or rows.
         */
        scope?: string;
    }
    /**
     * TableHeaderCell component
     */
    class InnerTableHeaderCell extends ComponentBase<ITableHeaderCellProps, any> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        constructor(props: ITableHeaderCellProps);
        /**
         * Handler for onClick event
         */
        private _onClickWrapper;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         * Note, some of the props still get assigned automatically, like "id", "style", "className", "children" etc.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
    }
    const TableHeaderCell: any;
    export { ITableHeaderCellProps, InnerTableHeaderCell, TableHeaderCell };
}
declare module "CommonComponents/Primitive/Table/TableRow" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Properties of TableRow component
     */
    interface ITableRowProps extends IPropsBase {
        /**
         * Component style properties
         */
        style?: IViewStyle;
        /**
         * This function is called on click.
         * @param  React.MouseEvent
         */
        onClick?: React.MouseEventHandler;
    }
    /**
     * TableRow component
     */
    class InnerTableRow extends ComponentBase<ITableRowProps, any> {
        /**
         * Component name for React Dev Tools
         */
        static displayName: string;
        constructor(props: ITableRowProps);
        /**
         * Handler for onClick event
         */
        private _onClickWrapper;
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns the specific element props.
         * Note, some of the props still get assigned automatically, like "id", "style", "className", "children" etc.
         */
        protected getElementProps(): React.HTMLAttributes<Element>;
    }
    const TableRow: any;
    export { ITableRowProps, InnerTableRow, TableRow };
}
declare module "CustomControls/Components/Helpers/CustomControlMemoizationHelper" {
    import { CommandingWrapper } from "CustomControls/Models/CommandingWrapper";
    class CustomControlMemoizationHelper {
        /**
         * The currently memoized map (generated on last render pass)
         */
        private _memoizedMap;
        /**
         * The in-progress memoized map (generated on current render pass)
         */
        private _newMemoizedMap;
        /**
         * Whether the last processed memoized map contains a composited control
         */
        private _isCompositing;
        /**
         * Whether the current translation contains a composited control
         */
        private _newIsCompositing;
        /**
         * Whether this helper thing it is currently in a render pass
         */
        private _midRender;
        /**
         * The memoized JSX root element, for instances where a render needs to be called but we don't want to update view.
         */
        private _memoizedRoot;
        /**
         * map of commanding _wrappers
         */
        private _wrapperMap;
        constructor();
        /**
         * Alert the memoization helper that a render is starting. Throw an error if it already believes itself to be in one.
         */
        startRenderFunction(): void;
        /**
         * Alert memoziation render funciton is ending. Flush old memoized data
         */
        stopRenderFunction(): void;
        /**
         * Clean up this object and release all references
         */
        destroy(): void;
        /**
         * Get the virtual compopnent associated with a key
         * @param key The key
         * @returns a virtual component
         */
        getVirtualComponentByKey(key: string): CustomControlInterfaces.IVirtualComponent;
        /**
         * Get the react element associated with a key
         * @param key The key
         * @returns a react element
         */
        getReactElementByKey(key: string): JSX.Element;
        /**
         * Keep an element from a previous render pass memoized on this one
         * @param key
         */
        retainElement(key: string): void;
        /**
         * Add an updated entry to the memoization table
         * If we are in a render cycle (e.g. during a virtual component's render function) add it to the temp table
         * If we are not (e.g. a standard control using bindDOMElement) add it to the permanent table.
         * @param key The entry key
         * @param element The entry's react element
         * @param vc The entry's virtual component
         */
        addUpdatedEntry(key: string, element: JSX.Element, vc: CustomControlInterfaces.IVirtualComponent): void;
        /**
         * Set whether this instance is compositing a control
         * @param value
         */
        setIsCompositing(value: boolean): void;
        /**
         * Gets whether this instance is compositing a control
         */
        getIsCompositing(): boolean;
        /**
         * Set the root for memoization
         * @param element
         */
        setRoot(element: JSX.Element): void;
        /**
         * Get the root for memoization
         * @param element
         */
        getRoot(): JSX.Element;
        addCommandWrapper(key: string, cw: CommandingWrapper): void;
    }
    export { CustomControlMemoizationHelper };
}
declare module "CommonComponents/Primitive/FlexibleText" {
    import { ITextProps, ITextStyle } from "CommonComponents/Primitive/Text";
    import { ComponentBase } from "CommonComponents/Primitive/ComponentBase";
    interface IFTextProps extends ITextProps {
        /**
         * Is right-to-left language
         */
        isRTL?: boolean;
        /**
         * The lines to truncate to
         */
        truncatedlines?: number;
        /**
         * The masking color to cover the ... in the background
         */
        maskingColor?: string;
        /**
         * Is text supposed to be expandable
         * by default text truncation always display expandable button.
         */
        noExpandable?: boolean;
        /**
         * The lineheight set by consumer (if they set it)
         */
        lineHeight?: number;
        /**
         * If the flexibleText is used in field section item label
         */
        isFieldLabel?: boolean;
        /**
         * Consumer set flexibletext container style
         */
        flexibleTextContainerStyle?: any;
        /**
         * Consumer set flexibletext text style
         */
        flexibleTextStyle?: ITextStyle;
    }
    interface IFTextState {
        /**
         * if the blob of text is in collapse state
         */
        collapsed?: boolean;
    }
    class FlexibleText extends ComponentBase<IFTextProps, IFTextState> {
        private _textRef;
        private _totalLineHeight;
        private _originalHeight;
        private _firstRender;
        private _areLinesTruncated;
        private _backgroundCanvas;
        constructor(props: IFTextProps);
        componentDidMount(): void;
        private _toggleCollapseState;
        protected saveItemRef(item: FlexibleText): void;
        private _calculateLineHeight;
        render(): JSX.Element;
        private _calculateHeight;
        private _getTextStyle;
        private _returnExpandableClassName;
    }
    export { IFTextProps, IFTextState, FlexibleText };
}
declare module "CustomControls/Components/VirtualComponentTranslator" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { ICustomControlHostProps, IHostData } from "CustomControls/Models/CustomControlDataInterfaces";
    import { PrimitiveControls } from "CustomControls/Models/CustomControlExposedInterfaces";
    import { CommandingWrapper } from "CustomControls/Models/CommandingWrapper";
    import { CustomControlMemoizationHelper } from "CustomControls/Components/Helpers/CustomControlMemoizationHelper";
    /**
     * VirtualComponentTranslator class : helps in translating virtual components to react components
     */
    class VirtualComponentTranslator {
        /**
         * Base attributes default values
         */
        private static _baseAttributes;
        /**
         * returns a renderable element for a virtual component
         * @param component the visual component to render
         * @param props custom control props of the parent
         * @param hostData data from the custom control compositing this virtual component
         * @param memHelper the host root's memoization helper
         * @returns a virtual dom element
         */
        static renderVirtualComponent(component: CustomControlInterfaces.IVirtualComponent, props: ICustomControlHostProps, hostData: IHostData, memHelper: CustomControlMemoizationHelper, purgeMemHelper?: boolean): JSX.Element;
        /**
         * Returns the JSX element/component based on the type
         * @param elementType the element type
         * @param props the props
         * @param componentProps the component props
         * @param children children
         */
        static generateJSXElement(elementType: PrimitiveControls, props?: any, children?: React.ReactChild | React.ReactChild[], ownProps?: ICustomControlHostProps, hostData?: IHostData, complexKeeper?: (key: string, cw: CommandingWrapper) => void): JSX.Element;
        private static _generateFlyoutParentId;
        /**
         * Returns the react component based on the type
         * @param component the virtual component
         * @param parentKey the key for this component's parent
         * @param defaultKey the default key to use if this component does not have an obvious defined key
         * @param props custom control host props
         * @param memHelper The memoization helper object
         * @param hostData data from the custom control compositing this virtual component
         * @param children the children array
         * @returns a virtual dom element
         */
        static generateReactComponent(component: CustomControlInterfaces.IVirtualComponent, parentKey: string, defaultKey: string, props: ICustomControlHostProps, hostData: IHostData, memHelper: CustomControlMemoizationHelper, flyoutParent: string, children?: React.ReactChild | React.ReactChild[]): JSX.Element;
        /**
         * Creates the component key for this VC
         * @param component The component
         * @param parentKey The component's parent's key
         * @param defaultKey The default key for this component
         * @returns this component's key
         */
        private static _getComponentKey;
        /**
         * If the testhooks contain a property with name id, it is updated to be a unique identifier for the element.
         * The newly updated testhooks object is returned.
         * If the props don't possess any testhooks, they are generated with a (testhook) id attribute.
         */
        private static _updateDataIdInTesthooks;
        /**
         * generates a complex control from the component
         * @param component the virtual component
         * @param props custom control host props
         * @param hostData data from the custom control compositing this virtual component
         * @returns a virtual dom component
         */
        static generateComplexControl(component: CustomControlInterfaces.IVirtualComponent, props: ICustomControlHostProps, hostData: IHostData, flyoutParent: string): JSX.Element;
        /**
         * Parse the parameters given from the parent control
         * @param params The parameters of this config
         */
        private static _parseParameters;
        /**
         * Typeguard check for a Virtual Component.
         */
        private static _isVirtualComponent;
        /**
         * Generated the React child for a Virtual Component.
         */
        private static _generateReactChild;
        /**
         * Generates the react counterparts for the given virtual component children.
         * @param parentKey The key of this parent
         * @param virtualComponents either an array of virtual components, or just a single component
         * @param props properties of the Custom Control host
         * @param hostData Data provided from this VC's parent CustomControlHostRoot
         * @param memHelper this component's associated memoization helper
         */
        static generateReactChildren(parentKey: string, virtualComponents: CustomControlInterfaces.VirtualComponentChild | CustomControlInterfaces.VirtualComponentChild[], props: ICustomControlHostProps, hostData: IHostData, memHelper: CustomControlMemoizationHelper, flyoutKey: string): React.ReactChild | React.ReactChild[];
        /**
         * Check if the component is Complex Component, a Customized Control Component
         * @param virtualComponent Virtual Component Pass in
         */
        static isComplexComponent(virtualComponent: CustomControlInterfaces.IVirtualComponent): boolean;
        private static _buildContextString;
    }
    export { VirtualComponentTranslator };
}
declare module "CustomControls/Utilities/TelemetryClient" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlHostProps } from "CustomControls/Models/CustomControlDataInterfaces";
    /**
     * TelemetryClient is designed to be a singleton class used across the CCF project to trace errors, warnings, and info.
     * It needs to be properly initialized once CustomControlHostProps is available.
     */
    class TelemetryClient {
        private _initialized;
        /**
         * To be overrided with propertybag's implementation;
         * @param _customControlName Custom Control id
         * @param _control name/id for the control
         * @param _message information about control to be logged
         */
        private _logMessage;
        /**
         * Override _logMessage with actual implementation
         * @param props, which should have props>propBagMethods>utils>logMessage defined
         */
        setProps(props: ICustomControlHostProps): void;
        /**
         * Log a message
         * @param control name/id for the control
         * @param message information about control to be logged
         */
        log(control: string, message: string): void;
        /**
         * Create a warning message about the control
         * @param control name/id for the control
         * @param message information about control to be logged
         */
        warn(control: string, message: string): void;
        /**
         * Create a error message about the control
         * @param control name/id for the control
         * @param message information about control to be logged
         */
        error(control: string, message: string): void;
    }
    const instance: TelemetryClient;
    export { TelemetryClient, instance as default };
}
declare module "CustomControls/Components/Helpers/Animation/ICustomControlAnimationProps" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    interface ICustomControlAnimationProps {
        startWidth: number;
        startHeight: number;
        startTop: number;
        startLeft: number;
        endHeight: number;
        endWidth: number;
        endHeightInner: number;
        endWidthInner: number;
        endTop: number;
        endLeft: number;
        isRTL: boolean;
    }
    const enum SeeMoreStatus {
        NotInUse = -1,
        PopFadeOutAndMove = 0,
        PopFadeIn = 1,
        PoppedOut = 2,
        ReturnFadeOutAndMove = 3,
        ReturnFadeIn = 4
    }
    export { ICustomControlAnimationProps, SeeMoreStatus };
}
declare module "CustomControls/Components/Helpers/Animation/CustomControlOuterPopAnimationHelper" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { SeeMoreStatus, ICustomControlAnimationProps } from "CustomControls/Components/Helpers/Animation/ICustomControlAnimationProps";
    class CustomControlOuterPopAnimationHelper {
        private static _outerOutKeyframeGen;
        private static _outerInKeyframeGen;
        static generateOuterClass(renderer: Fela.Renderer, status: SeeMoreStatus, props: ICustomControlAnimationProps): {
            animationDuration: string;
            animationFillMode: string;
            animationDirection: string;
            animationIterationCount: string;
            animationName: string;
            position: string;
            display: string;
            height: string;
            width: string;
            overflow: string;
            backgroundColor: string;
            transform: string;
            left: string;
            top: string;
            zIndex: number;
        };
    }
    export { CustomControlOuterPopAnimationHelper };
}
declare module "CustomControls/Components/Helpers/Animation/CustomControlInnerPopAnimationHelper" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { SeeMoreStatus, ICustomControlAnimationProps } from "CustomControls/Components/Helpers/Animation/ICustomControlAnimationProps";
    class CustomControlInnerPopAnimationHelper {
        private static _innerOutKeyframeGen;
        private static _innerInKeyframeGen;
        private static _fadeInAnimation;
        /**
         * IE browser detection
         */
        private static _isIE;
        static generateInnerClass(renderer: Fela.Renderer, status: SeeMoreStatus, props: ICustomControlAnimationProps): {
            animationFillMode: string;
            animationDirection: string;
            animationIterationCount: string;
            display: string;
            backgroundColor: string;
            opacity: string;
            height: string;
            width: string;
            transform: string;
            marginTop: string;
            marginLeft: string;
            marginRight: string;
            paddingTop: string;
            animationName: string;
            animationDuration: string;
            webkitBackfaceVisibility: string;
            backfaceVisibility: string;
            position: string;
        };
    }
    export { CustomControlInnerPopAnimationHelper };
}
declare module "CustomControls/Components/Helpers/Animation/CustomControlShadowAnimationHelper" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { SeeMoreStatus } from "CustomControls/Components/Helpers/Animation/ICustomControlAnimationProps";
    class CustomControlShadowAnimationHelper {
        private static _shadowOutAnimationName;
        private static _shadowInAnimationName;
        private static _shadowOutKeyframeGen;
        private static _shadowInKeyframeGen;
        static generateFancyShadowInAnimationName(renderer: Fela.Renderer): string;
        static generateFancyShadowOutAnimationName(renderer: Fela.Renderer): string;
        static generateShadowClass(renderer: Fela.Renderer, status: SeeMoreStatus): any;
    }
    export { CustomControlShadowAnimationHelper };
}
declare module "CustomControls/Components/Helpers/Animation/CustomControlAnimationHelper" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICustomControlAnimationProps, SeeMoreStatus } from "CustomControls/Components/Helpers/Animation/ICustomControlAnimationProps";
    interface ICustomControlFancyPopoutStyles {
        shadowStyle: any;
        outerStyle: any;
        innerStyle: any;
    }
    class CustomControlAnimationHelper {
        static getCustomControlFancyPopoutStyles(renderer: Fela.Renderer, status: SeeMoreStatus, props: ICustomControlAnimationProps): ICustomControlFancyPopoutStyles;
    }
    export { SeeMoreStatus, ICustomControlFancyPopoutStyles, CustomControlAnimationHelper };
}
declare module "CustomControls/Components/Helpers/CustomControlErrorData" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    class ErrorData {
        private _errorMessage;
        private _errorDetails;
        errorMessage: string;
        errorDetails: string;
    }
    export { ErrorData };
}
declare module "CustomControls/Components/Helpers/CustomControlSeeMoreHelper" {
    import { ICustomControlAnimationProps } from "CustomControls/Components/Helpers/Animation/ICustomControlAnimationProps";
    import { SeeMoreStatus } from "CustomControls/Components/Helpers/Animation/CustomControlAnimationHelper";
    class CustomControlSeeMoreHelper {
        /**
         * See more popup info
         */
        private _seeMorePopupInfo;
        /**
         * The status of the see more
         */
        private _seeMorePopupStatus;
        /**
         * The reference to the div element necessary to
         */
        private _seeMorePopupAnimDiv;
        /**
         * A timeout helper to reset the animation state if our listeners fail
         */
        private _seeMoreTimeoutHelper;
        /**
         * Constant reference to the animation fade in function
         */
        private _animFadeInReference;
        /**
         * Constant reference to the animation end function
         */
        private _animEndReference;
        private _seeMoreCallback;
        /**
         * Constant reference to the shouldGivePoppedOutDimensions function
         */
        shouldGivePoppedOutDimensions: any;
        /**
         * Clean up this object and release all references
         */
        destroy(): void;
        getSeeMorePopupInfo(): ICustomControlAnimationProps;
        getSeeMorePopupStatus(): SeeMoreStatus;
        private _shouldGivePoppedOutDimensions;
        seeMorePopup(component: HTMLElement, seeMoreCallback: (skipUpdateIfVirtual: boolean) => void, value: boolean, autosize?: boolean, isRTL?: boolean): void;
        private _getPopupDiv;
        private _getCloseElement;
        checkOnPopupStatus(isVirtual: boolean, isCompositing: boolean, component: HTMLElement): void;
        private _seeMoreFadeIn;
        private _seeMoreEnd;
        renderSpacer(isVirtual?: boolean, isCompositing?: boolean): JSX.Element;
        renderCloseButton(closeCallback: () => void, isVirtual?: boolean, isCompositing?: boolean, isRTL?: boolean): JSX.Element;
    }
    export { CustomControlSeeMoreHelper };
}
declare module "CustomControls/Models/UpdatedPropertyConstants" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    const LAYOUT_PROPERTY = "layout";
    const FULLSCREEN_OPEN_PROPERTY = "fullscreen_open";
    const FULLSCREEN_CLOSE_PROPERTY = "fullscreen_close";
    const PARAMETERS = "parameters";
    export { LAYOUT_PROPERTY, FULLSCREEN_OPEN_PROPERTY, FULLSCREEN_CLOSE_PROPERTY, PARAMETERS };
}
declare module "CustomControls/Components/CustomControlHostRoot" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import { ICustomControlHostProps, ICustomControlHostRoot } from "CustomControls/Models/CustomControlDataInterfaces";
    /**
     * Enum to track milestones in the CustomControl Lifecycle
     */
    const enum CustomControlLifecycleState {
        InError = 0,
        Ready = 1
    }
    /**
     * The custom control host state
     * TODO: Move to main ApplicationState, if feasible
     */
    interface CustomControlHostState {
        /**
         * The Control's current lifecycle status
         */
        _status?: CustomControlLifecycleState;
    }
    /**
     * Component representing a custom control
     */
    class CustomControlHostRoot extends React.Component<ICustomControlHostProps, CustomControlHostState> implements ICustomControlHostRoot {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        /**
         * The internal status
         */
        private _internalStatus;
        /**
         * The hosted custom control
         */
        private _controlInstance;
        /**
         * The PropertyBag generation object
         */
        private _propertyBag;
        /**
         * Debouncer for output change listener
         */
        private _outputChangedDebouncer;
        /**
         * The popup service object
         */
        private _popupService;
        /**
         * The accessibility component
         */
        private _accessibilityComponent;
        /**
         * References for standard controls being nested.
         */
        private _childElements;
        /**
         * True if last metadata retrieval failed
         */
        private _manifestRetrieveFailed;
        /**
         * True if metadata were requested once
         */
        private _manifestRequestedOnce;
        /**
         * True if dynamic data were requested once through parameters
         */
        private _dynamicDataRequestedOnce;
        /**
         * Whether we are currently tracking the dimensions
         */
        private _trackingDimensions;
        /**
         * The measuring subscriber object
         */
        private _subscriber;
        /**
         * Commanding Wrapper object for control, used to manage commanding managers and their relations with datasets
         */
        private _commandingWrapper;
        /**
         * The latest recieved output from this control
         */
        private _latestOutputs;
        /**
         * Whether this control should try to ignore updates from itself
         */
        private _ignoreSelfUpdates;
        /**
         * parentId for the given Control
         */
        private _parentId;
        /**
         * Whether this control is currently rendering
         */
        private _currentlyRendering;
        /**
         * The standard content div for this root
         */
        private _rootElement;
        /**
         * Whether the control should skip it's next update
         */
        private _skipControlUpdate;
        /**
         * An internal state object
         */
        private _internalState;
        private _memoHelper;
        private _internalWorkPromiseResolve;
        private _internalPendingUnsentUpdates;
        private _outputChangedInternalInProgress;
        /**
         * An internal tracker of updated properties
         */
        private _updateInternalTracker;
        /**
         * Helper to track most see more functionality
         */
        private _seeMoreHelper;
        /**
         * Flag to track whether this control contains a child control in see more mode
         */
        private _descendantInSeeMore;
        private _errorData;
        /**
         * For Grid control, we always expect it to initialize with width provided.
         * Resolution function, which is called when the dimension size is updated.
         */
        private _resolveWidth;
        /**
         * Name of custom control
         */
        private _customControlName;
        /**
         * Full name of custom control
         */
        private _componentName;
        /**
         * A memoized version of the host data object sent to children/prop bag
         */
        private _constantHostData;
        /**
         * Promise which will get resolved when the global command manager finishes initialization
         */
        private _globalCommandManagerPromise;
        constructor(props?: ICustomControlHostProps);
        private _setGlobalCommandManagerPromise;
        private _getGlobalCommandManagerPromise;
        private _getPopupService;
        private _initializeData;
        /**
         * Returns true if the control is a virtual control or the manifest is missing (virtual until proven otherwise for rendering reasons)
         */
        private _isVirtual;
        /**
         * Callback triggerd by SeeMoreHelper when necessary
         * @param skipUpdateIfVirtual Boolean indicating if the control update should be skipped if the control is virtual, or the opposite otherwise.
         */
        private _seeMoreCallback;
        private _descendantSeeMoreUpdate;
        /**
         * Returns styles for component dom element
         */
        private _getDomIdDivStyleProperties;
        private _createPropertyBag;
        /**
         * Toggle ignoring self caused updates on this control
         * @param val the updated value to set whether to toggle resize tracking
         */
        private _updateSelfUpdateIgnore;
        /**
         * Toggle resize tracking for this control
         * @param val the updated value to set whether to toggle resize tracking
         */
        private _updateTrackResize;
        /**
         * Retrieve metadata for this custom control
         */
        private _loadManifest;
        /**
         * Load the associated resources for this custom control
         */
        private _loadResources;
        /**
         * Creates the Xrm object for the context and saves it if there is not already one
         */
        private _setXrmObject;
        /**
         * Bind a new react structure to the given DOMNode
         */
        private _bindDOMElement;
        private _updateChildComponent;
        private _forceUpdate;
        /**
         * Unmounts component from DOM node and removes the corresponding view model from the parent's childViewModels
         * dictionary - for standard controls only
         */
        private _unbindDOMComponent;
        /**
         * Clear all the DOM components
         */
        private _clearAllDOMComponents;
        /**
         * Ensure all dynamic data parameters are receiving or already received any data
         * @param props Custom control host props
         */
        private _ensureParameterDynamicDataInitialization;
        /**
         * Initialize a control
         */
        private _initializeControl;
        /**
         * Update a control
         */
        private _updateControl;
        /**
         *  Execute Any AddOnLoad events
         */
        private _executeAnyOnLoadEventsWhenNeeded;
        /**
         * Dispose the control
         */
        private _disposeControl;
        /**
         * Report Error to parent listener
         */
        private _onControlLoadedError;
        /**
         * Callback for control to alert framework that its outputs have changed
         */
        private _onOutputChanged;
        /**
         * Input for output change debouncer
         */
        private _onOutputChangedInternal;
        /**
         * Converts a Custom Control value to the SDK format
         * https://msdn.microsoft.com/en-us/library/gg334409.aspx
         * @param output An output from a CustomControl
         * @returns Formatted output
         */
        private _convertValueToSdkFormat;
        /**
         * Get the allocated height for this control
         */
        private _getAllocatedHeight;
        /**
         * Get the allocated width for this control
         */
        private _getAllocatedWidth;
        /**
         * Generate the bag of data from this object to pass to the property bag
         */
        private _generateHostDataForPropertyBag;
        private _seeMorePopup;
        /**
         * Generate the bag of data from this object to helper functions (i.e. property bag, VCT)
         */
        private _generateHostData;
        /**
         * Gets the root element of this CCHR
         */
        private _getComponent;
        /**
         * Set the latest dimensions for this control
         */
        private _updateDimensions;
        /**
         * Called after the component is updated
         */
        componentWillUnmount(): void;
        /**
         * Called after the component is rendered initially
         */
        componentDidMount(): void;
        /**
         * Called when the component gets new props
         */
        componentWillReceiveProps(nextProps: ICustomControlHostProps): void;
        /**
         * Called after the component is updated
         */
        componentDidUpdate(): void;
        private _registerToLearningPath;
        /**
         * Determine whether the component needs to be re-rendered.
         * @params nextProps The new component properties.
         * @returns {boolean} Whether to re-render the component.
         */
        shouldComponentUpdate(nextProps: ICustomControlHostProps): boolean;
        private _renderMainControlComponent;
        renderShadow(domId: string, style: any): JSX.Element;
        /**
         *  Constructs and returns the error div
         */
        private _getErrorElement;
        private _setErrorData;
        renderWrappedMainElement(domId: string, innerStyle: any): JSX.Element;
        renderContainerWithResizePads(mainElement: JSX.Element, outerStyle: any, domId: string): JSX.Element;
        /**
         * Render the generic div
         * @param style The style object
         */
        private _renderGenericDiv;
        /**
         * create the command managers for all etns requested
         */
        private _renderCommandingComponent;
        /**
         *  Error link click handler. Opens an error dialog with the error message and details
         */
        private _handleErrorLinkClick;
        /**
         * Render the section component.
         */
        render(): JSX.Element;
    }
    export { CustomControlLifecycleState, CustomControlHostState, CustomControlHostRoot };
}
declare module "CustomControls/Models/CustomControlDataInterfaces" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { ICCFContainerStyle } from "CommonComponents/Primitive/ICCFContainerStyle";
    import { CustomControlHostRoot } from "CustomControls/Components/CustomControlHostRoot";
    import { VirtualComponent } from "CustomControls/Components/VirtualComponent";
    import * as CustomControlDependantInterfaces from "CustomControls/Models/CustomControlDependantInterfaces";
    import { CustomControlEntityReference } from "CustomControls/Models/CustomControlEntityReference";
    import { CustomControlExposedUserAgent, DateFormattingInfo, IAccessibilityComponentWrapperProps, ICustomControlExposedOrgSettings, IPopupService, NumberFormattingInfo } from "CustomControls/Models/CustomControlExposedInterfaces";
    import { Dictionary } from "CustomControls/Utilities/Dictionary";
    interface ICustomControlHostOwnProps {
        controlId: string;
        id: string;
        systemDefinedProperties?: {
            [key: string]: CustomControlInterfaces.IPropertyCustomControlParameterDefinition;
        };
        configuration: CustomControlInterfaces.ICustomControlConfiguration;
        descriptor: CustomControlInterfaces.ICustomControlDescriptor;
        formInfo?: CustomControlInterfaces.IFormProps;
        parentDefinedControlProps?: CustomControlInterfaces.IParentComponentProps;
        rowSpan?: number;
        themingData?: IThemingData;
        children?: {
            [key: string]: CustomControlInterfaces.ICustomControlConfiguration;
        };
        contextString?: string;
        parentContextToken?: any;
        externalCommandManagerId?: string;
        externalCommandPromise?: DynamicsSrc.IDeferred<boolean, boolean>;
        /**
         * To disable control to be rendered
         */
        shouldRender?: boolean;
        /**
         * Describes the level of the log message
         */
        logLevel?: CustomControlInterfaces.TracerLogLevel;
    }
    /**
     * Initializiation parameters for a command manager object
     */
    interface ICommandManagerInitObject {
        /**
         * unique command manager id (pageId:controlId:etn)
         */
        commandManagerId: string;
        /**
         * ribbon id (optional), if not set, it should get auto generated
         */
        ribbonId?: string;
    }
    interface ICustomControlHostWrapperProps {
        dataSetUIOptions: CustomControlInterfaces.IDataSetUIOptions;
    }
    interface IDynamicData {
        parameters: {
            [key: string]: CustomControlInterfaces.ICustomControlParameter;
        };
        dataReady: boolean;
        updated: boolean;
        generateDummySystemProps?: boolean;
    }
    interface ICommonPropBagData {
        formattingData?: IFormattingData;
        clientData: IClientData;
        utilsData: IUtilsData;
        themingData: IThemingData;
    }
    interface IPropBagData extends ICommonPropBagData {
        accessibilityData: IAccessibilityData;
        resourcesData: IResourcesData;
        modeData: IModeData;
        pageData: IPageData;
    }
    /**
     * Props for a control component instance.
     */
    interface ICustomControlHostStateProps {
        /**
         * True if error occurred in mapStateToProps
         */
        stateToPropsMappingError?: boolean;
        /**
         * The error string/stack trace of a mapStateToProps error
         */
        stateToPropsMappingErrorMessage?: string;
        /**
         * Dynamic control data as defined by its configuraiton
         */
        dynamicData: IDynamicData;
        /**
         * The control manifest
         */
        manifest: CustomControlInterfaces.ICustomControlManifest;
        /**
         * The control's personalization state
         */
        personalizationState: any;
        /**
         * The state data needed by the property bag
         */
        propBagData: IPropBagData;
        /**
         * Child Controls configuration
         */
        children?: {
            [key: string]: CustomControlInterfaces.ICustomControlConfiguration;
        };
        personalizationConfiguration?: any;
        /**
         * The page type of the page where the control is
         */
        pageType?: string;
        /**
         * The popup stack of popups
         */
        popupStack?: string[];
        /**
         * Identify if component should update
         */
        popupRootNodes?: {
            [id: string]: boolean;
        };
        /**
         * Context Token, will be passed to child controls as parent's context Token
         */
        contextToken?: any;
        /**
         * Etns of to get command manager created inside Custom Control
         */
        internalCommandManagerEtns?: string[];
        /**
         * An array of updated properties
         */
        updatedProperties?: string[];
        /**
         * A list of command manager ids to create hidden command managers in Custom Control.
         */
        internalCommandManagerIds?: ICommandManagerInitObject[];
        /**
         * True if the global command manager is initialized
         */
        globalCommandManagerInitialized?: boolean;
        /**
         * the dialog container for flyout to portal it too
         */
        portalFlyoutToDialogId?: string;
        /**
         * The design language
         */
        designLanguage?: IThemeMap;
    }
    interface IThemeMap {
        [key: string]: string | IThemeMap;
    }
    interface ICustomControlHostDispatchPropsActions {
        clearNestedChild: (key: string) => boolean;
        createAccessibilityComponent: (props: IAccessibilityComponentWrapperProps) => JSX.Element;
        createCommandManagerUXComponent: () => (props: CustomControlDependantInterfaces.ICCFConnectedCommandManagerProps) => JSX.Element;
        createKeyboardShortcut: (keyCombination: number[], shortcutHandler: (event: KeyboardEvent) => void, isGlobal: boolean, areaName: string, shortcutDescription: string, srcElementId?: string) => CustomControlDependantInterfaces.IKeyboardShortcut;
        createXrmForm: (contextToken: any, pageId: string, entityTypeName: string, entityId: string) => boolean;
        createXrmGrid: (contextToken: any, pageId: string, parameters: CustomControlInterfaces.IParameterDefinitionMap, controlName?: string) => boolean;
        registerNewControl: (contextToken: any, pageId: string, controlName: string, controlId: string) => boolean;
        executeAddOnLoad: (dataSetObjectWrapper: any, contextToken: any) => any;
        executeNotifyHandlersThatEventOccurred: (notifyHandlersThatEventOccurredParameter: CustomControlInterfaces.INotifyHandlersThatEventOccurredParameter) => Promise<void>;
        getRecordSetQueryKey: (dataSetObjectWrapper: any) => string;
        addSessionTab: (sessionTab: CustomControlInterfaces.ITab) => Promise<void>;
        closeSessionTab: (closedSessionTabIndex: number) => Promise<void>;
        updateSessionTab: (sessionTab: CustomControlInterfaces.ITab) => Promise<void>;
        closeAllSessionTabs: () => Promise<void>;
        dismissMessage: () => Promise<void>;
        initializeReferencePanelControl: (controls: CustomControlInterfaces.IControlDescriptor[]) => Promise<void>;
        cleanReferencePanelState: () => Promise<void>;
        markActiveTab: (currentTab: CustomControlInterfaces.ITab, isUnderOverflow: boolean) => Promise<void>;
        getResource: (resource: CustomControlInterfaces.IResourceRecord) => Promise<void>;
        initializeCommandManager: (pageId: string, contextToken: any, controlId: string, commandManagerId: string) => any;
        loadManifest: (customControlId: string, customControlName?: string) => Promise<void>;
        loadResources: (customControl: CustomControlInterfaces.ICustomControlManifest) => Promise<void>;
        loadResourceStrings: (customControl: CustomControlInterfaces.ICustomControlManifest) => Promise<void>;
        triggerOfflineMetadataSync: () => Promise<void>;
        retrieveFormWithAttributes: (entityName: string, formId?: string, formType?: string) => Promise<any>;
        refreshDataSetParameter: (dataSetObjectWrapper: any, contextToken?: any) => any;
        retrieveDataSetLookupCellParameter: (dataSetParameter: CustomControlInterfaces.ILegacyDataSetParameter, dataSetLookupCellWrapper: any, contextToken?: any) => any;
        renderNestedCustomControl: (key: string, props: ICustomControlHostOwnProps, dataSetHostProps?: ICustomControlHostWrapperProps) => JSX.Element;
        renderReactSubtree: (context: CustomControlHostRoot, element: JSX.Element, node: Element) => void;
        retrieveGridData: (query: CustomControlInterfaces.ICCFQuery) => any;
        retrieveLookupData: (query: CustomControlInterfaces.ICCFQuery) => any;
        retrieveLookupMetadataAction: (lookupObjectWrapper: any) => any;
        addPendingCommandManagerId: (pageId: string, contextToken: any, controlId: string, commandManagerId: string) => any;
        retrieveRecordCommand: (allRecords: {
            [id: string]: CustomControlInterfaces.DataSetRecord;
        }, commandManagerId: string, contextToken: any, records: string[], commandButtonIds?: string[], filterByPriority?: boolean, useNestedFormat?: boolean, controlConstructorName?: string, refreshAllRules?: boolean, pageId?: string) => any;
        retrieveRecordDataForForm: (entityReference: CustomControlEntityReference, formId: string, processControlDataRequest?: Object, additionalColumns?: string[], isPrimaryAttributeRequested?: boolean) => Promise<any>;
        retrieveForm: (entityReference: CustomControlEntityReference, formId: string) => Promise<any>;
        retrieveEntityData: (etn: string) => Promise<any>;
        retrieveChartDrilldownAttributes: (etn: string) => Promise<any>;
        retrieveView: (entityTypeName: string, viewQueryType: any, viewType: any, viewId?: any) => any;
        retrieveViewSelector: (entityTypeName: string, viewQueryType: any) => any;
        save: (snapshotId: string, columns: string[]) => Promise<any>;
        saveEmbeddedEntity: (pageId: string, entityTypeName: string, recordId: string, closestParentWithContext: string, columnSet: string[]) => Promise<any>;
        setFieldControlPersonalization: (personalizationConfig: any, personalizations: any) => any;
        setGridControlPersonalization: (personalizationConfig: any, personalizations: any) => any;
        setDashboardControlPersonalization: (personalizationConfig: any, personalizations: any) => any;
        setGlobalControlPersonalization: (customControlId: string, personalizations: any) => any;
        setPowerBISignedInState: (pageId: string, signedInState: string) => void;
        beginSecureSessionForResource?: (resource: string, cookieName: string, cookieDoamin: string, allowPrompt?: boolean) => Promise<any>;
        setValue: (entityReference: any, controlKeyValuePairs: {
            [key: string]: any;
        }, snapshotId: string, pageId?: string) => Promise<string>;
        setXrmObject: (proxy: IXrmProxy) => void;
        updateFieldValue: (pageId: string, controlNameValuePairs: any, suppressOnChange?: boolean, entityTypeName?: string, recordId?: string, closestParentWithContext?: string) => void;
        updateOutputs: (pageId: string, entityTypeName: string, recordId: string, customControlId: string, closestControlParentWithSave: string, outputs: CustomControlInterfaces.IOutputMap, contextToken: any) => any;
        openPopup: (popupId: string) => Promise<any>;
        closePopup: (popupId: string) => Promise<any>;
        updateControlMemoizedDataSet: (legacyDataSetWrapper: any, actions: CustomControlInterfaces.ICustomControlActions, recordId: string) => void;
        executeRollupRequest: (target: ControlAndClientApiInterfaces.LookupValue, fieldName: string) => any;
        loadWebResource?: (resourceName: string) => Promise<any>;
        registerOngoingWork?: (promise: Promise<boolean>, forceResolveCallback?: () => void, pageId?: string) => any;
        isPresenceEnabledEntity: (entityName: string) => any;
        getPresenceMappedField: (entityName: string) => any;
        updateChartFilterExpression?: (pageId: string, contextToken: any, highChartFilterExpression: string) => any;
        fireXrmEvent?: (controlId: string, pageId: string, contextToken: any, eventType: CustomControlInterfaces.KnownSystemEventListeners, eventInfo?: string) => void;
        sendLookupRequest?: (lookupRequest: any, contextToken: any, pageId?: string, etn?: string, controlId?: string, attributeName?: string, dependentAttributeName?: string) => Promise<any>;
        runPreSearch?: (contextToken: any, controlId: string, pageId?: string) => void;
        runOnReadyStateComplete?: (contextToken: any, pageId: string, controlId: string) => void;
    }
    interface ICustomControlHostDispatchProps {
        /**
         * The dispatch methods on the property bag
         */
        propBagMethods: {
            navigation: INavigationDispatch;
            utils: IUtilsDispatch;
            device: IDeviceDispatch;
            mode: IModeDispatch;
        };
        actions: ICustomControlHostDispatchPropsActions;
    }
    interface ICustomControlHostRoot {
    }
    interface ICustomControlHostProps extends ICustomControlHostOwnProps, ICustomControlHostStateProps, ICustomControlHostDispatchProps {
    }
    interface ICustomControlWebClientWrapperProps {
        givenHostProps: ICustomControlHostProps;
        setReRenderCallBack: (forceCcfUpdate: () => any) => any;
    }
    /**
     * The values from the state needed for the client data
     */
    interface IClientData {
        orgSettingsData: ICustomControlExposedOrgSettings;
        languageCode: number;
        isRTL: boolean;
        showWeekNumber: boolean;
        locale: string;
        userAgent: CustomControlExposedUserAgent;
        formFactor: any;
        usePathBasedUrls: boolean;
        organizationUniqueName: string;
        disableScroll?: boolean;
    }
    /**
     * The values from the state needed for formatting
     */
    interface IFormattingData {
        timeZoneUtcOffsetMinutes?: number;
        dateTimeFormatInfo?: DateFormattingInfo;
        numberFormatInfo?: NumberFormattingInfo;
        timeZoneAdjusters?: CustomControlDependantInterfaces.ITimeZoneAdjusterState[];
        formatInfoCultureName?: string;
        formatter?: CustomControlDependantInterfaces.IFormatter;
        languagesByCode?: {
            [code: number]: string;
        };
    }
    /**
     * The resource string values from the state
     */
    interface IResourceStringData {
        /**
         * Mapping of resource string ids to resource string values
         */
        [stringId: string]: string;
    }
    /**
     * The values from the state needed for resources
     */
    interface IResourcesData {
        /**
         * Mapping of resource string ids to resource string values
         */
        strings: IResourceStringData;
        /**
         * Whether or not all of the resource string values have been loaded
         */
        stringsLoaded: boolean;
    }
    /**
     * The values that are needed to set correct Accessibility values for Custom Controls
     */
    interface IAccessibilityData {
        assignedTabIndex: number;
    }
    interface IUtilsData {
        encoder: CustomControlDependantInterfaces.IEncoder;
        dateTimeUtils: CustomControlDependantInterfaces.IDateTimeUtils;
        /**
         * Function to schedule rendering work.
         * @param render The function that will do the rendering work.
         */
        scheduleRender?: (render: () => void) => void;
        /**
         * Function to return if the user has Privilege for one specific entity
         * @entityTypeName entity type name
         * @privilegeType privilege type i.e. Create, Read, Write etc.
         * @privilegeDepth privilege depth i.e. basic, Global etc.
         */
        hasEntityPrivilege?: (entityTypeName: string, privilegeType: Constants.PrivilegeType, privilegeDepth: Constants.PrivilegeDepth) => boolean;
    }
    /**
     * Interface for mode data for property bag that contains type, id and record name
     */
    interface IModeData {
        entityTypeName: string;
        entityId: string;
        /**
         * EntityRecordName contains record name of a Entity
         */
        entityRecordName?: string;
        isOffline: boolean;
        isRead?: boolean;
    }
    /**
     * Interface for mode data for property bag
     */
    interface IPageData {
        appId: string;
        isPageReadOnly: boolean;
    }
    /**
     * The utils for mapDispatchToProps
     */
    interface IUtilsDispatch {
        setState(state: any): boolean;
        logMessage(customControlName: string, message: string, logType: number): void;
    }
    /**
     * The navigation for mapDispatchToProps
     */
    interface INavigationDispatch {
        openEditForm(entityReference: CustomControlEntityReference, processId?: string, processInstanceId?: string, selectedStageId?: string, isCrossEntityNavigate?: boolean): void;
        /**
         * An internal API used by Chart Custom Control drilldown
         * TODO: Combine all of the input parameters for openGridPage into one object, for future sustainable development. Task #454041
         */
        openGridPage(entityTypeName: string, viewId?: string, showChart?: boolean, visualizationType?: number, visualizationId?: string, filterExpression?: string, chartDrillDownParameters?: CustomControlInterfaces.ChartDrillDownParameter[]): void;
        openDashboard(id: string): void;
        openCreateForm(logicalName: string, initialValues?: Dictionary, createFromEntity?: CustomControlEntityReference): void;
        openSearch(query?: string): void;
        openPowerBIFullScreenPage(powerBIEmbedUrl?: string, powerBIGroupId?: string, powerBIDashboardId?: string, powerBITileId?: string, powerBIReportId?: string, powerBIReportUrl?: string, powerBIComponentTypeCode?: string): void;
        openUrl(url: string, options?: ControlAndClientApiInterfaces.WindowOptions): void;
        openUrlWithProtocol(url: string, protocol: string): void;
        openPhoneNumber(phoneNumber: string, etn: string, id: string, name: string, openFormOnEnd?: boolean): void;
        openMaps(address: string): void;
        openMap(address: string): void;
    }
    interface IDeviceDispatch {
        isGetBarcodeValueOperationAvailable(): boolean;
        /**
         * Determines if take picture operation is supported in the device
         */
        isTakePictureOperationAvailable(): boolean;
        /**
         * Determines if capture video operation is supported in the device
         */
        isCaptureVideoOperationAvailable(): boolean;
        /**
         * Determines if capture audio operation is supported in the device
         */
        isCaptureAudioOperationAvailable(): boolean;
    }
    interface IModeDispatch {
        setNotification(message: string, id: string, pageId: string, controlName: string, contextToken: any, entityTypeName: string, entityId: string): boolean;
        clearNotification(pageId: string, controlName: string, contextToken: any, entityTypeName: string, entityId: string, id?: string): boolean;
    }
    /**
     * References to items needed from the Xrm Object
     */
    interface IXrmProxy {
        Initialized: boolean;
        OrgSettings: ControlAndClientApiInterfaces.OrgSettings;
        UserSettings: ControlAndClientApiInterfaces.UserSettings;
        Offline: ControlAndClientApiInterfaces.Offline;
        Utils: ControlAndClientApiInterfaces.Utils;
        Page: ControlAndClientApiInterfaces.Page;
        Reporting: ControlAndClientApiInterfaces.Reporting;
        Diagnostics: ControlAndClientApiInterfaces.Diagnostics;
        Client: ControlAndClientApiInterfaces.Client;
        setUserSettings(userSettings: ControlAndClientApiInterfaces.UserSettings): void;
        setOrgSettings(orgSettings: ControlAndClientApiInterfaces.OrgSettings): void;
        setUtils(utils: ControlAndClientApiInterfaces.Utils): void;
        setOffline(offline: ControlAndClientApiInterfaces.Offline): void;
        setPage(page: ControlAndClientApiInterfaces.Page): void;
        setReporting(reporting: ControlAndClientApiInterfaces.Reporting): void;
        setDiagnostics(diagnostics: ControlAndClientApiInterfaces.Diagnostics): void;
        setNavigationContext(xrmNavigation: ControlAndClientApiInterfaces.Navigation): void;
        setClient(client: ControlAndClientApiInterfaces.Client): void;
        setExternalContext(xrmExternalContext: ControlAndClientApiInterfaces.ExternalContext): void;
        setDeviceContext(xrmDevice: ControlAndClientApiInterfaces.Device): void;
        setApplicationUI(applicationUI: ControlAndClientApiInterfaces.ApplicationUI): void;
        setWebApi(webApi: ControlAndClientApiInterfaces.WebApiSwitch): void;
    }
    /**
     * External utils which could be added not only from state
     */
    interface IExternalUtils {
        xrmProxy: IXrmProxy;
        getPopupService(): IPopupService;
        forceUpdate(callback?: () => void): void;
        bindDOMElement(virtualComponent: VirtualComponent, DOMNode: Element): void;
        unbindDOMComponent(componentId: string): boolean;
        updateComponent(id: string, props: Dictionary): void;
        setGlobalCommandManagerPromise(promise: any): void;
        getGlobalCommandManagerPromise(): any;
    }
    /**
     * Data to be passed from a CCHR to a composited child, or to its property bag
     */
    interface IHostData {
        allocatedHeight: number;
        allocatedWidth: number;
        updatedProperties: string[];
        isInSeeMoreMode: boolean;
        isInTopMostSeeMore: boolean;
        updateDescendantSeeMore(childSeeMoreStatus: boolean): void;
        trackResize(shouldTrack: boolean): void;
        updateFullscreen(isFullscreen: boolean): void;
        ignoreUpdates(shouldIgnore: boolean): void;
    }
    /**
     * The values from the state needed for the theming data
     */
    interface IThemingData {
        defaultThemingData: IDefaultThemingData;
        getEntityColor: (entityLogicalName: string) => string;
        fullScreenOverrideStyle?: ICCFContainerStyle;
    }
    /**
     * The values from the state needed for the default theming data
     */
    interface IDefaultThemingData {
        normalfontfamily: string;
        normalfontcolor: string;
        normalfontsize: string;
        solidborderstyle: string;
        noneborderstyle: string;
        colors: IDefaultThemingDataColors;
        textbox: IDefaultThemingDataTextBox;
        spacings: IDefaultThemingDataSpacings;
        fontfamilies: IDefaultThemingDataFontFamilies;
        fontsizes: IDefaultThemingDataFontSizes;
        breakpoints: IDefaultThemingDataBreakpoints;
        measures: IDefaultThemingDataMeasures;
        lookup: IDefaultThemingDataLookup;
        borders: IDefaultThemingDataBorders;
        shadows: IDefaultThemingDataShadows;
        buttons: IDefaultThemingDataButtons;
    }
    interface IDefaultThemingDataButtons {
        button01primary: Object;
        button01secondary: Object;
        buttonprimarytext: Object;
        buttonsecondarytext: Object;
        actioniconbutton01: Object;
        button02primary: Object;
        button02secondary: Object;
    }
    interface IDefaultThemingDataLookup {
        tagpadding: string;
        tagmargin: string;
        tagbackgroundcolor: string;
    }
    interface IDefaultThemingDataBorders {
        border01: string;
        border02: string;
        border03: string;
    }
    interface IDefaultThemingDataShadows {
        shadow01: string;
    }
    interface IDefaultThemingDataMeasures {
        measure025: string;
        measure050: string;
        measure075: string;
        measure100: string;
        measure125: string;
        measure150: string;
        measure175: string;
        measure200: string;
        measure225: string;
        measure250: string;
        measure300: string;
        measure350: string;
        measure400: string;
        measure450: string;
        measure500: string;
        measure550: string;
        measure600: string;
    }
    interface IDefaultThemingDataBreakpoints {
        dimensionxs: string;
        dimensions: string;
        dimensionm: string;
        dimensionl: string;
        dimensionxl: string;
    }
    interface IDefaultThemingDataFontSizes {
        xsfontsize: string;
        sfontsize: string;
        bfontsize: string;
        mfontsize: string;
        lfontsize: string;
        xlfontsize: string;
        font225: string;
        font200: string;
        font175: string;
        font150: string;
        font125: string;
        font115: string;
        font100: string;
        font085: string;
        font075: string;
    }
    interface IDefaultThemingDataFontFamilies {
        semilight: string;
        semibold: string;
        regular: string;
        bold: string;
    }
    interface IDefaultThemingDataSpacings {
        xshorizontal: string;
        shorizontal: string;
        bhorizontal: string;
        mhorizontal: string;
        lhorizontal: string;
        xlhorizontal: string;
        xxlhorizontal: string;
        xsvertical: string;
        svertical: string;
        bvertical: string;
        mvertical: string;
        lvertical: string;
        xlvertical: string;
        xxlvertical: string;
    }
    interface IDefaultThemingDataColors {
        whitebackground: string;
        defaulttheming: string;
        navbarshelf: string;
        header: string;
        globallink: string;
        selectedlinkeffect: string;
        hoverlinkeffect: string;
        processcontrol: string;
        defaultentity: string;
        defaultcustomentity: string;
        controlshade: string;
        controlborder: string;
        statustheme: IStatusColors;
        status: IDefaultThemingDataStatusColors;
        baseColor: IBaseColors;
        base: IDefaultThemingDataBaseColors;
        links: IDefaultThemingDataLinkColors;
        linkstheme: ILinkColors;
        grays: IDefaultThemingDataGrayColors;
    }
    interface IDefaultThemingDataGrayColors {
        gray01: string;
        gray02: string;
        gray03: string;
        gray04: string;
        gray05: string;
        gray06: string;
        gray07: string;
        gray08: string;
        gray09: string;
    }
    interface IDefaultThemingDataStatusColors {
        neutral: string;
        error: string;
        warning: string;
        success: string;
        info: string;
    }
    interface IDefaultThemingDataLinkColors {
        default: string;
        visited: string;
        disabled: string;
    }
    interface IDefaultThemingDataBaseColors {
        white: string;
        black: string;
        red: string;
        orange: string;
        yellow: string;
        green: string;
        blue: string;
        teal: string;
        purple: string;
    }
    /**
     * Color interface, contains Fill and Text
     */
    interface IColor {
        /**
         * Fill color
         */
        Fill?: string;
        /**
         * Text color
         */
        Text?: string;
    }
    /**
     * Control interface, contains Fill, Text and Stroke
     */
    interface IControlColor extends IColor {
        /**
         * Default control border
         */
        Stroke?: string;
    }
    /**
     * Link different status theming
     */
    interface ILinkColors {
        Normal?: IColor;
        /**
         * Hover color
         */
        Hover?: IColor;
        /**
         * Visited link color
         */
        Visited?: IColor;
        /**
         * Visited link color
         */
        Pressed?: IColor;
        /**
         * Disabled link color
         */
        Disabled?: IColor;
    }
    /**
     * Navbar theming color
     */
    interface INavBarThemeColor {
        /**
         * 1st NavBar theming color
         */
        NavBar1?: IColor;
        /**
         * 2nd NavBar theming color
         */
        NavBar2?: IColor;
        /**
         * 3rd NavBar theming color
         */
        NavBar3?: IColor;
    }
    /**
     * Accent theming color
     */
    interface IAccentThemeColor {
        /**
         * 1st accent theming color
         */
        Accent1?: IColor;
        /**
         * 2nd accent theming color
         */
        Accent2?: IColor;
        /**
         * 3rd accent theming color
         */
        Accent3?: IColor;
    }
    /**
     * Main theming color
     */
    interface IMainThemeColor {
        /**
         * 1st Main theming color
         */
        MainColor1?: IColor;
        /**
         * 2nd Main theming color
         */
        MainColor2?: IColor;
        /**
         * 3rd Main theming color
         */
        MainColor3?: IColor;
    }
    /**
     * For future consumption
     */
    interface IBaseColorSet {
        BaseColor: string;
        lighter(Luminosity: number): string;
        darker(Luminosity: number): string;
    }
    /**
     * base color for theming
     */
    interface IBaseColorSetStatic {
        /**
         * Dictionary for each shade of color
         */
        [key: string]: string;
    }
    interface IBaseColors {
        /**
         * Color definition red
         */
        Red?: IBaseColorSetStatic;
        /**
         * Color definition orange
         */
        Orange?: IBaseColorSetStatic;
        /**
         * Color definition yellow
         */
        Yellow?: IBaseColorSetStatic;
        /**
         * Color definition green
         */
        Green?: IBaseColorSetStatic;
        /**
         * Color definition blue
         */
        Blue?: IBaseColorSetStatic;
        /**
         * Color definition teal
         */
        Teal?: IBaseColorSetStatic;
        /**
         * Color definition purple
         */
        Purple?: IBaseColorSetStatic;
        /**
         * Color definition Clay
         */
        Clay?: IBaseColorSetStatic;
        /**
         * Color definition Clay
         */
        Pink?: IBaseColorSetStatic;
        /**
         * Color definition Grey
         */
        Grey?: IBaseColorSetStatic;
        /**
         * Color definition Violet
         */
        Violet?: IBaseColorSetStatic;
        /**
         * Color definition White
         */
        White?: string;
        /**
         * Color definition Black
         */
        Black?: string;
        /**
         * Color Transparent
         */
        Transparent?: string;
        /**
         * Color definition Black
         */
        CalculateContrast?: Function;
    }
    interface IStatusColors {
        Alert1?: IColor;
        Alert2?: IColor;
        /**
         * Priority1
         */
        Priority1?: IColor;
        /**
         * Priority2
         */
        Priority2?: IColor;
        /**
         * Priority3
         */
        Priority3?: IColor;
        /**
         * Positive1
         */
        Positive1?: IColor;
        /**
         * Positive2
         */
        Positive2?: IColor;
        /**
         * Info1
         */
        Info1?: IColor;
        /**
         * Neutral1
         */
        Neutral1?: IColor;
    }
    interface IDefaultThemingDataTextBox {
        fonticonsize: string;
        fontweight: number;
        contentfontweight: number;
        fontsize: string;
        errorfontsize: string;
        spacing: string;
        containerspacing: string;
        rightmargin: string;
        lineheight: string;
        linethickness: string;
        errorlinethickness: string;
        horizontalpadding: string;
        verticalpadding: string;
        maxlength: number;
        labelcolor: string;
        contentcolor: string;
        linecolor: string;
        hoverboxcolor: string;
        backgroundcolor: string;
        errorbackgroundcolor: string;
        redcolor: string;
        bluecolor: string;
        restmodecolor: string;
    }
    export { IThemeMap, IColor, IControlColor, ILinkColors, IAccentThemeColor, INavBarThemeColor, IMainThemeColor, IBaseColorSet, IBaseColorSetStatic, IBaseColors, IStatusColors, IDefaultThemingDataStatusColors, IDefaultThemingDataBaseColors, IDefaultThemingDataLinkColors, IDefaultThemingDataGrayColors, IAccessibilityData, IDynamicData, IClientData, IDefaultThemingDataButtons, IDefaultThemingDataLookup, IDefaultThemingDataBorders, IDefaultThemingDataShadows, IDefaultThemingDataMeasures, IDefaultThemingDataBreakpoints, IDefaultThemingDataFontSizes, IDefaultThemingDataFontFamilies, IDefaultThemingDataSpacings, IDefaultThemingDataColors, IDefaultThemingDataTextBox, IDefaultThemingData, IThemingData, IFormattingData, IResourceStringData, IResourcesData, IUtilsData, IModeData, IPageData, IUtilsDispatch, INavigationDispatch, IDeviceDispatch, IModeDispatch, IXrmProxy, ICommonPropBagData, IPropBagData, ICommandManagerInitObject, ICustomControlHostRoot, ICustomControlHostOwnProps, ICustomControlHostWrapperProps, ICustomControlHostStateProps, ICustomControlHostDispatchPropsActions, ICustomControlHostDispatchProps, ICustomControlHostProps, ICustomControlWebClientWrapperProps, IExternalUtils, IHostData, };
}
declare module "CustomControls/Utilities/XrmProxy" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IXrmProxy } from "CustomControls/Models/CustomControlDataInterfaces";
    /**
     * XrmProxy is designed to be a singleton class used in UClient to get access to Client Api functions without an actions
     */
    class XrmProxy implements IXrmProxy {
        private _userSettings;
        private _orgSettings;
        private _utils;
        private _offline;
        private _page;
        private _reporting;
        private _diagnostics;
        private _client;
        private _navigationContext;
        private _deviceContext;
        private _externalContext;
        private _applicationUI;
        private _webApiContext;
        private _initialized;
        constructor();
        /**
         * Getters and setters
         */
        Initialized: boolean;
        OrgSettings: ControlAndClientApiInterfaces.OrgSettings;
        UserSettings: ControlAndClientApiInterfaces.UserSettings;
        Offline: ControlAndClientApiInterfaces.Offline;
        Utils: ControlAndClientApiInterfaces.Utils;
        Page: ControlAndClientApiInterfaces.Page;
        Reporting: ControlAndClientApiInterfaces.Reporting;
        Diagnostics: ControlAndClientApiInterfaces.Diagnostics;
        Client: ControlAndClientApiInterfaces.Client;
        /**
         * set the user settings
         * @param {ControlAndClientApiInterfaces.UserSettings} userSettings the user settings
         */
        setUserSettings(userSettings: ControlAndClientApiInterfaces.UserSettings): void;
        /**
         * set the organization settings
         * @param {ControlAndClientApiInterfaces.UserSettings} userSettings the user settings
         */
        setOrgSettings(orgSettings: ControlAndClientApiInterfaces.OrgSettings): void;
        /**
         * set the offline settings
         * @param {ControlAndClientApiInterfaces.OfflineSettings} offlineUtils the offline utils
         */
        setOffline(offline: ControlAndClientApiInterfaces.Offline): void;
        setUtils(utilities: ControlAndClientApiInterfaces.Utils): void;
        setPage(page: ControlAndClientApiInterfaces.Page): void;
        setReporting(reporting: ControlAndClientApiInterfaces.Reporting): void;
        setDiagnostics(diagnostics: ControlAndClientApiInterfaces.Diagnostics): void;
        setClient(client: ControlAndClientApiInterfaces.Client): void;
        /**
         * set the navigation context
         * @param {ControlAndClientApiInterfaces.Navigation} xrmNavigation the navigation context
         */
        setNavigationContext(xrmNavigation: ControlAndClientApiInterfaces.Navigation): void;
        /**
         * set the Device context
         * @param {ControlAndClientApiInterfaces.Device} xrmDevice the device context
         */
        setDeviceContext(xrmDevice: ControlAndClientApiInterfaces.Device): void;
        /**
         * set the External Context context
         * @param {ControlAndClientApiInterfaces.ExternalContext} The external context
         */
        setExternalContext(xrmExternalContext: ControlAndClientApiInterfaces.ExternalContext): void;
        setApplicationUI(applicationUI: ControlAndClientApiInterfaces.ApplicationUI): void;
        /**
         * sets the web api
         * @param webApi The web api
         */
        setWebApi(webApi: ControlAndClientApiInterfaces.WebApiSwitch): void;
        /**
         * Individual functions on the XrmProxy so the 'this' context on the original function can be maintained
         */
        /**
         * Opens an entity form or quick create form.
         * @param options entity form options.
         * @param parameters entity form parameters.
         * @returns promise defining success or failure of operation
         */
        openForm(options: ControlAndClientApiInterfaces.EntityFormOptions, parameters?: ControlAndClientApiInterfaces.Parameters): Promise<ControlAndClientApiInterfaces.OpenFormSuccessResponse>;
        /**
         * Open url, including file urls.
         * @param url url to be opened.
         * @param options window options for the url.
         */
        openUrl(url: string, options?: ControlAndClientApiInterfaces.WindowOptions): void;
        /**
         * Open a file.
         * @param file file to be opened description.
         * @param options Options for openFile.
         */
        openFile(file: File, options?: ControlAndClientApiInterfaces.OpenFileOptions): Promise<void>;
        /**
         * Opens Alert Dialog
         * @param alertStrings Strings to be used in alert dialog
         * @param options Dialog options
         * @returns promise defining success or failure of operation
         */
        openAlertDialog(alertStrings: ControlAndClientApiInterfaces.AlertDialogStrings, options?: ControlAndClientApiInterfaces.DialogOptions): Promise<ControlAndClientApiInterfaces.AlertDialogResponse>;
        /**
         * Opens Confirm Dialog
         * @param confirmStrings String which will be used in the dialog
         * @param options Options for the dialog
         * @returns promise defining success or failure of operation. the success case returns a boolean specifying if yes or no button where pressed
         */
        openConfirmDialog(confirmStrings: ControlAndClientApiInterfaces.ConfirmDialogStrings, options?: ControlAndClientApiInterfaces.DialogOptions): Promise<ControlAndClientApiInterfaces.ConfirmDialogResponse>;
        /**
         * Opens a Dialog
         * @param dialogName Unique name of the dialog
         * @param dialogArguments Input arguments which needs to be passed
         * @param options Dialog options
         * @returns promise defining success or failure of operation
         */
        openDialog(name: string, options?: ControlAndClientApiInterfaces.DialogOptions, parameters?: ControlAndClientApiInterfaces.Parameters): Promise<ControlAndClientApiInterfaces.DialogResponse>;
        /**
         * Opens Error Dialog
         * @param options Dialog options
         * @returns promise defining close or cancel response.
         */
        openErrorDialog(options: ControlAndClientApiInterfaces.ErrorDialogOptions): Promise<ControlAndClientApiInterfaces.ErrorDialogResponse>;
        /**
         * ClientAPI: Opens a task flow.
         * @param name name of the task flow.
         * @param options task flow options.
         * @param parameters task flow parameters.
         * @returns promise defining success or failure of operation
         */
        openTaskFlow(name: string, options?: ControlAndClientApiInterfaces.TaskFlowOptions, parameters?: ControlAndClientApiInterfaces.Parameters): Promise<ControlAndClientApiInterfaces.TaskFlowResponse>;
        /**
         * ClientAPI: Opens an HTML web resource.
         * @param name The name of the HTML web resource to open.
         * @param options Window options for the web resource.
         * @param data Data to be passed into the data parameter.
         */
        openWebResource(name: string, options?: ControlAndClientApiInterfaces.WindowOptions, data?: string): void;
        /**
         * Capture image.
         * @param options capture picture options.
         */
        captureImage(options?: ControlAndClientApiInterfaces.CaptureImageOptions): Promise<File>;
        /**
         * Capture audio.
         */
        captureAudio(): Promise<File>;
        /**
         * Capture video.
         */
        captureVideo(): Promise<File>;
        /**
         * Pick one or more files from device
         * @param options file pick options
         */
        pickFile(options?: ControlAndClientApiInterfaces.PickFileOptions): Promise<File[]>;
        /**
         * Invoke camera to scan Barcode and returns the Scanned Barcode value as string
         * In case of error, returns the ErrorResponse.
         * @returns A deferred containing the Scanned Barcode value. Or, error response object.
         */
        getBarcodeValue(): Promise<string>;
        /**
         * Returns the current geolocation object.
         * In case of error, returns the error object.
         * @returns A deferred containing cordova geolocation object. Or, the error object.
         */
        getCurrentPosition(): Promise<Position>;
        /**
         * Retrieves descriptors for all available external contexts.
         * @return {Collection.ItemCollection<ExternalContextDescriptor>} A collection of the available external contexts.
         */
        getAvailableExternalContexts(): Collection.ItemCollection<ControlAndClientApiInterfaces.ExternalContextDescriptor>;
        /**
         * Retrieves a property from an external context.
         * @param {string} externalContextId - The context from which to retrieve the property
         * @param {string} string - The property to retrieve
         * @param {ExternalContextPropertyOptions} [options] - Optional. Any additional options for retrieving the property.
         * @return {Promise<ExternalContextResult>} A promise for the external context property
         */
        getExternalContextProperty(externalContextId: string, externalContextPropertyId: string, options?: ControlAndClientApiInterfaces.ExternalContextPropertyOptions): Promise<ControlAndClientApiInterfaces.ExternalContextSuccessResponse>;
        /**
         * Invokes an action on an external context.
         * @param {string} externalContextId - The context upon which to invoke the action
         * @param {string} externalContextActionId - The action to invoke
         * @param {ExternalContextActionOptions} [options] - Optional. Any additional options for invoking the action
         * @return {Promise<ExternalContextResult>} A promise for the invocation result
         */
        invokeExternalContextAction(externalContextId: string, externalContextActionId: string, options?: ControlAndClientApiInterfaces.ExternalContextActionOptions): Promise<ControlAndClientApiInterfaces.ExternalContextSuccessResponse>;
        /**
         * Remove an external context property listener.
         * @param {string} externalContextId - The context from which to retrieve the property
         * @param {string} externalContextPropertyId - The property to retrieve
         * @param {string} externalContextPropertyListenerKey - The update listener key
         */
        removeExternalContextPropertyListener(externalContextId: string, externalContextPropertyId: string, listener: ControlAndClientApiInterfaces.ExternalContextPropertyListener): void;
        /**
         * Adds the global notification.
         * From ApplicationUI.addGlobalNotification in Client API
         * @param type The type of the notification. GlobalNotificationType in ClientApi.
         * @param level The level of the notification. GlobalNotificationLevel in ClientApi.
         * @param message The message of the notification.
         * @param title The message of the notification.
         * @param action The action of the notification.
         * @param onCloseHandler The onCloseHandler for the notification.
         * @returns promise defining success or failure of operation. the success case returns an Id of opened toast
         */
        addGlobalNotification(type: number, level: number, message: string, title: string, action: ControlAndClientApiInterfaces.ActionDescriptor, onCloseHandler: ControlAndClientApiInterfaces.EventHandler): Promise<string>;
        /**
         * Clears the global Notification.
         * From ApplicationUI.clearGlobalNotification in Client API
         * @param id The id of a GlobalNotification.
         * @returns promise defining success or failure of operation
         */
        clearGlobalNotification(id: string): Promise<void>;
        /**
         * Clears the global Notification.
         * From ApplicationUI.clearGlobalNotification in Client API
         * @param id The id of a GlobalNotification.
         * @returns promise defining success or failure of operation
         */
        clearGlobalNotifications(): Promise<void>;
        private _getWebApiContext;
        /**
         * To retrieve a record from offline db
         * @param id guid to retrieve the record
         * @param entityType schema name of the entity type record to create
         * @param options Options having select and expand conditions
         * @returns The deferred object for the result of the operation
         */
        retrieveRecord(entityType: string, id: string, options?: string): Promise<WebApi.Entity>;
        /**
         * To create a new record in mobile offline db
         * @param data dictionary with attribute schema name and value
         * @param entityType logical name of the entity type record to create
         * @returns The deferred object for the result of the operation.
         */
        createRecord(entityType: string, data: WebApi.Entity): Promise<ControlAndClientApiInterfaces.LookupValue>;
        /**
         * To update a record in mobile offline db
         * @param id guid to update the record
         * @param data dictionary containing changed attributes with schema name and value
         * @param entityType logical name of the entity type record to update
         * @returns The deferred object for the result of the operation.
         */
        updateRecord(entityType: string, id: string, data: WebApi.Entity): Promise<ControlAndClientApiInterfaces.LookupValue>;
        /**
         * To delete the record mobile offline db
         * @param id guid to delete the record
         * @param entityType logical name of the entity type record to delete
         * @returns The deferred object for the result of the operation.
         */
        deleteRecord(entityType: string, id: string): Promise<ControlAndClientApiInterfaces.LookupValue>;
        /**
         * To retrieve the records from mobile offline db
         * @param entityType Schema name of the entity type record to retrieve
         * @param options Record retrieval options
         * @param maxPageSize Records to be retrieved per page
         * @returns The deferred object for the result of the operation.
         */
        retrieveMultipleRecords(entityType: string, options?: string, maxPageSize?: number): Promise<WebApi.RetrieveMultipleResponse>;
        /**
         * Execute a single request.
         * @param request to be executed
         */
        execute(request: WebApi.ODataContract): Promise<WebApi.Response>;
        /**
         * Execute multiple request.
         * @param requests array containing request to be executed
         */
        executeMultiple(requests: WebApi.ODataContract[]): Promise<WebApi.Response[]>;
    }
    const instance: XrmProxy;
    export { XrmProxy, instance as default };
}
declare module "CommonComponents/Primitive/FontIcon" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IViewStyle } from "CommonComponents/Primitive/IViewStyle";
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import { ComponentBase, IPropsBase } from "CommonComponents/Primitive/ComponentBase";
    /**
     * Props for a FontIcon component instance
     */
    interface IFontIconProps<T> extends IPropsBase {
        /**
         * Icon type
         */
        type: T;
        /**
         * Style for FontIcon component
         */
        style?: IViewStyle & ITextStyle;
    }
    abstract class FontIcon<T> extends ComponentBase<IFontIconProps<T>, any> {
        /**
         * Display name for React dev tools
         */
        static displayName: string;
        constructor(props?: IFontIconProps<T>, context?: any);
        /**
         * Returns the specific name of the underlying element.
         */
        protected getElementName(): string;
        /**
         * Returns combination of fela classes and icon's symbol class name
         */
        protected getElementClassName(): string;
        abstract getSymbolClassName(type: T): string;
    }
    export { IFontIconProps, FontIcon };
}
declare module "CommonComponents/FontIcon/MicrosoftIcon" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import { IFontIconProps, FontIcon } from "CommonComponents/Primitive/FontIcon";
    import { MicrosoftIconSymbol } from "CommonComponents/FontIcon/MicrosoftIconSymbol";
    class InnerMicrosoftIcon extends FontIcon<MicrosoftIconSymbol> {
        getSymbolClassName(type: MicrosoftIconSymbol): string;
    }
    /**
     * Icon Display Type enum
     */
    enum IconPosition {
        None = 0,
        Left = 1,
        Top = 2
    }
    const MicrosoftIcon: any;
    export { InnerMicrosoftIcon, MicrosoftIcon, IFontIconProps, IconPosition };
}
declare module "CommonComponents/Common/ErrorIconControl" {
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import { IViewStyle, IViewHtmlStyle } from "CommonComponents/Primitive/IViewStyle";
    import { IFlexboxContainerStyle } from "CommonComponents/Primitive/IFlexboxContainerStyle";
    /**
     * Interface for component styles
     */
    type IErrorIconControlStyle = IViewStyle & IFlexboxContainerStyle & IViewHtmlStyle;
    /**
     * Interface for component properties
     */
    interface IErrorIconControlProps {
        /**
         * Error message which should be shown to user
         */
        errorMessage?: string;
        /**
         * Styles to customize component
         */
        style?: IErrorIconControlStyle;
        /**
         * Styles for error symbol X
         */
        errorSymbolStyle?: ITextStyle;
        /**
         * Id
         */
        id?: string;
    }
    /**
     * Component represents error icon
     */
    function ErrorIconControl(props: IErrorIconControlProps): JSX.Element;
    export { IErrorIconControlStyle, IErrorIconControlProps, ErrorIconControl };
}
declare module "CommonComponents/Common/InfoIconControl" {
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import { IViewStyle, IViewHtmlStyle } from "CommonComponents/Primitive/IViewStyle";
    import { IFlexboxContainerStyle } from "CommonComponents/Primitive/IFlexboxContainerStyle";
    /**
     * Interface for component styles
     */
    type IInfoIconControlStyle = IViewStyle & IFlexboxContainerStyle & IViewHtmlStyle;
    /**
     * Interface for component properties
     */
    interface IInfoIconControlProps {
        /**
         * Info message which should be shown to the user
         */
        infoMessage?: string;
        /**
         * Styles to customize component
         */
        style?: IInfoIconControlStyle;
        /**
         * Styles for error symbol i
         */
        infoSymbolStyle?: ITextStyle;
        /**
         * Id
         */
        id?: string;
        /**
         * for aria-hidden
         */
        accessibilityHidden?: boolean;
    }
    /**
     * Component represents info icon
     */
    function InfoIconControl(props: IInfoIconControlProps): JSX.Element;
    export { IInfoIconControlStyle, IInfoIconControlProps, InfoIconControl };
}
declare module "CommonComponents/Common/WarningIconControl" {
    import { ITextStyle } from "CommonComponents/Primitive/Text";
    import { IViewStyle, IViewHtmlStyle } from "CommonComponents/Primitive/IViewStyle";
    import { IFlexboxContainerStyle } from "CommonComponents/Primitive/IFlexboxContainerStyle";
    /**
     * Interface for component styles
     */
    type IWarningIconControlStyle = IViewStyle & IFlexboxContainerStyle & IViewHtmlStyle;
    /**
     * Interface for component properties
     */
    interface IWarningIconControlProps {
        /**
         * Warning message which should be shown to user
         */
        warningMessage?: string;
        /**
         * Styles to customize component
         */
        style?: IWarningIconControlStyle;
        /**
         * Styles for warning symbol
         */
        warningSymbolStyle?: ITextStyle;
        /**
         * Id
         */
        id?: string;
    }
    /**
     * Component represents warning icon
     */
    function WarningIconControl(props: IWarningIconControlProps): JSX.Element;
    export { IWarningIconControlStyle, IWarningIconControlProps, WarningIconControl };
}
declare module "CustomControls/Components/CustomControlWebClientWrapper" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    import * as React from "react";
    import * as Fela from "fela";
    import { ICustomControlWebClientWrapperProps } from "CustomControls/Models/CustomControlDataInterfaces";
    /**
     * The custom control host state
     * TODO: Move to main ApplicationState, if feasible
     */
    interface CustomControlWebClientWrapperState {
    }
    /**
     * Component representing a custom control
     */
    class CustomControlWebClientWrapper extends React.Component<ICustomControlWebClientWrapperProps, CustomControlWebClientWrapperState> {
        private static _FelaInitialized;
        private static _FelaRenderer;
        private static _FelaElement;
        constructor(props?: ICustomControlWebClientWrapperProps);
        private _initializeFela;
        /**
         * falseUpdate wrapper
         * @param callback
         */
        private _forceUpdate;
        getChildContext(): {
            renderer: Fela.Renderer;
        };
        /**
         * Called after the component is rendered initially
         */
        componentDidMount(): void;
        /**
         * Render the section component.
         */
        render(): JSX.Element;
    }
    export { CustomControlWebClientWrapperState, CustomControlWebClientWrapper };
}
declare module "CustomControls/Models/PropertyFallbacks/Validation/DefaultAttributeMetadataGeneration" {
    function generateDefaultAttributeMetadata(type: string, overrides?: CustomControlInterfaces.ICustomControlAttributes): CustomControlInterfaces.ICustomControlAttributes;
    export { generateDefaultAttributeMetadata };
}
declare module "CustomControls/Models/PropertyFallbacks/Validation/DefaultValidator" {
    interface IValidator {
        error: boolean;
        errorMessage: string;
    }
    function getValidation(value: any, type: string, attributes?: CustomControlInterfaces.ICustomControlAttributes, attributeValidation?: boolean): IValidator;
    export { IValidator, getValidation };
}
declare module "CustomControls/Utilities/LegacyControlsResourceString" {
    /**
     * @license Copyright (c) Microsoft Corporation. All rights reserved.
     */
    class LegacyControlsResourceString {
        static getControlsResourceKeyList(controlName: string): string[];
    }
    export { LegacyControlsResourceString };
}
declare module "CustomControls/Utilities/MergeObjects" {
    /**
     * Merging objects. It will return the target object.
     * @param target The target object.
     * @param sources The source object(s).
     */
    function mergeObjects(target: any, ...sources: any[]): any;
    export default mergeObjects;
}
