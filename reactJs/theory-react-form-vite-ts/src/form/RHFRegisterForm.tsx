import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { RHFLoginFormValue } from "../types/RHFLoginForm.types";
import { RHFLoginFormschema } from "../schema/RHFLoginFormSchema";

const RHFRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RHFLoginFormValue>({
    resolver: yupResolver(RHFLoginFormschema),
  });
  const onSubmit: SubmitHandler<RHFLoginFormValue> = (data) => {
    console.log("Hook form data: ", data);
  };
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        backgroundColor: "#fff",
        padding: "30px 40px",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Sign Up
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Name"
            {...register("fullName")}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.fullName?.message}
          </p>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.email?.message}
          </p>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Phone"
            {...register("phoneNumber")}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.phoneNumber?.message}
          </p>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.password?.message}
          </p>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("retypePassword")}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.retypePassword?.message}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button
            type="submit"
            style={{
              flex: 1,
              padding: "10px",
              marginRight: "10px",
              backgroundColor: "#1677ff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
          <button
            type="button"
            style={{
              flex: 1,
              padding: "10px",
              backgroundColor: "#f1f1f1",
              color: "#333",
              border: "1px solid #ccc",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RHFRegisterForm;
