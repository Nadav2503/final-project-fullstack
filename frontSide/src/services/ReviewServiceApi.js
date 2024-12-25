import axios from "axios";
import { getToken } from "./LocalStorageService";

// Set the base URL for the reviews API
const API_URL = "http://localhost:8181/Zoo/reviews";

// Get all reviews for a specific animal
export const getReviewsForAnimal = async (animalId) => {
    try {
        const { data } = await axios.get(`${API_URL}/animal/${animalId}`, {
            headers: { "x-auth-token": getToken() },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all reviews for a specific exhibit
export const getReviewsForExhibit = async (exhibitId) => {
    try {
        const { data } = await axios.get(`${API_URL}/exhibit/${exhibitId}`, {
            headers: { "x-auth-token": getToken() },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a specific review by ID
export const getReviewById = async (id) => {
    try {
        const { data } = await axios.get(`${API_URL}/${id}`, {
            headers: { "x-auth-token": getToken() },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all reviews by a specific visitor
export const getReviewsByVisitor = async (visitorId) => {
    try {
        const { data } = await axios.get(`${API_URL}/visitor/${visitorId}`, {
            headers: { "x-auth-token": getToken() },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Create a new review
export const createReview = async (review) => {
    try {
        const { data } = await axios.post(API_URL, review, {
            headers: { "x-auth-token": getToken() },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a specific review
export const updateReview = async (id, review) => {
    try {
        const { data } = await axios.put(`${API_URL}/${id}`, review, {
            headers: { "x-auth-token": getToken() },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a specific review
export const deleteReview = async (id) => {
    try {
        const { data } = await axios.delete(`${API_URL}/${id}`, {
            headers: { "x-auth-token": getToken() },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Like or unlike a review
export const likeReview = async (id) => {
    try {
        const { data } = await axios.patch(`${API_URL}/${id}/like`, {}, {
            headers: { "x-auth-token": getToken() },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
