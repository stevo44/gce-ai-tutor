import axios from 'axios';

// ============================================
// 1. AXIOS INSTANCE CONFIGURATION
// ============================================
const client = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 10000, // 10 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// ============================================
// 2. REQUEST INTERCEPTOR
// Attached JWT token to every request if available
// ============================================
import { auth } from '../firebase';

client.interceptors.request.use(
    async (config) => {
        // Get the current user from Firebase Auth
        const user = auth.currentUser;

        if (user) {
            try {
                // Get the ID token (forceRefresh = false)
                const token = await user.getIdToken();
                config.headers.Authorization = `Bearer ${token}`;
            } catch (error) {
                console.error("Error getting auth token:", error);
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// ============================================
// 3. RESPONSE INTERCEPTOR
// Handles global errors like 401 Unauthorized
// ============================================
client.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle 401: Unauthorized
        if (error.response && error.response.status === 401) {
            // Firebase handles token refresh automatically, but if we get a 401,
            // it might mean the user is disabled or deleted.
            // We can optionally redirect to login here if needed, but typically
            // the auth state listener in AuthContext will handle logout.
            console.error("Unauthorized access:", error);
        }

        // Return a meaningful error object
        const message = error.response?.data?.detail || error.response?.data?.message || error.message || 'An unexpected error occurred';
        const enhancedError = new Error(message);
        enhancedError.status = error.response?.status;
        enhancedError.data = error.response?.data;

        return Promise.reject(enhancedError);
    }
);

// ============================================
// 4. API FUNCTIONS
// ============================================

// --- Auth ---
export const loginUser = async (credentials) => {
    // credentials: { email, password }
    const response = await client.post('auth/login/', credentials);
    return response.data;
};

export const registerUser = async (userData) => {
    // userData: { email, password, first_name, last_name, ... }
    const response = await client.post('auth/register/', userData);
    return response.data;
};

// --- Dashboard ---
export const getDashboardStats = async () => {
    const response = await client.get('dashboard/stats/');
    return response.data;
};

// --- Topics ---
export const getTopics = async () => {
    const response = await client.get('topics/');
    return response.data;
};

// --- Chat / Ask Question ---
export const askQuestion = async (question) => {
    // question: string
    const response = await client.post('qa_api/ask/', { question });
    return response.data;
};

// --- Quiz ---
export const getQuizQuestions = async () => {
    const response = await client.get('quiz/questions/');
    return response.data;
};

export const submitQuiz = async (submissionData) => {
    // submissionData: { quiz_id, answers: [{ question_id, selected_option }] }
    const response = await client.post('quiz/submit/', submissionData);
    return response.data;
};

export default client;
