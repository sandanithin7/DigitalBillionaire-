import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class PackageService {
  // Get all packages
  async getAllPackages() {
    try {
      const response = await axios.get(`${API_URL}/packages`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get single package
  async getPackage(id) {
    try {
      const response = await axios.get(`${API_URL}/packages/${id}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Purchase package
  async purchasePackage(packageId, token) {
    try {
      const response = await axios.post(
        `${API_URL}/packages/${packageId}/purchase`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Handle errors
  handleError(error) {
    if (error.response) {
      // Server responded with error
      return {
        success: false,
        message: error.response.data.message || 'An error occurred'
      };
    } else if (error.request) {
      // Request made but no response
      return {
        success: false,
        message: 'No response from server'
      };
    } else {
      // Error setting up request
      return {
        success: false,
        message: error.message
      };
    }
  }
}

export default new PackageService(); 