import React, { useState, useEffect } from "react";
// import { Route } from "react-router-dom";

function Form(props) {
    const [user, setUser] = useState({ name: "", email: "", role: "" });

    const { editMember, editPerson } = props;

    useEffect(() => {
        if (editMember) {
            setUser({ name: editMember.name, email: editMember.email, role: editMember.role, id: editMember.id })
        } else {
            editPerson(user);
        }
    }, [editMember]);


    function handleChange(event) {
        const updatedUser = { ...user, [event.target.name]: event.target.value };
        setUser(updatedUser);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!editMember) {
            console.log("username", user);
            props.setList({ ...user, id: Date.now() });
            setUser({
                name: "",
                email: "",
                role: "",
                id: 0,
            });
        } else {
            editPerson({...user, id:editMember.id})
        };
        setUser({
            name: "",
            email: "",
            role: "",
            id: 0,
        });
    }


    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Signup</legend>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Name
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter your name"
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <input
                        type="role"
                        className="form-control"
                        name="role"
                        placeholder="Role"
                        onChange={handleChange}
                        value={user.role}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </fieldset>
        </form>
    );
}


export default Form;