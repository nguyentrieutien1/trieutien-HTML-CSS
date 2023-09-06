import React, { FormEvent, useState } from "react";
import { UserDTO } from "@/types/user.type";
import Link from "next/link";
import Input from "../core/Input/Input";
import Button from "../core/Button/Button";
interface AuthFormProps {
  fields: any;
  title: string;
  onSubmit: (e: FormEvent, user: UserDTO) => Promise<void>;
}
interface Field {
  name: string;
  label: string;
  type: string;
  onChange?: (value: string) => void;
}
const AuthForm: React.FC<AuthFormProps> = ({ fields, title, onSubmit }) => {
  const [user, setUser] = useState<UserDTO>({ email: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value, name } = target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <div className="row auth__form">
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 mx-5">
        <form onSubmit={(e: FormEvent) => onSubmit(e, user)}>
          <div className="signin__form">
            <legend>Form {title}</legend>
            {fields.map((field: Field, index: number) => {
              const value = field.name === "email" ? user.email : user.password;
              return (
                <div key={index} className="form-group">
                  <label htmlFor={field.label}>Password</label>
                  <Input
                    className={"form-control"}
                    placeholder={`Enter ${field.name}`}
                    label={field.label}
                    onChange={handleChange}
                    type={field.type}
                    value={value}
                    name={field.name}
                  />
                </div>
              );
            })}
            <div className="footer__form">
              {title == "Sign In" && <Link href="/signup">Sign up</Link>}
              <Button
                className="btn btn-success btn-signin"
                label={title}
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AuthForm;