export default function Feature() {
    const itemList = [
        {img: '/images/icon-eating.svg', alt: 'A noodle icon', text: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.', title: 'Healthy eating'},
        {img: '/images/icon-exercise.svg', alt: 'A dumpbell icon', text: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.', title: 'Regular exercise'},
        {img: '/images/icon-sleep.svg', alt: 'A moon icon', text: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.', title: 'Adequate sleep'}
    ]
    const featureRender = itemList.map(
        (item, index) => <div key={index} className="item-style">
            <img src={item.img} alt={item.alt} className="w-[64px] h-[64px]"/>
            <div>
                <h3 className="mb-[24px]">{item.title}</h3>
                <p>{item.text}</p>
            </div>
        </div> 
    )

    return (
        <section className="relative py-8 lg:py-12">
            {/* bg */}
            <div className="container-pro">
                <div className="bg-color"></div>

                {/* content */}
                <div className="flex flex-col gap-[32px] lg:flex-row lg:justify-between">
                    {featureRender}
                </div>
            </div>
        </section>
    )
}