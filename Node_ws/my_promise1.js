console.log("started");

function myPromiseToMakeYouBestDeveloper() {
  console.log("This is my promise...myPromiseToMakeYouBestDeveloper()");
  return new Promise(function (resolve, reject) {
    console.log("Developer in production...");
    setTimeout(function () {
      resolve("As promised....Tada! You are a developer now");
    }, 2000);
  });
}

console.log("before calling");
myPromiseToMakeYouBestDeveloper().then(function (dataFromPromise) {
  console.log("result: " + dataFromPromise);
});

console.log("finished");
