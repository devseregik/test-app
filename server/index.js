const ENV = process.env.NODE_ENV;

const serverFile = `./server.${ ENV }`;

require(serverFile);
