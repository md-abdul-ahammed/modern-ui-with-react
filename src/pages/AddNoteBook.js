import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddNoteBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [subject, setSubject] = useState('female');
    const [otherSubject, setOtherSubject] = useState("");

    const onSubmit = data => {
        if (otherSubject) {
            data.gender = otherSubject;
        }
        if (subject === 'male' || subject === 'female') {
            data.gender = subject;
        }
        console.log(data)
    };

    const handleSubjects = e => {
        setSubject(e.target.value)
    }
    console.log(subject)

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <select onChange={handleSubjects}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            {
                subject === 'other' && <input required onChange={e => setOtherSubject(e.target.value)} />
            }

            <input type="submit" />
        </form>
    );
};

export default AddNoteBook;