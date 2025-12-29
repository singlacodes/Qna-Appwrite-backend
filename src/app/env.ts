const env = {
  appwrite: {
    endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
    projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    apikey: String(process.env.API_KEY),
  },
}

export default env
