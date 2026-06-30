export const buttonPresets = {
    primary: {
        variant: "contained",
        color: "primary",
        sx: {
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 600,
            minHeight: 40,
            boxShadow: "none",
            "&:hover": {
                boxShadow: "none",
            },
        },
    },

    outlined: {
        variant: "outlined",
        color: "primary",
        sx: {
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 600,
            minHeight: 40,
        },
    },

    danger: {
        variant: "contained",
        color: "error",
        sx: {
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 600,
            minHeight: 40,
            boxShadow: "none",
        },
    },
};