const API_BASE_URL = "https://your-lms-api.com/api";

// Get JWT token
const getToken = () => localStorage.getItem("token");

// Centralized request function
const request = async (url, options = {}) => {
  try {
    const token = getToken();

    const response = await fetch(`${API_BASE_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API request failed");
    }

    if (response.status === 204) return null;
    return await response.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

// ================== AUTH APIs ==================
export const login = async (email, password) => {
  const data = await request("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (data.token) localStorage.setItem("token", data.token);
  return data;
};

export const logout = () => localStorage.removeItem("token");

// ================== STUDENT APIs ==================
export const getStudents = () => request("/students");
export const getStudentById = (id) => request(`/students/${id}`);
export const createStudent = (studentData) =>
  request("/students", { method: "POST", body: JSON.stringify(studentData) });
export const updateStudent = (id, studentData) =>
  request(`/students/${id}`, { method: "PUT", body: JSON.stringify(studentData) });
export const deleteStudent = (id) => request(`/students/${id}`, { method: "DELETE" });

// ================== COURSE APIs ==================
export const getCourses = () => request("/courses");
export const getCourseById = (id) => request(`/courses/${id}`);
export const createCourse = (courseData) =>
  request("/courses", { method: "POST", body: JSON.stringify(courseData) });

// ================== ASSIGNMENT APIs ==================
export const getAssignments = () => request("/assignments");
export const submitAssignment = (assignmentId, data) =>
  request(`/assignments/${assignmentId}/submit`, { method: "POST", body: JSON.stringify(data) });

// ================== PROGRESS APIs ==================
export const getProgress = (studentId) => request(`/progress/${studentId}`);
export const updateProgress = (studentId, progressData) =>
  request(`/progress/${studentId}`, { method: "PUT", body: JSON.stringify(progressData) });
