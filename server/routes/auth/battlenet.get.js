export default defineOAuthBattledotnetEventHandler({
  // provider: 'battlenet', // A custom identifier for your provider
  onSuccess: async (event, response) => {
    // 1. Exchange code for access token with Battle.net API
    // 2. Fetch user profile with access token
    // 3. Set user session with relevant data
    console.log('Battle.net OAuth success:', response)
    await setUserSession(event, { user: { 
      tokens: {
        token: response.tokens.access_token
      },
      user: {
        id: response.user.id,
        battletag: response.user.battletag
      }

     }, loggedInAt: new Date() })
    return sendRedirect(event, '/success') // Redirect to a success page
  },
  onError: (event, error) => {
    console.error('Battle.net OAuth error:', error)
    return sendRedirect(event, '/') // Redirect to an error page
  }
})