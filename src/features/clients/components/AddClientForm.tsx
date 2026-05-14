import { useState } from "react";
import type { IClient, TClientStatus } from "../types";

interface AddClientFormProps {
    handleAddClient: (newClient: Omit<IClient, "id" | "createdAt">) => void;
}

const AddClientForm = ({ handleAddClient }: AddClientFormProps) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [status, setStatus] = useState<TClientStatus>('active');
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const isValid = () => {
        const err: typeof errors = {};
        if (name.trim().length < 2) {
            err.name = "Name must have at least 2 characters";
        }
        if (!email.includes("@")) {
            err.email = "Email must contain @";
        }

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isValid()) return;

        handleAddClient({ name, email, status });

        setName('');
        setEmail('');
        setStatus('active');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name: <br />
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div>
                <label>
                    Email: <br />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div>
                <label>
                    Status: <br />
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value as TClientStatus)}
                    >
                        <option value="lead">Lead</option>
                        <option value="active">Active</option>
                        <option value="archived">Archived</option>
                    </select>
                </label>
            </div>
            <button type="submit">Add Client</button>
        </form>
    );
};

export default AddClientForm;