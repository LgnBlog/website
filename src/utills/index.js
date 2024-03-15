/*
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-15 16:46:17
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-15 16:52:17
 * @FilePath: \website\src\utills\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 获取指定文件名的图片URL
 * @param fileName 图片的文件名（不包含路径）
 * @returns 返回拼接后的图片完整URL
 */
function getImageUrl(fileName) {
  if (!fileName) throw new Error('Invalid file name');
  return new URL(`/assets/img/bgs2.jpg`, import.meta.url).href;
}

export {
  getImageUrl
}
