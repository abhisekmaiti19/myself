export default {
  app: {
    appwrite: {
      url: String(import.meta.env.VITE_APPWRITE_URL),
      projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_Id),
      databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_Id),
      collections: {
        seo: String(import.meta.env.VITE_APPWRITE_SEO_COLLECTION_ID),
      },
    },
  },
};
