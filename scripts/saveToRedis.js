const Redis = require('ioredis');

// Connect to Redis
const redis = new Redis({
  host: "host.docker.internal" || "localhost",
  port: 6379,
});

async function saveToRedis(xmlJson) {
  try {
    const subdomainsKey = 'subdomains';
    const cookiesKey = 'cookies';
    const subdomainsData = xmlJson.config.subdomains[0].subdomain;
    const cookiesData = xmlJson.config.cookies[0].cookie;

    const subdomainsPromise = new Promise((resolve, reject) => {
      redis.hmset(subdomainsKey, subdomainsData, (err) => {
        if (err) {
          console.error('Error writing subdomains data to Redis:', err);
          return reject(err);
        }
        console.log('Subdomains data written to Redis', subdomainsData);
        resolve();
      });
    });

    const cookiesPromise = new Promise((resolve, reject) => {
      redis.hmset(cookiesKey, cookiesData, (err) => {
        if (err) {
          console.error('Error writing cookies data to Redis:', err);
          return reject(err);
        }
        console.log('Cookies data written to Redis', cookiesData);
        resolve();
      });
    });

    await Promise.all([subdomainsPromise, cookiesPromise]);
    return 'Config data successfully written to Redis.';

  } catch (error) {
    console.error('Error storing data in Redis:', error);
    throw error;
  } finally {
    // Disconnect from Redis
    await redis.quit();
  }
}

module.exports = {
  saveToRedis,
};
