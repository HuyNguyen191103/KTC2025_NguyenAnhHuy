import { data } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import type { Product } from "../types/Product.type";

export const getAllProducts = async (): Promise<Product[]> => {
    const Response = await axiosClient.get<Product[]>("/products");
    return Response.data;
}

export const getProductBYId = async (id: string): Promise<Product> => {
    const Response = await axiosClient.get<Product>(`/products/${id}`);
    return Response.data;
}

export const createProduct = async (
    data: Omit<Product, "id">): Promise<Product> => {
        const response = await axiosClient.post<Product>("/products", data);
        return response.data;
};

export const updateProduct = async (id: string, data: Partial<Product>): Promise<Product> => {
    const response = await axiosClient.post<Product> (`/products/${id}`, data);
    return response.data;
}

export const deleteProduct = async (id: string): Promise<Product> => {
    const response = await axiosClient.delete<Product> (`/products/${id}`);
    return response.data;
}

