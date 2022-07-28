import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useImperativeHandle, useState } from "react";

export default function Modal({open, children, close})
{
    return (
        <AnimatePresence>
            {open && (
                <>
                <motion.div 
                initial =
                {{
                    opacity: 0
                }}
                animate =
                {{
                    opacity: 1,
                    transition: 
                    {
                        duration: 0.3
                    }
                }}
                exit =
                {{
                    opacity: 0,
                    transition:
                    {
                        duration: 0.3
                    }
                }}
                onClick={close}
                className="overlay"></motion.div>
                
                <motion.div
                initial =
                {{
                    scale: 0
                }}
                animate =
                {{
                    scale: 1,
                    transition: 
                    {
                        delay: 0.3,
                        duration: 0.3
                    }
                }}
                exit =
                {{
                    scale: 0,
                    transition:
                    {
                        duration: 0.3
                    }
                }}
                className="modal"
                >
                    <motion.div
                    initial =
                    {{
                        x: 100
                    }}
                    animate =
                    {{
                        x: 0
                    }}
                    >{children}</motion.div>
                </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}