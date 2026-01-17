export default function Hero() {
    return (
        <section className="hero">
            <picture className="sm:w-[45%]">
                <img src="/images/image-man-eating.webp" alt="A man is eating shushi with a smiling" className="w-full object-cover"/>
            </picture>
            <div className="px-4 sm:w-[50%] lg:w-[45%] lg:px-0">
                <h2 className="mb-[32px]">What your BMI result means</h2>
                <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
            </div>
        </section>
    )
}