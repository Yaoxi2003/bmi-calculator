export default function Limitation() {
    const cardItem = [
        {
            img: '/images/icon-gender.svg',
            alt: 'gender',
            title: 'Gender',
            text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        },
        {
            img: '/images/icon-age.svg',
            alt: 'age',
            title: 'Age',
            text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
        },
        {
            img: '/images/icon-muscle.svg',
            alt: 'muscle',
            title: 'Muscle',
            text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
        },
        {
            img: '/images/icon-pregnancy.svg',
            alt: 'pregnancy',
            title: 'Pregnancy',
            text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
        },
        {
            img: '/images/icon-race.svg',
            alt: 'race',
            title: 'Race',
            text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
        },
    ]

    const cards = cardItem.map(
        (item, index) => <div key={index} className={`card-style ${item.alt}`}>
            <div className="flex gap-3 items-center">
                <img src={item.img} alt={item.alt} />
                <h4>{item.title}</h4>
            </div>
            <p>{item.text}</p>
        </div>
    )


    return (
        <section className="py-12 sm:py-20 lg:py-30">
            <div className="container-pro grid grid-cols-1 gap-[16px] lg:gap-[25px] sm:grid-cols-2 lg:grid-cols-12">
                {/* context */}
                <div className="text-center lg:text-left mb-[50px] sm:col-span-2 lg:col-span-6">
                    <h2 className="mb-[32px]">Limitations of BMI</h2>
                    <p>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
                </div>

                {/* grid */}
                {cards}
            </div>
        </section>
    )
}