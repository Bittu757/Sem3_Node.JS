import fs from 'fs';

// //readable stream
const readStream = fs.createReadStream("intro.txt", {encoding: "utf-8", highWaterMark: 10});

// readStream.on("data", (chunk)=>{
//     console.log("Data Received")
//     console.log("Data:", chunk);
// })
readStream.on("error", (err)=>{
    console.log("Error:", error.message);;
});


// //writable stream
const writeStream= fs.createWriteStream("output.txt")
// writeStream.write("Hello World")
writeStream.on("error", (err)=>{
    console.log("Error:", error.message);;
});


readStream.pipe(writeStream)
