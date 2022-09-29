import _ from 'lodash'

const mean = _.memoize((ns) => _.sum(ns) / _.size(ns))

const getStdDev = _.memoize((ns) =>
  Math.sqrt(mean(_.map(ns, (n) => _.multiply(n - mean(ns), n - mean(ns)))))
)

const scale = _.memoize((ns) =>
  _.map(ns, (n) => _.divide(n - mean(ns), getStdDev(ns)) || 0)
)

const rorate = _.memoize((x) =>
  _.map(_.first(x), (_v, i) => _.reverse(_.map(x, (r) => r[i])))
)

const rotateCounter = _.memoize((x) =>
  _.map(_.first(x), (_v, i) => _.map(x, (r) => r[_.size(r) - 1 - i]))
)

const getShape = _.memoize((x) => [_.size(x), _.size(rorate(x))])

const getScaled = _.memoize((x) =>
  rotateCounter(_.map(rorate(x), (_r, i) => scale(_.get(rorate(x), i))))
)

const getMean = _.memoize((x) => _.map(x, (_r, i) => mean(_.get(x, i))))

const getSqrt = _.memoize((x) => _.map(x, (n) => Math.sqrt(n)))

const getVariance = _.memoize((x, size) =>
  _.map(
    _.map(x, (r) => _.sum(r)),
    (n) => n / size
  )
)

const getCorrection = _.memoize((x) =>
  _.map(rorate(x), (r, i) => _.map(r, (n) => n - _.get(getMean(rorate(x)), i)))
)

const getCorrectionSquared = _.memoize((x) =>
  _.map(getCorrection(x), (r) => _.map(r, (n) => n ** 2))
)

export const transform = _.memoize((x, labels) => ({
  shape: getShape(x),
  scaled: getScaled(x),
  mean: getMean(rorate(x)),
  variance: getVariance(getCorrectionSquared(x), _.size(x)),
  scale: getSqrt(getVariance(getCorrectionSquared(x), _.size(x))),
  labels: _.take(labels, _.last(getShape(x)))
}))

export const inverseTransform = _.memoize((x) =>
  _.map(x.scaled, (r) =>
    _.map(r, (n, i) => _.multiply(n, _.get(x.scale, i)) + _.get(x.mean, i))
  )
)

console.log(transform([
  [
    0.0, 0.4001572083672233, 0.9787379841057392, 2.240893199201458,
    1.8675579901499675
  ],
  [
    0.0, 0.9500884175255894, -0.1513572082976979, -0.10321885179355784,
    0.41059850193837233
  ],
  [
    0.0, 1.454273506962975, 0.7610377251469934, 0.12167501649282841,
    0.44386323274542566
  ],
  [
    0.0, 1.4940790731576061, -0.20515826376580087, 0.31306770165090136,
    -0.8540957393017248
  ]
], ['a', 'b', 'c', 'd', 'e']))
