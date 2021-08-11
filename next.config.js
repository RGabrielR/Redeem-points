module.exports = {
  env:{
    authKey: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGYyMDYzZDY3Mjk2ZTAwMTk5NjQxM2QiLCJpYXQiOjE2MjY0NzQwNDV9.O1AbUIcgu_75ULZWX2AzbliYXapEYijzL89mPB05R7s'
  },
    webpack5: false,
    webpack: (config) => {
      config.node = {
        dns: "mock",
        fs: "empty",
        path: true,
        url: false,
      };
      return config;
    },
  };
    