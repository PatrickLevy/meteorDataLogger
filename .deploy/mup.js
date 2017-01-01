module.exports = {
  servers: {
    one: {
      host: '45.55.161.127',
      username: 'root',
      //password: 'toor',
      // pem: './mykey',
      pem: '/home/user/.ssh/id_rsa', // mup doesn't support '~' alias for home directory
    },
  },

  meteor: {
    name: 'tempLogger',
    path: '../',
    servers: {
      one: {},
    },
    env: {
      ROOT_URL: 'http://myapp.com',
      MONGO_URL: 'mongodb://patricklevy:BScsci2015!@ds151018.mlab.com:51018/temperature',
      //MONGO_URL: 'mongodb://localhost/meteor'
    },
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
