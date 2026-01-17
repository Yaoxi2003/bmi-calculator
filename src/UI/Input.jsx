export default function Input({children, unit, name}) {
    return (
        <div key={children} className="sm:w-[50%] w-full">
            {/* Ensure htmlFor matches the input ID */}
            <label htmlFor={name} className="label">{children}</label>
            <div className="input-wrap">
                <h3 className="unit">{unit}</h3>
                <input 
                    type="number" 
                    id={name} 
                    name={name} 
                    placeholder="0" 
                    className="primary-input"
                />
            </div>
        </div>
    )
}