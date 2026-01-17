export default function Radio({children, name, value}) {
    return (
        <div key={children} className="w-[50%] flex items-center gap-4">
            <input type="radio" name={name} value={value} className="custom-radio" id={children}/>
            <label htmlFor={children}>{children}</label>
        </div>
    )
}