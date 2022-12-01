tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                mont: ["Montserrat", "sans-serif"],
            },
            container: {
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
                screens: {
                    xsm: "370px",
                    sm: "440px",
                    md: "560px",
                    lg: "768px",
                    xl: "960px",
                    "2xl": "1180px",
                },
            },          
            colors: {
                'CDE1': "#CDE1FF",          
                'F1E': "#F1E6F7",
                '4D4': "#4D4D52",
                'EBF5': "#EBF5FF",
                '787': "#7872B9",
                'F9F': "#F9FCFF",

            },
            fontSize: {
                "size-16": [
                    "16px",
                    {
                        lineHeight: "30px",
                        fontWeight: "600",
                    },
                ],
                "size-18": [
                    "18px",
                    {
                        lineHeight: "25px",
                        fontWeight: "800",
                    },
                ],
                
                "size-14": [
                    "14px",
                    {
                        lineHeight: "18px",
                        fontWeight: "500",
                    },
                ],
                "size-40": [
                    "40px",
                    {
                        lineHeight: "52px",
                        letterSpacing: "2%",
                        fontWeight: "800",
                    },
                ],
                
               
            },
            maxWidth: {
                '128': "128.13px",
                '170': "170px",
                '250': "250px",
                '280': "280px",
                '300': "300px",
                '400': "400.25px",
                '454': "454px",
                '500': "500.3px",
                '580': "580px",
                '600': "600px",
                '675': "675px",
                '940': "940px",
                '1160': "1160px",
            },
           
        },
        screens: {
            xsm: "370px",
            sm: "440px",
            md: "560px",
            lg: "768px",
            xl: "960px",
            "2xl": "1180px",
        },
    },
};