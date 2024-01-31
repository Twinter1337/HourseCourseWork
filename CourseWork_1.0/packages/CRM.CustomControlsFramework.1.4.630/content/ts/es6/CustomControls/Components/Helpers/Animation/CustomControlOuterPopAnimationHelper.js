var CustomControlOuterPopAnimationHelper = (function () {
    function CustomControlOuterPopAnimationHelper() {
    }
    CustomControlOuterPopAnimationHelper._outerOutKeyframeGen = function (props) {
        var transY = props.endHeight / props.startHeight;
        var transX = props.endWidth / props.startWidth;
        return {
            "0%": {
                left: props.startLeft + "px",
                top: props.startTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "25%": {
                left: props.startLeft + "px",
                top: props.startTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "65%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "70%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(1) scaleY(" + transY + ")",
            },
            "75%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(" + transX + ") scaleY(" + transY + ")",
            },
            "100%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(" + transX + ") scaleY(" + transY + ")",
            },
        };
    };
    CustomControlOuterPopAnimationHelper._outerInKeyframeGen = function (props) {
        var transY = props.endHeight / props.startHeight;
        var transX = props.endWidth / props.startWidth;
        return {
            "100%": {
                left: props.startLeft + "px",
                top: props.startTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "75%": {
                left: props.startLeft + "px",
                top: props.startTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "35%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "30%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(1) scaleY(" + transY + ")",
            },
            "25%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(" + transX + ") scaleY(" + transY + ")",
            },
            "0%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(" + transX + ") scaleY(" + transY + ")",
            },
        };
    };
    CustomControlOuterPopAnimationHelper.generateOuterClass = function (renderer, status, props) {
        var baseStyle = {
            animationDuration: "1.5s",
            animationFillMode: "forwards",
            animationDirection: "normal",
            animationIterationCount: "1",
            animationName: "",
            position: "fixed",
            display: "initial",
            height: props.startHeight + "px",
            width: props.startWidth + "px",
            overflow: "hidden",
            backgroundColor: "#FFFFFF",
            transform: "",
            left: "",
            top: "",
            zIndex: 1,
        };
        var transY = props.endHeight / props.startHeight;
        var transX = props.endWidth / props.startWidth;
        switch (status) {
            case 0:
                baseStyle.animationName = renderer.renderKeyframe(CustomControlOuterPopAnimationHelper._outerOutKeyframeGen, props);
                break;
            case 1:
            case 2:
                baseStyle.left = props.endLeft + "px";
                baseStyle.top = props.endTop + "px";
                baseStyle.transform = "scaleX(" + transX + ") scaleY(" + transY + ")";
                break;
            case 3:
                baseStyle.animationName = renderer.renderKeyframe(CustomControlOuterPopAnimationHelper._outerInKeyframeGen, props);
                break;
            case 4:
            case -1:
                return null;
        }
        return baseStyle;
    };
    return CustomControlOuterPopAnimationHelper;
}());
export { CustomControlOuterPopAnimationHelper };
