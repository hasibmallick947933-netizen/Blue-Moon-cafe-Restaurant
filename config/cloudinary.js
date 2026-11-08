const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'ppcahncd',
  api_key: process.env.CLOUDINARY_API_KEY || '318814916524947',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'W4fTFjiQ5zBGhZL8AkRNZCjfBuA',
  secure: true
});

/**
 * Uploads a file buffer or base64 string to Cloudinary
 * @param {Buffer|string} fileSource - File buffer or base64 string
 * @param {object} options - Optional Cloudinary options
 * @returns {Promise<object>} Cloudinary upload result
 */
function uploadToCloudinary(fileBuffer, folder = 'blue-moon-restaurant') {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: 'auto'
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    uploadStream.end(fileBuffer);
  });
}

module.exports = {
  cloudinary,
  uploadToCloudinary
};
