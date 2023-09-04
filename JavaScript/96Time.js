time1 = new Date("2023-08-16") // 일상 표현
time2 = new Date("2023-09-04") 

toTime1 = time1.getTime() // 1970년대 이후 절대시간(ms)
toTime2 = time2.getTime()
timeDiffer = toTime2 - toTime1; 
console.log(`ms: ${timeDiffer}`)
console.log(`s: ${timeDiffer/1000}`)
console.log(`h: ${timeDiffer/(1000*60*60)}`)
console.log(`d: ${timeDiffer/(1000*60*60*24)}`)
