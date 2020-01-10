function domainName(url){
  const regExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www.)?(.*)/gim;
  const test = regExp.exec(url);
  const res = test[2].split(".");

  return res[0];
}

console.log(domainName("https://www.cnet.com"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("http://google.com"))
console.log(domainName("https://youtube.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("http://www.zombie-bites.com"))