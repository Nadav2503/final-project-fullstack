import axios from "axios";
import { getToken } from "./LocalStorageService";

// Set the base URL for your API
const API_URL = "http://localhost:8181/Zoo/exhibits";

export const getExhibits = async () => {
    try {
        const { data } = await axios.get(API_URL);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getExhibitById = async (id) => {
    try {
        const { data } = await axios.get(`${API_URL}/${id}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Create a new exhibit (Admin only)
export const createExhibit = async (exhibit) => {
    try {
        const { data } = await axios.post(API_URL, exhibit, {
            headers: {
                "x-auth-token": getToken(),
            },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update an exhibit (Admin only)
export const updateExhibit = async (id, exhibit) => {
    try {
        const { data } = await axios.put(`${API_URL}/${id}`, exhibit, {
            headers: {
                "x-auth-token": getToken(),
            },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete an exhibit (Admin only)
export const deleteExhibit = async (id) => {
    try {
        const { data } = await axios.delete(`${API_URL}/${id}`, {
            headers: {
                "x-auth-token": getToken(),
            },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateAnimalsInExhibit = async (id, animals) => {
    try {
        const { data } = await axios.patch(`${API_URL}/${id}/animals`, animals, {
            headers: {
                "x-auth-token": getToken(),
            },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};