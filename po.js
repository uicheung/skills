const { createCanvas } = require('canvas')
const { createNoise2D } = require('simplex-noise')
const fs = require('fs')
const tinycolor = require('tinycolor2')

const width = 1600
const height = 900

const canvas = createCanvas(width, height)
const ctx = canvas.getContext('2d')

const noise2D = createNoise2D()

// 1️⃣ 背景（不是纯白）
ctx.fillStyle = '#f2eadf'
ctx.fillRect(0, 0, width, height)

// 2️⃣ 主渐变（左上 -> 右下）- 随机生成颜色
const gradient = ctx.createLinearGradient(0, 0, width, height)

// 随机生成颜色（HSL模式，控制明度范围）
function randomColor(minLight = 30, maxLight = 70) {
  const h = Math.random() * 360 // 随机色相
  const s = 50 + Math.random() * 40 // 饱和度 50-90%
  const l = minLight + Math.random() * (maxLight - minLight) // 明度
  return `hsl(${h}, ${s}%, ${l}%)`
}

// 生成 10-15 个随机颜色（更多颜色更平滑）
const numColors = 10 + Math.floor(Math.random() * 6)
const selectedColors = []
const colorRGBArray = [] // 保存 RGB 值供 lerpColor 使用

// 确保首尾颜色有一定对比（首色偏暗，尾色偏亮）
for (let i = 0; i < numColors; i++) {
  let hsl
  if (i === 0) {
    hsl = randomColor(20, 40) // 起点：偏暗
  } else if (i === numColors - 1) {
    hsl = randomColor(55, 75) // 终点：偏亮
  } else {
    hsl = randomColor(35, 65) // 中间：中等明度
  }
  selectedColors.push(hsl)
  const rgb = tinycolor(hsl).toRgb()
  colorRGBArray.push([rgb.r, rgb.g, rgb.b])
}

// 添加随机位置偏移的渐变色
let lastPos = 0
selectedColors.forEach((color, i) => {
  let pos =
    i === 0
      ? 0
      : i === selectedColors.length - 1
      ? 1
      : lastPos + 0.08 + Math.random() * 0.12
  pos = Math.min(1, Math.max(lastPos + 0.05, pos))
  lastPos = pos
  gradient.addColorStop(pos, color)
})

console.log('🎨 本次使用的渐变色:', selectedColors)

// 3️⃣ 生成流体形状
const imageData = ctx.createImageData(width, height)
const data = imageData.data

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4

    // 多层噪声叠加，创造流体效果
    const scale1 = 0.003
    const scale2 = 0.008
    const scale3 = 0.02
    const scale4 = 0.05

    const n1 = noise2D(x * scale1, y * scale1) * 0.5 // 大尺度流动
    const n2 = noise2D(x * scale2, y * scale2) * 0.3 // 中尺度
    const n3 = noise2D(x * scale3, y * scale3) * 0.15 // 小尺度细节
    const n4 = noise2D(x * scale4, y * scale4) * 0.05 // 微观纹理

    const noiseValue = n1 + n2 + n3 + n4

    // 基础对角线方向（左上 -> 右下）
    const diagonal = (x / width + y / height) / 2

    // 强噪声扰动，打乱线性感
    const value = diagonal + noiseValue * 0.8

    // 更柔和的边界过渡
    const edgeSoftness = 0.1 + Math.abs(noise2D(x * 0.015, y * 0.015)) * 0.15

    if (value > edgeSoftness && value < 1 - edgeSoftness) {
      const t = Math.min(1, Math.max(0, value))

      const color = lerpColor(t)

      // 边缘柔化
      let alpha = 255
      if (value < edgeSoftness + 0.1) {
        alpha = ((value - edgeSoftness) / 0.1) * 255
      } else if (value > 1 - edgeSoftness - 0.1) {
        alpha = ((1 - edgeSoftness - value) / 0.1) * 255
      }

      data[i] = color.r
      data[i + 1] = color.g
      data[i + 2] = color.b
      data[i + 3] = alpha
    } else {
      // 留白区域，增加细微纹理
      const fade = 0.92 + noise2D(x * 0.02, y * 0.02) * 0.08

      data[i] = 242 * fade
      data[i + 1] = 234 * fade
      data[i + 2] = 223 * fade
      data[i + 3] = 255
    }
  }
}

ctx.putImageData(imageData, 0, 0)

// 4️⃣ 增加"泼墨边缘颗粒"
for (let i = 0; i < 3000; i++) {
  const x = Math.random() * width
  const y = Math.random() * height

  if (x > width * 0.6 && y < height * 0.4) {
    // 右上角颗粒
    ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.2})`
    ctx.beginPath()
    ctx.arc(x, y, Math.random() * 3, 0, Math.PI * 2)
    ctx.fill()
  }
}

// 保存图片
const out = fs.createWriteStream('fluid-art.png')
const stream = canvas.createPNGStream()
stream.pipe(out)

out.on('finish', () => {
  console.log('✅ 已生成 fluid-art.png')
})

// 🎨 渐变插值（使用随机生成的颜色）
function lerpColor(t) {
  const colors = colorRGBArray

  const i = Math.floor(t * (colors.length - 1))
  const f = t * (colors.length - 1) - i

  const c1 = colors[i]
  const c2 = colors[i + 1] || c1

  return {
    r: c1[0] + (c2[0] - c1[0]) * f,
    g: c1[1] + (c2[1] - c1[1]) * f,
    b: c1[2] + (c2[2] - c1[2]) * f
  }
}
