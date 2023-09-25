const Redis = require('ioredis');
// Connect to Redis
const redis = new Redis({
  host: "localhost", // Your Redis server host
  port: 6379, // Your Redis server port
});

async function saveToRedis(xmlJson) {
  try {
    const subdomainsKey = 'subdomains';
    const cookiesKey = 'cookies';
    const subdomainsData = xmlJson.config.subdomains[0].subdomain
    const cookiesData = xmlJson.config.cookies[0].cookie
    
    redis.hmset(subdomainsKey, subdomainsData, (err) => {
      if (err) {
        console.error('Error writing subdomains data to Redis:', err);
      } else {
        console.log('Subdomains data written to Redis');
      }
    });

    redis.hmset(cookiesKey, cookiesData, (err) => {
      if (err) {
        console.error('Error writing cookies data to Redis:', err);
      } else {
        console.log('Cookies data written to Redis');
      }
    });
    return('Config data successfully written to Redis.')
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