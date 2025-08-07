// import { ref } from 'vue';


export const appStore = defineStore('app', {
  state: () => ({
    isLoading: false,
    user: null,
    userToken: null,
    userId: null,
    userName: null,
    userEmail: null,
    userAvatar: null,
    userRoles: [],
    userPermissions: [],
    userSettings: {},
    userPreferences: {},
    refreshToken: null,
  }),
  actions: {
    setLoading(loading) {
      this.isLoading = loading;
    },
    async fetchUser() {
        this.setLoading(true);

        // Use the BnetStrategy within Passport.
       
        // Simulate an API call
        setTimeout(() => {
            // After the API call
            this.setLoading(false);
        }, 1000);
    }
  },
});