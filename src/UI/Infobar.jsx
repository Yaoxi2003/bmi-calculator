export default function Infobar({result}) {
    const { bmiResult, lowestOfWeight, highestOfWeight } = result || {}

    const renderBmi = (
        <div className="sm:w-[45%]">
            <p className="text-white">Your BMI is...</p>
            <h2 className="text-white">{bmiResult}</h2>
        </div>
    )
    const renderSuggest = (
        <p className="text-white sm:w-[45%] font-light">Your BMI suggests you're a healthy weight. Your ideal weight is between
        <span> </span><strong className="font-bold">{`${lowestOfWeight}kg`}</strong> - <strong className="font-bold">{`${highestOfWeight}kg`}</strong></p>
    )

    const renderAll = (
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            {renderBmi}
            {renderSuggest}
        </div>
    )

    const content = (
        <div>
            <h3 className="text-white font-semibold mb-4">Welcome!</h3>
            <p className="text-white">Enter your height and weight and you'll see your BMI result here</p>
        </div>
    )

    return (
        <div className="w-full bg-blue500 p-[32px] rounded-xl sm:rounded-l-[10px] sm:rounded-r-[100px]">
            {bmiResult ? renderAll : content}
        </div>
    )
}