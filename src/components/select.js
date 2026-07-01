export const select = {
    MuiSelect: {
        defaultProps: {
            displayEmpty: true,
            MenuProps: {
                PaperProps: {
                    sx: {
                        borderRadius: 2,
                        mt: 1,
                    },
                },
            },
        },

        styleOverrides: {
            root: {
                width: 180,
                height: 36,
                borderRadius: 8,
                fontSize: 14,

                "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: 8,
                },
            },

            select: {
                display: "flex",
                alignItems: "center",
                height: "100%",
                boxSizing: "border-box",
            },
        },
    },
}