import fs from 'fs';

 fs.watchFile("notes.txt", (prev, curr) => {
  console.log("Previous", prev);
  console.log("Current", curr);

  if (prev !== curr) {
    console.log("File Changed");
  }
})


setTimeout(() => {
    fs.unwatchFile("notes.txt");
    console.log("File watching Closed");
}, 5000);
