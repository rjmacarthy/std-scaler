export const matrix = [
  [
    0.0, 0.4001572083672233, 0.9787379841057392, 2.240893199201458,
    1.8675579901499675,
  ],
  [
    0.0, 0.9500884175255894, -0.1513572082976979, -0.10321885179355784,
    0.41059850193837233,
  ],
  [
    0.0, 1.454273506962975, 0.7610377251469934, 0.12167501649282841,
    0.44386323274542566,
  ],
  [
    0.0, 1.4940790731576061, -0.20515826376580087, 0.31306770165090136,
    -0.8540957393017248,
  ],
]

// Inverse can be a little inaccurate with sixteen decimal places.
export const matrixInversed = [
  [
    0, 0.40015720836722335, 0.9787379841057392, 2.240893199201458,
    1.8675579901499675,
  ],
  [
    0, 0.9500884175255894, -0.1513572082976979, -0.10321885179355783,
    0.41059850193837233,
  ],
  [
    0, 1.454273506962975, 0.7610377251469934, 0.12167501649282841,
    0.44386323274542566,
  ],
  [
    0, 1.4940790731576061, -0.20515826376580082, 0.31306770165090136,
    -0.8540957393017249,
  ],
]

export const output = {
  shape: [4, 5],
  scaled: [
    [
      0, -1.5172550473753916, 1.1941128160528263, 1.710372229238563,
      1.4541743822349011,
    ],
    [
      0, -0.28019741240623025, -0.9379969554759513, -0.7989104875877024,
      -0.058540144092596974,
    ],
    [
      0, 0.8539553760501095, 0.7833856025309901, -0.5581701626652265,
      -0.0240024360002664,
    ],
    [
      0, 0.9434970837315121, -1.0395014631078652, -0.353291578985634,
      -1.371631802142038,
    ],
  ],
  mean: [
    0, 1.0746495515033485, 0.3458150592973085, 0.6431042663879074,
    0.46698099638301016,
  ],
  variance: [
    0, 0.1976227170602544, 0.28093828934403586, 0.8726850668157795,
    0.9276432684280314,
  ],
  scale: [
    0, 0.44454776690503617, 0.5300361207918154, 0.9341761433561551,
    0.9631423926024808,
  ],
  labels: ['a', 'b', 'c', 'd', 'e'],
}
