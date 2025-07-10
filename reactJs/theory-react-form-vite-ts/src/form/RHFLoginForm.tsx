import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { RHFLoginFormValue } from "../types/RHFLoginForm.types";
import { RHFLoginFormschema } from "../schema/RHFLoginFormSchema";

const RHFLoginForm = () => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        padding: "40px",
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h2
        style={{ marginBottom: "30px", fontSize: "28px", fontWeight: "bold" }}
      >
        Sign In
      </h2>

      <div style={{ marginBottom: "20px", textAlign: "left" }}>
        <input
          type="text"
          placeholder="Email"
          {...register("email")}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />
        <p style={{ color: "red", margin: "4px 0 0 4px", fontSize: "13px" }}>
          {errors.email?.message}
        </p>
      </div>

      <div style={{ marginBottom: "20px", textAlign: "left" }}>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />
        <p style={{ color: "red", margin: "4px 0 0 4px", fontSize: "13px" }}>
          {errors.password?.message}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <button
          type="submit"
          style={{
            flex: 1,
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
        <button
          type="button"
          style={{
            flex: 1,
            padding: "12px",
            backgroundColor: "#f1f1f1",
            color: "black",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default RHFLoginForm;
