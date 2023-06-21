import React, { useState } from "react";
import { Form } from "react-router-dom";

export default function SignupForm(){
    const [form,setForm]=React.useState({
        username:"",
        firstname:"",
        lastname:"",
        email:'',
        password:""
    })



    return(
        <form>
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
            placeholder="identifiant"
            name="password"
            onChange={handleChange}
            value={form.password}
            />
        </form>
    )
}