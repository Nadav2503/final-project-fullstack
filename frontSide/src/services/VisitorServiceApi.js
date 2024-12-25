import axios from "axios";
import { getToken } from "./LocalStorageService";

// Set the base URL for your API
const API_URL = "http://localhost:8181/Zoo/visitors";

// Get all visitors (admin only)
export const getAllVisitors = async () => {
    try {
        const { data } = await axios.get(API_URL, {
            headers: {
                "x-auth-token": getToken(), // Use the getToken function from your utils
            },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a visitor by ID
export const getVisitorById = async (id) => {
    try {
        const { data } = await axios.get(`${API_URL}/${id}`, {
            headers: {
                "x-auth-token": getToken(), // Use the getToken function from your utils
            },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Register a new visitor
export const registerVisitor = async (visitor) => {
    try {
        const { data } = await axios.post(`${API_URL}/register`, visitor);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Login a visitor
export const loginVisitor = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a visitor's profile
export const updateVisitorProfile = async (id, visitor) => {
    try {
        const { data } = await axios.put(`${API_URL}/${id}`, visitor, {
            headers: {
                "x-auth-token": getToken(), // Use the getToken function from your utils
            },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a visitor (admin only)
export const deleteVisitor = async (id) => {
    try {
        const { data } = await axios.delete(`${API_URL}/${id}`, {
            headers: {
                "x-auth-token": getToken(), // Use the getToken function from your utils
            },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Like an animal (requires specific visitor tier)
export const likeAnimal = async (visitorId, animalId) => {
    try {
        const { data } = await axios.patch(`${API_URL}/${visitorId}/like/${animalId}`, null, {
            headers: {
                "x-auth-token": getToken(), // Use the getToken function from your utils
            },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
