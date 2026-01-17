import Bmi from './Bmi'

export default function Header() {
    return (
        <header className="container-pro py-10 lg:flex justify-between gap-5 items-end">
            {/* gradient background */}
            <div className="bg-img"></div>

            {/* cotent */}
            <article className="lg:w-[45%] text-center flex flex-col lg:items-start lg:text-left lg:pb-25 gap-[25px] sm:gap-[37px] mb-[25px]">
                <picture className="lg:mb-10">
                    <img src="/images/logo.svg" alt="The company logo" className='mx-auto'/>
                </picture>
                <h1>Body Mass Index Calculator</h1>
                <p>Better understand your weight in relation to your height using our body mass index (BM) calculator. 
                    While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </article>
            
            {/* calculator */}
            <Bmi />
        </header>
    )
}