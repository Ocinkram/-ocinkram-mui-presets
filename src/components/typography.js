export const typography = {
    MuiTypography: {
        defaultProps: {
            variant: "body1",
        },
        styleOverrides: {
            root: {
                margin: 0,

                "&.MuiTypography-gutterBottom": {
                    marginBottom: "0.35em",
                },

                "&.MuiTypography-paragraph": {
                    marginBottom: 16,
                },

                "&.MuiTypography-noWrap": {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                },
            },

            subtitle1: {
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.75,
                letterSpacing: "0.00938em",
            },

            subtitle2: {
                fontWeight: 500,
                fontSize: "0.875rem",
                lineHeight: 1.57,
                letterSpacing: "0.00714em",
            },

            body1: {
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.5,
                letterSpacing: "0.00938em",
            },

            body2: {
                fontWeight: 400,
                fontSize: "0.875rem",
                lineHeight: 1.43,
                letterSpacing: "0.01071em",
            },

            button: {
                fontWeight: 500,
                fontSize: "0.875rem",
                lineHeight: 1.75,
                letterSpacing: "0.02857em",
                textTransform: "uppercase",
            },

            caption: {
                fontWeight: 400,
                fontSize: "0.75rem",
                lineHeight: 1.66,
                letterSpacing: "0.03333em",
            },
        },
    },
};