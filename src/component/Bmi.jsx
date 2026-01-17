import Input from '../UI/Input'
import Radio from '../UI/Radio'
import Infobar from '../UI/Infobar'
import { useState } from 'react'

export default function Bmi() {
    const [result, setResult] = useState(null)

    // 1. Separate the Calculation Logic
    function calculateBMI(formData) {
        const height = formData.get('height')
        const weight = formData.get('weight')
        const system = formData.get('system')

        if (height && weight) {
            const h = Number(height);
            const w = Number(weight);
            
            // Note: This math only works for Metric (cm/kg)
            // Imperial requires a different formula
            if (system === 'metric') {
                 const heightInMeters = h / 100;
                 const bmiResult = (w / heightInMeters**2).toFixed(1)
                 const lowestOfWeight = (18.5 * heightInMeters**2).toFixed(1)
                 const highestOfWeight = (24.9 * heightInMeters**2).toFixed(1)
                 
                 setResult({bmiResult, lowestOfWeight, highestOfWeight})
            }
        }
    }

    // 2. Handle the "Live" Change Event
    function handleChange(e) {
        const form = e.currentTarget; 
        // Create the FormData object manually from the form element
        const formData = new FormData(form);
        
        calculateBMI(formData);
    }

    const radioField = (
        <div className='flex gap-5 item-center'>
            <Radio name='system' value='metric' defaultChecked>Metric</Radio>
            <Radio name='system' value='imperial'>Imperial</Radio>
        </div>
    )

    const inputField = (
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 sm:item-center'> 
            <Input unit='cm' name='height'>Height</Input>
            <Input unit='kg' name='weight'>Weight</Input>
        </div>
    )

    return (
        // 3. Attach the wrapper function to onChange
        <form className='bmi-card' onChange={handleChange}>
            <h3>Enter your details below</h3>
            {radioField}
            {inputField}
            <Infobar result={result}/>
        </form>
    )
}