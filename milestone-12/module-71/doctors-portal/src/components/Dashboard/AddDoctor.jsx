import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const imageHostKey = process.env.REACT_APP_Imgbb_key ;
    // console.log(imageHostKey);
    const navigate = useNavigate()


    const {data:specialties, isLoading} = useQuery({
        queryKey : ['specialty'],
        queryFn: () => fetch(`http://localhost:5000/appointmentSpecialty`)
        .then(res=>res.json())

    })

    const handleAddDoctor = (data) => {
        console.log(data.image[0])
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image)
        const url =`https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageData => {
            if(imageData.success){
                console.log(imageData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imageData.data.url
                }
                fetch(`http://localhost:5000/doctors`,{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('access_token')}`

                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    toast.success(`${data.name} is added successfully`)
                    navigate('/dashboard/manageDoctor')
                })

            }
        })


    }
    if(isLoading){
        return <progress className="progress w-full"></progress>
    }

    return (
        <div>
            <h2 className='text-2xl text-center font-semibold'>Add A Doctor</h2>
            <div className='md:w-1/2 p-3 mx-auto'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            {" "}
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required *" })}
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className="text-error">{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            {" "}
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required *" })}
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />
                        {errors.email && <p className="text-error">{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            {" "}
                            <span className="label-text">Specialty </span>
                        </label>
                        <select 
                        {...register("specialty")}
                         className="select select-bordered w-full">
                           {
                            specialties?.map(specialty => <option key={specialty._id} value={specialty.name}>
                                {specialty.name}
                            </option> )
                           }
                        </select>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            {" "}
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            {...register("image", { required: "Name is required *" })}
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />
                        {errors.img && <p className="text-error">{errors.img.message}</p>}
                    </div>

                    {/* {singUpError && <p className="text-error">{singUpError}</p>} */}
                    <input
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-4" value='Add Doctor'
                        type="submit"
                    />

                </form>
            </div>

        </div>
    );
};

export default AddDoctor;