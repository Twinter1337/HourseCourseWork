export var DEFAULT_FLUID_DL = {
    base: {
        font: {
            landing_48_600: '600 48px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            subheader_34_600: '600 34px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            pageheader_24_600: '600 24px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            sectiontitle_20_600: '600 20px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            smalltitle_16_600: '600 16px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            lrgbody_16_400: '400 16px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            body_14_600: '600 14px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            body_14_400: '400 14px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            cap_12_600: '600 12px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            cap_12_400: '400 12px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            button_14_600: '600 14px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
        },
        font_size: {
            px12: "12px",
            px14: "14px",
            px16: "16px",
            px20: "20px",
            px24: "24px",
            px34: "34px",
            px48: "48px",
        },
        font_weight: {
            semibold: "600",
            normal: "400",
        },
        font_family: {
            segoe_ui: '"Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
        },
        box_shadow: {
            box_shadow_1: "0px 0.3px 0.9px rgba(0, 0, 0, 0.108), 0px 1.6px 3.6px rgba(0, 0, 0, 0.132)",
            box_shadow_2: "0px 0.6px 1.8px rgba(0, 0, 0, 0.108), 0px 3.2px 7.2px rgba(0, 0, 0, 0.132)",
            box_shadow_3: "0px 1.2px 3.6px rgba(0, 0, 0, 0.108), 0px 6.4px 14.4px rgba(0, 0, 0, 0.132)",
            box_shadow_4: "0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)",
        },
        color: {
            grey_10: "#F8F8F9",
            grey_20: "#F1F2F4",
            grey_30: "#E8EAEC",
            grey_40: "#D8DADE",
            grey_50: "#CED0D4",
            grey_60: "#C6C8CC",
            grey_90: "#A4A6AC",
            grey_130: "#6E6F77",
            grey_150: "#3A3C42",
            grey_160: "#31333A",
            grey_190: "#1F2126",
        },
    },
    control: {
        button: {
            border_radius: "2px",
            border: "none",
            box_shadow: "0px 2px 4px rgba(0, 0, 0, 0.14)",
            font: '600 14px/20px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            height: "32px",
            min_width: "100px",
            padding: "0 20px",
            _disabled: {
                background_color: "#E8EAEC",
                text_color: "#A4A6AD",
            },
            _enabled: {
                cursor: "pointer",
                _hover: {
                    box_shadow: "0px 1.2px 3.6px rgba(0, 0, 0, 0.12), 0px 6.4px 7.2px rgba(0, 0, 0, 0.1)",
                },
                _primary: {
                    text_color: "white",
                    background_color: "#2266E3",
                    _hover: {
                        text_color: "#2266E3",
                        background_color: "white",
                    },
                },
                _secondary: {
                    text_color: "#2266E3",
                    background_color: "white",
                    _hover: {
                        text_color: "white",
                        background_color: "#2266E3",
                    },
                },
            },
        },
        label: {
            font: '600 12px/16px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            text_color: "#6E6F77",
            _required: {
                asterisk_color: "#A80000",
            },
        },
        text_input: {
            box_sizing: "border-box",
            font: '400 14px/20px "Segoe UI", "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial, sans-serif',
            height: "32px",
            border_radius: "2px 2px 0 0",
            padding: "6px",
            border_width: "0 0 1px 0",
            border_color: "#A4A6AC",
            _disabled: {
                text_color: "#A4A6AD",
                background_color: "#E8EAEC",
            },
            _enabled: {
                text_color: "#1F2126",
                background_color: "transparent",
                _valid: {
                    _hover: {
                        border_color: "#2266E3",
                    },
                    _focus: {
                        border_color: "#2266E3",
                    },
                },
                _invalid: {
                    border_color: "#A80000",
                },
            },
        },
        form_field: {
            text_input_to_label_margin_top: "4px",
        },
    },
};
