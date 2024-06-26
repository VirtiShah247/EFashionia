import PropTypes from "prop-types";
import { Fragment, forwardRef} from "react";
import { tv } from "tailwind-variants";
const input = tv({
    slots: {
        base: `focus:ring-0 focus:border-foreground-color peer bg-transparent outline outline-0 focus:outline focus:outline-0 focus:border-1 disabled:bg-secondary-color 
        disabled:border-0 transition-all placeholder-shown:border-2
        placeholder-shown:border-foreground-color border-2 
        border-foreground-color border-t-transparent  focus:border-t-transparent p-4 rounded-md w-full appearance-none`,
        label: `flex w-full select-none pointer-events-none absolute left-0 font-normal
        !overflow-visible truncate leading-tight peer-focus:leading-tight 
        peer-disabled:text-transparent transition-all -top-1.5  before:content[' '] before:block
        before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
        peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t 
        peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 
        before:pointer-events-none before:transition-all peer-disabled:before:border-secondary-color 
        after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 
        after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent 
        after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r 
        peer-focus:after:border-r-2 after:pointer-events-none after:transition-all 
        peer-disabled:after:border-transparent peer-placeholder-shown:leading-[5] 
        [&:not(peer-focus)]:leading-[1.3] peer-focus:text-foreground-color text-sm 
        peer-focus:before:border-foreground-color peer-focus:before:border-foreground-color after:border-t-2
        after:border-foreground-color
        peer-focus:after:!border-foreground-color before:border-t-2  before:border-foreground-color  focus:ring-0`

    }
})
const { base, label } = input();
export const Input = forwardRef(function Input({ labelName, className,children, ...props }, ref) {
    return (
        <Fragment>
            <div className="relative flex flex-col items-stretch">
                <input ref={ref}  {...props}
                id="baseInput"
                    className={`${base()} ${className}`} />
                <label
                id="labelInput"
                    className={`${label()} ${className}`}>
                    {labelName}
                </label>
                {children}
            </div>

        </Fragment>

    )
})

Input.propTypes = {
    labelName: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.node.isRequired,
};

