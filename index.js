// get status from iphone health app
const getHealthStatus = async (req, res) => {
  const { healthStatus } = req.body;
  try {
    const health = await prisma.health.create({
      data: {
        healthStatus,
      },
    });
    res.status(200).json(health);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}

// export the functions
module.exports = {
  getHealthStatus,
}