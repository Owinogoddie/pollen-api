export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      uri: process.env.MONGODB_URI || 'mongodb+srv://dngigi:tomato30@shambaassistant.hpnzger.mongodb.net/test',
    },
  });