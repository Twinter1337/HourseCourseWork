var CustomControlInnerPopAnimationHelper = (function () {
    function CustomControlInnerPopAnimationHelper() {
    }
    CustomControlInnerPopAnimationHelper._innerOutKeyframeGen = function (props) {
        return {
            "0%": {
                opacity: 1,
                height: props.startHeight + "px",
                width: props.startWidth + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                paddingTop: "0px",
            },
            "25%": {
                opacity: 0,
                height: props.startHeight + "px",
                width: props.startWidth + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                paddingTop: "0px",
            },
            "30%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                paddingTop: "0px",
            },
            "40%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(" + props.transX + ") scaleY(" + props.transY + ")",
                marginTop: props.margTop + "px",
                marginLeft: props.isRTL ? "0px" : props.margLeft + "px",
                marginRight: props.isRTL ? props.margLeft + "px" : "0px",
                paddingTop: props.padTop,
            },
            "100%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(" + props.transX + ") scaleY(" + props.transY + ")",
                marginTop: props.margTop + "px",
                marginLeft: props.isRTL ? "0px" : props.margLeft + "px",
                marginRight: props.isRTL ? props.margLeft + "px" : "0px",
                paddingTop: props.padTop,
            },
        };
    };
    CustomControlInnerPopAnimationHelper._innerInKeyframeGen = function (props) {
        return {
            "0%": {
                opacity: 1,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(" + props.transX + ") scaleY(" + props.transY + ")",
                marginTop: props.margTop + "px",
                marginLeft: props.isRTL ? "0px" : props.margLeft + "px",
                marginRight: props.isRTL ? props.margLeft + "px" : "0px",
                paddingTop: props.padTop,
            },
            "25%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(" + props.transX + ") scaleY(" + props.transY + ")",
                marginTop: props.margTop + "px",
                marginLeft: props.isRTL ? "0px" : props.margLeft + "px",
                marginRight: props.isRTL ? props.margLeft + "px" : "0px",
                paddingTop: props.padTop,
            },
            "60%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(" + props.transX + ") scaleY(" + props.transY + ")",
                marginTop: props.margTop + "px",
                marginLeft: props.isRTL ? "0px" : props.margLeft + "px",
                marginRight: props.isRTL ? props.margLeft + "px" : "0px",
                paddingTop: props.padTop,
            },
            "70%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                paddingTop: "0px",
            },
            "75%": {
                opacity: 0,
                height: props.startHeight + "px",
                width: props.startWidth + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                paddingTop: "0px",
            },
            "100%": {
                opacity: 0,
                height: props.startHeight + "px",
                width: props.startWidth + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                paddingTop: "0px",
            },
        };
    };
    CustomControlInnerPopAnimationHelper._fadeInAnimation = function () {
        return {
            "0%": {
                opacity: 0,
            },
            "100%": {
                opacity: 1,
            },
        };
    };
    CustomControlInnerPopAnimationHelper._isIE = function () {
        return !!window.navigator.userAgent.match("MSIE") || !!window.navigator.userAgent.match("Trident");
    };
    CustomControlInnerPopAnimationHelper.generateInnerClass = function (renderer, status, props) {
        var baseStyle = {
            animationFillMode: "forwards",
            animationDirection: "normal",
            animationIterationCount: "1",
            display: "block",
            backgroundColor: "#FFFFFF",
            opacity: "",
            height: "",
            width: "",
            transform: "",
            marginTop: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            animationName: "",
            animationDuration: "",
            webkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            position: "",
        };
        var transY = props.startHeight / props.endHeight;
        var transX = props.startWidth / props.endWidth;
        var margLeft = (-1 * (props.endWidthInner - props.startWidth)) / 2;
        var margTop = (-1 * (props.endHeightInner - props.startHeight)) / 2;
        var padTop = "";
        if (margTop !== Math.floor(margTop)) {
            margTop = Math.floor(margTop);
            padTop = "1px";
        }
        if (margLeft !== Math.floor(margLeft)) {
            margLeft = Math.floor(margLeft);
        }
        var newProps = Object.assign({}, props, {
            margLeft: margLeft,
            margTop: margTop,
            padTop: padTop,
            transX: transX,
            transY: transY,
        });
        switch (status) {
            case 0:
                baseStyle.animationName = renderer.renderKeyframe(CustomControlInnerPopAnimationHelper._innerOutKeyframeGen, newProps);
                baseStyle.animationDuration = "1.4s";
                break;
            case 1:
                baseStyle.animationName = renderer.renderKeyframe(CustomControlInnerPopAnimationHelper._fadeInAnimation, newProps);
                baseStyle.animationDuration = ".5s";
                baseStyle.height = props.endHeightInner + "px";
                baseStyle.width = props.endWidthInner + "px";
                baseStyle.transform = "scaleX(" + transX + ") scaleY(" + transY + ")";
                baseStyle.marginTop = margTop + "px";
                baseStyle.paddingTop = padTop;
                baseStyle.marginLeft = props.isRTL ? "0px" : margLeft + "px";
                baseStyle.marginRight = props.isRTL ? margLeft + "px" : "0px";
                baseStyle.position = CustomControlInnerPopAnimationHelper._isIE() ? "" : "fixed";
                break;
            case 2:
                baseStyle.height = props.endHeightInner + "px";
                baseStyle.width = props.endWidthInner + "px";
                baseStyle.transform = "scaleX(" + transX + ") scaleY(" + transY + ")";
                baseStyle.marginTop = margTop + "px";
                baseStyle.marginLeft = props.isRTL ? "0px" : margLeft + "px";
                baseStyle.marginRight = props.isRTL ? margLeft + "px" : "0px";
                baseStyle.opacity = "1";
                baseStyle.position = CustomControlInnerPopAnimationHelper._isIE() ? "" : "fixed";
                break;
            case 3:
                baseStyle.animationName = renderer.renderKeyframe(CustomControlInnerPopAnimationHelper._innerInKeyframeGen, newProps);
                baseStyle.animationDuration = "1.4s";
                break;
            case 4:
                baseStyle.animationDuration = ".5s";
                baseStyle.width = "100%";
                baseStyle.animationName = renderer.renderKeyframe(CustomControlInnerPopAnimationHelper._fadeInAnimation, newProps);
                break;
        }
        return baseStyle;
    };
    return CustomControlInnerPopAnimationHelper;
}());
export { CustomControlInnerPopAnimationHelper };
