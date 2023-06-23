import { forwardRef } from 'react'

interface IProps {
    children: string,
    onClick?: () => void,
}

export const Button = forwardRef<HTMLButtonElement, IProps>(( props, ref ) => {
    const { children, onClick } = props;

    return (
        <button
            className='min-w-[100px] py-[5px] text-xl bg-[#5a54d6] rounded-full m-3 hover:border-2 hover:border-[#5a54d6] hover:bg-transparent ease-out duration-75'
            ref={ref} onClick={onClick}
        >
            {children}
        </button>
    )
})