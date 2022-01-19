const delta1881 = [
  1881, -0.19, -0.13, 0.04, 0.06, 0.07, -0.18, 0.01, -0.03, -0.15, -0.21, -0.18,
  -0.06, -0.08, -0.09, -0.16, 0.06, -0.07, -0.18,
];

delta1881_12 = delta1881.slice(1, 13);
delta1881_jd = delta1881[13];

function avg(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum / a.length;
}
avgD81 = avg(delta1881_12);			// -0.07916666666666666
avgD81 - delta1881_jd  					// 0.0008333333333333387



