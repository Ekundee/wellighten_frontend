import { Alert, Box, Snackbar, SnackbarContent } from "@mui/material";
import { atom, useAtom } from "jotai";
import { CustomTypography } from "../minor";
import { PrimaryButton } from "../buttons";
import { useState } from "react"
import { buttonTextAtom, headerTextAtom, modalOpenAtom, snackBarMessageAtom, snackBarOpenAtom, snackBarSeverityAtom, textAtom } from "./state";



export function CustomModal (successModalProps : any) {
     const [headerTextState,] = useAtom(headerTextAtom)
     const [textState,] = useAtom(textAtom)
     const [buttonTextState,] = useAtom(buttonTextAtom)
     const [modalOpenState, setModalOpenState] = useAtom(modalOpenAtom)

     const { headerText, text, buttonText, children } = successModalProps
  
     return (
          <Box>
          
               <Box
                    sx={{
                         width: "100%",
                         height: "100%",
                         position: "fixed",
                         display: modalOpenState ? "grid" : "none",
                         zIndex: 200,
                         placeItems: "center",
                    }}
               >
               <Box 
                    sx={{
                         backgroundColor: "black",
                         opacity: "0.4",
                         // backgroundColor: "rgba(0,0,0,0.7)",
                         width: "100%",
                         height: "100%",
                         display: "grid",
                         placeItems: "center",
                    }}
               ></Box>
               <Box 
                    sx={{
                         backgroundColor: "transparent",
                         width: "100%",
                         height: "100%",
                         position: "fixed",
                         display: "grid",
                         placeItems: "center"
                    }}
               >
                    <Box
                         sx={{
                              width: "90%",
                              backgroundColor: "white",
                              padding: "20px",
                              borderRadius: "10px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "10px",
                              zIndex: 200
                         }}
                    >
                         <Box
                              sx={{
                                   width: "100%",
                                   height: "30px",
                                   display: "flex",
                                   justifyContent: "flex-end",
                              }}
                         >
                              <img src="/close.svg"/>  
                         </Box>

                         <img src="/success_modal_pic.png"
                              style={{
                                   width :"100%",
                                   height: "250px",
                                   marginBottom: "30px"
                              }}
                         />
                         <CustomTypography
                              sx={{
                                   color : "green",
                                   textTransform: "capitalize",
                                   fontWeight : "600",
                                   fontSize: "1.5rem"
                              }}
                         >
                              {headerTextState}
                         </CustomTypography>
                         <CustomTypography
                              sx={{
                                   fontSize: "1.3rem",
                                   textAlign: "center"
                              }}
                         >
                              {textState}
                         </CustomTypography>                   
                         <PrimaryButton text={buttonTextState}/>
               
                    </Box>
               </Box>
               </Box>

               <Box>
                    {children}
               </Box>
          </Box>

     )
}



export function CustomSnackBar ( {children} : any ) {
     const [snackBarOpenState , setSnackBarOpenState] = useAtom(snackBarOpenAtom)
     const [snackBarMessageState , setSnackBarMessageState] = useAtom(snackBarMessageAtom)
     const [snackBarSeverityState , setSnackBarSeverityState] : any = useAtom(snackBarSeverityAtom)
     
     const vertical = 'top'
     const horizontal = 'center'


     const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === 'clickaway') {
               return;
          }
          setSnackBarOpenState(false);
     };

     return (
          <Box
               sx={{
                    width: "100%",
               }}
          >
               <Snackbar
                    open={snackBarOpenState}
                    autoHideDuration={1900}
                    onClose={handleClose}
                    message={snackBarMessageState}
                    anchorOrigin={{ vertical, horizontal }}
               >
                    <Alert
                         severity={snackBarSeverityState} sx={{ width: '100%' }}>
                         {snackBarMessageState}
                    </Alert>
               </Snackbar>
               {children}
          </Box>
     )
}