import React, { useState } from "react";
import { Form } from "react-router-dom";
import axios from "axios";

export default function SignupForm() {
    const [form, setForm] = React.useState({
        username: "",
        firstname: "",
        lastname: "",
        email: '',
        password: ""
    })

    function handleChange(event) {
        setForm(prevForm => ({
            ...prevForm,
            [event.target.name]: event.target.value
        }))
        console.log(form)
    }
    async function handeleSubmit(e) {
        e.preventDefault()
        try {
            const { data } = await axios.post(
                "http://localhost:4000/users/signup",
                {
                    ...form,
                }, 
                { withCredentials: true })
        } catch (error) {

        }
    }

    return (
        <form onSubmit={handeleSubmit}>
            <input
                type="text"
                placeholder="Nom"
                name="lastname"
                onChange={handleChange}
                value={form.lastname}
            />
            <input
                type="text"
                placeholder="prénom"
                name="firstname"
                onChange={handleChange}
                value={form.firstname}
            />
            <input
                type="text"
                placeholder="identifiant"
                name="username"
                onChange={handleChange}
                value={form.username}
            />
            <input
                type="text"
                placeholder="email"
                name="email"
                onChange={handleChange}
                value={form.email}
            />
            <input
                type="password"
                placeholder="entrez votre mot passe"
                name="password"
                onChange={handleChange}
                value={form.password}
            />
            <button type="submit">Submit</button>
        </form>
    )
}