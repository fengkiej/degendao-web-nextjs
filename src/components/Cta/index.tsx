const Cta = (props: any) => {
    return (
        <a href={props.href} target="_blank" rel="noreferrer" className="relative inline-block group">
            <span className="absolute w-48 inset-0 bg-lovely-peach transition-transform transform lg:translate-x-1 lg:translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0">
                
            </span>

            <span className="font-heading font-bold w-48 text-center relative inline-block px-5 py-3 font-medium text-night-sky border-lovely-peach border-2 border-current">
                {props.children}
            </span>
        </a>

    )
}

export default Cta