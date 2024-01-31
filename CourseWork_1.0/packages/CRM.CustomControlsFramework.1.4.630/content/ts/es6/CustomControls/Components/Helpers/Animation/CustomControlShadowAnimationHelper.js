var CustomControlShadowAnimationHelper = (function () {
    function CustomControlShadowAnimationHelper() {
    }
    CustomControlShadowAnimationHelper._shadowOutKeyframeGen = function () {
        return {
            "0%": { opacity: 0 },
            "75%": { opacity: 0.5 },
            "100%": { opacity: 0.5 },
        };
    };
    CustomControlShadowAnimationHelper._shadowInKeyframeGen = function () {
        return {
            "0%": { opacity: 0.5 },
            "25%": { opacity: 0.5 },
            "100%": { opacity: 0 },
        };
    };
    CustomControlShadowAnimationHelper.generateFancyShadowInAnimationName = function (renderer) {
        if (!CustomControlShadowAnimationHelper._shadowOutAnimationName) {
            CustomControlShadowAnimationHelper._shadowOutAnimationName = renderer.renderKeyframe(CustomControlShadowAnimationHelper._shadowOutKeyframeGen, null);
        }
        return CustomControlShadowAnimationHelper._shadowOutAnimationName;
    };
    CustomControlShadowAnimationHelper.generateFancyShadowOutAnimationName = function (renderer) {
        if (!CustomControlShadowAnimationHelper._shadowInAnimationName) {
            CustomControlShadowAnimationHelper._shadowInAnimationName = renderer.renderKeyframe(CustomControlShadowAnimationHelper._shadowInKeyframeGen, null);
        }
        return CustomControlShadowAnimationHelper._shadowInAnimationName;
    };
    CustomControlShadowAnimationHelper.generateShadowClass = function (renderer, status) {
        var baseShadowStyle = {
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            backgroundColor: "#000000",
            position: "fixed",
            animationDuration: "2s",
            animationFillMode: "forwards",
            animationDirection: "normal",
            animationIterationCount: "1",
            zIndex: "1",
            animationName: null,
            opacity: null,
        };
        switch (status) {
            case 0:
                baseShadowStyle.animationName = CustomControlShadowAnimationHelper.generateFancyShadowInAnimationName(renderer);
                break;
            case 1:
            case 2:
                baseShadowStyle.opacity = ".5";
                break;
            case 3:
                baseShadowStyle.animationName = CustomControlShadowAnimationHelper.generateFancyShadowOutAnimationName(renderer);
                break;
            case 4:
            case -1:
                return {
                    display: "none",
                };
        }
        return baseShadowStyle;
    };
    CustomControlShadowAnimationHelper._shadowOutAnimationName = null;
    CustomControlShadowAnimationHelper._shadowInAnimationName = null;
    return CustomControlShadowAnimationHelper;
}());
export { CustomControlShadowAnimationHelper };
